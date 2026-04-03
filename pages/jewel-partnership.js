{/* JEWEL PROGRAM PAGE - For Korean Exchange Directors */}
{/* /pages/jewel.js or similar */}

import Container from "@/components/container";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function JewelPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-6 py-2 bg-[#c17854] rounded-full mb-6">
              <span className="font-bold">School Partnerships • 자매학교 교류</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold md:text-5xl xl:text-6xl">
              JEWEL Partnership
            </h1>
            
            <p className="mb-4 text-2xl font-semibold md:text-2xl">
              Joining East & West as Educational Liaisons
            </p>
            
            <p className="mb-8 text-xl md:text-2xl text-white/90">
              교육을 통해 만나는 세계, &nbsp; 협력으로 이어지는 미래
            </p>
            
            {/* <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-white/90">
              Connecting US and Korean schools through sustainable educational partnerships. 
           
            </p> */}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white md:py-28" id="about">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Section Label */}
            <div className="text-sm font-bold text-[#1a5fa8] uppercase tracking-wider mb-4 animate-on-scroll">
              What is JEWEL Partnership?
            </div>

            <div className="grid gap-12 text-base md:grid-cols-2 lg:gap-16">
              {/* Left Column - Text */}
              <div className="animate-on-scroll">
              
                <p className={'mb-4 leading-relaxed text-gray-700'}>
                  JEWEL is a division of Educate Together, a nonprofit specializing in school-to-school partnerships between the United States and Korea. We design, facilitate, and manage international exchange programs from an educational standpoint — connecting schools across cultures and building partnerships that go beyond a single visit.
                </p>
                <p className={'mb-6 leading-relaxed text-gray-700'}>
                  We support public and private K–12 schools and education offices in both countries at every stage: consultation, partner matching, MOU facilitation, program implementation, and outcome reporting. 
                </p>

                <p className={'mb-4 leading-relaxed text-gray-700'}>
                  JEWEL은 Educate Together 산하 국제교류 전문단체로, 한국과 미국 학교 간의 자매결연 및 교류 프로그램을 교육적 관점에서 설계하고 운영합니다. 단순한 방문 교류를 넘어, 두 나라 교육 현장을 지속적으로 연결하는 것이 저희의 역할입니다.
                </p>
                <p className={'mb-6 leading-relaxed text-gray-700'}>
                  양국의 공립·사립 초·중·고교 및 교육청을 대상으로, 상담부터 파트너 매칭, MOU 체결, 프로그램 운영, 성과 보고까지 전 과정을 지원합니다. 
                </p>

            
                
               
              </div>

              {/* Right Column - Three Pillars */}
              <div className="space-y-6">
                {/* Pillar 1 */}
                <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#c9963b] transition-all animate-on-scroll">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9963b]/10 flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d2240] mb-2">
                      Education First • 교육 중심
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      K-Culture as an educational tool — for understanding history, society, 
                      culture, and values.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-800 font-pretend">
                     K-Culture를 역사·사회·문화·가치 이해의 교육적 도구로 활용
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#c9963b] transition-all animate-on-scroll">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9963b]/10 flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d2240] mb-2">
                      Global Citizenship • 세계시민 교육
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Cross-cultural understanding to develop students' critical thinking 
                      and global perspective.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-800 font-pretend">
                     타문화 이해를 통해 학생들의 비판적 사고와 글로벌 시각 함양
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#c9963b] transition-all animate-on-scroll">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9963b]/10 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d2240] mb-2">
                      Sustainable Partnerships • 지속가능한 파트너십
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Year-round collaboration and exchange programs that build lasting 
                      connections between schools.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-800 font-pretend">
                       {'\u201C'}한 번 다녀오는 교류{'\u201D'}가 아닌, 학교의 문화로 자리잡는 지속가능한 글로벌 교육
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Signals - Kay Kim Bio */}
      <section className="py-16 bg-white md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Leadership & Experience
              </h2>
              <p className="text-xl text-gray-600">
                전문성과 신뢰성
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f8fafc] to-white p-8 md:p-12 rounded-2xl border-2 border-gray-100">
              <div className="grid items-center gap-8 mb-8 md:grid-cols-3">
                <div className="md:col-span-1">
                  {/* Photo placeholder - add actual photo later */}
                  {/* <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
                  </div> */}
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">
                    Kay Kim (김경화)
                  </h3>
                  <p className="text-xl text-[#c17854] font-semibold mb-4">
                    Founder & Director, JEWEL Partnership
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-gray-700">
                    5-term elected School Board Member, Norwood Public Schools, New Jersey
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    30+ years of experience bridging US and Korean education systems. 
                    Former Vice President of Korean American Association of Greater New York. 
                    Current Chair of Korean Language Museum Initiative.
                  </p>
                </div>
              </div>

            
            </div>
          </div>
        </Container>
      </section>

      {/* Photo Row - Kay in action */}
      <section className="py-6 bg-white">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="relative h-64 overflow-hidden shadow-md rounded-xl">
              <Image
                src="/images/jewel-partnership/IMG_0083.jpg"
                alt="Teacher training program in New York"
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
              />
            </div>
            <div className="relative h-64 overflow-hidden shadow-md rounded-xl">
              <Image
                src="/images/jewel-partnership/IMG_4210.jpg"
                alt="Kay Kim visiting Daegu Science High School"
                layout="fill"
                objectFit="cover"
                objectPosition="center 70%"
              />
            </div>
            <div className="relative h-64 overflow-hidden shadow-md rounded-xl">
              <Image
                src="/images/jewel-partnership/IMG_7595.jpg"
                alt="School partnership meeting with US administrators"
                layout="fill"
                objectFit="cover"
                objectPosition="center 30%"
              />
            </div>
            <div className="relative h-64 overflow-hidden shadow-md rounded-xl">
              <Image
                src="/images/jewel-partnership/IMG_9020.jpeg"
                alt="JEWEL Partnership program"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f8fafc] to-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600">
                우리가 제공하는 서비스
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#c17854] transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854]"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                      School-to-School Matching
                    </h3>
                    <p className="mb-2 text-gray-700">
                      학교 간 매칭 및 MOU 체결 지원
                    </p>
                    <p className="text-sm text-gray-600">
                      Connect your school with verified US partner schools based on shared interests, 
                      academic focus, and educational goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#c17854] transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854]"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                      Year-Round Collaboration
                    </h3>
                    <p className="mb-2 text-gray-700">
                      연중 지속가능한 교류
                    </p>
                    <p className="text-sm text-gray-600">
                      Online collaboration, joint projects, and curriculum-connected programs. 
                      Continuous student engagement beyond one-time visits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#c17854] transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854]"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                      Exchange Visits
                    </h3>
                    <p className="mb-2 text-gray-700">
                      상호 방문 및 연수 기획
                    </p>
                    <p className="text-sm text-gray-600">
                      Organize teacher workshops, student exchange programs, and administrative 
                      visits with full logistical support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#c17854] transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854]"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                      Full Program Management
                    </h3>
                    <p className="mb-2 text-gray-700">
                      전 과정 운영 및 성과 관리
                    </p>
                    <p className="text-sm text-gray-600">
                      From planning to assessment—we handle administrative work so teachers 
                      can focus on education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Track Record / Past Partnerships */}
      <section className="py-16 bg-white md:py-24">
        <Container>
          <div className="max-w-6xl mx-auto">
           

            

            {/* Key Achievements */}
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-8 md:p-12 text-white">
              <h3 className="mb-6 text-2xl font-bold text-center">
                Key Achievements • 주요 실적
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#c17854] mt-2"></div>
                  <div>
                    <p className="mb-1 font-semibold">Seoul Education Office Partnership</p>
                    <p className="text-sm text-white/80">
                      4-week teacher training programs for Seoul English teachers (2018-2022)
                      <br />서울시 교육청 영어교사 국외연수 4주 과정 운영
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#c17854] mt-2"></div>
                  <div>
                    <p className="mb-1 font-semibold">US School Administrator Programs</p>
                    <p className="text-sm text-white/80">
                      Cultural training programs for US school principals funded by Korean government
                      <br />미국 학교 행정가 한국 문화연수 운영
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#c17854] mt-2"></div>
                  <div>
                    <p className="mb-1 font-semibold">Korean Language Curriculum</p>
                    <p className="text-sm text-white/80">
                      Pioneered Korean as a regular course in US public schools since 2007
                      <br />2007년부터 한국어 미국 학교 정규과목 개설 주도
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#c17854] mt-2"></div>
                  <div>
                    <p className="mb-1 font-semibold">Student Cultural Exchange</p>
                    <p className="text-sm text-white/80">
                      Korean language scholarship students' cultural immersion programs in Korea
                      <br />한국어반 장학생 한국 문화연수 프로그램 운영
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Photo Row - Programs in action */}
      <section className="py-10 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative h-64 overflow-hidden shadow-md rounded-xl">
              <Image
                src="/images/jewel-partnership/IMG_7192.JPG"
                alt="2025 Incheon-New York High School International Exchange"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
            </div>
            <div className="relative h-64 overflow-hidden shadow-md rounded-xl">
              <Image
                src="/images/jewel-partnership/IMG_7590.jpeg"
                alt="Students at cultural exchange performance"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
            </div>
            <div className="relative h-64 overflow-hidden shadow-md rounded-xl">
              <Image
                src="/images/jewel-partnership/IMG_7610.jpeg"
                alt="2025 Incheon Jinsan Science High School overseas program"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f8fafc] to-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                진행 과정
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                    Consultation & Needs Assessment
                  </h3>
                  <p className="mb-1 text-gray-700">상담 및 요구사항 분석</p>
                  <p className="text-sm text-gray-600">
                    We discuss your school's goals, student profile, and desired outcomes to design the right partnership.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                    Partner School Matching
                  </h3>
                  <p className="mb-1 text-gray-700">최적의 파트너 학교 매칭</p>
                  <p className="text-sm text-gray-600">
                    Based on shared interests (arts, STEM, etc.), we connect you with verified US schools from our network.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                    MOU & Program Design
                  </h3>
                  <p className="mb-1 text-gray-700">MOU 체결 및 프로그램 설계</p>
                  <p className="text-sm text-gray-600">
                    We facilitate the MOU signing and design customized programs (online/offline/hybrid) aligned with your curriculum.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                    Implementation & Management
                  </h3>
                  <p className="mb-1 text-gray-700">실행 및 운영 관리</p>
                  <p className="text-sm text-gray-600">
                    We handle all logistics, coordination, and administrative work. Teachers focus on teaching.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center text-xl font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                    Assessment & Reporting
                  </h3>
                  <p className="mb-1 text-gray-700">성과 평가 및 보고</p>
                  <p className="text-sm text-gray-600">
                    We provide comprehensive reports with student portfolios and outcomes for your school/education office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose JEWEL */}
      <section className="py-16 bg-white md:py-24">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Why Work with JEWEL Partnership?
              </h2>
              <p className="text-xl text-gray-600">
                왜 JEWEL인가
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c17854] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  Proven Expertise
                </h3>
                <p className="text-gray-700">
                  30+ years bridging US-Korean education. Government-recognized leader with official partnerships.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c17854] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  Sustainable Model
                </h3>
                <p className="text-gray-700">
                  Not just one-time visits. Year-round online collaboration and exchange programs with manageable costs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#c17854] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  Full Support
                </h3>
                <p className="text-gray-700">
                  We handle everything from matching to management. Minimal burden on teachers and staff.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Start a Partnership?
            </h2>
            <p className="mb-4 text-xl">
              파트너십을 시작할 준비가 되셨나요?
            </p>
            <p className="mb-8 text-lg text-white/90">
              Contact us to discuss how we can support your school's international education goals.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-[#c17854] text-white font-bold rounded-lg hover:bg-[#a85232] transition-all duration-300 shadow-xl text-lg">
                  Contact Us
                </a>
              </Link>
              <a
                href="mailto:jewelspeaks@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1e3a5f] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg"
              >
                jewelspeaks@gmail.com
              </a>
            </div>

            <div className="mt-8 text-white/80">
              <p>Kay Kim (김경화) • Director</p>
              <p>Phone: +1 (201) 232-1313</p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}