import Head from "next/head";
import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { fade } from "@/helpers/transitions";
import Link from 'next/link'
import { LazyMotion, domAnimation, m } from "framer-motion";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Image from "next/image";
import { groq } from "next-sanity";

export default function NewsPage({ posts }) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo title="News" description="News about Educate Together" />
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mb-12 md:mb-16 xl:mb-24  pt-[90px] md:pt-[180px] pb-[45px]"
            variants={fade}
          >
            <Container>
              <div className="relative w-full pt-8 pb-[120px]">
                <div className="pb-1 md:pb-8 tracking-widest uppercase text-sm md:text-[20px] font-semibold text-gray-400 font-arial">
                  <span>소식</span>
                </div>
                <div className="absolute hidden mt-3 overflow-visible md:block spin-slow spin-container">
                  <div className="relative">
                    <Image
                      src="/ham-logo.png"
                      width="60"
                      height="60"
                    />
                  </div>
                </div>
                <h3 className="font-pt relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl left-0 md:left-[5%]">
                  News
                </h3>
              </div>
              <section className="pt-10">
                <div class="table-wrapper max-w-3xl mx-auto mt-0">
                  <table class="news-table w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="p-4">
                          <div class="flex items-center">#</div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Articles
                        </th>
                        <th scope="col" class="px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts?.map((post, index) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            <div class="flex items-center">{post.id}</div>
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            <a
                              href="#"
                              class="font-medium text-gray-700  hover:underline"
                            >
                              {post.title}
                            </a>
                          </th>
                          <td class="px-6 py-4 text-right">{post.postDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
              <div className="flex mt-12 md:mt-0">
                <div className="w-full max-w-4-col md:order-last">
                  <div className="relative w-full">
                    <div className="relative flex items-center h-auto select-none md:h-20">
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

                    <div className="relative flex items-center h-auto select-none md:h-20">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        2
                      </div>
                      <Link href="/programs">
                        <a className="relative w-full text-3xl italic leading-loose uppercase group md:text-5xl font-pt">
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow  relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">Programs</span>
                          </span>
                        </a>
                      </Link>
                    </div>

                    <div className="relative flex items-center h-auto select-none md:h-20">
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

                    <div className="relative flex items-center h-auto select-none md:h-20">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        4
                      </div>
                      <Link href="/news">
                        <a className="relative w-full text-3xl leading-loose pointer-events-none group md:text-5xl font-pt">
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">News</span>
                          </span>
                        </a>
                      </Link>
                    </div>

                    <div className="relative flex items-center h-auto select-none md:h-20">
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
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(groq`
  *[_type == "post"] | order(id desc) {
    _id,
    id,
    title,
    description,
    mainImage,
    slug ,
    postDate
  }`);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
