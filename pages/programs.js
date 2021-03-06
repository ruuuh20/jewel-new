import Layout from "@/components/layout";
import Container from "@/components/container";

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";

import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";

import Accordion from "@/components/accordion";
import { PortableText } from "@portabletext/react";

import ImageComponent from "@/components/image";

export default function Programs(props) {
  const { postdata, preview } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <Layout>
      <NextSeo title="Programs" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pt-[90px] md:pt-[180px] pb-[45px]"
          variants={fade}
        >
          <Container>
            <div className="relative w-full md:max-4xl pt-8 pb-[88px]">
              <h2 className="relative block pb-0 pr-12 mb-0 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
                Our Programs
              </h2>
              <span className="relative block pt-2 pb-0 pr-12 mb-0 text-xl font-light leading-normal tracking-tight text-gray-400 md:text-2xl lg:text-3xl">
                We develop programs that promote cross-cultural understanding
                through education and collaboration.
              </span>
            </div>
            <m.div>
              <div className="w-full">
                {/* <div className="w-full mb-5 md:mb-0 md:w-[300px]">
                  <div class="w-full md:w-[250px]">
                    <span class="block text-sm text-navy mb-5 font-medium">
                      Categories
                    </span>
                    <span class="inline-block text-sm text-gold underline mb-3 mr-5 font-medium">
                      A
                    </span>
                    <span class="inline-block text-sm text-gold underline mb-3 mr-5 font-medium">
                      B
                    </span>
                  </div>
                </div> */}
                <div className="relative z-10">
                  <ul>
                    {posts &&
                      posts.map((post, i) => (
                        <li>
                          <Accordion
                            key={i}
                            heading={post.title[locale]}
                            index={`0${i + 1}`}
                            // icon={service.icon.asset}
                          >
                            <div className="mb-4 md:max-w-3xl">
                              <PortableText value={post.descriptionBlockEn} />
                            </div>
                            <div className="flex flex-wrap -m-1 md:-m-2">
                              {post.images
                                ? post.images.map((img, index) => (
                                    <div className="flex flex-wrap w-full md:w-1/3">
                                      <div className="w-full p-1 md:p-2">
                                        <ImageComponent
                                          alt="gallery"
                                          className="block object-cover object-center w-full h-full rounded-lg"
                                          image={img}
                                        />
                                      </div>
                                    </div>
                                  ))
                                : null}
                            </div>
                          </Accordion>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "program"] | order(ID) {
...,
title,
descriptionBlockEn,
 
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
