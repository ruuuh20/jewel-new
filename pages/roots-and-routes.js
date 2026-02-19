import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Link from "next/link";
import { fade } from "@/helpers/transitions";
import {
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import LearncationMap from "@/components/LearncationMap";
import PhotoGallery from "@/components/PhotoGallery";

const RootsAndRoutes = () => {
  const [activeYear, setActiveYear] = useState("2019");

  const router = useRouter();

  return (
    <Layout>
      <NextSeo title="Roots and Routes - Cultural Exchange Program" />
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
         <m.section
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fade}
            className="w-full py-16 md:py-24"
          >
            <Container>
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-[#c17854] text-white font-semibold rounded-full text-sm md:text-base">
                    Applications Open • April 2026
                  </span>
                </div>
                
                <h1 className="mb-6 text-5xl font-bold leading-tight text-[#1e3a5f] md:text-6xl xl:text-7xl">
                  Roots & Routes
                </h1>
              
                <p className="mb-8 text-lg font-light leading-relaxed text-gray-700 md:text-xl">
                  April 2–11, 2026 | Grades 7–12
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href="/apply"
                    className="inline-flex items-center justify-center px-10 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg hover:-translate-y-0.5"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-5 h-5 mr-2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    Apply Now
                  </a>
                  
                  <a
                    href="https://calendly.com/edutogether22/roots-routes-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-4 font-semibold border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all duration-300 text-lg rounded-lg hover:-translate-y-0.5"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-5 h-5 mr-2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Schedule a Call
                  </a>
                </div>
              </div>
            </Container>
          </m.section>


<section className="py-16 bg-white md:py-24">
  <Container>
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
          Why Roots & Routes
        </h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 md:text-xl">
          Roots & Routes is a transformative 10-day program connecting Korean-American students (grades 7-12) with their heritage through educational exchange at Minjok Leadership Academy and cultural immersion across Korea. This isn't just a trip—it's a journey of self-discovery, academic excellence, and lifelong connections.
        </p>
      </div>

      {/* Benefit Cards - 4 Column Grid */}
      <div className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: KMLA Exchange */}
        <div className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-lg">
          <div className="w-14 h-14 rounded-full bg-[#c17854] text-white flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 text-center">
            KMLA Exchange
          </h3>
          <p className="text-sm leading-relaxed text-center text-gray-700">
            Exclusive access to Korea Minjok Leadership Academy, one of Korea's top schools. Experience their world-class education system firsthand.
          </p>
        </div>

        {/* Card 2: Cultural Immersion */}
        <div className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-lg">
          <div className="w-14 h-14 rounded-full bg-[#c17854] text-white flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 text-center">
            Cultural Sites
          </h3>
          <p className="text-sm leading-relaxed text-center text-gray-700">
            Visit iconic landmarks: Gyeongbokgung Palace, DMZ, temples, traditional villages. Participate in hands-on activities: Hangul calligraphy, traditional crafts, and more.
  crafts,
          </p>
        </div>

        {/* Card 3: Small Groups */}
        <div className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-lg">
          <div className="w-14 h-14 rounded-full bg-[#c17854] text-white flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 text-center">
            Small Groups
          </h3>
          <p className="text-sm leading-relaxed text-center text-gray-700">
            Limited to 25 students for personalized attention, meaningful connections, and an intimate learning environment throughout the journey.
          </p>
        </div>

        {/* Card 4: Expert Guides */}
        <div className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-lg">
          <div className="w-14 h-14 rounded-full bg-[#c17854] text-white flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 text-center">
            Expert Guidance
          </h3>
          <p className="text-sm leading-relaxed text-center text-gray-700">
            Led by experienced cultural educators and Korean teachers. Develop 
  cross-cultural communication, adaptability, and global citizenship 
  skills that prepare you for an interconnected world.
          </p>
        </div>
      </div>

      {/* Optional: Additional Key Features */}
      <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-8 md:p-10 text-white">
        <h3 className="mb-6 text-2xl font-bold text-center">
          What Makes Us Different
        </h3>
        <div className="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div className="text-3xl font-extrabold text-[#c17854] mb-2">
              10 Days
            </div>
            <p className="text-white/90">
              Perfect spring break timing, comprehensive itinerary
            </p>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#c17854] mb-2">
              3-4 Days
            </div>
            <p className="text-white/90">
              Extended stay at KMLA, deep educational immersion
            </p>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#c17854] mb-2">
              Since 2023
            </div>
            <p className="text-white/90">
              Proven track record, refined program, happy families
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

{/* 🆕 PHOTO GALLERY - "WHAT YOU'LL EXPERIENCE" */}
<PhotoGallery
  title="What You'll Experience"
  subtitle=""
  photos={[
    {
      src: "/images/strip/strip-6.jpg",
      alt: "Students exploring temples",
      caption: "Temple Exploration",
      location: "Temple",
      badge: "Day 2"
    },
    {
      src: "/hanok.jpg",
      alt: "Students in hanok village",
      caption: "Traditional Hanok Stay",
      location: " Hanok Village",
      badge: "Day 3"
    },
    {
      src: "/independence-hall.jpg",
      alt: "Students at the Independence Hall",
      caption: "Historical Reflection",
      location: "Independence Hall of Korea",
      badge: "Day 4-6"
    },
    {
      src: "/learncation-2019-6.jpg",
      alt: "Blue House",
      caption: "Visiting the Blue House",
      location: "Blue House",
      badge: "Day 5"
    },
    {
      src: "/images/experience/experience-dmz.jpg",
      alt: "DMZ tour experience",
      caption: "Understanding Division",
      location: "DMZ & JSA",
      badge: "Day 7"
    },
    {
      src: "/learncation-2018-6.jpg",
      alt: "Traditional Korean meal",
      caption: "Culinary Culture",
      location: "Korean Cuisine",
    },
    {
      src: "/learncation-2019-8.jpg",
      alt: "School Cafeteria",
      caption: "School Life",
      location: "School",
    },
    {
      src: "/images/students/temple-1.jpg",
      alt: "Temple Visit",
      caption: "Spiritual Sites",
      location: "Temple",
      badge: "Day 8"
    },
    {
      src: "/images/students/lecture-1.jpg",
      alt: "Lecture",
      caption: "Educational Workshops",
      location: "Throughout the Journey",
    }
  ]}
/>
          {/* Overview Section */}
          {/* <Container>
            <section className="py-16 font-normal md:py-24 font-clash">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-8 text-[#120902]">
                  Overview
                </h2>
                 <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Roots and Routes is a program designed for Korean-American middle and high school students, with trips offered throughout the year. Experience Korea's vibrant culture, world-class education system, and cutting-edge innovation, while building global leadership skills and connecting with peers.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    The program combines cultural immersion in Seoul with an exclusive 3-day exchange at Minjok Leadership Academy (민사고), one of Korea's most prestigious schools. From exploring historic palaces to participating in workshops on global citizenship, students gain a comprehensive understanding of both traditional and modern Korea.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    Through guided activities, hands-on workshops, and interactions with Korean students, participants return home with expanded perspectives, enhanced cultural awareness, and inspiration for their academic and career futures.
                  </p>
                </div>
              </div>
            </section>

            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container>

          <Container>
            <section className="py-16 md:py-24 bg-[#f9f7f4] -mx-4 md:-mx-8 px-4 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-8 text-[#1e3a5f]">
                  Why Roots and Routes?
                </h2>
                <div className="grid gap-8 text-left md:grid-cols-3">
                  <div>
                    <div className="mb-4 text-4xl">🎓</div>
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">Academic Excellence</h3>
                    <p className="text-gray-700">
                      Experience Korea's world-renowned education system firsthand through the exclusive KMLA exchange at Minjok Leadership Academy.
                    </p>
                  </div>
                  <div>
                    <div className="mb-4 text-4xl">🌏</div>
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">Global Perspective</h3>
                    <p className="text-gray-700">
                      Develop international awareness and leadership skills that prepare you for an interconnected world.
                    </p>
                  </div>
                  <div>
                    <div className="mb-4 text-4xl">🤝</div>
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">Cultural Connection</h3>
                    <p className="text-gray-700">
                      Engage with Korean culture in meaningful ways while building friendships with peers from diverse backgrounds.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Container> */}

          {/* Program Highlights */}
          {/* <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-12 text-[#120902] text-center">
                  Program Highlights: What Makes Roots & Routes Unique
                </h2>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#d96e34] flex items-center justify-center text-white font-bold text-xl">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#120902]">
                        Minjok Leadership Academy Exchange
                      </h3>
                     <p className="leading-relaxed text-gray-700">
                        Spend 3 days at one of Korea's most prestigious schools. Observe classes, interact with high-achieving students, tour the campus, and participate in workshops on leadership and global citizenship.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#d96e34] flex items-center justify-center text-white font-bold text-xl">
                        2
                      </div>
                    </div>
                    <div>
                     <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#120902]">
                        Cultural Immersion
                      </h3>
                      <p className="leading-relaxed text-gray-700">
                        Explore Seoul's historic palaces, traditional hanok villages, and vibrant neighborhoods. Experience hands-on cultural activities including Hangul calligraphy, traditional crafts, and Korean cooking.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#d96e34] flex items-center justify-center text-white font-bold text-xl">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#120902]">
                        Historic & Modern Korea
                      </h3>
                      <p className="leading-relaxed text-gray-700">
                        Explore ancient palaces, temples, and UNESCO World Heritage Sites alongside cutting-edge technology hubs and contemporary cultural centers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#d96e34] flex items-center justify-center text-white font-bold text-xl">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#120902]">
                        Leadership Development
                      </h3>
                      <p className="leading-relaxed text-gray-700">
                        Gain skills in cross-cultural communication, adaptability, and global citizenship that prepare you for an interconnected world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container> */}

          {/* Program Details */}
          <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-12 text-[#120902] text-center">
                  Program Details
                </h2>

                <div className="grid gap-8 mb-12 md:grid-cols-2">
                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Dates
                    </h3>
                    <p className="text-gray-700">
                      April 2–11, 2026
                    </p>
                  </div>

                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Who Can Apply
                    </h3>
                    <p className="text-gray-700">
                      Students in grades 7–12
                    </p>
                  </div>

                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Group Size
                    </h3>
                    <p className="text-gray-700">
                      Maximum 25 students
                    </p>
                  </div>

                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Program Cost
                    </h3>
                    <p className="text-gray-700">
                      $3,900 per student 
                    </p>
                  </div>
                </div>

                <div className="bg-[#f9f7f4] p-8 rounded-lg mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-[#120902]">
                    What's Included
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Accommodation and meals</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">All activities and tours</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Local transportation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">KMLA exchange program</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Professional chaperones</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">24/7 emergency support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Travel insurance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Cultural workshops</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f8fafc] p-8 rounded-lg border-l-4 border-[#1e3a5f]">
  <h3 className="text-2xl font-bold mb-4 text-[#1e3a5f]">
    Application Process
  </h3>
  <div className="space-y-3">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
        1
      </div>
      <div>
        <h4 className="font-bold text-[#120902] mb-1">Online Application</h4>
        <p className="text-gray-700">Complete our online form with student information and essay responses.</p>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
        2
      </div>
      <div>
        <h4 className="font-bold text-[#120902] mb-1">Virtual Interview</h4>
        <p className="text-gray-700">Selected applicants will be invited to a virtual interview with program directors.</p>
      </div>
    </div>
  </div>
  <p className="mt-4 text-sm text-gray-600">
    <a href="/apply" className="text-[#c17854] hover:text-[#a85232] font-semibold underline">
      View full application details and requirements →
    </a>
  </p>
</div>

<div className="bg-[#f8fafc] p-8 rounded-lg border-l-4 border-[#1e3a5f] mb-8 mt-8">
  <h3 className="text-2xl font-bold mb-6 text-[#1e3a5f]">
    Payment Schedule
  </h3>
  
  <div className="mb-6 space-y-4">
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold">
        1
      </div>
      <div>
        <h4 className="font-bold text-[#120902] mb-1">Security Deposit: $1,000</h4>
        <p className="text-gray-700">
          Submit with your application. <strong>Fully refundable</strong> if not selected for the program.
        </p>
      </div>
    </div>
    
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold">
        2
      </div>
      <div>
        <h4 className="font-bold text-[#120902] mb-1">Balance Payment: $2,900</h4>
        <p className="text-gray-700">
          Due upon acceptance into the program, along with passport information. Must be submitted by [DATE - e.g., March 1, 2026].
        </p>
      </div>
    </div>
  </div>

  <div className="pt-6 mt-6 border-t border-gray-300">
    <h4 className="font-bold text-[#120902] mb-4">Cancellation Policy</h4>
    
    <div className="space-y-3 text-gray-700">
      <p>
        <strong>Cancellation Fee:</strong> A $200 administrative fee applies to all cancellations after acceptance.
      </p>
      
      <p>
        <strong>Refund Amount:</strong>
      </p>
      <ul className="pl-6 space-y-2 list-disc">
        <li>
          <strong>Before airline ticket purchase:</strong> Full refund of payments made, minus $200 cancellation fee.
        </li>
        <li>
          <strong>After airline ticket purchase:</strong> Full refund minus $200 cancellation fee and any non-refundable airline fees (per airline's cancellation policy).
        </li>
      </ul>
      
      <p className="mt-4 text-sm italic">
        Note: The $1,000 security deposit is only refundable if you are not selected for the program. Once you accept your spot, all payments are subject to the cancellation policy above.
      </p>
    </div>
  </div>
</div>

                {/* <div className="p-6 mb-8 border-l-4 border-blue-500 rounded bg-blue-50">
                  <p className="text-gray-700">
                    <strong className="text-blue-900">Payment Plan:</strong> Non-refundable deposit of $1,000 at registration. Balance due by March 10, 2026. Payment plans available upon request.
                  </p>
                </div> */}

              </div>
            </section>

            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container>


<Container>
  <section className=" md:px-24">
          <LearncationMap />
          </section>

</Container>
     


<Container>
            <section className="py-16 md:py-24">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-12 text-[#1e3a5f] text-center">
                  Sample Itinerary
                </h2>
                
                <p className="mb-12 italic text-center text-gray-600">
                  April 2-11, 2026 • 10 Days / 10 Nights • Schedule subject to change
                </p>

                <div className="space-y-8">
                  {/* Day 2 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#e0e7ef] flex items-center justify-center font-bold text-[#1e3a5f] text-lg group-hover:bg-[#c17854] group-hover:text-white transition-colors duration-300">
                        Day 2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Arrival & Seoul City Tour</h3>
                      <p className="mb-2 text-sm text-gray-500">Friday, April 3 • Seoul</p>
                      <p className="text-gray-700">
                        Arrive at Incheon International Airport. Begin Seoul city tour with a visit to Namsan Tower for panoramic city views. Hotel check-in and orientation session with ice-breaking activities to meet fellow participants.
                      </p>
                    </div>
                  </div>

                  {/* Day 3 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#e0e7ef] flex items-center justify-center font-bold text-[#1e3a5f] text-lg group-hover:bg-[#c17854] group-hover:text-white transition-colors duration-300">
                        Day 3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Seoul Historical & Cultural Immersion</h3>
                      <p className="mb-2 text-sm text-gray-500">Saturday, April 4 • Seoul</p>
                      <p className="mb-3 text-gray-700">
                        Visit Gyeongbokgung Palace and the National Folk Museum. Explore Insadong for traditional crafts including hanbok try-on and seal carving experiences. Afternoon shopping, then stroll through Bukchon Hanok Village and the Cheonggyecheon stream.
                      </p>
                    </div>
                  </div>

                  {/* Day 4 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#e0e7ef] flex items-center justify-center font-bold text-[#1e3a5f] text-lg group-hover:bg-[#c17854] group-hover:text-white transition-colors duration-300">
                        Day 4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Modern Korea & Cultural Exploration</h3>
                      <p className="mb-2 text-sm text-gray-500">Sunday, April 5 • Seoul → Hoengseong</p>
                      <p className="text-gray-700">
                        Explore the National Museum of Korea to understand Korean history and culture. Visit Lotte Sky (Seoul Sky observation deck) for stunning city views, then head to Gangnam COEX K-pop Square to experience contemporary Korean culture. Evening departure for Minjok Leadership Academy in Gangwon-do. Reflection and journaling session on the journey.
                      </p>
                    </div>
                  </div>

                  {/* Days 5-7 - KMLA Exchange */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold text-base text-center leading-tight p-2">
                        Days<br/>5-7
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Minjok Leadership Academy (KMLA) Exchange</h3>
                      <p className="mb-2 text-sm text-gray-500">Monday-Wednesday, April 6-8 • Hoengseong (Gangwon-do)</p>
                      <p className="mb-3 text-gray-700">
                        Three-day immersion at one of Korea's most prestigious schools. Experience world-class education and Korean student life:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Class observations and academic activities with Korean students</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Student exchange, peer interactions, and cultural dialogue</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Campus tours and exploration of state-of-the-art facilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Leadership and global citizenship workshops</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Farewell ceremony and reflections on the exchange experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Day 8 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#e0e7ef] flex items-center justify-center font-bold text-[#1e3a5f] text-lg group-hover:bg-[#c17854] group-hover:text-white transition-colors duration-300">
                        Day 8
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">UNESCO Heritage & Korean Independence</h3>
                      <p className="mb-2 text-sm text-gray-500">Wednesday, April 8 • Yeoju → Cheonan → Gyeongju</p>
                      <p className="text-gray-700">
                        Visit Yeoju Sejong Royal Tomb, a UNESCO World Heritage Site honoring King Sejong the Great, creator of Hangul. Travel to Cheonan to explore the Independence Hall of Korea, learning about Korea's journey to independence and modern democracy. Continue to Gyeongju for evening arrival and cultural orientation.
                      </p>
                    </div>
                  </div>

                  {/* Day 9 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#e0e7ef] flex items-center justify-center font-bold text-[#1e3a5f] text-lg group-hover:bg-[#c17854] group-hover:text-white transition-colors duration-300">
                        Day 9
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Ancient Silla Kingdom Experience</h3>
                      <p className="mb-2 text-sm text-gray-500">Thursday, April 9 • Gyeongju</p>
                      <p className="text-gray-700">
                        Full-day in Gyeongju, the ancient capital of the Silla Kingdom. Explore sites including Bulguksa Temple, Seokguram Grotto, and the royal tombs. Participate in traditional cultural activities and enjoy a unique hanok stay experience, sleeping in a traditional Korean house.
                      </p>
                    </div>
                  </div>

                  {/* Day 10 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#e0e7ef] flex items-center justify-center font-bold text-[#1e3a5f] text-lg group-hover:bg-[#c17854] group-hover:text-white transition-colors duration-300">
                        Day 10
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Gyeongju Sites & Return to Incheon</h3>
                      <p className="mb-2 text-sm text-gray-500">Friday, April 10 • Gyeongju → Incheon</p>
                      <p className="text-gray-700">
                        Morning exploration of additional Gyeongju historical sites and cultural landmarks. Travel to Incheon in the afternoon. Evening shopping at Incheon Songdo for last-minute souvenirs and gifts. Group reflection dinner and preparation for departure.
                      </p>
                    </div>
                  </div>

                  {/* Day 11 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#e0e7ef] flex items-center justify-center font-bold text-[#1e3a5f] text-lg group-hover:bg-[#c17854] group-hover:text-white transition-colors duration-300">
                        Day 11
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Final Reflections & Departure</h3>
                      <p className="mb-2 text-sm text-gray-500">Saturday, April 11 • Incheon → Newark</p>
                      <p className="text-gray-700">
                        Visit Incheon Immigration Museum to learn about Korean diaspora and immigration history. Program wrap-up session with certificates and group photos. Farewell dinner. Airport check-in at 9:00 PM. Depart Korea and arrive back in Newark, USA (same day due to time difference). Return home with unforgettable memories and global perspectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="mt-12 p-6 bg-[#f8fafc] rounded-lg border-l-4 border-[#1e3a5f]">
                  <p className="text-sm text-gray-600">
                    <strong className="text-[#1e3a5f]">Note:</strong> This is a sample itinerary. Specific activities, timing, and locations are subject to change based on weather, availability, and group dynamics. 
                  </p>
                </div>
              </div>
            </section>

            <hr className="hidden md:block bg-gray-200 h-[1px] border-none" />
          </Container>

             {/* Why This Program */}
          

          

          {/* FAQ Section */}
          <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-12 text-[#120902] text-center">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200">
  <h3 className="text-xl font-bold mb-3 text-[#120902]">
    Can I schedule a call to learn more?
  </h3>
  <p className="mb-4 text-gray-700">
    Yes, we're happy to answer any questions you have about the program. Schedule a free 30-minute consultation with our program director.
  </p>
  <a
    href="https://calendly.com/edutogether22/roots-routes-consultation"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-6 py-3 font-semibold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="w-5 h-5 mr-2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
    Schedule a Free Consultation
  </a>
</div>

                  <div className="pb-6 border-b border-gray-200">
  <h3 className="text-xl font-bold mb-3 text-[#120902]">
    How do I apply?
  </h3>
  <p className="mb-3 text-gray-700">
    The application process has two steps:
  </p>
  <ol className="pl-6 mb-4 space-y-2 text-gray-700 list-decimal">
    <li><strong>Online Application:</strong> Complete our online form with student information and essay responses.</li>
    <li><strong>Virtual Interview:</strong> Selected applicants will be invited to a virtual interview with our program directors.</li>
  </ol>
  <p className="text-gray-700">
    <a href="/apply" className="text-[#c17854] hover:text-[#a85232] font-semibold underline">
      Visit the application page
    </a> for full details and to begin your application.
  </p>
</div>
                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Do students need to speak Korean?
                    </h3>
                    <p className="text-gray-700">
                      No! The program is designed to be accessible regardless of Korean language ability. All activities include English support, and Korean language skills are not required.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      How is safety ensured?
                    </h3>
                    <p className="text-gray-700">
                      We maintain a 1:10 chaperone-to-student ratio, provide 24/7 emergency support, use only pre-screened accommodations and transportation, and include comprehensive travel insurance for all participants. Safety is our top priority.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      What is Minjok Leadership Academy?
                    </h3>
                    <p className="text-gray-700">
                      Minjok Leadership Academy (KMLA) is one of Korea's most prestigious high schools, known for academic excellence and innovative educational approaches. The 3-day exchange is an exclusive opportunity for our students to experience this world-class institution firsthand.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Can my child attend if they've never been to Korea?
                    </h3>
                    <p className="text-gray-700">
                      Absolutely! Many participants are visiting Korea for the first time. The program is designed to be accessible and enriching whether this is your child's first trip or they've visited before.
                    </p>
                  </div>

                  {/* <div className="pb-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      What if we need to cancel?
                    </h3>
                    <p className="text-gray-700">
                     TBA 
                    </p>
                  </div> */}
                </div>
              </div>
            </section>
          </Container>

         {/* Past Trips Section with Tabs */}
          <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-12 text-[#1e3a5f] text-center">
                  Past Trips
                </h2>

                {/* Year Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <button
                    onClick={() => setActiveYear("2024")}
                    className={`px-8 py-3 font-semibold text-lg transition-all duration-300 rounded-lg ${
                      activeYear === "2024"
                        ? "bg-[#c17854] text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    2024 Trip
                  </button>
                  <button
                    onClick={() => setActiveYear("2019")}
                    className={`px-8 py-3 font-semibold text-lg transition-all duration-300 rounded-lg ${
                      activeYear === "2019"
                        ? "bg-[#c17854] text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    2019 Trip
                  </button>
                  <button
                    onClick={() => setActiveYear("2018")}
                    className={`px-8 py-3 font-semibold text-lg transition-all duration-300 rounded-lg ${
                      activeYear === "2018"
                        ? "bg-[#c17854] text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    2018 Trip
                  </button>
                </div>

                {/* 2024 Content */}
                {activeYear === "2024" && (
                  <div className="animate-fadeIn">
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#120902]">
                        Feb 2024 - Family & Student Experience
                      </h3>
                      <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        Our 2024 program was a special abbreviated trip designed for both students and parents, offering a unique family cultural immersion experience. This shorter-duration program provided an introduction to Korean culture, education, and heritage, creating meaningful connections across generations.
                      </p>
                      
                      {/* Special Badge */}
                      <div className="inline-block mb-6 px-4 py-2 bg-[#e0e7ef] text-[#1e3a5f] rounded-full text-sm font-semibold">
                        Special Format: Students & Parents • Shorter Duration
                      </div>
                    </div>

                    {/* Student Presentation Embed */}
                    <div className="mb-8">
                      <div className="bg-[#f8fafc] p-6 rounded-lg border-2 border-[#1e3a5f]/20 mb-4">
                        <h4 className="text-xl font-bold mb-3 text-[#1e3a5f] flex items-center gap-2">
                          <span>📊</span>
                          Student-Created Trip Presentation
                        </h4>
                        <p className="mb-4 text-gray-700">
                          Our 2024 participants created this presentation to share their experiences. Click through to see their journey in their own words.
                        </p>
                      </div>

                      {/* PowerPoint Embed Area - Multiple Options Below */}
                      
                      {/* OPTION 1: Google Slides Embed (RECOMMENDED) */}
                      {/* Upload your PowerPoint to Google Drive, convert to Google Slides, then get embed code */}
                      <div className="relative w-full overflow-hidden bg-gray-100 shadow-lg rounded-xl" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          src="https://docs.google.com/presentation/d/e/2PACX-1vTL8i5D7x8HKTKqc312iaU-craJqzw7yPp2_PvBTSfaixMCUSgnSIKVECq0g-G5pA/pubembed?start=false&loop=false&delayms=3000"
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allowFullScreen
                          title="2024 Trip Student Presentation"
                        />
                      </div>

                      {/* OPTION 2: PDF Embed (if you convert PPT to PDF) */}
                      {/* 
                      <div className="relative w-full overflow-hidden bg-gray-100 shadow-lg rounded-xl" style={{ minHeight: '600px' }}>
                        <iframe
                          src="/2024-trip-presentation.pdf"
                          className="w-full h-full"
                          style={{ minHeight: '600px' }}
                          frameBorder="0"
                          title="2024 Trip Student Presentation"
                        />
                      </div>
                      */}

                      {/* OPTION 3: Download Link (simplest fallback) */}
                      {/* 
                      <div className="bg-white p-8 rounded-xl border-2 border-dashed border-[#1e3a5f]/30 text-center">
                        <div className="mb-4 text-5xl">📥</div>
                        <h4 className="text-xl font-bold mb-3 text-[#120902]">
                          Download Student Presentation
                        </h4>
                        <p className="mb-6 text-gray-700">
                          View the complete trip presentation created by our 2024 participants
                        </p>
                        <a
                          href="/2024-trip-presentation.pdf"
                          download
                          className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg"
                        >
                          Download Presentation (PDF)
                        </a>
                      </div>
                      */}
                    </div>

                    {/* Trip Highlights for 2024 */}
                    <div className="bg-[#f9f7f4] p-8 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-[#120902]">
                        Trip Highlights
                      </h4>
                      <ul className="grid gap-3 text-gray-700 md:grid-cols-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Family-oriented cultural immersion experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Intergenerational learning opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Seoul cultural landmarks and museums</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Traditional Korean cultural workshops</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Student-led presentation and reflection project</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Meaningful family bonding through shared experiences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* 2019 Content */}
                {activeYear === "2019" && (
                  <div className="animate-fadeIn">
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#120902]">
                        Summer 2019 - Seoul, Gyeongju & Suwon
                      </h3>
                      <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        Our 2019 cohort explored Seoul, the ancient capital of Gyeongju, and historic Suwon. Highlights included visiting Gyeongbokgung Palace, exploring the UNESCO World Heritage sites of Gyeongju, touring Suwon Hwaseong Fortress, and the powerful experience of the DMZ tour.
                      </p>
                    </div>

                    {/* Video Highlights */}
                    <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                      <div className="relative overflow-hidden bg-gray-100 shadow-lg rounded-xl">
                        <video
                          width="100%"
                          height="auto"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                        >
                          <source src="/roots-routes-2019-video-1.mp4" type="video/mp4" />
                          <p className="p-4 text-gray-600">Your browser doesn't support HTML5 video.</p>
                        </video>
                      </div>
                      <div className="relative overflow-hidden bg-gray-100 shadow-lg rounded-xl">
                        <video
                          width="100%"
                          height="auto"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                        >
                          <source src="/roots-routes-2019-video-2.mp4" type="video/mp4" />
                          <p className="p-4 text-gray-600">Your browser doesn't support HTML5 video.</p>
                        </video>
                      </div>
                    </div>

                    {/* Photo Gallery Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2019-1.jpg"
                          alt="2019 Trip - Palace Visit"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2019-2.jpg"
                          alt="2019 Trip - Student Exchange"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2019-3.jpg"
                          alt="2019 Trip - Cultural Activity"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2019-4.jpg"
                          alt="2019 Trip - Group Photo"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2019-5.jpg"
                          alt="2019 Trip - Night Market"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2019-6.jpg"
                          alt="2019 Trip - Temple Visit"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2019-7.jpg"
                          alt="2019 Trip - Temple Visit"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2019-8.jpg"
                          alt="2019 Trip - Temple Visit"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2019-9.jpg"
                          alt="2019 Trip - Temple Visit"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>

                    <div className="bg-[#f9f7f4] p-8 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-[#120902]">
                        Trip Highlights
                      </h4>
                      <ul className="grid gap-3 text-gray-700 md:grid-cols-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Gyeongbokgung Palace in Seoul</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>UNESCO World Heritage sites in Gyeongju</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Suwon Hwaseong Fortress city tour</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>DMZ tour and historical presentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>K-pop dance workshop</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Traditional Korean cultural experiences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* 2018 Content */}
                {activeYear === "2018" && (
                  <div className="animate-fadeIn">
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#120902]">
                        Summer 2018 - Seoul & Gyeongju
                      </h3>
                      <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        The 2018 program focused on the historical depth of Korea, with extended time in Gyeongju, the ancient capital of the Silla Kingdom. Students engaged in workshops, language exchange sessions, and collaborative art projects with Korean peers.
                      </p>
                    </div>

                    {/* Video Highlights */}
                    <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                      <div className="relative overflow-hidden bg-gray-100 shadow-lg rounded-xl">
                        <video
                          width="100%"
                          height="auto"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                        >
                          <source src="/roots-routes-2018-video-1.mp4" type="video/mp4" />
                          <p className="p-4 text-gray-600">Your browser doesn't support HTML5 video.</p>
                        </video>
                      </div>
                      <div className="relative overflow-hidden bg-gray-100 shadow-lg rounded-xl">
                        <video
                          width="100%"
                          height="auto"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                        >
                          <source src="/roots-routes-2018-video-2.mp4" type="video/mp4" />
                          <p className="p-4 text-gray-600">Your browser doesn't support HTML5 video.</p>
                        </video>
                      </div>
                    </div>

                    {/* Photo Gallery Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3">
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2018-1.jpg"
                          alt="2018 Trip - Ancient Temple"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2018-2.jpg"
                          alt="2018 Trip - Student Workshop"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2018-3.jpg"
                          alt="2018 Trip - Cultural Performance"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2018-4.jpg"
                          alt="2018 Trip - Group Activity"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2018-5.jpg"
                          alt="2018 Trip - Historical Site"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <Image
                          src="/learncation-2018-6.jpg"
                          alt="2018 Trip - Team Photo"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>

                    <div className="bg-[#f9f7f4] p-8 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-[#120902]">
                        Trip Highlights
                      </h4>
                      <ul className="grid gap-3 text-gray-700 md:grid-cols-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Explored ancient Silla Kingdom sites</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Archaeological workshop at museum</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Traditional hanbok dress experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Language exchange sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Collaborative art project with Korean students</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] font-bold">•</span>
                          <span>Temple stay experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <hr className="hidden md:block bg-gray-200 h-[1px] border-none" />
          </Container>

          {/* Testimonials Section */}
          <Container>
            <section className="py-16 md:py-24 bg-[#f9f7f4] -mx-4 md:-mx-8 px-4 md:px-8">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-12 text-[#120902] text-center">
                  What Students Say
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="p-8 bg-white rounded-lg shadow-md">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-[#d96e34]" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="mb-6 leading-relaxed text-gray-700">
                      This program changed my perspective on what it means to be a global citizen. The connections I made with Korean students were genuine and eye-opening. I came back with friends for life and a deeper understanding of another culture.
                    </p>
                    <div className="font-semibold text-[#120902]">
                      - S.M.
                    </div>
                    <div className="text-sm text-gray-600">
                      2019 Participant
                    </div>
                  </div>

                  <div className="p-8 bg-white rounded-lg shadow-md">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-[#d96e34]" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="mb-6 leading-relaxed text-gray-700">
                      I wasn't sure what to expect, but the program exceeded everything I imagined. From exploring ancient temples to chatting with students my age about K-pop and school life, every day was memorable. This trip inspired me to continue studying Korean.
                    </p>
                    <div className="font-semibold text-[#120902]">
                      - J.L.
                    </div>
                    <div className="text-sm text-gray-600">
                      2018 Participant
                    </div>
                  </div>

                  <div className="p-8 bg-white rounded-lg shadow-md">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-[#d96e34]" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="mb-6 leading-relaxed text-gray-700">
                      The hands-on cultural experiences were incredible.  The program organizers really care about creating meaningful experiences.
                    </p>
                    <div className="font-semibold text-[#120902]">
                      - A.K.
                    </div>
                    <div className="text-sm text-gray-600">
                      2019 Participant
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Container>


        

           {/* Application CTA Section */}
          <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-4xl mx-auto text-center bg-[#c17854] text-white rounded-xl p-12 md:p-16">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl">
                  Ready to Apply?
                </h2>
                <p className="mb-10 text-xl font-light md:text-2xl">
                  Secure your spot for Spring Break 2026. 
                </p>
                <div className="flex flex-col justify-center gap-4 mb-8 sm:flex-row">
                  <a
                    href="/apply"
                    className="inline-flex items-center justify-center px-10 py-4 font-bold bg-white text-[#c17854] hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg"
                  >
                    Apply Now
                  </a>
                  <a
                    href="https://calendly.com/edutogether22/roots-routes-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-4 font-semibold border-2 border-white text-white hover:bg-white hover:text-[#c17854] transition-all duration-300 text-lg rounded-lg"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-5 h-5 mr-2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Schedule a Call
                  </a>
                </div>
                <p className="text-lg opacity-90">
                   Questions? Email edutogether22@gmail.com
                </p>
              </div>
            </section>
          </Container>

        </m.main>
      </LazyMotion>
    </Layout>
  );
};

export default RootsAndRoutes;