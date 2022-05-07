import Layout from "@/components/layout";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Link from "next/link";

import { useRouter } from "next/router";
import { getClient, usePreviewSubscription, urlFor } from "../sanity";

import ImageComponent from "@/components/image";

import BlockContent from "@/components/blockContent";
import { PortableText } from "@portabletext/react";

const myPortableTextComponents = {
  types: {
    quote: ({ value }) => (
      <div className="pt-5 pb-5 border-b md:border-t md:border-b-0 border-brown md:pb-0 md:pt-8 2xl:pt-10">
        <span className="block pb-0 mb-2 text-4xl leading-none font-display md:text-5xl 2xl:text-6xl md:mb-0">
          “
        </span>
        <p className="block mb-3 -mt-5 text-xl leading-tight font-display md:text-xl lg:text-2xl xl:text-3xl md:leading-tight 2xl:leading-tight md:mb-4">
          {value.quote}
        </p>

        <div className="">
          <span className="block leading-snug md:text-lg">
            {value.personJobTitle}
          </span>
        </div>
      </div>
    ),
    numeric: ({ value }) => <li className="text-lg">{value.text}</li>,
    image: ({ value }) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

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
      <NextSeo title="Founder's Message" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 md:pt-[75px] pb-[75px]"
        >
          <Container>
            <div className="relative w-full pt-8 pb-[88px]">
              <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
                {locale === "ko" ? "founder" : "Founder's Message"}
              </span>
            </div>
            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <div className="flex flex-wrap">
                      <div className="relative w-full px-5 mt-5 rounded md:px-16 md:w-5/12 content md:mb-0">
                        <div className="image-container">
                          <div class="offset-bg">
                            <figure className="mb-2 rounded-lg md:mb-6 xl:mb-10">
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
                        <section className="md:pt-2">
                      <div className="content">
                        <div className="w-full py-6 mt-2 text-base text-center md:text-xl">
                          <h4>Profile / 프로필</h4>
                        </div>
                        <div className="w-full ">
                          <table class="m-auto table-auto text-[14px] md:text-[1rem]">
                            <tbody>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                  대표
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                  함께하는교육
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                  수석부회장
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                  뉴욕한인회 36대, 37대
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  교장
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  가나다라한국문화학교
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  대표
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  재외동포청소년네트워크
                                </td>
                              </tr>
                                 <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                  교육위원
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                  (전)뉴저지 노우드학군 교육위원 5선
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  이사
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  전미여성유권자연맹 뉴저지노던벨리지구
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  개설위원장
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  (전)미주한국어재단 한국어반개설위원회
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  감사
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  (전)민주평통뉴욕협의회 18기
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  교육분과위원장
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  (전)민주평통뉴욕협의회 16기
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  자문위원
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                  (전)민주평통뉴욕협의회 14기
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 pl-8 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                  연합회장
                                </td>
                                <td className="p-2 pr-8 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                  (전)뉴저지버겐카운티한인학부모연합회
                                </td>
                              </tr>
                           
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>
                      </div>
                      <div className="w-full py-5 pl-6 pr-10 text-sm bg-gray-200 rounded-lg md:py-10 md:pl-14 md:pr-20 md:w-5/12 content">
                      
                      
                          <PortableText
                         
                            value={post.content}
                            components={myPortableTextComponents}
                          />
                      
                      </div>
                    </div>
                    <hr className="h-1 mt-10 bg-gray-300" />
                    <section>
                      <div className="w-full mx-auto my-10 md:w-6/12 content blurb">
                        <PortableText value={posts[0].founderBlurb} />
                      </div>
                    </section>
                    
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
foundersMessage,
founderBlurb,
introBlurb,
foundersImage {
    ...asset->
},
content
 
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
