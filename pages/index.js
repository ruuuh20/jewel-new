import { useRef } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Footer from "@/components/footer";
import FancyLink from "@/components/fancyLink";
import Link from "next/link";
import { fade, textReveal } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { client } from "../sanity";
import ImageComponent from "@/components/image";
import Image from "next/image";
import ArrowRight from "@/components/arrow-right";
import Testimonial from "@/components/testimonial";

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
  const { siteHeaderData, homepageData, programData, contactData } = data;

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
          // className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <div className="overflow-hidden md:mt-[15rem]">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[10vw] md:text-[6vw] 2xl:text-[100px] leading-none relative z-10"
              >
                <span className="spin spin-0">J</span>
                <span className="text-blue">OINING</span>
              </m.span>
            </div>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[10vw] md:text-[6vw] 2xl:text-[100px] leading-none relative z-10"
              >
                <span className="spin spin-3">E</span>
                <span className="text-blue">AST &</span>{" "}
                <span className="spin spin-2">W</span>
                <span className="text-blue">EST</span>
              </m.span>
            </div>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[10vw] md:text-[6vw] 2xl:text-[100px] leading-none relative z-10"
              >
                <span className="text-blue">AS</span>{" "}
                <span className="spin spin-1">E</span>
                <span className="text-blue">DUCATIONAL</span>
              </m.span>
            </div>
            <div className="overflow-hidden">
              <m.span
                variants={textReveal}
                className="block font-display uppercase text-[10vw] md:text-[6vw] 2xl:text-[100px] leading-none relative z-10"
              >
                <span className="spin spin-4">L</span>
                <span className="text-blue">IASONS</span>
              </m.span>
            </div>
          </Container>

          <section className="relative w-full my-8 bg-yellow">
            <div className="hidden md:block absolute top-[7%] left-[48%] overflow-visible spin-slow spin-container">
              <div className="relative">
                <Image
                  className=""
                  src="/ham-logo.png"
                  width="70"
                  height="70"
                />
              </div>
            </div>
            <div className="md:hidden absolute top-[7%] left-[45%] overflow-visible spin-slow spin-container">
              <div className="relative">
                <Image
                  className=""
                  src="/ham-logo.png"
                  width="45"
                  height="45"
                />
              </div>
            </div>
            <Container>
              <div className="m-auto py-[4rem] md:mt-10 md:py-28">
                <div className="flex flex-col px-2 md:px-[14rem]">
                  <div className="relative mt-8 mb-2 md:mt-3">
                    <h4 className="block tracking-widest text-center uppercase text-blue-sub md:text-lg">
                      Who We Are
                    </h4>
                  </div>
                  <p className="mb-4 text-[18px] font-light font-thin text-center md:text-3xl xl:text-5xl xl:leading-snug">
                    {homepageData.welcomeHeading}
                  </p>

                  <div className="hidden w-full m-auto mt-10 text-center md:block">
                    <Link href="/about">
                      <a className="button learn-more">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">More About Us</span>
                      </a>
                    </Link>
                  </div>
                  <div className="w-full m-auto mt-10 text-center md:hidden">
                    <Link href="/about">
                      <a className="inline-flex items-center px-6 py-2 mt-2 font-extrabold text-white border rounded bg-blue border-blue hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
                        <span className="text-sm font-extrabold">
                          {" "}
                          More About Us
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
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <Container>
            <div className="flex flex-wrap py-4 md:py-10">
              <h2 className="relative font-thin block pb-2 mb-2 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl after:absolute after:h-[2px] after:bg-blue after:w-[100%] after:left-[0] after:right-[12.5%] after:bottom-[-5%]">
                Recent Events
              </h2>
              <div className="flex flex-wrap justify-center w-full mt-10 ailgn-middle md:-mx-6">
                <div className="w-full mb-12 md:w-7/12 xl:w-1/2 md:px-6 md:mb-0">
                  <div className="flex flex-col flex-wrap">
                    <div className="w-full px-0 m-auto bg-gray-100 border-none md:w-1/2 md:px-0">
                      <div className="flex justify-center w-full p-4 rounded-lg">
                        <Image
                          src="/aac-poster.png"
                          // layout="responsive"
                          width="350px"
                          height="450px"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-end w-full mt-2 mb-2 md:items-center md:mr-5 md:mt-5 md:mb-5">
                      <div className="flex flex-wrap items-center">
                        <span className="flex items-center text-sm header-tag md:mr-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="27"
                            width="27"
                            viewBox="0 0 45 45"
                            className="w-2 opacity-50 md:w-2"
                          >
                            <path d="M43 41.45V9Q43 9 43 9Q43 9 43 9H5Q5 9 5 9Q5 9 5 9V25H2V9Q2 7.75 2.875 6.875Q3.75 6 5 6H43Q44.25 6 45.125 6.875Q46 7.75 46 9V38Q46 39.3 45.15 40.275Q44.3 41.25 43 41.45ZM18 27.95Q14.7 27.95 12.6 25.85Q10.5 23.75 10.5 20.45Q10.5 17.15 12.6 15.05Q14.7 12.95 18 12.95Q21.3 12.95 23.4 15.05Q25.5 17.15 25.5 20.45Q25.5 23.75 23.4 25.85Q21.3 27.95 18 27.95ZM18 24.95Q19.95 24.95 21.225 23.675Q22.5 22.4 22.5 20.45Q22.5 18.5 21.225 17.225Q19.95 15.95 18 15.95Q16.05 15.95 14.775 17.225Q13.5 18.5 13.5 20.45Q13.5 22.4 14.775 23.675Q16.05 24.95 18 24.95ZM2 44V39.3Q2 37.4 2.95 36.05Q3.9 34.7 5.4 34Q8.75 32.5 11.825 31.75Q14.9 31 18 31Q21.1 31 24.15 31.775Q27.2 32.55 30.55 34Q32.1 34.7 33.05 36.05Q34 37.4 34 39.3V44ZM5 41H31V39.3Q31 38.5 30.525 37.775Q30.05 37.05 29.35 36.7Q26.15 35.15 23.5 34.575Q20.85 34 18 34Q15.15 34 12.45 34.575Q9.75 35.15 6.6 36.7Q5.9 37.05 5.45 37.775Q5 38.5 5 39.3ZM18 20.45Q18 20.45 18 20.45Q18 20.45 18 20.45Q18 20.45 18 20.45Q18 20.45 18 20.45Q18 20.45 18 20.45Q18 20.45 18 20.45Q18 20.45 18 20.45Q18 20.45 18 20.45ZM18 41Q18 41 18 41Q18 41 18 41Q18 41 18 41Q18 41 18 41Q18 41 18 41Q18 41 18 41Q18 41 18 41Q18 41 18 41Z" />
                          </svg>
                          <span className="block mr-2 text-sm tracking-wide text-gray-700 uppercase">
                            Seminar
                          </span>
                        </span>
                        <span className="block mr-2 text-sm tracking-wide text-gray-700 uppercase">
                          Apr 26, 2022
                        </span>
                      </div>
                    </div>
                    <h3 className="flex mb-2 text-xl font-bold md:text-2xl font-display">
                      Adding Asian American Curriculum in Schools
                    </h3>

                    <div className="relative">
                      <div className="mt-2 mb-4 text-lg opacity-70 md:mb-6 content content--dark">
                        NJ Korean American School Boards Luncheon <br /> Who
                        should attend: Korean American School Board, NJ,
                        community leaders, educators, parents and students, and
                        policy makers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <section>
            <Container>
              <div className="flex flex-wrap py-10">
                <h2 className="relative font-thin block pb-2 mb-2 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl after:absolute after:h-[2px] after:bg-blue after:w-[100%] after:left-[0] after:right-[12.5%] after:bottom-[-5%]">
                  Projects
                </h2>
                <div className="mb-12 mt-10 md:mb-16 2xl:mb-24 md:mx-[5rem] relative">
                  {programData.map((item, i) => {
                    return (
                      <Link href={`/projects/${item.slug.current}`}>
                        <a className="rounded-lg flex flex-wrap border-b py-3 mb-4 bg-[rgba(98,50,0,.04)] shadow hover:shadow-lg hover:bg-yellow-lighter project-box md:mb-4">
                          <div className="flex flex-wrap w-full md:px-4">
                            <div className="w-full px-6 py-3 rounded-lg md:px-3 md:w-5/12">
                              {" "}
                              <ImageComponent
                                image={
                                  item.mainImage !== null
                                    ? item.mainImage.url
                                    : "https://via.placeholder.com/50"
                                }
                              />
                            </div>
                            <div className="flex flex-wrap w-full px-6 py-4 md:px-16 md:w-7/12">
                              <div className="flex-1 md:flex md:flex-wrap md:justify-center items=center md:h-full">
                                <div className="self-end w-full mt-auto">
                                  <h3 className="text-xl font-bold md:text-3xl project-title1 text-darkgray">
                                    {item.title[locale]}
                                  </h3>
                                  <p className="text-base md:text-[20px] text-gray-700">
                                    {item.cardDescription}
                                  </p>
                                </div>

                                <div className="relative self-end mt-auto">
                                  <Link href={`/projects/${item.slug.current}`}>
                                    <a className="arrow-btn">
                                      <span className="flex items-center justify-center px-1 py-1 small-arrow">
                                        <span className="mr-2">Learn More</span>
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

          <section className="bg-gray-100">
            <Container>
              <Testimonial />
            </Container>
          </section>
          <Container>
            <section className="md:py-10">
              <div className="relative z-10 w-full mb-12 md:mb-16 md:mt-24 xl:mb-24 2xl:mb-40 3xl:mb-48">
                <div className="flex flex-wrap border-t border-opacity-50 border-dotted border-off-black md:border-0 md:-mx-8">
                  {homepageData.callToAction.map((item, i) => {
                    let color = "text-blue-dark";
                    let bgColor = "#000000";
                    let marginClass = "md:mt-0";
                    let borderColor = "#000000";
                    let afterColor = "#000000";
                    if (i === 0) {
                      color = "text-blue-dark";
                      bgColor = "before:bg-blue";
                      marginClass = "md:mt-[-60px]";
                      borderColor = "before:border-blue";
                      afterColor = "after:border-blue";
                    } else if (i === 1) {
                      color = "text-blue-light";
                      bgColor = "before:bg-[#75988d]";
                      borderColor = "before:border-[#75988d]";
                      afterColor = "after:border-[#75988d]";
                      marginClass = "md:mt-[-2px]";
                    } else if (i === 2) {
                      color = "text-green";
                      bgColor = "before:bg-yellow";
                      borderColor = "before:border-yellow";
                      afterColor = "after:border-yellow";
                      marginClass = "md:mt-[-30px]";
                    }
                    return (
                      <div className="w-full md:w-1/3 md:px-8">
                        <div
                          className={`h-full ${marginClass} md:border-l  border-off-black border-opacity-1 py-8 ${
                            i !== 2
                              ? "border-b md:border-b-0 md:pl-8"
                              : "md:border-b-0 md:border-r md:px-8"
                          }`}
                        >
                          <div className="flex flex-wrap m-auto my-4 md:mx-0 max-w-[250px] md:mx-auto">
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

const contactQuery = `*\[ _type == "contact"\] {
title,
email,
socialLinks[] {
      title,
      url
    }

}`;

export async function getStaticProps() {
  const homepageData = await client.fetch(homepageQuery);
  const siteHeaderData = await client.fetch(siteHeaderQuery);
  const programData = await client.fetch(projectQuery);
  const contactData = await client.fetch(contactQuery);

  const data = { homepageData, siteHeaderData, programData, contactData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default Home;
