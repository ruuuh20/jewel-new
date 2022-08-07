import Head from "next/head";
import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Layout from "@/components/layout";
import Container from "@/components/container";

import { groq } from "next-sanity";

export default function NewsPage({ posts }) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo title="Become a Partner" />
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mb-12 md:mb-16 xl:mb-24  pt-[90px] md:pt-[180px] pb-[45px]"
            variants={fade}
          >
            <Container>
              <div className="relative w-full pt-8 pb-[45px]">
                <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
                  News
                </span>
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
