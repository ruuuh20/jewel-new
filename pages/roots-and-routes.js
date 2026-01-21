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
          {/* Simple Header Section */}
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
                  <span className="inline-block px-4 py-2 bg-[#d96e34] text-white font-semibold rounded-full text-sm md:text-base">
                    Applications Open • April 2025
                  </span>
                </div>
                
                <h1 className="mb-6 text-5xl font-bold leading-tight text-[#120902] md:text-6xl xl:text-7xl">
                  Roots & Routes
                </h1>
                
                <p className="text-xl font-light leading-relaxed text-gray-700 md:text-2xl xl:text-3xl">
                  A 9-day educational and cultural journey for Korean-American students
                </p>

                 <p className="text-lg font-light leading-relaxed md:text-xl">
                        April 2–10, 2026 | Grades 7–12
                      </p>
              </div>
            </Container>
          </m.section>

          {/* Overview Section */}
          <Container>
            <section className="py-16 font-normal md:py-24 font-clash">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-8 text-[#120902]">
                  Overview
                </h2>
                 <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Roots and Routes is a 9-day program designed for Korean-American middle and high school students during Spring Break. Experience Korea's vibrant culture, world-class education system, and cutting-edge innovation—all while building global leadership skills and connecting with peers.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    The program combines cultural immersion in Seoul with an exclusive 3-day exchange at Minjok Leadership Academy (MinSaGo), one of Korea's most prestigious schools. From exploring historic palaces to participating in workshops on global citizenship, students gain a comprehensive understanding of both traditional and modern Korea.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    Through guided activities, hands-on workshops, and interactions with Korean students, participants return home with expanded perspectives, enhanced cultural awareness, and inspiration for their academic and career futures.
                  </p>
                </div>
              </div>
            </section>

            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container>

          {/* Program Highlights */}
          <Container>
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
          </Container>

     


{/* Sample Itinerary */}
          <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-12 text-[#120902] text-center">
                  Sample Itinerary
                </h2>
                
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#f9f7f4] flex items-center justify-center font-bold text-[#d96e34] text-lg group-hover:bg-[#d96e34] group-hover:text-white transition-colors duration-300">
                        Day 1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Arrival & Orientation</h3>
                      <p className="text-gray-700">
                        Arrive at Incheon International Airport, transfer to Seoul accommodations, and participate in orientation and ice-breaking activities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#f9f7f4] flex items-center justify-center font-bold text-[#d96e34] text-lg group-hover:bg-[#d96e34] group-hover:text-white transition-colors duration-300">
                        Day 2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Seoul Historical & Cultural Immersion</h3>
                      <p className="text-gray-700">
                        Visit Gyeongbokgung Palace, National Folk Museum, and Bukchon Hanok Village. Evening reflection and cultural storytelling session.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#f9f7f4] flex items-center justify-center font-bold text-[#d96e34] text-lg group-hover:bg-[#d96e34] group-hover:text-white transition-colors duration-300">
                        Day 3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Modern Korea & Future Skills</h3>
                      <p className="text-gray-700">
                        Explore Korean tech hubs, visit university campuses, and participate in global leadership workshops. Group discussion on career aspirations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#f9f7f4] flex items-center justify-center font-bold text-[#d96e34] text-lg group-hover:bg-[#d96e34] group-hover:text-white transition-colors duration-300">
                        Day 4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Korean Language & Cultural Workshop</h3>
                      <p className="text-gray-700">
                        Hands-on Hangul calligraphy, traditional crafts, and Korean cooking experiences. Reflection and journaling session.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#f9f7f4] flex items-center justify-center font-bold text-[#d96e34] text-lg group-hover:bg-[#d96e34] group-hover:text-white transition-colors duration-300">
                        Day 5
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Social Studies & Korean Society</h3>
                      <p className="text-gray-700">
                        Visit the National Museum of Korea, historical walking tour of Jongno district, and group discussion on Korean history and modern society.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#f9f7f4] flex items-center justify-center font-bold text-[#d96e34] text-lg group-hover:bg-[#d96e34] group-hover:text-white transition-colors duration-300">
                        Day 6
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Nature & Community</h3>
                      <p className="text-gray-700">
                        DMZ tour or alternative historical site visit. Community service and interaction with local students. Reflection on cultural immersion.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#d96e34] text-white flex items-center justify-center font-bold text-base text-center leading-tight p-2">
                        Days<br/>7-9
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[#120902]">Minjok Leadership Academy Exchange</h3>
                      <p className="mb-3 text-gray-700">
                        Three-day immersion at one of Korea's most prestigious schools:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Class observations and academic activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Student exchange and peer interactions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Campus tours and facility exploration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Leadership and global citizenship workshops</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container>

          {/* Why This Program */}
          <Container>
            <section className="py-16 md:py-24 bg-[#f9f7f4] -mx-4 md:-mx-8 px-4 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-8 text-[#120902]">
                  Why Roots and Routes?
                </h2>
                <div className="grid gap-8 text-left md:grid-cols-3">
                  <div>
                    <div className="mb-4 text-4xl">🎓</div>
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">Academic Excellence</h3>
                    <p className="text-gray-700">
                      Experience Korea's world-renowned education system firsthand through the exclusive MinSaGo exchange.
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
          </Container>

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
                      April 2–10, 2026 (8 nights / 9 days)
                    </p>
                  </div>

                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Who Can Apply
                    </h3>
                    <p className="text-gray-700">
                      Korean-American students in grades 7–12
                    </p>
                  </div>

                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Group Size
                    </h3>
                    <p className="text-gray-700">
                      Minimum 15, maximum 25 students
                    </p>
                  </div>

                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Program Cost
                    </h3>
                    <p className="text-gray-700">
                      $4,500–$5,500 per student (airfare options available)
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
                      <span className="text-gray-700">MinSaGo exchange program</span>
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

                <div className="p-6 mb-8 border-l-4 border-blue-500 rounded bg-blue-50">
                  <p className="text-gray-700">
                    <strong className="text-blue-900">Payment Plan:</strong> Non-refundable deposit of $1,000 at registration. Balance due by March 10, 2026. Payment plans available upon request.
                  </p>
                </div>

                <div className="p-6 border-l-4 rounded bg-amber-50 border-amber-500">
                  <p className="text-gray-700">
                    <strong className="text-amber-900">Limited Spots:</strong> This program is limited to 25 students. Early registration is strongly encouraged to secure your spot.
                  </p>
                </div>
              </div>
            </section>

            <hr className="hidden md:block bg-black h-[1px] border-none" />
          </Container>

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
                      Minjok Leadership Academy (MinSaGo) is one of Korea's most prestigious high schools, known for academic excellence and innovative educational approaches. The 3-day exchange is an exclusive opportunity for our students to experience this world-class institution firsthand.
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

                  <div className="pb-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      What if we need to cancel?
                    </h3>
                    <p className="text-gray-700">
                      The $1,000 deposit is non-refundable. For cancellations after the balance is paid, refund policies depend on timing and circumstances. We strongly recommend purchasing travel insurance for additional protection.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Container>

          {/* Past Trips Section with Tabs */}
          <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-12 text-[#120902] text-center">
                  Past Trips
                </h2>

                {/* Year Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                  <button
                    onClick={() => setActiveYear("2019")}
                    className={`px-8 py-3 font-semibold text-lg transition-all duration-300 ${
                      activeYear === "2019"
                        ? "bg-[#d96e34] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    2019 Trip
                  </button>
                  <button
                    onClick={() => setActiveYear("2018")}
                    className={`px-8 py-3 font-semibold text-lg transition-all duration-300 ${
                      activeYear === "2018"
                        ? "bg-[#d96e34] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    2018 Trip
                  </button>
                </div>

                {/* 2019 Content */}
                {activeYear === "2019" && (
                  <div className="animate-fadeIn">
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#120902]">
                        Summer 2019 - Seoul & Busan
                      </h3>
                      <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        Our 2019 cohort explored both Seoul and Busan, connecting with students at three partner schools. Highlights included visiting Gyeongbokgung Palace, participating in a traditional tea ceremony, exploring the DMZ, and experiencing the vibrant night markets of Busan.
                      </p>
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
                    </div>

                    <div className="bg-[#f9f7f4] p-8 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-[#120902]">
                        Trip Highlights
                      </h4>
                      <ul className="grid gap-3 text-gray-700 md:grid-cols-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Visited 5 UNESCO World Heritage Sites</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Connected with 60+ Korean students</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Traditional Korean cooking class</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>K-pop dance workshop</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>DMZ tour and historical presentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Beach activities in Busan</span>
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
                        The 2018 program focused on the historical depth of Korea, with extended time in Gyeongju, the ancient capital of the Silla Kingdom. Students engaged in archaeological workshops, language exchange sessions, and collaborative art projects with Korean peers.
                      </p>
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
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Explored ancient Silla Kingdom sites</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Archaeological workshop at museum</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Traditional hanbok dress experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Language exchange sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Collaborative art project with Korean students</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#d96e34] font-bold">•</span>
                          <span>Temple stay experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <hr className="hidden md:block bg-black h-[1px] border-none" />
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
                      This program completely changed my perspective on what it means to be a global citizen. The connections I made with Korean students were genuine and eye-opening. I came back with friends for life and a deeper understanding of another culture.
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
                      I wasn't sure what to expect, but Learncation exceeded everything I imagined. From exploring ancient temples to chatting with students my age about K-pop and school life, every day was memorable. This trip inspired me to continue studying Korean.
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
                      The hands-on cultural experiences were incredible. We didn't just visit Korea—we lived it. From making kimchi to learning traditional dances, everything felt authentic. The program organizers really care about creating meaningful experiences.
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
              <div className="max-w-4xl mx-auto text-center bg-[#d96e34] text-white rounded-xl p-12 md:p-16">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl">
                  Ready to Apply?
                </h2>
                <p className="mb-10 text-xl font-light md:text-2xl">
                  Secure your spot for Spring Break 2026. Limited to 25 students.
                </p>
                <div className="flex flex-col justify-center gap-4 mb-8 sm:flex-row">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-4 font-bold bg-white text-[#d96e34] hover:bg-gray-100 transition-all duration-300 text-lg"
                  >
                    Apply Now
                  </a>
                  <Link href="/contact">
                    <a className="inline-flex items-center justify-center px-10 py-4 font-semibold border-2 border-white text-white hover:bg-white hover:text-[#d96e34] transition-all duration-300 text-lg">
                      Contact Us
                    </a>
                  </Link>
                </div>
                <p className="text-sm opacity-90">
                  Information Session: January 5, 2026 | Questions? Email info@yourdomain.org
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