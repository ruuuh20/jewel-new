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

          <section className="w-full my-8 bg-yellow">
            <Container>
              <div className="py-10 m-auto md:py-16 2xl:py-20">
                <div className="flex flex-col px-[1rem] md:px-[14rem]">
                  <div className="overflow-visible spin-slow">
                    <div className="relative spin-container">
                      <Image
                        className=""
                        src="/ham-logo.png"
                        width="80"
                        height="80"
                      />
                    </div>
                  </div>
                  <div className="relative mt-6 mb-2">
                    <h2 className="block tracking-widest text-center uppercase text-blue-sub md:text-lg">
                      Who We Are
                    </h2>
                  </div>
                  <p className="mb-4 text-[18px] font-medium text-center md:text-3xl xl:text-4xl xl:leading-snug">
                    {homepageData.welcomeHeading}
                  </p>

                  <div className="w-full m-auto mt-10 text-center">
                    <Link href="/about">
                      <a class="button learn-more">
                        <span class="circle" aria-hidden="true">
                          <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">More About Us</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <Container>
            <div className="flex flex-wrap py-10">
              <h2 className="relative block pb-2 mb-2 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl after:absolute after:h-[4px] after:bg-blue after:w-[100%] after:left-[0] after:right-[12.5%] after:bottom-[-5%]">
                Recent Events
              </h2>
              <div className="flex flex-wrap justify-center w-full mt-6 ailgn-middle md:-mx-6">
                <div className="w-full mb-12 md:w-7/12 xl:w-1/2 md:px-6 md:mb-0">
                  <div className="flex flex-col flex-wrap">
                    <div className="w-full px-4 m-auto bg-gray-100 border-2 md:w-1/2 md:px-0">
                      <div className="flex justify-center w-full p-4">
                        <Image
                          src="/aac-poster.png"
                          // layout="responsive"
                          width="300px"
                          height="400px"
                        />
                      </div>
                    </div>
                    <span className="flex mt-2 text-xl font-bold md:text-2xl font-display">
                      Adding Asian American Curriculum in Schools
                    </span>

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
                <h2 className="relative block pb-2 mb-2 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl after:absolute after:h-[4px] after:bg-blue after:w-[100%] after:left-[0] after:right-[12.5%] after:bottom-[-5%]">
                  Projects
                </h2>
                <div className="mb-12 mt-10 md:mb-16 2xl:mb-24 mx-2 md:mx-[5rem] relative">
                  {programData.map((item, i) => {
                    return (
                      <Link href={`/projects/${item.slug.current}`}>
                        <a className="flex flex-wrap border-b py-4 mb-4 bg-[rgba(98,50,0,.04)] shadow hover:shadow-lg project-box">
                          <div className="flex flex-wrap w-full md:px-4">
                            <div className="w-full px-6 py-4 md:px-4 md:w-5/12">
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
                              <div className="flex-1 md:flex md:flex-wrap md:h-full">
                                <div className="self-end w-full mt-auto">
                                  <h3 className="text-xl md:text-2xl md:text-3xl project-title1">
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
            <section>
              <Testimonial />
            </section>
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
                      bgColor = "before:bg-[#2F65A7]";
                      marginClass = "md:mt-[-60px]";
                      borderColor = "before:border-[#2F65A7]";
                      afterColor = "after:border-[#2F65A7]";
                    } else if (i === 1) {
                      color = "text-blue-light";
                      bgColor = "before:bg-[#75988d]";
                      borderColor = "before:border-[#75988d]";
                      afterColor = "after:border-[#75988d]";
                      marginClass = "md:mt-[-2px]";
                    } else if (i === 2) {
                      color = "text-green";
                      bgColor = "before:bg-yellow-secondary";
                      borderColor = "before:border-yellow-secondary";
                      afterColor = "after:border-yellow-secondary";
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
