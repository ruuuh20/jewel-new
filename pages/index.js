import { useRef } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import Link from "next/link";
import { fade, textReveal } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { client } from "../sanity";
import SanityPageService from "../sanityPageService";
import ImageComponent from "@/components/image";
import Image from "next/image";
import ArrowRight from "@/components/arrow-right";

const Home = ({ data }) => {
  const wavyTextRefs = useRef(null);
  const revealRefs = useRef(null);
  revealRefs.current = [];
  wavyTextRefs.current = [];
  const fadeRevealRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  const { siteHeaderData, homepageData, programData } = data;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <Layout>
      <NextSeo title="Home" />

      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[14vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10"
              >
                <span className="spin spin-0">J</span>
                <span className="fade-out">OINING</span>
              </m.span>
            </div>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[14vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10"
              >
                <span className="spin spin-1">E</span>
                <span className="fade-out">AST &</span>{" "}
                <span className="spin spin-2">W</span>
                <span className="fade-out">EST</span>
              </m.span>
            </div>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[14vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10"
              >
                <span className="fade-out">AS</span>{" "}
                <span className="spin spin-3">E</span>
                <span className="fade-out">DUCATIONAL</span>
              </m.span>
            </div>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[14vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10"
              >
                <span className="spin spin-4">L</span>
                <span className="fade-out">IASONS</span>
              </m.span>
            </div>
          </Container>
          <section className="w-full bg-[#CFBF84] my-8">
            <Container>
              <div className="py-10 m-auto md:py-20 2xl:py-20">
                <div className="flex flex-col px-[12rem]">
                  <p className="mb-4 text-3xl font-medium text-center md:text-4xl xl:text-5xl xl:leading-snug">
                    {homepageData.welcomeHeading}
                  </p>

                  <div className="w-full m-auto mt-10 text-center">
                    <Link href="/about">
                      <a class="button learn-more">
                        <span class="circle" aria-hidden="true">
                          <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Who We Are</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <Container>
            <div className="">
              <h2
                className="relative block pb-4 mb-2 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl"
                // after:absolute
                // after:h-[4px]
                // after:bg-purple
                // after:w-[70%]
                // after:left-[0]
                // after:right-[12.5%]
                // after:top-[8%]
              >
                Upcoming event
                <div className="line w-[20%] mt-2 h-[4px] bg-purple-light"></div>
              </h2>

              <div className="relative flex justify-center w-full mx-auto mt-8 align-middle">
                {/* <ImageComponent
                    image={
                      homepageData.heroImage !== null
                        ? homepageData.heroImage.url
                        : "https://via.placeholder.com/50"
                    }
                  /> */}
                <Image
                  src={homepageData.heroImage.url}
                  width="550"
                  height="800"
                />

                <br />
                <br />
              </div>
            </div>

            {/* <div className="py-10">
              <h2 className="relative block pb-0 pr-12 mb-0 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl">
                News
              </h2>
              <div className="flex flex-wrap mt-6 md:-mx-6">
                <div className="w-full mb-12 md:w-7/12 xl:w-1/2 md:px-6 md:mb-0">
                  <div className="flex flex-col flex-wrap">
                    <div className="w-1/2 px-4 bg-gray-100 border-2 md:w-full md:px-0">
                      Article 2 IMAGE
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                   
                    </div>
                    <span className="flex mt-2 text-base font-bold md:text-lg font-display">
                      News Article 1
                    </span>

                    <div className="relative">
                      <div className="mt-2 mb-4 text-lg opacity-70 md:mb-6 content content--dark">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>

                      <div className="relative z-20">
                        <FancyLink destination="/about" label="Learn More" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full ml-auto md:w-5/12 xl:w-1/2 md:px-6">
                  <div className="flex flex-col flex-wrap -mx-4 md:mx-0">
                    <div className="w-1/2 px-4 bg-gray-100 md:w-full md:px-0 ">
                      Article 2 IMAGE
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                   
                    </div>
                    <span className="flex mt-2 text-base font-bold md:text-lg font-display">
                      News Article 2
                    </span>
                    <div className="relative">
                      <div className="mt-2 mb-4 text-lg opacity-70 md:mb-6 content content--dark">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>

                      <div className="relative z-20">
                        <FancyLink destination="/about" label="Learn More" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </Container>
          <section>
            <Container>
              <div className="flex flex-wrap py-10">
                <h2 className="relative block pb-4 mb-2 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl after:absolute after:h-[4px] after:bg-purple-light after:w-[70%] after:left-[0] after:right-[12.5%] after:bottom-[-5%]">
                  Projects
                </h2>
                <div className="mb-12 mt-10 md:mb-16 2xl:mb-24 mx-[5rem] relative">
                  {programData.map((item, i) => {
                    return (
                      <Link href={`/projects/${item.slug.current}`}>
                        <a className="flex flex-wrap border-b py-4 mb-4 bg-[rgba(98,50,0,.04)]">
                          <div className="flex flex-wrap w-full md:px-4">
                            <div className="w-full md:px-4 md:w-5/12">
                              {" "}
                              <ImageComponent
                                image={
                                  item.mainImage !== null
                                    ? item.mainImage.url
                                    : "https://via.placeholder.com/50"
                                }
                              />
                            </div>
                            <div className="flex flex-wrap w-full md:px-16 md:w-7/12">
                              <div className="flex-1 md:flex md:flex-wrap md:h-full">
                                <div className="self-end w-full mt-auto">
                                  <h3 className="text-[38px]">
                                    {item.title[locale]}
                                  </h3>
                                  <p className="text-[18px]">
                                    {item.cardDescription}
                                  </p>
                                </div>

                                <div className="relative self-end w-full mt-auto">
                                  <Link href={`/projects/${item.slug.current}`}>
                                    <a className="arrow-btn">
                                      <span className="flex items-center justify-center small-arrow bg-yellow-lighter">
                                        <ArrowRight />
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Container>
          </section>
          <Container>
            <section className="py-10">
              <div className="relative z-10 w-full mb-12 md:mb-16 md:mt-24 xl:mb-24 2xl:mb-40 3xl:mb-48">
                <div className="flex flex-wrap border-t border-opacity-50 border-dotted border-off-black md:border-0 md:-mx-8">
                  {homepageData.callToAction.map((item, i) => {
                    let color = "text-blue-dark";
                    let bgColor = "#000000";
                    let paddingClass = "py-8";
                    let borderColor = "#000000";
                    let afterColor = "#000000";
                    if (i === 0) {
                      color = "text-blue-dark";
                      bgColor = "before:bg-blue";
                      paddingClass = "py-8";
                      borderColor = "before:border-blue";
                      afterColor = "after:border-blue";
                    } else if (i === 1) {
                      color = "text-blue-light";
                      bgColor = "before:bg-purple-secondary";
                      borderColor = "before:border-purple-secondary";
                      afterColor = "after:border-purple-secondary";

                      paddingClass = "py-8";
                    } else if (i === 2) {
                      color = "text-green";
                      bgColor = "before:bg-yellow-secondary";
                      borderColor = "before:border-yellow-secondary";
                      afterColor = "after:border-yellow-secondary";
                      paddingClass = "py-8";
                    }
                    return (
                      <div className="w-full md:w-1/3 md:px-8">
                        <div
                          className={`h-full md:border-l  border-off-black border-opacity-1 ${paddingClass} ${
                            i !== 2
                              ? "border-b md:border-b-0 md:pl-8"
                              : "md:border-b-0 md:border-r md:px-8"
                          }`}
                        >
                          <div className="flex flex-wrap -mx-4 md:mx-0 max-w-[250px] md:mx-auto">
                            <div
                              className={`${color} w-16 md:w-full md:mb-4 xl:mb-6`}
                            ></div>

                            <Link href={`${item.slug}`}>
                              <a href="">
                                <div
                                  className={`${bgColor} wrap-image ${borderColor} ${afterColor}`}
                                >
                                  <div className="relative z-10 flex-1 p-2 ml-2 bg-gray-300 md:w-full md:p-8 md:ml-0">
                                    <h3 className="w-full text-2xl leading-none tracking-tight text-center md:text-2xl xl:text-3xl md:w-32 xl:w-48 md:mb-8 xl:mb-12">
                                      {item.title}
                                    </h3>
                                    <div className="w-11/12 mb-4 text-sm xl:text-base md:mb-6 md:w-full md:max-w-xs">
                                      <p className="text-center">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </Container>
        </m.main>
      </LazyMotion>
    </Layout>
  );
};

// export const getServerSideProps = async () => {
//   const query = '*[ _type == "program"]';
//   const programs = await sanityClient.fetch(query);

//   if (!programs.length) {
//     return {
//       props: {
//         programs: [],
//       },
//     };
//   } else {
//     return {
//       props: {
//         programs,
//       },
//     };
//   }
// };

// export async function getStaticProps(context) {
//   return pageService.fetchQuery(context);
// }
const siteHeaderQuery = `*\[_type == "siteheader"\][0] {
  title,
  repoURL {
    current
  }
}`;

// Create a query called homepageQuery
const homepageQuery = `*\[_type == "home"\][0] {
  "title": title.en,
  subtitle,
  
  heroImage {
    ...asset->
  },
  welcomeHeading,
  whatWeDo,
  goals,
  callToAction[]-> {
    title,
    description,
    slug
  }
}`;

const projectQuery = `*\[ _type == "project"\] | order(id) {
title,
mainImage {
  ...asset->
},
slug,
cardDescription,

}`;

export async function getStaticProps() {
  const homepageData = await client.fetch(homepageQuery);
  const siteHeaderData = await client.fetch(siteHeaderQuery);
  const programData = await client.fetch(projectQuery);

  const data = { homepageData, siteHeaderData, programData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default Home;
