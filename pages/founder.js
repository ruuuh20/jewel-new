import Layout from "@/components/layout";
import Container from "@/components/container";
import PageNav from "@/components/pageNav";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription, urlFor } from "../sanity";

import ImageComponent from "@/components/image";

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
          className="mb-12 md:mb-16 xl:mb-24 pt-[90px] md:pt-[180px] pb-[45px]"
          variants={fade}
        >
          <Container>
            <div className="relative w-full pt-8 pb-[120px]">
              <div className="pb-1 md:pb-8 tracking-widest uppercase text-sm md:text-[20px] font-semibold text-gray-400">
                <span>대표 인사말</span>
              </div>
              <div className="absolute hidden mt-2 overflow-visible md:block spin-slow spin-container">
                <div className="relative">
                  <Image
                    src="/ham-logo.png"
                    width="60"
                    height="60"
                  />
                </div>
              </div>
              <h3 className="font-pt relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl left-0 md:left-[5%]">
                {locale === "ko" ? "대표 인사말" : "Founder's Message"}
              </h3>
            </div>
            <m.div>
              {posts &&
                posts.map((post) => (
                  <>
                    <div className="flex flex-wrap">
                      <div className="relative w-full px-1 my-5 rounded md:px-[6rem] md:w-6/12 content md:mb-0">
                        <div className="image-container">
                          <div className="offset-bg">
                            <figure className="mb-2 rounded-lg md:mb-6">
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
                        <section className="pb-4 md:pt-0">
                          <div className="content">
                            <div className="w-full py-4 mt-0 text-base text-center md:text-xl">
                              <h4>Profile / 프로필</h4>
                            </div>
                            <div className="w-full">
                              <table className="m-auto table-auto text-[14px]">
                                <tbody>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                      대표
                                      <br />
                                      Founding President
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                      함께하는교육
                                      <br />
                                      Joining East & West as Educational
                                      Liaisons
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                      수석부회장
                                      <br />
                                      Executive Vice President
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                      뉴욕한인회 36대, 37대
                                      <br />
                                      Korean American Association of Greater New
                                      York (36th & 37th)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      교장
                                      <br />
                                      Principal
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      가나다라한국문화학교
                                      <br />
                                      Ganadara Korean School
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      대표
                                      <br />
                                      President
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      재외동포청소년네트워크
                                      <br />
                                      Korean Youth Global Network
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                      교육위원
                                      <br />
                                      School Board Member
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                      (전)뉴저지 노우드학군 교육위원 5선
                                      <br />
                                      NJ Norwood School Board of Education (5
                                      terms)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      이사
                                      <br />
                                      Board Member
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      전미여성유권자연맹 뉴저지노던벨리지구
                                      <br />
                                      League of Women Voters, Northern Valley
                                      Region
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      개설위원장
                                      <br />
                                      Committee Chair
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      (전)미주한국어재단 한국어반개설위원회
                                      <br />
                                      Korean Language Foundation
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      감사
                                      <br />
                                      Auditor
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      (전)민주평통뉴욕협의회 18기
                                      <br />
                                      National Unification Advisory Council, New
                                      York Chapter
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      교육분과위원장
                                      <br />
                                      Committee Chair
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      (전)민주평통뉴욕협의회 16기
                                      <br />
                                      National Unification Advisory Council, New
                                      York Chapter
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      자문위원
                                      <br />
                                      Advisory Member
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate-700 text-slate dark:text-slate-400">
                                      (전)민주평통뉴욕협의회 14기
                                      <br />
                                      National Unification Advisory Council, New
                                      York Chapter
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 pl-4 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                      연합회장
                                      <br />
                                      President
                                    </td>
                                    <td className="p-2 pr-4 border-b border-gray-300 dark:border-slate text-slate dark:text-slate-400">
                                      (전)뉴저지버겐카운티한인학부모연합회
                                      <br />
                                      NJ Bergen County Korean American Parents
                                      Coalitions
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="px-4 mt-4 text-base achievement text-slate">
                            <p>
                              <span className="italic">Achievement:</span>{" "}
                              국민포장 (國民褒章, Civil Merit Medal 2018)
                            </p>
                          </div>
                        </section>
                      </div>
                      <div className="w-full py-5 pl-5 pr-5 text-sm bg-gray-100 rounded-lg md:pl-6 md:pr-10 text-slate md:py-10 md:pl-14 md:pr-20 md:w-5/12 content">
                        <PortableText
                          value={post.content}
                          components={myPortableTextComponents}
                        />
                      </div>
                    </div>
                    <hr className="h-1 mt-10 bg-gray-200" />
                    <section>
                      <div className="w-full mx-auto my-10 text-base text-slate md:w-6/12 content blurb">
                        <PortableText value={posts[0].founderBlurb} />
                      </div>
                    </section>
                  </>
                ))}
            </m.div>
            <hr className="my-8 md:my-16" />
            <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
              <div className="flex flex-col-reverse mt-12 md:mt-0 md:flex-row">
                <div className="w-full max-w-4-col md:order-last">
                  <div className="relative w-full">
                    <div className="relative flex items-center h-auto select-none md:h-20">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        1
                      </div>
                      <a
                        className="relative w-full text-3xl italic leading-loose pointer-events-none group md:text-5xl font-pt"
                        href="/about"
                      >
                        <span className="group-hover:italic group-hover:normal-case relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-100">
                          <span className="relative z-10">About us</span>
                        </span>
                      </a>
                    </div>

                    <div className="relative flex items-center h-auto select-none md:h-20">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        2
                      </div>
                      <a
                        className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
                        href="/programs"
                      >
                        <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                          <span className="relative z-10">Programs</span>
                        </span>
                      </a>
                    </div>

                    <div className="relative flex items-center h-auto select-none md:h-20">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        3
                      </div>
                      <a
                        className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
                        href="/projects"
                      >
                        <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                          <span className="relative z-10">Projects</span>
                        </span>
                      </a>
                    </div>

                    <div className="relative flex items-center h-auto select-none md:h-20">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        4
                      </div>
                      <a
                        className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
                        href="/news"
                      >
                        <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow  relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                          <span className="relative z-10">News</span>
                        </span>
                      </a>
                    </div>

                    <div className="relative flex items-center h-auto select-none md:h-20">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        5
                      </div>
                      <a
                        className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
                        href="/affiliates"
                      >
                        <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                          <span className="relative z-10">Affiliates</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between w-full md:max-w-4-col md:block">
                  <div className="relative w-full">
                    <nav className="m-auto md:w-2/3">
                      <span className="block mb-4 text-gray-600 leading-tight uppercase text-base md:text-[18px]">
                        {"About Us"}
                      </span>
                      <ul className="flex flex-wrap">
                        <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                          <Link href="/about">
                            <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                              <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                              <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                Our Mission
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                          <Link href="/founder">
                            <a className="block transition-all duration-300 ease-in-out pointer-events-none group hover:pl-2">
                              <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                              <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                Founder's Message
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                          <Link href="/leadership">
                            <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                              <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                              <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                Leadership
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                          <Link href="/history">
                            <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                              <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                              <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                Our History
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                          <Link href="/contact">
                            <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                              <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                              <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                Contact
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
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
