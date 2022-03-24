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
import { useNextSanityImage } from "next-sanity-image";

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
            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <Container>
                      <div className="max-w-3xl  relative mb-16 md:mb-20 2xl:mb-28 mx-[3%] md:mx-[5%] lg:mx-24 2xl:mx-32">
                        <div className="block mb-4 overflow-hidden md:mb-6 2xl:mb-8">
                          <div className="relative mb-2 md:mb-3">
                            <h2 className="block uppercase md:text-lg ">
                              {post.title[locale]}
                            </h2>
                          </div>
                          <div className="w-full pr-12 text-2xl md:text-3xl xl:text-4xl">
                            <p className="font-bold leading-snug">
                              {post.introText}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="max-w-4xl py-12 m-auto mt-12 text-xl content">
                        <h3 className="text-3xl tracking-wide uppercase ">
                          Our Goals are to:
                        </h3>
                        <div className="flex flex-wrap mt-8 mb-4">
                          <div className="about-item">
                            <p className="block font-bold text-xl md:text-2xl 2xl:text-[38px] leading-snug relative m4-5 2xl:mb-10 p-[3rem]">
                              Provide opportunities for the enrichment and
                              learning of Asian cultures and history.
                            </p>
                          </div>
                          <div className="about-item">
                            <p className="block font-bold text-xl md:text-2xl 2xl:text-[38px] leading-snug relative mb-4 2xl:mb-10 p-[3rem]">
                              Empower our future generation to embrace a sense
                              of belonging to their own heritage while engaging
                              with other cultures.
                            </p>
                          </div>
                          <div className="about-item">
                            <p className="block font-bold text-xl md:text-2xl 2xl:text-[38px] leading-snug relative mb-4 2xl:mb-10 p-[3rem]">
                              Promote a mutual understanding for world cultures
                              and methods of education
                            </p>
                          </div>
                        </div>
                      </div>
                    </Container>

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
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "about" && title.en == "Our Mission"] | order(_createdAt desc) {
  
...,
title,
introText,
 "imageUrl": heroImage.asset->url,
 "foundersImageUrl": foundersImage.asset->url

 
}
`;

// export const getServerSideProps = async() => {
//   const query = `*[ _type == "about"]{
//     title,
//     description
//   }`
//   const about = await sanityClient.fetch(query)

//   if (!about.length) {
//     return {
//       props: {
//         about: []
//       },
//     }

//   } else {
//     return {
//       props: {
//        about
//       }
//     }
//   }
// }

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
