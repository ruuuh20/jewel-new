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
            NJ Korean American School Boards Luncheon <br /> Who should attend:
            Korean American School Board, NJ, community leaders, educators,
            parents and students, and policy makers
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
            className="mb-12 md:mb-16 xl:mb-24  pt-[90px] md:pt-[180px] pb-[45px]"
            variants={fade}
          >
            <Container>
              <section>
                <div className="flex flex-wrap">
                  <div className="order-2 w-full pt-12 pb-20 pl-6 pr-6 lg:order-1 lg:w-1/2 lg:py-10 xl:pl-10 xl:pr-10">
                    <div className="flex">
                      <h2 className="program-page-title">JEWEL</h2>
                    </div>
                  </div>
                  <div className="relative order-1 w-full overflow-hidden border-b lg:w-1/2 lg:order-2 lg:border-l lg:border-b-0 border-black/50"></div>
                </div>
              </section>
            </Container>
          </m.div>
        </LazyMotion>

        <Container>
          <div className="overflow-hidden mt-[10rem] md:mt-[15rem]">
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
         <section className="flex flex-wrap py-4 md:py-10">
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
            </section>


          <section className="bg-gray-100">
            <Container>
              <Testimonial />
            </Container>
          </section>
      </Layout>
    </>
  );
}
