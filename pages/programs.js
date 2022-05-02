import Layout from "@/components/layout";
import Container from "@/components/container";

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Link from "next/link";

import { useRouter } from "next/router";
import { getClient, usePreviewSubscription, urlFor } from "../sanity";

import Accordion from "@/components/accordion";
import BlockContent from "@/components/blockContent";
import { PortableText } from "@portabletext/react";

import Image from "next/image";

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
          className="mb-12 md:mb-16 xl:mb-24 md:pt-[75px] pb-[75px]"
        >
          <Container>
            <div className="relative w-full pt-8 pb-[88px]">
              <h2 className="relative block pb-0 pr-12 mb-0 text-2xl font-light leading-normal tracking-tight text-gray-400 md:text-3xl lg:text-4xl 2xl:text-5xl">
                Programs
              </h2>
              <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
                Our Programs
              </span>
            </div>
            <m.div variants={fade}>
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
                            <PortableText value={post.descriptionBlockEn} />
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
 *[_type == "program"] | | order(id) {
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
