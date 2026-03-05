import Layout from "@/components/layout";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Link from "next/link";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";

export default function About(props) {
  const { postdata, preview } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <Layout>
      <NextSeo title="About" description="Educate Together connects US and Korean schools" />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
          className="mb-12 md:mb-16 xl:mb-24"
        >
          {/* Hero Section - Professional Style */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-[#0d2240] via-[#163258] to-[#1a5fa8]">
            <Container>
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="inline-block px-5 py-2 mb-6 border rounded-full bg-white/10 border-white/20">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#e8b45a]">
                    About Us • 소개
                  </span>
                </div>
                
                <h1 className="mb-6 text-5xl font-extrabold leading-none md:text-6xl xl:text-7xl">
                  Educate Together
                </h1>
                
                <p className="mb-4 text-xl font-light md:text-2xl text-white/75">
                  함께하는교육
                </p>

                {/* Simplified intro */}
                <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-white/80">
                  A New York/New Jersey-based nonprofit connecting US and Korean schools through 
                  educational and cultural exchange programs.
                </p>
              </div>
            </Container>
          </section>

          {/* Mission Statement - Single, Clean */}
          <Container>
            <section className="py-20 md:py-28">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6 text-center">
                  <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1a5fa8] mb-3">
                    Our Mission • 우리의 미션
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0d2240] mb-8">
                    What We Do
                  </h2>
                </div>
                
                <div className="bg-gradient-to-br from-[#0d2240] to-[#1a5fa8] p-10 md:p-12 rounded-2xl text-center">
                  <p className="text-xl font-light leading-relaxed text-white md:text-2xl">
                    We connect US and Korean schools through sustainable educational partnerships, 
                    fostering cross-cultural understanding and global citizenship.
                  </p>
                  <p className="mt-4 text-lg font-light md:text-xl text-white/70">
                    미국과 한국의 학교를 지속가능한 교육 파트너십으로 연결하여 상호 문화 이해와 
                    세계 시민의식을 함양합니다.
                  </p>
                </div>
              </div>
            </section>
          </Container>

          {/* What We Offer - Clean Grid */}
          <section className="py-20 md:py-28 bg-[#f7f8fa]">
            <Container>
              <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                  <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1a5fa8] mb-3">
                    What We Offer • 제공 서비스
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0d2240]">
                    Our Programs
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#1a5fa8] transition-all">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#1a5fa8]/10 mx-auto mb-4 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#1a5fa8]"></div>
                      </div>
                      <h3 className="text-lg font-bold text-[#0d2240] mb-2">
                        School Partnerships
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Connecting US and Korean schools for long-term collaboration
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#1a5fa8] transition-all">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#1a5fa8]/10 mx-auto mb-4 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#1a5fa8]"></div>
                      </div>
                      <h3 className="text-lg font-bold text-[#0d2240] mb-2">
                        Student Trips
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Immersive cultural and educational experiences in Korea
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#1a5fa8] transition-all">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#1a5fa8]/10 mx-auto mb-4 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#1a5fa8]"></div>
                      </div>
                      <h3 className="text-lg font-bold text-[#0d2240] mb-2">
                        Korean Language
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Language programs for heritage learners and beginners
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#1a5fa8] transition-all">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#1a5fa8]/10 mx-auto mb-4 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#1a5fa8]"></div>
                      </div>
                      <h3 className="text-lg font-bold text-[#0d2240] mb-2">
                        Cultural Programs
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Workshops, events, and resources for Korean culture
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Goals - Refocused on Korean, Simplified */}
          <Container>
            <section className="py-20 md:py-28">
              <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center">
                  <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1a5fa8] mb-3">
                    Our Goals • 우리의 목표
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0d2240] mb-4">
                    What We Aim to Achieve
                  </h2>
                  <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    Three core objectives guide our work
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Goal 1 */}
                  <div className="bg-white rounded-xl border-2 border-gray-100 hover:border-[#1a5fa8] transition-all p-8 flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#1a5fa8] text-white flex items-center justify-center font-bold text-xl">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0d2240] mb-3">
                        Connect Students with Korean Heritage
                      </h3>
                      <p className="mb-2 leading-relaxed text-gray-700">
                        Provide opportunities for Korean-American students to explore their cultural 
                        roots through language, history, and traditions.
                      </p>
                      <p className="text-sm leading-relaxed text-gray-600">
                        한국계 미국 학생들이 언어, 역사, 전통을 통해 문화적 뿌리를 탐색할 기회를 제공합니다.
                      </p>
                    </div>
                  </div>

                  {/* Goal 2 */}
                  <div className="bg-white rounded-xl border-2 border-gray-100 hover:border-[#1a5fa8] transition-all p-8 flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#1a5fa8] text-white flex items-center justify-center font-bold text-xl">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0d2240] mb-3">
                        Build US-Korea Educational Bridges
                      </h3>
                      <p className="mb-2 leading-relaxed text-gray-700">
                        Foster lasting partnerships between American and Korean schools, creating 
                        opportunities for mutual learning and cultural exchange.
                      </p>
                      <p className="text-sm leading-relaxed text-gray-600">
                        미국과 한국 학교 간 지속적인 파트너십을 구축하여 상호 학습과 문화 교류의 기회를 만듭니다.
                      </p>
                    </div>
                  </div>

                  {/* Goal 3 */}
                  <div className="bg-white rounded-xl border-2 border-gray-100 hover:border-[#1a5fa8] transition-all p-8 flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#1a5fa8] text-white flex items-center justify-center font-bold text-xl">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0d2240] mb-3">
                        Develop Global Citizens
                      </h3>
                      <p className="mb-2 leading-relaxed text-gray-700">
                        Empower students to become culturally aware, globally minded individuals who 
                        can navigate and contribute to an interconnected world.
                      </p>
                      <p className="text-sm leading-relaxed text-gray-600">
                        학생들이 문화적으로 인식하고 글로벌 마인드를 가진 개인으로 성장하여 상호 연결된 
                        세계에 기여할 수 있도록 역량을 강화합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Container>

          {/* Related Pages Navigation - Cleaner Style */}
          <Container>
            <section className="py-20 md:py-28">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                  <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1a5fa8] mb-3">
                    Learn More • 더 알아보기
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0d2240]">
                    About Educate Together
                  </h3>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Link href="/founder">
                    <a className="group">
                      <div className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-[#1a5fa8] transition-all h-full">
                        <div className="w-10 h-10 rounded-full bg-[#1a5fa8]/10 mb-4 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-[#1a5fa8]"></div>
                        </div>
                        <h4 className="text-lg font-bold text-[#0d2240] mb-2 group-hover:text-[#1a5fa8] transition-colors">
                          Founder
                        </h4>
                        <p className="text-sm text-gray-600">
                          Meet Kay Kim
                        </p>
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="/leadership">
                    <a className="group">
                      <div className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-[#1a5fa8] transition-all h-full">
                        <div className="w-10 h-10 rounded-full bg-[#1a5fa8]/10 mb-4 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-[#1a5fa8]"></div>
                        </div>
                        <h4 className="text-lg font-bold text-[#0d2240] mb-2 group-hover:text-[#1a5fa8] transition-colors">
                          Leadership
                        </h4>
                        <p className="text-sm text-gray-600">
                          Our team
                        </p>
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="/history">
                    <a className="group">
                      <div className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-[#1a5fa8] transition-all h-full">
                        <div className="w-10 h-10 rounded-full bg-[#1a5fa8]/10 mb-4 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-[#1a5fa8]"></div>
                        </div>
                        <h4 className="text-lg font-bold text-[#0d2240] mb-2 group-hover:text-[#1a5fa8] transition-colors">
                          History
                        </h4>
                        <p className="text-sm text-gray-600">
                          Our journey
                        </p>
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="/programs">
                    <a className="group">
                      <div className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-[#1a5fa8] transition-all h-full">
                        <div className="w-10 h-10 rounded-full bg-[#1a5fa8]/10 mb-4 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-[#1a5fa8]"></div>
                        </div>
                        <h4 className="text-lg font-bold text-[#0d2240] mb-2 group-hover:text-[#1a5fa8] transition-colors">
                          Programs
                        </h4>
                        <p className="text-sm text-gray-600">
                          What we offer
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "about" && title.en == "Our Mission"] | order(_createdAt desc) {
  ...,
  title,
  introText,
  "imageUrl": heroImage.asset->url,
  "foundersImageUrl": foundersImage.asset->url
}
`;

export async function getStaticProps({ params, preview = false }) {
  const program = await getClient(preview).fetch(query);

  return {
    props: {
      postdata: program,
      preview,
    },
    revalidate: 10,
  };
}