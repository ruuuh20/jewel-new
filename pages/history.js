import Layout from "@/components/layout";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";
import Link from "next/link";
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
      <NextSeo title="Our History" />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pt-[90px] md:pt-[180px] pb-[45px]"
        >
          <Container>
            <div className="relative w-full pt-8 pb-[120px]">
              <div className="pb-1 md:pb-8 tracking-widest uppercase text-sm md:text-[20px] font-semibold text-gray-400 font-arial">
                <span>함께하는교육이 걸어온 길</span>
              </div>
              <div className="absolute hidden mt-2 overflow-visible md:block spin-slow spin-container">
                <div className="relative">
                  <Image src="/ham-logo.png" width="60" height="60" />
                </div>
              </div>
              <span className="font-pt relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl left-0 md:left-[5%]">
                {locale === "ko" ? " 걸어온 길 " : "Our History"}
              </span>
            </div>
            <div className="w-full mx-auto mb-10 md:w-10/12">
              <div className="w-full mx-auto text-center md:w-9/12 lg:w-7/12">
                <div className="text-base font-thin md:text-[24px] leading-normal">
                  <p>{posts[0].history[locale]}</p>
                </div>
              </div>
            </div>

            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <section className="my-2">
                      {post.timelineItems?.map((item, i) => {
                        return (
                          <>
                            <div className="flex flex-wrap py-4 font-serif border-t border-black text-darkgray md:py-8 border-opacity-20 md-mx-6 md:py-12">
                              <div className="w-full mb-2 md:w-7/12 xl:w-2/6 md:px-6 md:mb-0">
                                <div className="max-w-xl">
                                  <div className="w-full text-2xl md:text-right md:text-3xl xl:text-4xl">
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
                    </section>

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
            {/* <hr className="my-8 md:my-16" /> */}

            <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
              <div className="flex flex-col-reverse mt-12 md:flex-row md:mt-0">
                <div className="w-full max-w-4-col md:order-last mt-6 md:mt-0 border-t border-dashed md:border-none pt-10 md:pt-0">
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

                    <div className="relative flex items-center h-auto md:h-20 select-none">
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

                <div className="flex justify-between w-full md:max-w-4-col md:block text-right md:text-left">
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
                            <a className="block transition-all duration-300 ease-in-out pointer-events-none group hover:pl-2">
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
 *[_type == "about" && title.en == "Our Mission"] {
  
...,
history,
content,
welcomeText,
introText,
founderBlurb,
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
