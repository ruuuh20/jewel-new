import Layout from "@/components/layout";
import Container from "@/components/container";
import PageNav from "@/components/pageNav";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";
import Link from "next/link";

export default function Leadership(props) {
  const { postdata, preview, program } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  const boardNames = [
    "Officers",
    "Directors",
    "Advisory Board",
    "Honorary Advisory Board",
  ];
  return (
    <Layout>
      <NextSeo title="Leadership" description="Leadership positions at Educate Together" />
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
                <span>함께하는 사람들</span>
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
               Leadership
              </h3>
            </div>

            <div className="flex flex-wrap mx-auto md:px-0 md:w-10/12">
              {boardNames.map((name, i) => {
                let col = "w-full";
                let p = "pr-0";
                // if (i === 2 || i === 3) {
                //   col = "md:w-1/2";
                //   p = "pr-4";
                // }
                if (i === 1) {
                  
                }
                return (
                  <>
                    <div className={`${col} w-full md:mb-4`}>
                      <div className="mx-auto">
                        <div className="w-full mx-auto overflow-hidden">
                          <div className="flex flex-wrap w-full">
                            <div className={`${p} w-full mb-16`}>
                              <div className="flex flex-col flex-wrap items-center justify-center">
                                <div className="flex flex-col flex-wrap mb-2 md:mb-6">
                                  <span className="uppercase  text-2xl  md:text-3xl block mb-0 pb-0 font-display leading-none pt-1 relative block pb-2 mb-2  after:absolute after:h-[4px] after:bg-yellow after:w-[100%] after:left-[0] after:right-[12.5%] after:bottom-[-5%] text-center">
                                    {name}
                                  </span>

                                  <span className="text-base italic text-center text-gray-500 md:text-xl">
                                    {name === "Honorary Advisory Board"
                                      ? "Former School Superintendants"
                                      : null}
                                  </span>
                                </div>
                                <div className="w-full 2xl:max-w-5xl">
                                  <div className="leading-snug text-center lg:text-lg">
                                    <ul className="flex flex-wrap list-none">
                                      {posts
                                        .filter(
                                          (post) => post.boardName.en === name
                                        )
                                        .map((filteredPost, i) => (
                                         ( i >= 4 && filteredPost.boardName.en === "Directors" || filteredPost.boardName.en === "Honorary Advisory Board") ? (
                                            <li className="w-1/3 py-2 md:text-lg">
                                            <p className="font-pt-bold">
                                               {filteredPost.name.en} 
                                            </p>
                                            <p className="text-gray-500 font-pt">
                                              {filteredPost.position.en}
                                            </p>
                                          </li>
                                          ) : (
                                            <li className="w-full py-2 md:px-16">
                                            <p className="font-pt-bold md:text-lg">
                                               {filteredPost.name.en}
                                            </p>
                                            <p className="text-gray-500 font-pt">
                                              {filteredPost.position.en}
                                            </p>
                                          </li>
                                          )
                                          
                                         
                                        ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            {/* <Container>
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

                    {/* <hr className="my-8 md:my-16"/> */}
           
          <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
              <div className="flex flex-col-reverse mt-12 md:flex-row md:mt-0">
                <div className="w-full pt-10 mt-6 border-t border-dashed max-w-4-col md:order-last md:mt-0 md:border-none md:pt-0">
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

                <div className="flex justify-between w-full text-right md:max-w-4-col md:block md:text-left">
                  <div className="relative w-full">
                    <nav className="m-auto md:w-2/3">
                      <span className="block mb-4 text-base md:text-[18px] text-gray-600 leading-tight uppercase">
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
                            <a className="block transition-all duration-300 ease-in-out pointer-events-none group hover:pl-2">
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
 *[_type == "team"] | order(order) {
  
...,

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
