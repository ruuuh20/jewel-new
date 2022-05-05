import Layout from "@/components/layout";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";

import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import ImageComponent from "@/components/image";

export default function About(props) {
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
          className="mb-12 md:mb-16 xl:mb-24 pt-5 md:pt-[75px] pb-[75px]"
        >
          <Container>
            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <Container>
                      <div className="relative max-w-3xl mb-16 md:mb-20 2xl:mb-28">
                        <div className="block mb-4 overflow-hidden md:mb-6 2xl:mb-8">
                          <div className="relative mb-2 md:mb-3">
                            <h2 className="block uppercase md:text-xl text-blue-sub">
                              {post.title[locale]}
                            </h2>
                          </div>
                          <div className="w-full text-xl md:pr-12 md:text-3xl xl:text-4xl text-darkgray">
                            <p className="leading-snug">{post.introText}</p>
                          </div>
                        </div>
                      </div>
                      <section className="my-20">
                        <div className="flex flex-col flex-wrap md:flex-row">
                          <div className="w-full md:w-1/2">
                            <ImageComponent
                              image={
                                post.imageUrl !== null
                                  ? post.imageUrl
                                  : "https://via.placeholder.com/50"
                              }
                            />
                          </div>
                          <div className="w-full md:w-1/2">
                            <div className="md:px-10 right-col">
                              <p className="mt-6 text-xl md:text-2xl md:mt-6">
                                We work in partnership with both public and
                                private educators in America as well as the
                                Korean Department of Education.
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <div className="max-w-4xl py-2 m-auto mt-12 text-xl md:py-12 content">
                        <div className="relative mb-2 md:mb-3">
                          <h2 className="block text-base uppercase md:text-xl text-blue-sub">
                            Our Goals
                          </h2>
                        </div>
                        <div className="flex flex-wrap mt-8 mb-4 text-darkgray">
                          <div className="about-item">
                            <p className="block font-bold text-lg md:text-2xl  leading-snug relative  2xl:mb-10 p-[3rem]">
                              Provide opportunities for the enrichment and
                              learning of Asian cultures and history.
                            </p>
                          </div>
                          <div className="about-item">
                            <p className="block font-bold text-lg md:text-2xl  leading-snug relative 2xl:mb-10 p-[3rem]">
                              Empower future generations to celebrate their own
                              heritage while engaging with other cultures.
                            </p>
                          </div>
                          <div className="about-item">
                            <p className="block font-bold text-lg md:text-2xl  leading-snug relative  2xl:mb-10 p-[3rem] pt-4rem">
                              Promote a mutual understanding for world cultures
                              and methods of education
                            </p>
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
