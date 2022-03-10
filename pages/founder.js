import Layout from "@/components/layout";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Link from "next/link";

import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
  urlFor,
} from "../sanity";
import ImageStandard from "@/components/imageStandard";
import ImageWrapper from "@/components/imageWrapper";
import ImageComponent from "@/components/image";

import Image from "next/image";

export default function Founder(props) {
  const { postdata, preview } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <Layout>
      <NextSeo title="About" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pt-[75px] pb-[75px]"
        >
          <Container>
            <div className="relative pb-[50px] md:mb-3">
              <div className="mx-auto max-w-[600px] md:max-w-[740px]">
                <h1 className="block uppercase py-7 md:text-5xl ">
                  {locale === "ko" ? "founder" : "Founder's Message"}
                </h1>
              </div>
            </div>
            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <Container>
                      <div className="flex flex-wrap">
                        <div className="w-full max-w-2xl md:w-1/2 content md:px-12 xl:px-16">
                          <div className="content">
                            <p>{post.foundersMessage[locale]}</p>
                            <p>oijasoiad</p>
                            <p>oijasoiad</p>
                            <p>oijasoiad</p>
                            <p>oijasoiad</p>
                            <p>oijasoiad</p>
                            <p>oijasoiad</p>
                            <p>oijasoiad</p>
                          </div>
                        </div>
                        <div className="relative w-full mb-8 overflow-hidden md:w-1/2 content md:mb-0">
                          <div className="image-container">
                            <figure className="mb-6 overflow-hidden rounded-full md:mb-8 xl:mb-10">
                              {/* <Image
                                className="image-circle"
                               
                                layout="fill"
                                objectFit="contain"
                                src={
                                  post.foundersImage
                                    ? post.foundersImage.url
                                    : "https://via.placeholder.com/50"
                                }
                              /> */}
                              <ImageComponent
                                image={
                                  post.foundersImage !== null
                                    ? post.foundersImage.url
                                    : "https://via.placeholder.com/50"
                                }
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </Container>
                  </>
                ))}
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "about" && title.en == "About"] | order(_createdAt desc) {
...,
foundersMessage,
foundersImage {
    ...asset->
}
 
}
`;

export async function getStaticProps({ params, preview = false }) {
  const program = await getClient(preview).fetch(query);

  return {
    props: {
      postdata: program,
      preview,
    },
    revalidate: 10,
  };
}
