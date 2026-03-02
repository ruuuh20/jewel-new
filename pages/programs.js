{/* PROGRAMS PAGE - Simple Overview */}
{/* /pages/programs.js */}

import Container from "@/components/container";
import Layout from "@/components/layout";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl xl:text-6xl">
              Our Programs
            </h1>
            <p className="mb-4 text-2xl md:text-3xl">
              프로그램
            </p>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
              Connecting students with Korean heritage, culture, and education through 
              meaningful international experiences.
            </p>
          </div>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            
            {/* Program Cards */}
            <div className="grid gap-8 md:grid-cols-2">
              
              {/* Program 1: JEWEL */}
              <Link href="/jewel-partnerships">
                <a className="group block bg-gradient-to-br from-[#f8fafc] to-white p-10 rounded-2xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-[#c17854] text-white rounded-full mb-4">
                      <span className="text-sm font-semibold">School Partnerships</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#c17854] transition-colors">
                    Project JEWEL
                  </h2>
                  
                  <p className="mb-4 text-xl font-medium text-gray-600">
                    학교 파트너십
                  </p>
                  
                  <p className="mb-6 leading-relaxed text-gray-700">
                    Joining East & West as Educational Liaisons. Connecting US and Korean schools 
                    through sustainable international partnerships, exchange programs, and collaborative learning.
                  </p>
                  
                  <div className="inline-flex items-center text-[#c17854] font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5 ml-1 transition-all group-hover:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </Link>

              {/* Program 2: Roots & Routes */}
              <Link href="/roots-and-routes">
                <a className="group block bg-gradient-to-br from-[#f8fafc] to-white p-10 rounded-2xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-[#c17854] text-white rounded-full mb-4">
                      <span className="text-sm font-semibold">Visit to Korea</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#c17854] transition-colors">
                    Roots & Routes
                  </h2>
                  
                  <p className="mb-4 text-xl font-medium text-gray-600">
                    한국 방문 프로그램
                  </p>
                  
                  <p className="mb-6 leading-relaxed text-gray-700">
                    Immersive 10-day cultural and educational journey for Korean-American students. 
                    Experience Korea's heritage, education system, and modern culture through KMLA 
                    exchange and guided exploration.
                  </p>
                  
                  <div className="inline-flex items-center text-[#c17854] font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5 ml-1 transition-all group-hover:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </Link>

              {/* Program 3: Ganadara */}
              <Link href="/ganadara">
                <a className="group block bg-gradient-to-br from-[#f8fafc] to-white p-10 rounded-2xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-[#c17854] text-white rounded-full mb-4">
                      <span className="text-sm font-semibold">Learn Korean</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#c17854] transition-colors">
                    Ganadara
                  </h2>
                  
                  <p className="mb-4 text-xl font-medium text-gray-600">
                    한국어 학습
                  </p>
                  
                  <p className="mb-6 leading-relaxed text-gray-700">
                    Korean language programs for students of all levels. From beginners learning 
                    Hangul to advanced speakers exploring literature and culture—build language 
                    skills for heritage connection and global communication.
                  </p>
                  
                  <div className="inline-flex items-center text-[#c17854] font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5 ml-1 transition-all group-hover:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </Link>

              {/* Program 4: Eunoia */}
              <Link href="/eunoia">
                <a className="group block bg-gradient-to-br from-[#f8fafc] to-white p-10 rounded-2xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-[#c17854] text-white rounded-full mb-4">
                      <span className="text-sm font-semibold">Future Education</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#c17854] transition-colors">
                    Eunoia
                  </h2>
                  
                  <p className="mb-4 text-xl font-medium text-gray-600">
                    미래 교육
                  </p>
                  
                  <p className="mb-6 leading-relaxed text-gray-700">
                    Innovative educational programs preparing students for tomorrow's challenges. 
                    Develop critical thinking, global citizenship, and leadership skills through 
                    forward-thinking curricula and experiential learning.
                  </p>
                  
                  <div className="inline-flex items-center text-[#c17854] font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5 ml-1 transition-all group-hover:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </Link>

              {/* Program 5: Korean American Immigration History */}
              <Link href="/immigration-history">
                <a className="group block bg-gradient-to-br from-[#f8fafc] to-white p-10 rounded-2xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-[#c17854] text-white rounded-full mb-4">
                      <span className="text-sm font-semibold">Civic Education</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#c17854] transition-colors">
                    Korean American Immigration History
                  </h2>
                  
                  <p className="mb-4 text-xl font-medium text-gray-600">
                    정체성 시민교육
                  </p>
                  
                  <p className="mb-6 leading-relaxed text-gray-700">
                    Explore the journey of Korean Americans through immigration history, identity formation, 
                    and civic engagement. Educational programs connecting students with their heritage and 
                    understanding their role in American society.
                  </p>
                  
                  <div className="inline-flex items-center text-[#c17854] font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5 ml-1 transition-all group-hover:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </Link>

            </div>
          </div>
        </Container>
      </section>

      {/* Optional: Add a CTA section */}
      <section className="py-16 bg-gradient-to-br from-[#f8fafc] to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Questions About Our Programs?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              프로그램에 대해 궁금한 점이 있으신가요?
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-[#c17854] text-white font-bold rounded-lg hover:bg-[#a85232] transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </a>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}