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
import SignupForm from "@/components/signupForm";
import AnnouncementBanner from "@/components/AnnouncementBanner";
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

  const showBanner = true;

  return (
    <>
        <AnnouncementBanner 
      enabled={showBanner}
      message="Roots & Routes 2026 Applications Open"
    />
    <Layout>
      <NextSeo title="Home" />
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          // className="mb-12 md:mb-16 xl:mb-24"
        >
          {/* <section>
            <Container>
              <div className="flex flex-wrap h-[90vh] rounded bg-[#e5d7ce]">
                <div className="w-full img-wrapper"> */}
          {/* <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  > */}
          {/* <Image
                    src="/p7081481.JPG"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  /> */}
          {/* <img src="/hero-image.jpg" /> */}
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
          {/* <div className="page-title">
                    <h1 className="page-title-text w-[100vw] text-center">
                      Building Bridges, Breaking Barriers
                  
                    </h1>
                  </div> */}
          {/* </div>
              </div>
            </Container>
          </section> */}


{/* original hero section */}
          {/* <m.section
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fade}
            className="relative w-full my-10"
          >
            <div className="hidden md:block absolute top-[6%] left-[48%] overflow-visible spin-slow spin-container">
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
                  width="50"
                  height="50"
                />
              </div>
            </div>
            <Container>
              <div className="m-auto py-[4rem] md:mt-12 md:py-28">
                <div className="mx-auto my-5 text-lg text-center  md:text-xl tagline text-[#d96e34] uppercase tracking-wide md:tracking-wider">
                  Building bridges, Breaking barriers
                </div>
                <div className="flex flex-col px-2 md:px-[18rem]">
                  <div className="relative mt-8 mb-2 md:mt-4">
                    <h4 className="block tracking-wider text-center uppercase text-[#e5d7ce] md:text-lg subtitle">
                      Who We Are
                    </h4>
                  </div>
                  <p className="mb-4 text-3xl text-center md:text-4xl xl:text-5xl ">
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
                  <div className="w-full m-auto mt-10 text-center ">
                    <Link href="/about">
                      <a className="inline-flex items-center px-4 py-2 mt-2 font-extrabold border border-black btn--orange">
                        About Us
                        <svg
                          className="w-5 h-5 ml-2"
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
          </m.section> */}

          


     

         {/* Hero Section - Two Column Layout MAIN */}
          <m.section
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fade}
            className="relative w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]"
          >
           
            <Container>
              <div className="grid items-center gap-8 py-16 md:grid-cols-2 md:gap-12 md:py-24 xl:py-32">
                {/* Left Column - Text Content */}
                <div className="order-2 md:order-1">
                  {/* Badge */}
                  <div className="mb-6">
                    <span className="inline-block px-5 py-2 bg-[#c17854] text-white font-bold rounded-full text-sm md:text-base shadow-lg">
                      Applications Open Now • Spring Break 2026
                    </span>
                  </div>
                  
                  {/* Main Headline */}
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-[#1e3a5f] tracking-tight">
                    Roots and Routes
                  </h1>
                  
                  {/* Subheadline */}
                  <p className="text-xl md:text-2xl xl:text-3xl mb-6 font-semibold leading-relaxed text-[#334e68]">
                    A 9-day educational and cultural exchange for Korean-American students
                  </p>
                  
                  {/* Description */}
                  <p className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg">
                    Experience Korea's world-class education system through an exclusive exchange at Minjok Leadership Academy. Explore Seoul's culture, connect with Korean students, and develop global leadership skills.
                  </p>
                  
                  {/* Key Details */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#e0e7ef] border border-[#2c5282]/20 rounded-lg shadow-md">
                      <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-bold text-[#1e3a5f]">April 2–11, 2026</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#e0e7ef] border border-[#2c5282]/20  rounded-lg shadow-md">
                      <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="font-bold text-[#1e3a5f]">Grades 7–12</span>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                      href="/apply"
               
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform rounded-lg"
                    >
                      Apply Now
                    </a>
                    <a
                      href="/roots-and-routes"
               
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#1e3a5f] text-white hover:bg-[#0f1f3d] shadow-lg transition-all duration-300 text-lg rounded-lg"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="order-1 md:order-2">
                  <div className="relative overflow-hidden transition-transform duration-500 transform shadow-2xl rounded-2xl hover:scale-105">
                    <div className="relative h-[400px] md:h-[500px] xl:h-[600px]">
                      <Image
                        src="/visiting-korea-card.jpg"
                        alt="Roots and Routes - Cultural Exchange Program"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                      {/* Subtle overlay for depth */}
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/30 to-transparent"></div> */}
                      
                      {/* Optional: Floating stat badge on image */}
                      <div className="border-2 border-[#1e3a5f]/10 absolute p-4 shadow-lg bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-extrabold text-[#1e3a5f]">25 Spots</div>
                            <div className="text-sm text-gray-600">Limited Availability</div>
                          </div>
                          <div className="pl-4 border-l border-[#2c5282]/20 (make it border-l-2)">
                            <div className="text-2xl font-extrabold text-[#1e3a5f]">9 Days</div>
                            <div className="text-sm text-gray-600">Spring Break</div>
                          </div>
                          <div className="pl-4 border-l border-[#2c5282]/20 (make it border-l-2)">
                            <div className="text-2xl font-extrabold text-[#1e3a5f]">Minjok Leadership Academy</div>
                            <div className="text-sm text-gray-600">Exchange</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
           
          </m.section>

        
          

          {/* Mission Statement Section */}
          {/* <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light leading-tight mb-6 text-[#120902]">
                  Building global understanding through education and cultural exchange
                </h2>
                <p className="text-lg text-gray-700 md:text-xl">
                  Creating meaningful connections between the United States and Korea
                </p>
              </div>
            </section>
            
            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container> */}

           {/* Hero Section - Modernized */}
          <m.section
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fade}
            className="relative w-full"
          >
            <Container>
              <div className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] py-16 md:py-24">
                {/* Mission Statement */}
                <div className="max-w-5xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-8 text-[#120902] font-clash">
                    Building global understanding through education and cultural exchange
                  </h1>
                  
                  <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-700 md:text-xl font-clash">
                   We create meaningful connections between the United States and Korea through immersive programs that bring students, educators, and communities together
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link href="/about">
                      <a className="inline-flex items-center px-8 py-3 font-semibold transition-all duration-300 bg-white border-2 border-black hover:bg-black hover:text-white">
                        Learn About Our Work
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="inline-flex items-center px-8 py-3 font-semibold bg-[#d96e34] text-white hover:bg-[#c45e24] transition-all duration-300">
                        Get Involved
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </m.section>


          

            {/* Programs Section - With Better Header */}
          <Container>
            <section className="py-12 md:py-20">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 font-clash text-[#120902]">
                  Our Programs
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 md:text-xl">
                  Explore our initiatives that connect communities through language, culture, and shared experiences
                </p>
              </div>

              {/* Featured Program - Learncation */}
              <div className="mb-8 md:mb-12">
                <a
                  className="block"
                  href=""
                  target="_blank"
                >
                  <article className="flex flex-col md:flex-row gap-6 p-6 md:p-8 border-2 border-[#120902] rounded-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-full md:w-1/2">
                      <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                        <Image
                          src="/visiting-korea-card.jpg"
                          alt="Roots & Routes program"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/2">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 text-sm font-semibold bg-[#d96e34] text-white rounded-full">
                          Featured Program
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#120902] flex items-center gap-2">
                       Roots & Routes
                        <span className="inline-block opacity-60">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </span>
                      </h2>
                      <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                        Promoting cross-cultural understanding, developing
                        partnerships, and enhancing language skills. Through
                        meaningful interactions and shared learning, we strive to
                        create a more interconnected world.
                      </p>
                    </div>
                  </article>
                </a>
              </div>

              {/* Other Programs - Two Rows of Two */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <Link href="/">
                  <a className="card-wrapper-link">
                    <article className="card flex flex-col h-full border border-[#120902] rounded-lg hover:shadow-lg transition-shadow duration-300">
                      <div className="relative w-full h-[260px] rounded-t-lg overflow-hidden">
                        <Image
                          src="/ganadara-logo.png"
                          alt="Ganadara Korean School"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-3 text-[#120902]">Ganadara Korean School</h2>
                        <p className="leading-relaxed text-gray-700">
                          Promoting appreciation for Korean language, culture, and
                          history. The Ganadara Korean Language School provides
                          language instruction to students of all ages and groups,
                          which can help promote language learning and increase
                          communication between different cultures.
                        </p>
                      </div>
                    </article>
                  </a>
                </Link>
                
                <Link href="/jewel">
                  <a className="card-wrapper-link">
                    <article className="card flex flex-col h-full border border-[#120902] rounded-lg hover:shadow-lg transition-shadow duration-300">
                      <div className="relative w-full h-[260px] rounded-t-lg overflow-hidden">
                        <Image
                          src="/jewelthumbnail.JPG"
                          alt="JEWEL program"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-3 text-[#120902]">JEWEL</h2>
                        <p className="leading-relaxed text-gray-700">
                          Fostering cultural understanding by promoting education and awareness about different cultures and providing opportunities for people from diverse backgrounds to come together and learn from each other.
                        </p>
                      </div>
                    </article>
                  </a>
                </Link>

                <Link href="/">
                  <a className="card-wrapper-link">
                    <article className="card flex flex-col h-full border border-[#120902] rounded-lg hover:shadow-lg transition-shadow duration-300">
                      <div className="relative w-full h-[260px] rounded-t-lg overflow-hidden">
                        <Image
                          src="/youth.jpg"
                          alt="Youth Network"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-3 text-[#120902]">Youth Network</h2>
                        <p className="leading-relaxed text-gray-700">
                          Developing Korean overseas youths into confident and
                          culturally-aware global leaders, and fostering positive
                          social impact in a diverse and interconnected world.
                        </p>
                      </div>
                    </article>
                  </a>
                </Link>
                
                <Link href="/aaih/exhibit">
                  <a className="card-wrapper-link">
                    <article className="card flex flex-col h-full border border-[#120902] rounded-lg hover:shadow-lg transition-shadow duration-300">
                      <div className="relative w-full h-[260px] rounded-t-lg overflow-hidden">
                        <Image
                          src="/exhibit-1.JPG"
                          alt="Korean American Immigration History"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-3 text-[#120902]">Korean American Immigration History</h2>
                        <p className="leading-relaxed text-gray-700">
                          Preserving and sharing the rich history of Korean American immigration through exhibitions, resources, and community engagement.
                        </p>
                      </div>
                    </article>
                  </a>
                </Link>
              </div>
            </section>
            
            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container>

{/* original columns layout */}
          {/* <Container>
            <section className="grid-wrapper">
              <div class="card-container grid-container">
                <Link href="/">
                  <a className="card-wrapper-link">
                    <article class="card flex flex-col h-full border-l border-[#120902]">
                   
                      <div className="relative w-full h-[260px] rounded ">
                        <div className="h-[90%] relative">
                          <Image
                            src="/ganadara-logo.png"
                            alt="Teacher"
                            width="100%"
                            height="90%"
                            layout="responsive"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <h2 class="card-title">Ganadara Korean School</h2>
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
                     
                      <div className="relative w-full h-[260px] rounded">
                        <div className="h-[90%] relative">
                          <Image
                            src="/jewelthumbnail.JPG"
                            alt="JEWEL image"
                            // width="100%"
                            // height="90%"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <h2 class="card-title">JEWEL</h2>
                      <p class="card-description">
                       Fostering cultural understanding by promoting education and awareness abour different cultuers and oroviding opportunities for people from diverse backgrounds to come together and learn from each other. 
                      </p>
                    </article>
                  </a>
                </Link>

                <a
                  className="card-wrapper-link"
                  href=""
                  target="_blank"
                >
                  <article class="card flex flex-col h-full relative">
                
                    <div className="relative w-full h-[260px] rounded">
                      <div className="h-[90%] relative">
                        <Image
                          src="/visiting-korea-card.jpg"
                          alt="Visiting Korea image"
                          // width="100%"
                          // height="90%"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <h2 class="card-title">
                      Learncation{" "}
                      <span className="inline-block mt-1 opacity-60">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-external-link"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </span>
                    </h2>
                    <p class="card-description">
                      Promoting cross-cultural understanding, developing
                      partnerships, and enhancing language skills. Through
                      meaningful interactions and shared learning, we strive to
                      create a more interconnected world
                    </p>
                  </article>
                </a>

                <Link href="/">
                  <a className="card-wrapper-link">
                    <article class="card flex flex-col h-full">
                  
                      <div className="relative w-full h-[260px] ">
                        <div className="h-[90%] relative rounded">
                          <Image
                            src="/youth.jpg"
                            alt="Youth Network image"
                            // width="100%"
                            // height="90%"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <h2 class="card-title">Youth Network</h2>
                      <p class="card-description">
                        Developing Korean overseas youths into confident and
                        culturally-aware global leaders, and fostering positive
                        social impact in a diverse and interconnected world
                      </p>
                    </article>
                  </a>
                </Link>
                <Link href="/aaih/exhibit">
                  <a className="card-wrapper-link">
                    <article class="card flex flex-col h-full">
                     
                      <div className="relative w-full h-[260px] ">
                        <div className="h-[90%] relative rounded">
                          <Image
                            src="/Luncheon.png"
                            alt="AAIH"
                            // width="100%"
                            // height="90%"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <h2 class="card-title">
                        Asian American Immigration History
                      </h2>
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
            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container> */}
          
          {/* Featured Project Section */}
          <Container>
            <section className="py-12 md:py-20">
              <div className="mb-8 text-center">
                <span className="inline-block px-4 py-2 bg-[#d96e34] text-white font-semibold rounded-full text-sm md:text-base mb-4">
                  Featured Project
                </span>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-[#120902]">
                  Korean American Immigration History
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 md:text-xl">
                  미주한인이민역사
                </p>
              </div>

              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                {/* Image Side */}
                <div className="order-2 md:order-1">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/exhibit-main.jpeg"
                      width={600}
                      height={600}
                      alt="Korean American Immigration History Exhibit"
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#120902]">
                    Preserving Our Shared History
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Our 2024 exhibition explored the rich and complex history of Korean American immigration, from the first arrivals in the early 1900s to the vibrant communities of today. Through photographs, artifacts, oral histories, and interactive displays, we brought this important story to life.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    As we prepare for our 2025 exhibition, we continue to collect stories, preserve historical materials, and educate communities about the Korean American experience.
                  </p>

                 {/* Partner Logos */}
                  <div className="mb-8 p-6 bg-[#f9f7f4] rounded-lg">
                    <h4 className="mb-4 text-sm font-semibold tracking-wide text-center text-gray-600 uppercase">
                      In Partnership With
                    </h4>
                    <div className="grid items-center grid-cols-2 gap-6 md:grid-cols-4">
                      <div className="flex items-center justify-center">
                        <Image
                          src="/partner-logo-1.png"
                          alt="Partner Organization 1"
                          width={120}
                          height={60}
                          objectFit="contain"
                          className="transition-opacity opacity-70 hover:opacity-100"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <Image
                          src="/partner-logo-2.avif"
                          alt="Partner Organization 2"
                          width={120}
                          height={60}
                          objectFit="contain"
                          className="transition-opacity opacity-70 hover:opacity-100"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <Image
                          src="/partner-logo-3.jpg"
                          alt="Partner Organization 3"
                          width={120}
                          height={60}
                          objectFit="contain"
                          className="transition-opacity opacity-70 hover:opacity-100"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <Image
                          src="/partner-logo-4.png"
                          alt="Partner Organization 4"
                          width={150}
                          height={60}
                          objectFit="contain"
                          className="transition-opacity opacity-70 hover:opacity-100"
                        />
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/aaih/exhibit">
                      <a className="inline-flex items-center justify-center px-6 py-3 font-semibold bg-[#d96e34] text-white hover:bg-[#c45e24] transition-all duration-300">
                        View 2024 Exhibit
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="inline-flex items-center justify-center px-6 py-3 font-semibold transition-all duration-300 bg-white border-2 border-black hover:bg-black hover:text-white">
                        Get Involved
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            
            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container>
        

          
          {/* <Container>
            <section className="py-4 md:py-10">
              <div className="">
                <h3 className="h3-title">Past Events</h3>
              </div>
              <div className="flex flex-col md:flex-row content bg-gray-200 py-[1.5rem] rounded-lg">
                <div className="w-full pl-4 md:w-4/12">
                  <div className="block rounded-lg text-[#075985] font-bold">
                    <p className="text-xl md:text-3xl event-title font-pretend">
                      {homepageData.upcomingEvents[4].titleEng}
                    </p>
                  </div>
                  <div className="block mt-2 rounded-lg">
                    <p className="text-lg md:text-2xl event-title">
                      {homepageData.upcomingEvents[3].description}. Further
                      information will be updated soon!
                    </p>
                  </div> 

                 <div className="mt-8">
                
                    <a
                      href="https://forms.gle/Ug2ubrBegfHeHWAq9"
                      target="_blank"
                      className="uppercase btn btn--orange btn-event-form"
                      rel="noopener noreferrer"
                    >
                      RSVP here
                    </a>
                  </div> 
                </div>
                <div className="w-full mt-10 rounded md:flex-1 md:mt-0">
                  <article className="px-[2rem] md:px-[5rem] md:w-3/5">
                    <ImageComponent
                      image={
                        homepageData.upcomingEvents[4].image !== null
                          ? homepageData.upcomingEvents[4].image.url
                          : "https://via.placeholder.com/50"
                      }
                    />
                  </article>
                </div>
              </div>
              <div className="my-4">
                <Link href="/events">
                  <a className="text-lg underline">Go to past events</a>
                </Link>
              </div>
            </section>
          </Container> */}

          <Container>
            <section className="mx-4 my-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
              <div className="w-full p-8 md:p-16">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-6">
                    <svg className="w-12 h-12 mx-auto mb-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <h3 className="mb-4 text-2xl font-bold text-gray-800 md:text-4xl">
                      Stay Connected
                    </h3>
                  </div>
                  <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Sign up for email updates to stay informed about our
                    community's latest initiatives, volunteer opportunities, and
                    other events.
                  </p>
                  <div className="mx-auto text-center">
                    <a
                      href="https://mailchi.mp/a99f1dbd0b8a/educate-together"
                      className="inline-block px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:bg-gray-900 hover:scale-105 hover:shadow-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📧 Subscribe to Newsletter
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </Container>

          {/* <Container>
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
          </Container> */}

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
                      </div>4
                    );
                  })}
                </div>
              </div>
            </section> */}

            {/* Impact Stats Section */}
          {/* <Container>
            <section className="py-12 md:py-16">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#d96e34] mb-2">
                    500+
                  </div>
                  <div className="text-base text-gray-700 md:text-lg">
                    Students Taught
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#d96e34] mb-2">
                    15+
                  </div>
                  <div className="text-base text-gray-700 md:text-lg">
                    Years of Programs
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#d96e34] mb-2">
                    20+
                  </div>
                  <div className="text-base text-gray-700 md:text-lg">
                    Partner Organizations
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#d96e34] mb-2">
                    3
                  </div>
                  <div className="text-base text-gray-700 md:text-lg">
                    Countries Connected
                  </div>
                </div>
              </div>
            </section>
            
            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container> */}

            
            <hr className="hidden md:block bg-black h-[1px] border-none" />

            <section className="py-4 md:py-10">
              <div className="flex flex-row content md:flex-col">
                <div className="w-full md:w-1/2">
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
                  <div className="mt-8">
                    <Link href={`/${homepageData.callToAction[0].slug}`}>
                      <a className="btn btn--orange btn--learn">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </m.main>
      </LazyMotion>
    </Layout>
    </>
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
  },
  upcomingEvents[]-> {
    titleEng,
    titleKor,
    description,
    image {
      ...asset-> 
    }
  },
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
