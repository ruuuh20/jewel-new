import Layout from "@/components/layout";
import Container from "@/components/container";
import Link from "next/link";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Image from "next/image";
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
      <NextSeo title="Programs" description="Our current programs" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pt-[90px] md:pt-[180px] pb-[45px]"
          variants={fade}
        >
          <Container>
            <div className="relative w-full md:max-4xl pt-8 pb-[120px]">
              <div className="pb-1 md:pb-8 tracking-widest uppercase text-sm md:text-[20px] font-semibold text-gray-400 font-arial">
                <span>프로그램</span>
              </div>
              <div className="absolute hidden mt-2 overflow-visible md:block spin-slow spin-container">
                <div className="relative">
                  <Image src="/ham-logo.png" width="60" height="60" />
                </div>
              </div>
              <h3 className="font-pt relative block pb-0 pr-12 mb-0 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl left-0 md:left-[5%]">
                Programs
              </h3>
            </div>
            <m.div>
              <div className="w-full">
                {/* <div className="w-full mb-5 md:mb-0 md:w-[300px]">
                  <div className="w-full md:w-[250px]">
                    <span className="block text-sm text-navy mb-5 font-medium">
                      Categories
                    </span>
                    <span className="inline-block text-sm text-gold underline mb-3 mr-5 font-medium">
                      A
                    </span>
                    <span className="inline-block text-sm text-gold underline mb-3 mr-5 font-medium">
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
                            heading={post.title.en}
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
            <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
              <div className="flex mt-12 md:mt-0">
                <div className="w-full max-w-4-col md:order-last">
                  <div className="relative w-full">
                    <div className="relative flex items-center h-auto md:h-20 select-none">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        1
                      </div>
                      <Link href="/about">
                        <a className="relative w-full text-3xl italic leading-loose uppercase group md:text-5xl font-pt">
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-100">
                            <span className="relative z-10">About us</span>
                          </span>
                        </a>
                      </Link>
                    </div>

                    <div className="relative flex items-center h-auto md:h-20 select-none">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        2
                      </div>
                      <Link href="/programs">
                        <a className="relative w-full text-3xl italic leading-loose pointer-events-none group md:text-5xl font-pt">
                          <span className="group-hover:italic group-hover:normal-case relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">Programs</span>
                          </span>
                        </a>
                      </Link>
                    </div>

                    <div className="relative flex items-center h-auto md:h-20 select-none">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        3
                      </div>
                      <Link href="/projects">
                        <a className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt">
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">Projects</span>
                          </span>
                        </a>
                      </Link>
                    </div>

                    <div className="relative flex items-center h-auto md:h-20 select-none">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        4
                      </div>
                      <Link href="/news">
                        <a className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt">
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">News</span>
                          </span>
                        </a>
                      </Link>
                    </div>

                    <div className="relative flex items-center h-auto md:h-20 select-none">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        5
                      </div>
                      <Link href="/affiliates">
                        <a className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt">
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">Affiliates</span>
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between w-full md:max-w-4-col md:block"></div>
              </div>
            </section>
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
