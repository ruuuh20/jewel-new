import Layout from "@/components/layout";
import Container from "@/components/container";
import FooterNav from "@/components/footerNav";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
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
          className="mb-12 md:mb-16 xl:mb-24  pt-[90px] md:pt-[180px] pb-[45px]"
        >
          <Container>
            <div className="relative w-full pt-8 pb-[128px]">
              <div className="pb-1 md:pb-8 tracking-widest uppercase text-sm md:text-[20px] font-semibold text-gray-400 font-arial">
                <span>함께하는교육 소개</span>
              </div>
              <div className="absolute hidden mt-2 overflow-visible md:block spin-slow spin-container">
                <div className="relative">
                  <Image src="/ham-logo.png" width="60" height="60" />
                </div>
              </div>
              <h3 className="font-pt relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl left-0 md:left-[5%]">
                Who We Are
              </h3>
            </div>
            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <div className="relative max-w-4xl mb-16 md:mb-20 2xl:mb-28">
                      <div className="block mb-4 overflow-hidden md:mb-6 2xl:mb-8">
                        <div className="relative mb-2 md:mb-3">
                          <h2 className="block tracking-wider uppercase md:text-xl text-blue-sub">
                            {post.title[locale]}
                          </h2>
                        </div>
                        <div className="w-full text-lg md:pr-12 md:text-3xl text-darkgray font-thin">
                          <p className="leading-snug">{post.introText}</p>
                        </div>
                      </div>
                    </div>
                    <section className="my-20">
                      <div className="flex flex-col flex-wrap md:flex-row">
                        <div className="w-full md:w-2/5">
                          <ImageComponent
                            image={
                              post.imageUrl !== null
                                ? post.imageUrl
                                : "https://via.placeholder.com/50"
                            }
                          />
                        </div>
                        <div className="w-full mt-10 md:w-3/5 md:mt-0">
                          <div className="md:px-16 right-col">
                            <div className="relative mb-2">
                              <h2 className="block text-base tracking-wider uppercase md:text-xl text-blue-sub">
                                Our Goals
                              </h2>
                            </div>
                            <div className="flex flex-wrap mt-6 mb-4 text-darkgray">
                              <div className="about-item">
                                <p className="block  text-lg md:text-xl  leading-snug relative   p-[2.2rem]">
                                  Provide opportunities for the enrichment and
                                  learning of Asian cultures and history.
                                </p>
                              </div>
                              <div className="about-item">
                                <p className="block  text-lg md:text-xl  leading-snug relative  p-[2.2rem]">
                                  Empower future generations to celebrate their
                                  own heritage while engaging with other
                                  cultures.
                                </p>
                              </div>
                              <div className="about-item">
                                <p className="block text-lg md:text-xl  leading-snug relative   p-[2.2rem] pt-4rem">
                                  Promote a mutual understanding for world
                                  cultures and methods of education
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <div className="max-w-4xl py-2 m-auto mt-12 text-xl md:py-12 content"></div>
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
                      <span className="block mb-4  text-gray-600 leading-tight uppercase text-base md:text-[18px]">
                        {"About Us"}
                      </span>
                      <ul className="flex flex-wrap">
                        <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                          <Link href="/about">
                            <a className="transition-all duration-300 ease-in-out pointer-events-none blodfck group hover:pl-2">
                              <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                              <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                Our Mission
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                          <Link href="/founder">
                            <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
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
