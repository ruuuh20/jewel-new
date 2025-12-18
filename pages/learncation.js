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

const Learncation = () => {
  const [activeYear, setActiveYear] = useState("2019");

  const router = useRouter();

  return (
    <Layout>
      <NextSeo title="Learncation - Cultural Exchange Program" />
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {/* Hero Section */}
          <m.section
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fade}
            className="relative w-full overflow-hidden"
          >
            <div className="relative">
              <div className="relative h-[60vh] md:h-[70vh]">
                <Image
                  src="/visiting-korea-card.jpg"
                  alt="Learncation - Cultural Exchange Program"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                
                <Container>
                  <div className="relative flex items-center h-full">
                    <div className="max-w-4xl py-16 text-white">
                      <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-[#d96e34] text-white font-semibold rounded-full text-sm md:text-base">
                          Applications Open • February 2025
                        </span>
                      </div>
                      
                      <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl xl:text-7xl">
                        Learncation
                      </h1>
                      
                      <p className="text-xl font-light leading-relaxed md:text-2xl xl:text-3xl">
                        A 10-day transformative journey connecting students across cultures
                      </p>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </m.section>

          {/* Overview Section */}
          <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-8 text-[#120902]">
                  Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Learncation is an immersive cultural and educational exchange program that brings students to Korea for an unforgettable 10-day experience. This isn't just a vacation—it's a journey of discovery, connection, and personal growth.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Through carefully curated experiences, participants engage directly with Korean students, explore historic landmarks, participate in cultural activities, and gain perspectives that extend far beyond the classroom. Our program is designed to develop globally-minded leaders who understand the value of cross-cultural connection.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    Whether you're interested in language, history, technology, or simply expanding your worldview, Learncation offers an authentic look at Korean culture while building meaningful international friendships.
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
                  What Makes Learncation Unique
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
                        Direct Student Exchange
                      </h3>
                      <p className="leading-relaxed text-gray-700">
                        Connect with Korean students your age through organized meetups, collaborative activities, and authentic cultural exchanges. Build friendships that last beyond the program.
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
                        Experience Korea beyond tourist attractions. Participate in traditional activities, visit local markets, try authentic cuisine, and engage with communities.
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

          {/* Trip Route Map */}
<Container>
  <section className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-light mb-8 text-[#120902] text-center">
        Your Journey Through Korea
      </h2>
      <p className="max-w-3xl mx-auto mb-12 text-lg text-center text-gray-700 md:text-xl">
        Explore the route we'll take together, visiting three incredible cities over 10 unforgettable days.
      </p>
      <LearncationMap />
    </div>
  </section>
  
  <hr className="hidden md:block bg-black h-[1px] border-none mt-16" />
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
                      Duration
                    </h3>
                    <p className="text-gray-700">
                      10 days of immersive cultural and educational experiences
                    </p>
                  </div>

                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Who Can Apply
                    </h3>
                    <p className="text-gray-700">
                      High school and college students passionate about cross-cultural learning
                    </p>
                  </div>

                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Application Deadline
                    </h3>
                    <p className="text-gray-700">
                      February 2025 (specific date TBA)
                    </p>
                  </div>

                  <div className="border-l-4 border-[#d96e34] pl-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Program Dates
                    </h3>
                    <p className="text-gray-700">
                      Summer 2025 (exact dates to be announced)
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
                      <span className="text-gray-700">Round-trip airfare</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Accommodation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Most meals</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">All activities and excursions</span>
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
                      <span className="text-gray-700">Cultural workshops</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Program staff and guides</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#d96e34] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Travel insurance</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-l-4 border-blue-500 rounded bg-blue-50">
                  <p className="text-gray-700">
                    <strong className="text-blue-900">Financial Aid Available:</strong> We believe financial circumstances should not prevent students from participating. Scholarships and payment plans are available. Contact us to learn more about funding opportunities.
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
                      Do I need to speak Korean to participate?
                    </h3>
                    <p className="text-gray-700">
                      No! While knowledge of Korean is helpful, it's not required. The program includes English-speaking guides and Korean students who speak English. This is actually a great opportunity to practice Korean in a supportive environment.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      Is this program safe?
                    </h3>
                    <p className="text-gray-700">
                      Yes. Student safety is our top priority. We have experienced staff, comprehensive travel insurance, 24/7 emergency support, and established partnerships with trusted organizations in Korea. We also conduct thorough orientations before departure.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      What's the group size?
                    </h3>
                    <p className="text-gray-700">
                      We keep groups small (typically 15-20 students) to ensure personalized attention and meaningful connections. This size allows for intimate cultural exchanges while still creating a fun, social atmosphere.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      How do I apply?
                    </h3>
                    <p className="text-gray-700">
                      Applications open in February 2025. The process includes a written application, a short video essay, and (for selected finalists) a brief interview. We're looking for students who are curious, open-minded, and excited about cultural exchange.
                    </p>
                  </div>

                  <div className="pb-6">
                    <h3 className="text-xl font-bold mb-3 text-[#120902]">
                      What if I have dietary restrictions or special needs?
                    </h3>
                    <p className="text-gray-700">
                      We accommodate all dietary restrictions and work with participants to ensure their needs are met. Please let us know during the application process so we can make appropriate arrangements.
                    </p>
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
                  Join us for an unforgettable journey of discovery, connection, and growth.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
                <p className="mt-8 text-sm opacity-90">
                  Questions? Email us at info@yourdomain.org
                </p>
              </div>
            </section>
          </Container>
        </m.main>
      </LazyMotion>
    </Layout>
  );
};

export default Learncation;