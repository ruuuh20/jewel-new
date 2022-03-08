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

export default function About(props) {
  const { postdata, preview, program } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });
  console.log(posts, locale, router.defaultLocale);
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
                            <p>{post.foundersMessage}</p>
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
                              <Image
                                className="image-circle"
                                // layout="fill"
                                // width={400}
                                // height={400}
                                // width={800}
                                // height={450}
                                // layout="responsive"
                                layout="fill"
                                objectFit="contain"
                                src={
                                  post.foundersImageUrl !== null
                                    ? post.foundersImageUrl
                                    : "https://via.placeholder.com/50"
                                }
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </Container>
                    <Link href="/about" locale="ko">
                      <a>To /ko/another</a>
                    </Link>

                  

                    <div className="max-w-3xl mb-4 content">
                      <p className="block font-bold text-xl md:text-[2.75vw] 2xl:text-[38px] leading-snug relative mb-5 md:mb-8 2xl:mb-10">
                        {post.introText}
                      </p>
                    </div>
                    <ImageComponent
                      image={
                        post.imageUrl !== null
                          ? post.imageUrl
                          : "https://via.placeholder.com/50"
                      }
                    />
                    {/* <Img src={post.heroImage? post.heroImage : "https://via.placeholder.com/100"}layout="fill" />  */}
                  </>
                ))}

              <FancyLink
                destination="/"
                a11yText="Navigate to the home page"
                label="Home Page"
              />
              {posts &&
                posts.map((post) => (
                  <article>
                    <h3 className="text-lg"> this is an article </h3>
                  </article>
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

"foundersMessage",
 "foundersImageUrl": foundersImage.asset->url

 
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
