import Container from "@/components/container";
import Layout from "@/components/layout";
import Link from "next/link";

export default function GanadaraPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-6 py-2 bg-[#c17854] rounded-full mb-6">
              <span className="font-bold">Learn Korean • 한국어 학습</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold md:text-5xl xl:text-6xl">
              Ganadara Learn Korean
            </h1>
            
            <p className="mb-4 text-2xl font-semibold md:text-3xl">
              가나다라 한글문화교육
            </p>
            
            <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed md:text-xl text-white/90">
              Korean language programs connecting students with their heritage and global culture.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Growing Interest in Korean Language
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  With the global rise of Korean culture, language, and innovation, interest in learning 
                  Korean has never been higher. From K-pop and Korean dramas to Korea's cutting-edge 
                  technology and education system, students around the world are discovering the value 
                  of Korean language skills.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  한국 문화, 언어, 혁신의 세계적 부상과 함께, 한국어 학습에 대한 관심이 그 어느 때보다 높습니다. 
                  K-pop과 한국 드라마부터 한국의 첨단 기술과 교육 시스템까지, 전 세계 학생들이 한국어 능력의 
                  가치를 발견하고 있습니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  For Korean-American students, learning Korean is both a connection to heritage and 
                  a gateway to global opportunities.
                </p>
              </div>
            </div>

            {/* Our Experience */}
            <div className="bg-gradient-to-br from-[#f8fafc] to-white p-8 md:p-10 rounded-2xl border-2 border-gray-100 mb-16">
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                Our Experience
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                Educate Together has offered Korean language classes for students over the past several years, 
                creating welcoming learning environments where students of all levels can develop their language skills.
              </p>
              <p className="leading-relaxed text-gray-700">
                함께하는교육은 지난 몇 년간 학생들을 위한 한국어 수업을 제공해왔으며, 모든 수준의 학생들이 
                언어 능력을 개발할 수 있는 환영받는 학습 환경을 조성해왔습니다.
              </p>
            </div>

            {/* Future Programs */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Developing New Programs
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  We are currently developing expanded Korean language programs to meet growing demand 
                  and serve students at different levels and with different goals.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  증가하는 수요를 충족하고 다양한 수준과 목표를 가진 학생들을 지원하기 위해 확장된 한국어 
                  프로그램을 개발하고 있습니다.
                </p>

                {/* Program Focus Areas */}
                <div className="grid gap-6 mb-8 md:grid-cols-2">
                  <div className="p-6 bg-white border border-gray-200 rounded-xl">
                    <h4 className="font-bold text-[#1e3a5f] mb-2">
                      For Beginners
                    </h4>
                    <p className="text-sm text-gray-600">
                      Starting with Hangul basics and foundational conversational skills
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white border border-gray-200 rounded-xl">
                    <h4 className="font-bold text-[#1e3a5f] mb-2">
                      For Heritage Speakers
                    </h4>
                    <p className="text-sm text-gray-600">
                      Building on home language with reading, writing, and formal Korean
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white border border-gray-200 rounded-xl">
                    <h4 className="font-bold text-[#1e3a5f] mb-2">
                      Cultural Connection
                    </h4>
                    <p className="text-sm text-gray-600">
                      Language learning integrated with Korean history, culture, and values
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white border border-gray-200 rounded-xl">
                    <h4 className="font-bold text-[#1e3a5f] mb-2">
                      Flexible Formats
                    </h4>
                    <p className="text-sm text-gray-600">
                      Programs designed to fit different schedules and learning preferences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Gallery Placeholder */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                Past Classes
              </h3>
              <div className="p-12 text-center bg-gray-100 border-2 border-gray-300 border-dashed rounded-2xl">
                <p className="text-gray-500">
                  Photo gallery from past Korean language classes
                  <br />
                  <span className="text-sm">(Photos to be added)</span>
                </p>
              </div>
            </div>

            {/* Stay Updated */}
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-8 md:p-10 text-white text-center">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Interested in Our Programs?
              </h3>
              <p className="mb-2 text-xl">
                프로그램에 관심이 있으신가요?
              </p>
              <p className="mb-8 text-lg text-white/80">
                We're developing new Korean language programs. Contact us to learn more 
                or be notified when programs launch.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-8 py-4 bg-[#c17854] text-white font-bold rounded-lg hover:bg-[#a85232] transition-all duration-300 shadow-lg hover:shadow-xl">
                    Contact Us
                  </a>
                </Link>
                <Link href="https://mailchi.mp/a99f1dbd0b8a/educate-together">
                  <a className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 border rounded-lg bg-white/10 hover:bg-white/20 border-white/25"
                    target="_blank"
                    rel="noopener noreferrer">
                    Subscribe for Updates
                  </a>
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Why Learn Korean - Optional Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f8fafc] to-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
              Why Learn Korean?
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c17854] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  Heritage Connection
                </h3>
                <p className="text-gray-700">
                  Connect with family history, culture, and identity through language
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c17854] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  Global Opportunities
                </h3>
                <p className="text-gray-700">
                  Korea's growing influence in technology, business, and culture creates opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c17854] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  Cultural Understanding
                </h3>
                <p className="text-gray-700">
                  Deepen appreciation for Korean art, literature, history, and contemporary culture
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  );
}