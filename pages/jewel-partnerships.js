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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-6 py-2 bg-[#c17854] rounded-full mb-6">
              <span className="font-bold">School Partnerships • 학교 파트너십</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold md:text-5xl xl:text-6xl">
              Project JEWEL
            </h1>
            
            <p className="mb-4 text-2xl font-semibold md:text-3xl">
              Joining East & West as Educational Liaisons
            </p>
            
            <p className="mb-8 text-xl md:text-2xl text-white/90">
              교육을 통해 만나는 세계, 협력으로 이어지는 미래
            </p>
            
            <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-white/90">
              Connecting US and Korean schools through sustainable educational partnerships. 
              Not just one-time visits—building lasting international learning experiences.
            </p>
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
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">
                    Kay Kim (김경화)
                  </h3>
                  <p className="text-xl text-[#c17854] font-semibold mb-4">
                    Founder & Director, Project JEWEL
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

              {/* Awards & Recognition */}
              <div className="grid gap-6 pt-8 border-t-2 border-gray-200 md:grid-cols-3">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#c17854] mx-auto mb-3"></div>
                  <div className="font-bold text-[#1e3a5f] mb-2">2018</div>
                  <p className="text-sm text-gray-700">
                    Presidential Citation for Education
                    <br />
                    <span className="text-[#c17854]">대한민국 포장 수상</span>
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#c17854] mx-auto mb-3"></div>
                  <div className="font-bold text-[#1e3a5f] mb-2">2025</div>
                  <p className="text-sm text-gray-700">
                    International Education Forum Speaker
                    <br />
                    <span className="text-[#c17854]">대구 국제교류포럼 발표자</span>
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#c17854] mx-auto mb-3"></div>
                  <div className="font-bold text-[#1e3a5f] mb-2">2018-2022</div>
                  <p className="text-sm text-gray-700">
                    Seoul Education Office Partnership
                    <br />
                    <span className="text-[#c17854]">서울시 교육청 위탁 운영</span>
                  </p>
                </div>
              </div>
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
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Track Record
              </h2>
              <p className="text-xl text-gray-600">
                실적과 경험
              </p>
            </div>

            <div className="grid gap-6 mb-12 text-center md:grid-cols-4">
              <div className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border-2 border-gray-100">
                <div className="text-4xl font-extrabold text-[#c17854] mb-2">
                  30+
                </div>
                <p className="font-medium text-gray-700">
                  Years of Experience
                  <br />
                  <span className="text-sm text-gray-600">교육 경력</span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border-2 border-gray-100">
                <div className="text-4xl font-extrabold text-[#c17854] mb-2">
                  100+
                </div>
                <p className="font-medium text-gray-700">
                  Schools Connected
                  <br />
                  <span className="text-sm text-gray-600">학교 연결</span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border-2 border-gray-100">
                <div className="text-4xl font-extrabold text-[#c17854] mb-2">
                  5
                </div>
                <p className="font-medium text-gray-700">
                  Terms as School Board Member
                  <br />
                  <span className="text-sm text-gray-600">교육위원 연임</span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border-2 border-gray-100">
                <div className="text-4xl font-extrabold text-[#c17854] mb-2">
                  2007
                </div>
                <p className="font-medium text-gray-700">
                  Korean Language in US Schools
                  <br />
                  <span className="text-sm text-gray-600">한국어 정규과목 개설</span>
                </p>
              </div>
            </div>

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
                Why Choose Project JEWEL
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
              Contact us to discuss how Project JEWEL can support your school's international education goals.
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