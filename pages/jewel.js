import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { LazyMotion, useAnimation, domAnimation, m } from "framer-motion";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Image from "next/image";
import { fade, textReveal } from "@/helpers/transitions";
import { useInView } from "react-intersection-observer";
import Testimonial from "@/components/testimonial";
import ImageGallery from "@/components/imageGallery";
import Link from "next/link";

export default function Jewel(props) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

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

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  const FirstTab = () => {
    return (
      <div className="flex flex-wrap bg-[rgba(98,50,0,.04)] py-4 px-4 md:px-16 rounded-lg">
        <div className="w-full px-0 m-auto border-none md:w-full md:px-0">
          <div className="flex justify-center w-full rounded-lg">
            <Image
              src="/IMG-1479.PNG"
              // layout="responsive"
              width="500px"
              height="680px"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-end w-full mt-2 mb-2 md:items-center md:mr-5 md:mt-5 md:mb-5">
          <div className="flex flex-wrap items-center">
            <span className="flex items-center text-sm header-tag md:mr-5">
              <span className="block mr-2 text-sm tracking-wide uppercase text-blue">
                Seminar
              </span>
            </span>
            <span className="block mr-2 text-sm tracking-wide uppercase text-blue">
              Wednesday, November 9 2022 | 10am - 12:00pm
            </span>
          </div>
        </div>
        <h3 className="flex mb-2 text-xl md:text-2xl project-title1">
          NJ Korean American School Boards Luncheon (2nd)
        </h3>

        <div className="relative">
          <div className="mt-2 mb-4 text-lg opacity-70 md:mb-6 content content--dark"></div>
        </div>
      </div>
    );
  };

  const SecondTab = () => {
    return (
      <>
        <div className="flex flex-wrap bg-[rgba(98,50,0,.04)] py-4 px-4 md:px-16 rounded-lg">
          <div className="w-full px-0 m-auto border-none md:px-0">
            <div className="flex justify-center w-full rounded-lg">
              <Image
                src="/aac-poster.png"
                // layout="responsive"
                width="380px"
                height="480px"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-end w-full mt-2 mb-2 md:items-center md:mr-5 md:mt-5 md:mb-5">
            <div className="flex flex-wrap items-center">
              <span className="flex items-center text-sm header-tag md:mr-5">
                <span className="block mr-2 text-sm tracking-wide text-gray-700 uppercase">
                  Seminar
                </span>
              </span>
              <span className="block mr-2 text-sm tracking-wide text-gray-700 uppercase">
                Tuesday, April 26 2022
              </span>
            </div>
          </div>
          <h3 className="flex mb-2 text-xl md:text-2xl project-title1">
            Adding Asian American Curriculum in Schools
          </h3>

          <div className="relative">
            <div className="mt-2 mb-4 text-lg opacity-70 md:mb-6 content content--dark">
              NJ Korean American School Boards Luncheon <br /> Who should
              attend: Korean American School Board, NJ, community leaders,
              educators, parents and students, and policy makers
            </div>
          </div>
        </div>
        <div className="flex flex-wrap bg-[rgba(98,50,0,.04)] py-4 px-4 md:px-16 rounded-lg">
          <div className="w-full px-0 m-auto border-none md:px-0">
            <div className="flex justify-center w-full rounded-lg">
              <Image
                src="/koreanfestival22.jpg"
                // layout="responsive"
                width="380px"
                height="480px"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-end w-full mt-2 mb-2 md:items-center md:mr-5 md:mt-5 md:mb-5">
            <div className="flex flex-wrap items-center">
              <span className="flex items-center text-sm header-tag md:mr-5">
                <span className="block mr-2 text-sm tracking-wide uppercase text-blue">
                  Festival
                </span>
              </span>
              <span className="block mr-2 text-sm tracking-wide uppercase text-blue">
                Sunday, October 23 2022 | 11am - 5:00pm
              </span>
            </div>
          </div>
          <h3 className="flex mb-2 text-xl md:text-2xl project-title1">
            2022 Korean Festival (KAAGNY)
          </h3>

          <div className="relative">
            <div className="mt-2 mb-4 text-lg opacity-70 md:mb-6 content content--dark">
              Celebrating Korean culture in New York City with food, vendors,
              performances, and more.
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Layout>
        <NextSeo title="JEWEL" />
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mb-12 md:mb-16 xl:mb-24 pb-[45px]"
            variants={fade}
          >
            <Container>
              <div className="relative w-full pt-8 pb-[28px] border-b border-black">
                <div className="flex flex-wrap">
                  <h1 className="relative block pb-0 pr-12 mb-0 text-3xl tracking-tight font-pt md:text-5xl lg:text-6xl 2xl:text-6xl">
                    JEWEL
                  </h1>
                  {/* <div className="relative order-1 w-full overflow-hidden border-b lg:w-1/2 lg:order-2 lg:border-l lg:border-b-0 border-black/50"></div> */}
                </div>
              </div>
            </Container>
          </m.div>
        </LazyMotion>

        <section className="opacity-[75%]">
          <Container>
            <div className="overflow-hidden mt-[5rem] md:mt-[15rem] ">
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
        </section>

        {/* tabs  */}
        {/* <section className="flex flex-wrap py-4 md:py-10">
          <m.h2
            variants={boxVariants}
            ref={ref}
            initial="hidden"
            animate={controls}
            className="relative font-thin block pb-2 mb-2 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl after:absolute after:h-[2px] after:bg-blue after:w-[100%] after:left-[0] after:right-[12.5%] after:bottom-[-5%]"
          >
            Events
          </m.h2>

          <div className="flex flex-wrap justify-around w-full mt-10">
            <nav className="font-thin uppercase events-nav">
              <ul className="">
                <li
                  className={
                    activeTab === "tab1"
                      ? "active-tab"
                      : "text-[#949494] hover:text-black"
                  }
                  onClick={handleTab1}
                >
                  Upcoming
                </li>
                <li
                  className={
                    activeTab === "tab2"
                      ? "active-tab"
                      : "text-[#949494] hover:text-black"
                  }
                  onClick={handleTab2}
                >
                  Past
                </li>
              </ul>
            </nav>

            <div className="w-full mb-12 md:w-7/12 md:px-6 md:mb-0">
              {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
          </div>
        </section> */}
        <Container>
          <section className="py-[60px]">
            <div className="justify-around w-full mt-10 ">
              <h3 className="h3-title">What we're working on</h3>
              <li className="flex">
                <Link href="/projects/adding-aapi">
                  <a className="w-full p-5 bg-gray-200 rounded-xl md:w-3/12 ">
                    <span className="text-3xl font-semibold">AAPI</span>
                    <p>Learn more about our AAPI initiative</p>
                  </a>
                </Link>
              </li>
            </div>
          </section>

          <section className="flex flex-wrap py-4 md:py-10">
            <div className="flex flex-wrap justify-around w-10/12 py-8 mt-10 md:w-5/12">
              <p className="md:text-xl">
                "For over two decades, Kay has been a trailblazer in the field
                of education. She has earned a well-deserved reputation as a
                visionary educator, with a track record of remarkable
                achievements and a deep commitment to fostering educational
                excellence. She has been a driving force in our local community,
                consistently recognized for her exceptional contributions to
                education, innovative programs, and dedication to nurturing the
                next generation of learners."
              </p>
            </div>

            <ImageGallery />
          </section>
        </Container>

        <section className="bg-gray-100">
          <Container>
            <Testimonial />
          </Container>
        </section>
      </Layout>
    </>
  );
}
