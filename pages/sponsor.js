import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Layout from "@/components/layout";
import Container from "@/components/container";
import RelatedPages from "@/components/RelatedPages";
import Link from "next/link";

const Sponsor = () => {
  const router = useRouter();

  return (
    <>
      <Layout>
        <NextSeo 
          title="Become a Sponsor" 
          description="Support Educate Together's mission to connect US and Korean educational communities through sponsorship."
        />
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mb-12 md:mb-16 xl:mb-24"
            variants={fade}
          >
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
              <Container>
                <div className="max-w-4xl mx-auto text-center text-white">
                  <div className="inline-block px-6 py-2 bg-[#c17854] rounded-full mb-6">
                    <span className="font-bold">Support Our Mission • 후원하기</span>
                  </div>
                  
                  <h1 className="mb-4 text-4xl font-bold md:text-5xl xl:text-6xl">
                    Become a Sponsor
                  </h1>
                  
                  <p className="mb-6 text-2xl font-semibold md:text-3xl">
                    스폰서가 되어주세요
                  </p>

                  <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-white/90">
                    Support meaningful educational and cultural exchange programs connecting 
                    US and Korean communities
                  </p>
                </div>
              </Container>
            </section>

            <Container>
              {/* Why Sponsor Section */}
              <section className="py-16 md:py-20">
                <div className="max-w-5xl mx-auto">
                  <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                      Why Sponsor Educate Together?
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-gray-700">
                      Your sponsorship creates lasting impact while elevating your brand
                    </p>
                  </div>

                  {/* Impact Stats */}
                  <div className="grid gap-8 mb-16 md:grid-cols-3">
                    <div className="text-center p-6 bg-gradient-to-br from-[#f8fafc] to-white rounded-xl border border-gray-200">
                      <div className="text-5xl font-bold text-[#c17854] mb-2">Direct</div>
                      <p className="font-medium text-gray-700">Student Impact</p>
                      <p className="mt-1 text-sm text-gray-600">Supporting real programs</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-[#f8fafc] to-white rounded-xl border border-gray-200">
                      <div className="text-5xl font-bold text-[#c17854] mb-2">Multi</div>
                      <p className="font-medium text-gray-700">Platform Visibility</p>
                      <p className="mt-1 text-sm text-gray-600">Website, social, events</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-[#f8fafc] to-white rounded-xl border border-gray-200">
                      <div className="text-5xl font-bold text-[#c17854] mb-2">Lasting</div>
                      <p className="font-medium text-gray-700">Community Impact</p>
                      <p className="mt-1 text-sm text-gray-600">Building bridges long-term</p>
                    </div>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-[#1e3a5f] mb-2">Community Impact</h3>
                      <p className="text-sm text-gray-600">Support students and educators in both countries</p>
                    </div>

                    <div className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-[#1e3a5f] mb-2">Brand Visibility</h3>
                      <p className="text-sm text-gray-600">Recognition across our programs and platforms</p>
                    </div>

                    <div className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-[#1e3a5f] mb-2">CSR Alignment</h3>
                      <p className="text-sm text-gray-600">Support education and cultural diversity</p>
                    </div>

                    <div className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-[#1e3a5f] mb-2">Networking Access</h3>
                      <p className="text-sm text-gray-600">Connect with educators and leaders in both countries</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sponsorship Levels */}
              <section className="px-4 py-16 -mx-4 md:py-20 bg-gray-50 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                      Sponsorship Levels
                    </h2>
                    <p className="text-xl text-gray-700">
                      Choose the level that aligns with your commitment
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Platinum Sponsor */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-[#c17854] shadow-xl relative">
                      <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
                        <span className="bg-[#c17854] text-white px-4 py-1 rounded-full text-sm font-bold">
                          FEATURED
                        </span>
                      </div>
                      <div className="mb-6 text-center">
                        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Platinum</h3>
                        <div className="text-4xl font-extrabold text-[#c17854] mb-2">$10,000+</div>
                        <p className="text-sm text-gray-600">per year</p>
                      </div>
                      <ul className="mb-6 space-y-3">
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Premier logo placement on website</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Featured in all program materials</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Social media recognition</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Exclusive impact reports</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Program naming opportunity</span>
                        </li>
                      </ul>
                    </div>

                    {/* Gold Sponsor */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#c17854] transition-all shadow-lg">
                      <div className="mb-6 text-center">
                        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Gold</h3>
                        <div className="text-4xl font-extrabold text-[#c17854] mb-2">$5,000+</div>
                        <p className="text-sm text-gray-600">per year</p>
                      </div>
                      <ul className="mb-6 space-y-3">
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Prominent logo on website</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Social media recognition</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Recognition in newsletters</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Annual impact summary</span>
                        </li>
                      </ul>
                    </div>

                    {/* Silver Sponsor */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#c17854] transition-all shadow-lg">
                      <div className="mb-6 text-center">
                        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Silver</h3>
                        <div className="text-4xl font-extrabold text-[#c17854] mb-2">$2,500+</div>
                        <p className="text-sm text-gray-600">per year</p>
                      </div>
                      <ul className="mb-6 space-y-3">
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Logo on website</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Social media recognition</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Newsletter recognition</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Annual thank you letter</span>
                        </li>
                      </ul>
                    </div>

                    {/* Bronze Sponsor */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#c17854] transition-all shadow-lg">
                      <div className="mb-6 text-center">
                        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Bronze</h3>
                        <div className="text-4xl font-extrabold text-[#c17854] mb-2">$500+</div>
                        <p className="text-sm text-gray-600">per year</p>
                      </div>
                      <ul className="mb-6 space-y-3">
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Logo on website</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Social media recognition</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-[#c17854] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Recognition in annual report</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 text-center">
                    <p className="mb-4 text-gray-600">
                      All sponsorship levels include recognition and support our educational programs. Custom sponsorship packages available.
                    </p>
                  </div>
                </div>
              </section>

              {/* Program Sponsorship Options */}
              <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                      Program-Specific Sponsorships
                    </h2>
                    <p className="text-xl text-gray-700">
                      Support a specific program that aligns with your mission
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-3">
                    {/* JEWEL Sponsorship */}
                    <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#c17854] transition-all">
                      <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                        JEWEL Partnership
                      </h3>
                      <p className="mb-6 text-gray-700">
                        Support school-to-school partnerships connecting US and Korean educational institutions.
                      </p>
                      <div className="text-3xl font-bold text-[#c17854] mb-4">Contact Us</div>
                      <p className="text-sm text-gray-600">Custom sponsorship packages available</p>
                    </div>

                    {/* Roots & Routes Sponsorship */}
                    <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#c17854] transition-all">
                      <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                        Roots & Routes
                      </h3>
                      <p className="mb-6 text-gray-700">
                        Sponsor student trips to Korea, providing life-changing cultural experiences.
                      </p>
                      <div className="text-3xl font-bold text-[#c17854] mb-4">$3,900+</div>
                      <p className="text-sm text-gray-600">Full trip scholarship for one student</p>
                    </div>

                    {/* Ganadara Sponsorship */}
                    <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#c17854] transition-all">
                      <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                        Ganadara
                      </h3>
                      <p className="mb-6 text-gray-700">
                        Support Korean language education programs for heritage learners and beginners.
                      </p>
                      <div className="text-3xl font-bold text-[#c17854] mb-4">Contact Us</div>
                      <p className="text-sm text-gray-600">Program and scholarship opportunities</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-10 md:p-12 text-white text-center shadow-xl">
                    <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                      Ready to Make an Impact?
                    </h2>
                    <p className="mb-2 text-xl font-semibold">
                      함께 영향을 만들어가요
                    </p>
                    <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-white/80">
                      Contact us to discuss sponsorship opportunities and how we can work together 
                      to support educational excellence and cultural exchange.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                      <Link href="/contact">
                        <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg">
                          Contact Us About Sponsorship
                        </a>
                      </Link>
                      <a
                        href="mailto:edutogether22@gmail.com"
                        className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 border rounded-lg bg-white/10 hover:bg-white/20 border-white/25"
                      >
                        Email Us Directly
                      </a>
                    </div>
                  </div>
                </div>
              </section>

            </Container>

            {/* Related Pages */}
            <RelatedPages 
              title="Learn More"
              pages={[
                { href: "/about", title: "Our Mission", description: "Learn about our vision" },
                { href: "/programs", title: "Programs", description: "What we offer" },
                { href: "/partner-with-us", title: "Partner With Us", description: "Collaboration opportunities" },
                { href: "/contact", title: "Contact", description: "Get in touch" }
              ]}
            />
          </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}

export default Sponsor;