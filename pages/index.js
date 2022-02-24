import { useRef } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import Link from "next/link";
import { fade, textReveal } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { client } from "../sanity";
import SanityPageService from "../sanityPageService";
import ImageComponent from "@/components/image";

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

  console.log({ siteHeaderData, homepageData, programData });

  return (
    <Layout>
      <NextSeo title="Home" />

      <Header />

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
                <span className="text-blue-light">J</span>OINING
              </m.span>
            </div>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[14vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10"
              >
                <span className="text-blue-light">E</span>AST &{" "}
                <span className="text-blue-light">W</span>EST
              </m.span>
            </div>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[14vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10"
              >
                AS <span className="text-blue-light">E</span>DUCATIONAL
              </m.span>
            </div>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[14vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10"
              >
                <span className="text-blue-light">L</span>IASONS
              </m.span>
            </div>
          </Container>
          <section className="w-full bg-gray-200 my-6">
            <Container>
              <div className="py-10 md:py-16 2xl:py-20">
                <m.article variants={fade}>
                  <h3 className="mb-4 max-w-4xl text-3xl md:text-4xl xl:text-5xl font-medium leading-normal">
                    {homepageData.welcomeHeading}
                  </h3>
                  <div className="max-w-4xl text-xl mt-8 content">
                    <h3>Our goals are</h3>
                    <div className="mb-4">
                      {homepageData.goals.map((item, i) => {
                        return (
                          <p>
                            {i + 1}. {item}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <FancyLink
                    destination="/about"
                    label=" --> Learn more about us"
                    extraClasses="underline text-blue-dark text-lg"
                  />
                </m.article>
              </div>
            </Container>
          </section>

          <Container>
            <div className="flex flex-wrap bg-blue">
              <div className="flex flex-wrap w-full px-8 py-8">
                {/* <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter w-full md:w-32 xl:w-48 md:mb-8 xl:mb-12">
                  Upcoming Event
                </h3> */}
                <h2 className="relative text-white block pb-0 pr-12 mb-0 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl">
                  Upcoming event
                </h2>
                <div p>
                  <p>flyer image/information</p>
                  <ImageComponent
                    image={
                      homepageData.heroImage !== null
                        ? homepageData.heroImage.url
                        : "https://via.placeholder.com/50"
                    }
                  />
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
                  <br />
                </div>
              </div>
            </div>

            <div className="py-10">
              <h2 className="relative block pb-0 pr-12 mb-0 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl">
                News
              </h2>
              <div className="flex flex-wrap md:-mx-6 mt-6">
                <div className="w-full mb-12 md:w-7/12 xl:w-1/2 md:px-6 md:mb-0">
                  <div className="flex flex-wrap flex-col">
                    <div className="w-1/2 px-4 md:w-full md:px-0 bg-gray-100 border-2">
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
                      <br />
                    </div>
                    <span className="flex mt-2 font-bold text-base md:text-lg font-display">
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
                  <div className="flex flex-wrap flex-col -mx-4 md:mx-0">
                    <div className="w-1/2 px-4 md:w-full md:px-0 bg-gray-100 ">
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
                      <br />
                    </div>
                    <span className="flex mt-2 font-bold text-base md:text-lg font-display">
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
            </div>
          </Container>
          <section>
            <Container>
              <div className="py-10">
                <h2 className="relative block pb-0 pr-12 mb-0 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl">
                  programs
                </h2>
                <div className="border-t border-current mb-12 md:mb-16 2xl:mb-24 relative">
                  {programData.map((item, i) => {
                    return (
                      <Link href="/">
                        <a className="flex flex-wrap border-b py-6">
                          <div className="flex flex-wrap w-full md:px-8">
                            <div className="flex flex-wrap w-full md:px-8 md:w-1/2">
                              <div className="md:flex flex-1 md:flex-wrap md:h-full">
                                <div className="w-full self-end mt-auto">
                                  <h3 className="text-[40px]">{item.title}</h3>
                                </div>
                                <div className="w-full self-end mt-auto">
                                  Cateogry
                                </div>
                              </div>
                            </div>
                            <div className="w-full md:px-8 md:w-1/2">
                              {" "}
                              <ImageComponent
                                image={
                                  item.mainImage !== null
                                    ? item.mainImage.url
                                    : "https://via.placeholder.com/50"
                                }
                              />
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
              <h2 className="relative block pb-0 pr-12 mb-0 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl">
                What We Do? Featured ?
              </h2>
              <div className="w-full mb-12 md:mb-16 md:mt-24 xl:mb-24 2xl:mb-40 3xl:mb-48 relative z-10">
                <div className="flex flex-wrap border-dotted border-off-black border-opacity-50 border-t md:border-0 md:-mx-8">
                  {homepageData.callToAction.map((item, i) => {
                    let color = "text-blue-dark";

                    let paddingClass = "py-8";
                    if (i === 0) {
                      color = "text-blue-dark";

                      paddingClass = "py-8";
                    } else if (i === 1) {
                      color = "text-blue-light";

                      paddingClass = "py-8";
                    } else if (i === 2) {
                      color = "text-green";

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
                          <div className="flex flex-wrap -mx-4 md:mx-0">
                            <div
                              className={`${color} w-16 md:w-full md:mb-4 xl:mb-6`}
                            >
                              Animation or design
                            </div>
                            <div className="flex-1 md:w-full px-2 md:px-0 relative z-10 ml-2 md:ml-0">
                              <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter w-full md:w-32 xl:w-48 md:mb-8 xl:mb-12">
                                {item.title}
                              </h3>
                              <div className="text-sm xl:text-base mb-4 md:mb-6 w-11/12 md:w-full md:max-w-xs">
                                <p>{item.description}</p>
                              </div>
                            </div>
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

      <Footer />
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
  title,
  subtitle,
  
  heroImage {
    ...asset->
  },
  welcomeHeading,
  whatWeDo,
  goals,
  callToAction[]-> {
    title,
    description
  }
}`;

const programQuery = `*\[ _type == "program"\] {
title,
mainImage {
  ...asset->
},
description
}`;

export async function getStaticProps() {
  const homepageData = await client.fetch(homepageQuery);
  const siteHeaderData = await client.fetch(siteHeaderQuery);
  const programData = await client.fetch(programQuery);

  const data = { homepageData, siteHeaderData, programData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default Home;
