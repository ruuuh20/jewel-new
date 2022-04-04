import Layout from "@/components/layout";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Link from "next/link";

import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import BlockContent from "@/components/blockContent";
import { PortableText } from "@portabletext/react";

const myPortableTextComponents = {
  types: {
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
      ),

      // Ex. 2: rendering custom list items
      checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
    image: ({ value }) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
};

export default function About(props) {
  const { postdata, preview, program } = props;

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
            <div className="relative w-full pt-8 pb-[88px]">
              <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
                {locale === "ko" ? "History" : "Our History"}
              </span>
            </div>
            <div class="w-full mx-auto mb-10 md:w-10/12">
              <div class="w-full mx-auto text-center md:w-9/12 lg:w-7/12">
                <div class="content  text-[24px] leading-normal">
                  <p>{posts[0].history[locale]}</p>
                </div>
              </div>
            </div>

            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <Container className="my-2">
                      {post.timelineItems?.map((item, i) => {
                        return (
                          <>
                            <div className="flex flex-wrap py-8 border-t border-black border-opacity-20 md-mx-6 md:py-12">
                              <div className="w-full md:w-7/12 xl:w-2/6 md:px-6 md:mb-0">
                                <div className="max-w-xl">
                                  <div className="w-full text-2xl text-right md:text-3xl xl:text-4xl">
                                    <p>{item.timelineItemYear[locale]}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full ml-auto leading-8 md:w-7/12 xl:w-4/6 md:pl-10">
                                {locale === "ko" ? (
                                  <PortableText value={item.timelineBlockKo} />
                                ) : (
                                  <PortableText value={item.timelineBlockEn} />
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </Container>

                    {/* <Container>
                      <div className="relative mb-2 md:mb-3">
                        <h2 className="block uppercase md:text-lg ">
                          Our Team / Leadership
                        </h2>
                      </div>
                      <div className="relative z-20 grid grid-cols-2 gap-4 mb-16 md:gap-6 md:grid-cols-3 md:mb-24 2xl:mb-32 md:mx-16 2xl:mx-24">
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="block pb-0 mb-0 text-lg leading-tight md:text-xl 2xl:text-2xl font-display">
                            Joe Smith
                          </h4>
                          <span className="text-xs italic md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="block pb-0 mb-0 text-lg leading-tight md:text-xl 2xl:text-2xl font-display">
                            Joe Smith
                          </h4>
                          <span className="text-xs italic md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="block pb-0 mb-0 text-lg leading-tight md:text-xl 2xl:text-2xl font-display">
                            Joe Smith
                          </h4>
                          <span className="text-xs italic md:text-sm">
                            Member
                          </span>
                        </div>
                      </div>
                    </Container> */}

                    {/* <ImageComponent
                      image={
                        post.imageUrl !== null
                          ? post.imageUrl
                          : "https://via.placeholder.com/50"
                      }
                    /> */}
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
history,
content,
welcomeText,
introText,
 "imageUrl": heroImage.asset->url,

 
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
