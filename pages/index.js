import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import Container from "@/components/container";
import { InView } from "react-intersection-observer";
import Link from "next/link";
import { fade, textReveal } from "@/helpers/transitions";
import {
  LazyMotion,
  domAnimation,
  m,
  useAnimation,
  useScroll,
} from "framer-motion";
import { NextSeo } from "next-seo";
import { client } from "../sanity";
import ImageComponent from "@/components/image";
import Image from "next/image";
import ArrowRight from "@/components/arrow-right";

import { useInView } from "react-intersection-observer";
import GrayscaleImage from "@/components/grayscaleImage";

const Home = ({ data }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { ref2, inView2 } = useInView({
    triggerOnce: true,
  });
  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
    if (!inView2) {
      controls.start("hidden");
    }
  }, [controls, inView2]);
  const isInView = useInView({ once: true });

  const [activeTab, setActiveTab] = useState("tab1");

  const revealRefs = useRef(null);
  revealRefs.current = [];

  const fadeRevealRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  const { siteHeaderData, homepageData, programData, contactData } = data;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

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
            <section>
              <div className="flex flex-wrap h-[90vh]">
                <div className="w-full img-wrapper">
                  {/* <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  > */}
                  <Image
                    src="/hero-img-1.jpg"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-transparent black
                      }}
                    /> */}
                  {/* </div> */}
                </div>
              </div>
            </section>
          </Container>
          <m.section
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fade}
            className="relative w-full my-10"
          >
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
                  <div className="relative mt-8 mb-2 md:mt-4">
                    <h4 className="block tracking-widest text-center uppercase text-blue-sub md:text-xl">
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
                        <span className="button-text">Learn more</span>
                      </a>
                    </Link>
                  </div>
                  <div className="w-full m-auto mt-10 text-center md:hidden">
                    <Link href="/about">
                      <a className="inline-flex items-center px-6 py-2 mt-2 font-extrabold text-white border rounded bg-blue border-blue hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
                        <span className="text-sm font-pt"> Learn more</span>

                        <svg
                          className="w-5 h-5 ml-3"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
          </m.section>

          <Container>
            <section className="grid-wrapper">
              <div class="card-container grid-container">
                <Link href="/">
                  <a className="card-wrapper-link">
                    <article class="card flex flex-col h-full border-l border-[#120902]">
                      <div className="w-full h-[260px] rounded ">
                        <GrayscaleImage
                          src="/hero-img-1.jpg"
                          alt="imgg"
                          width="100%"
                          height="90%"
                        />
                      </div>
                      <h2 class="card-title underline">
                        Ganadara Korean School
                      </h2>
                      <p class="card-description">
                        Promoting appreciation for Korean language, culture, and
                        history. The Ganadara Korean Language School provides
                        language instruction to students of all ages and groups,
                        which can help promote language learning and increase
                        communication between different cultures.
                      </p>
                    </article>
                  </a>
                </Link>
                <Link href="/jewel">
                  <a className="card-wrapper-link">
                    <article class="card flex flex-col h-full">
                      <div className="w-full h-[260px] rounded">
                        <GrayscaleImage
                          src="/aapi-card.webp"
                          alt="imgg"
                          width="100%"
                          height="90%"
                        />
                      </div>
                      <h2 class="card-title underline">JEWEL</h2>
                      <p class="card-description">
                        Advocating for the inclusion of Asian American
                        immigration history in the K-12 curriculum, which is an
                        important step in recognizing and celebrating the
                        contributions of Asian Americans to American society.
                      </p>
                    </article>
                  </a>
                </Link>
                <Link href="/">
                  <a className="card-wrapper-link">
                    <article class="card flex flex-col h-full relative">
                      {" "}
                      <div className="relative w-full h-[260px] rounded">
                        <GrayscaleImage
                          src="/visiting-korea-card.jpg"
                          alt="imgg"
                          width="100%"
                          height="90%"
                        />
                      </div>
                      <h2 class="card-title underline">Visiting Korea</h2>
                      <p class="card-description">
                        Promoting cross-cultural understanding, developing
                        partnerships, and enhancing language skills. Through
                        meaningful interactions and shared learning, we strive
                        to create a more interconnected world
                      </p>
                    </article>
                  </a>
                </Link>
                <Link href="/">
                  <a className="card-wrapper-link">
                    <article class="card flex flex-col h-full">
                      <div className="relative w-full h-[260px] rounded">
                        <GrayscaleImage
                          src="/visiting-korea-card.jpg"
                          alt="imgg"
                          width="100%"
                          height="90%"
                        />
                      </div>
                      <h2 class="card-title underline">Youth Network</h2>
                      <p class="card-description">
                        Developing Korean overseas youths into confident and
                        culturally-aware global leaders, and fostering positive
                        social impact in a diverse and interconnected world
                      </p>
                    </article>
                  </a>
                </Link>
              </div>
            </section>
          </Container>
          <Container>
            <section className="py-4 md:py-10">
              <div className="flex flex-wrap py-10">
                <h2
                  variants={boxVariants}
                  ref={ref2}
                  initial="hidden"
                  animate={controls}
                  className="relative font-thin block pb-2 mb-2 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl after:absolute after:h-[2px] after:bg-blue after:w-[100%] after:left-[0] after:right-[12.5%] after:bottom-[-5%]"
                >
                  Projects
                </h2>
                <div className="mb-12 mt-10 md:mb-16 2xl:mb-24 md:mx-[5rem] relative">
                  {programData.map((item, i) => {
                    return (
                      <Link href={`/projects/${item.slug.current}`}>
                        <a className="rounded-lg flex flex-wrap border-b py-3 mb-4 bg-[rgba(98,50,0,.04)] shadow hover:shadow-lg hover:bg-yellow project-box md:mb-4">
                          <div className="flex flex-wrap w-full md:px-4">
                            <div className="w-full px-4 py-6 rounded-lg md:px-6 md:w-4/12">
                              {" "}
                              <ImageComponent
                                image={
                                  item.mainImage !== null
                                    ? item.mainImage.url
                                    : "https://via.placeholder.com/50"
                                }
                              />
                            </div>
                            <div className="flex flex-wrap w-full px-4 py-4 md:px-6 md:pl-10 md:pr-16 md:w-7/12">
                              <div className="flex-1 md:flex md:flex-wrap md:justify-center items=center md:h-full">
                                <div className="w-full">
                                  <h3 className="mb-2 text-xl font-bold md:text-3xl project-title1 text-darkgray">
                                    {item.title.en}
                                  </h3>
                                  <p className="flex items-center mb-2 text-gray-700">
                                    <svg
                                      className="inline-block mr-2 svg-icon"
                                      style={{
                                        width: "1em",
                                        height: "1em",
                                        verticalAlign: "middle",
                                        fill: "currentColor",
                                        overflow: "hidden",
                                      }}
                                      viewBox="0 0 1024 1024"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M682.667 469.333c70.613 0 127.573-57.386 127.573-128s-56.96-128-127.573-128c-70.614 0-128 57.387-128 128s57.386 128 128 128zm-341.334 0c70.614 0 127.574-57.386 127.574-128s-56.96-128-127.574-128c-70.613 0-128 57.387-128 128s57.387 128 128 128zm0 85.334c-99.626 0-298.666 49.92-298.666 149.333v106.667H640V704c0-99.413-199.04-149.333-298.667-149.333zm341.334 0c-12.374 0-26.24.853-41.174 2.346 49.494 35.627 83.84 83.627 83.84 146.987v106.667h256V704c0-99.413-199.04-149.333-298.666-149.333z" />
                                    </svg>
                                    <span className="inline-block  md:text-[18px]">
                                      {item.category}
                                    </span>
                                  </p>
                                  <p className="text-base md:text-[18px] text-gray-700">
                                    {item.cardDescription}
                                  </p>
                                </div>

                                <div className="relative self-end mt-2 md:mt-auto">
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
            </section>
          </Container>

          <Container>
            {/* <section className="md:py-10">
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
                      bgColor = "before:bg-[#004F99]";
                      marginClass = "md:mt-[-60px]";
                      borderColor = "before:border-[#004F99]";
                      afterColor = "after:border-[#004F99]";
                    } else if (i === 1) {
                      color = "text-blue-light";
                      bgColor = "before:bg-blue";
                      borderColor = "before:border-blue";
                      afterColor = "after:border-blue";
                      marginClass = "md:mt-[-2px]";
                    } else if (i === 2) {
                      color = "text-green";
                      bgColor = "before:bg-[#2E6599]";
                      borderColor = "before:border-[#2E6599]";
                      afterColor = "after:border-[#2E6599]";
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
                                  <div className="relative z-10 flex-1 px-4 py-8 ml-2 bg-gray-300 md:w-full md:p-8 md:ml-0">
                                    <h3 className="w-full text-2xl font-thin leading-none tracking-tight text-center md:text-2xl xl:text-3xl md:w-32 xl:w-48 md:mb-8 xl:mb-12">
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
            </section> */}

            <section className="py-4 md:py-10">
              <div className="flex content">
                <div className="w-1/2">
                  <div className="">
                    <h3 className="h3-title">
                      {homepageData.callToAction[0].title}
                    </h3>
                  </div>
                  <div className="">
                    <p className="cta-desc">
                      {homepageData.callToAction[0].description}
                    </p>
                  </div>
                </div>
                <div>sfsdfds</div>
              </div>
              ;
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
category

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
