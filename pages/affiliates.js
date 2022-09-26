import Container from "@/components/container";
import Layout from "@/components/layout";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Affiliates = (props) => {
    const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <Layout>
      <NextSeo title="Our Affiliates" />
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
               <div className="absolute hidden mt-3 overflow-visible md:block spin-slow spin-container">
              <div className="relative">
                <Image
                  
                  src="/ham-logo.png"
                  width="40"
                  height="40"
                />
              </div>
            </div>
              <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl left-0 md:left-[4%]">
                {locale === "ko" ? "Affiliates" : "Affiliates"}
              </span>
            </div>
        <section>
          <div className="max-w-screen-xl px-4 mx-auto md:py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                <div className="absolute inset-0 flex items-center justify-center object-cover w-full h-full">
                  {/* <Image
                    src="/new-peak-logo.png"
                    alt="Peak Logo"
                    layout="responsive"
                    
                  /> */}
                  <img className="w-[30%] m-auto" src="/new-peak-logo.png" />
                </div>
              </div>

              <div className="lg:py-24">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Peak Education Center
                </h2>

                <p className="mt-4 text-gray-600">
                  A learning center offering a variety of classes including
                  English, Math, and Science
                </p>

                <a
                  className="inline-flex items-center px-8 py-3 mt-8 font-extrabold border rounded text-darkgray bg-yellow border-yellow hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://peakeducenter.com"
                >
                  <span className="text-sm font-extrabold">
                    {" "}
                    Visit Peak Website{" "}
                  </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                <div className="absolute inset-0 flex items-center justify-center object-cover w-full h-full">
                  {/* <Image
                    src="/ganadara-logo.png"
                    alt="Ganadara Logo"
                    layout="fill"
                  /> */}
                  <img
                    className="w-[60%] m-auto"
                    src="/ganadara-logo.png"
                    alt="Ganadara Logo"
                  />
                </div>
              </div>

              <div className="lg:py-24 lg:order-last">
                <h2 className="text-2xl font-bold md:text-3xl">
                  GANADARA Korean Language and Cultural School
                </h2>

                <p className="mt-4 text-gray-600">
                  A learning center offering a variety of classes including
                  English, Math, and Science
                </p>

                <a
                  className="inline-flex items-center px-8 py-3 mt-8 font-extrabold border rounded text-darkgray bg-yellow border-yellow hover:bg-transparent hover:text-yellow active:text-yellow focus:outline-none focus:ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  <span className="text-sm font-extrabold">
                    {" "}
                    Visit GANADARA Website{" "}
                  </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <div className="max-w-screen-xl px-4 mx-auto md:py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                <div className="absolute inset-0 flex items-center justify-center object-cover w-full h-full">
                  Coming Soon
                </div>
              </div>

              <div className="lg:py-24">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Korean American Global Youth Network
                </h2>

                <p className="mt-4 text-gray-600">-</p>

                <a
                  className="inline-flex items-center px-8 py-3 mt-8 font-extrabold border rounded text-darkgray bg-yellow border-yellow hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  <span className="text-sm font-extrabold"> Coming Soon</span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
              <div className="flex mt-12 md:mt-0">
                <div className="w-full max-w-4-col md:order-last">
                  <div className="relative w-full">
                    <div className="relative flex items-center h-20 select-none">
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

                    <div className="relative flex items-center h-20 select-none">
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

                    <div className="relative flex items-center h-20 select-none">
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

                    <div className="relative flex items-center h-20 select-none">
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

                    <div className="relative flex items-center h-20 select-none">
                      <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                        5
                      </div>
                      <Link href="/affiliates">
                        <a className="relative w-full text-3xl leading-loose pointer-events-none group md:text-5xl font-pt">
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
};

export default Affiliates;
