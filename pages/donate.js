import Head from "next/head";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Layout from "@/components/layout";
import Container from "@/components/container";
import RelatedPages from "@/components/RelatedPages";
import { fade, textReveal } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";

export default function Donate(props) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo 
          title="Donate" 
          description="Support Educate Together's mission to bridge educational and cultural connections between Korea and America."
        />
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mb-12 md:mb-16 xl:mb-24"
            variants={fade}
          >
            {/* Hero Header */}
            <div className="relative w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] pt-16 pb-12 md:pt-24 md:pb-16">
              <Container>
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#1e3a5f] tracking-tight mb-6">
                    Make an Impact
                  </h1>
                  <p className="mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
                    Your donation helps create educational opportunities and cultural connections between Korea and America.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                      href="#donate-now"
                      className="inline-flex items-center justify-center px-10 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg hover:-translate-y-0.5"
                    >
                      Donate Now
                    </a>
                    <a
                      href="#your-impact"
                      className="inline-flex items-center justify-center px-10 py-4 font-bold bg-[#1e3a5f] text-white hover:bg-[#0f1f3d] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg hover:-translate-y-0.5"
                    >
                      See Your Impact
                    </a>
                  </div>
                </div>
              </Container>
            </div>

            <Container>
              {/* Your Impact Section */}
              <section id="your-impact" className="py-16 md:py-24">
                <div className="max-w-5xl mx-auto">
                  <div className="mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                      Your Impact
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                      Every donation directly supports our programs and helps students experience transformative educational and cultural exchanges.
                    </p>
                  </div>

                  {/* Impact Cards */}
                  <div className="grid gap-6 mb-12 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                      <div className="mb-4 text-4xl">🎓</div>
                      <h3 className="text-xl font-bold text-[#120902] mb-3">
                        Student Scholarships
                      </h3>
                      <p className="text-gray-700">
                        Help make our programs accessible to students regardless of financial circumstances.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                      <div className="mb-4 text-4xl">✈️</div>
                      <h3 className="text-xl font-bold text-[#120902] mb-3">
                        Program Development
                      </h3>
                      <p className="text-gray-700">
                        Support the creation of new educational and cultural exchange programs.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                      <div className="mb-4 text-4xl">🌏</div>
                      <h3 className="text-xl font-bold text-[#120902] mb-3">
                        Community Impact
                      </h3>
                      <p className="text-gray-700">
                        Build bridges between Korean and American communities through education.
                      </p>
                    </div>
                  </div>

                  {/* Donation Impact Examples */}
                  {/* <div className="bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] rounded-xl p-8 md:p-10 border-2 border-[#1e3a5f]/10">
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-6 text-center">
                      What Your Donation Can Do
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <span className="text-[#c17854] font-bold text-xl">$50</span>
                        <p className="text-gray-700">Provides program materials for one student</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#c17854] font-bold text-xl">$100</span>
                        <p className="text-gray-700">Supports cultural workshop activities</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#c17854] font-bold text-xl">$250</span>
                        <p className="text-gray-700">Partially funds a student's program participation</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#c17854] font-bold text-xl">$500+</span>
                        <p className="text-gray-700">Provides full scholarship for one student</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </section>

              {/* Donation Methods Section */}
              <section id="donate-now" className="py-12 border-t border-gray-200 md:py-16">
                <div className="max-w-5xl mx-auto">
                  <div className="mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                      Ways to Donate
                    </h2>
                    <p className="text-lg text-gray-700">
                      Choose the method that works best for you.
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Online Donation - PLACEHOLDER for future */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-2 border-[#c17854]">
                      <div className="mb-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-[#c17854] text-white flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#120902] mb-2">
                          Online Donation
                        </h3>
                        <p className="text-sm text-[#c17854] font-semibold mb-3">
                          Coming Soon!
                        </p>
                        <p className="mb-4 text-sm text-gray-700">
                          We're setting up secure online donations. In the meantime, please use one of the options below.
                        </p>
                      </div>
                      {/* PLACEHOLDER - Replace with Stripe/Give Lively button when ready */}
                      <div className="text-center">
                        <button
                          disabled
                          className="w-full px-6 py-3 font-bold text-gray-500 bg-gray-300 rounded-lg cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      </div>
                    </div>

                    {/* Zelle */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                      <div className="mb-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#120902] mb-2">
                          Zelle
                        </h3>
                        <p className="mb-4 text-sm text-gray-700">
                          Send directly via Zelle using your bank's app
                        </p>
                      </div>
                      <div className="bg-[#f8fafc] p-4 rounded-lg text-center">
                        <p className="mb-1 text-sm text-gray-600">Send to:</p>
                        <p className="text-lg font-bold text-[#1e3a5f] break-all">
                          edutogether22@gmail.com
                        </p>
                      </div>
                    </div>

                    {/* Venmo */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                      <div className="mb-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#120902] mb-2">
                          Venmo
                        </h3>
                        <p className="mb-4 text-sm text-gray-700">
                          Quick and easy donation via Venmo
                        </p>
                      </div>
                      <div className="bg-[#f8fafc] p-4 rounded-lg text-center">
                        <p className="mb-1 text-sm text-gray-600">Send to:</p>
                        <p className="text-lg font-bold text-[#1e3a5f]">
                          @EducateTogether
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          (Update with your actual Venmo handle)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Check Donation */}
                  <div className="p-8 mt-8 bg-white border-2 border-gray-100 shadow-md rounded-xl">
                    <div className="md:flex md:items-start md:gap-8">
                      <div className="mb-6 md:w-1/3 md:mb-0">
                        <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center mb-4">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#120902] mb-2">
                          Donate by Check
                        </h3>
                        <p className="text-sm text-gray-700">
                          For tax-deductible contributions
                        </p>
                      </div>
                      <div className="md:w-2/3 bg-[#f8fafc] p-6 rounded-lg">
                        <p className="mb-4 text-gray-700">
                          Make your check payable to <strong className="text-[#1e3a5f]">"Educate Together"</strong> and mail to:
                        </p>
                        <div className="p-4 text-center bg-white border-2 border-gray-200 rounded">
                          <p className="font-semibold text-[#120902]">Educate Together Organization</p>
                          <p className="text-gray-700">317 Harrington Ave</p>
                          <p className="text-gray-700">Closter, NJ 07624</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tax Deductibility Info */}
              {/* <section className="py-12 border-t border-gray-200 md:py-16">
                <div className="max-w-3xl mx-auto">
                  <div className="bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc] rounded-xl p-8 border-2 border-[#1e3a5f]/10">
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 text-center">
                      Tax Information
                    </h3>
                    <p className="leading-relaxed text-center text-gray-700">
                      Educate Together is a 501(c)(3) nonprofit organization. Your donation may be tax-deductible to the extent allowed by law. Please consult with your tax advisor. For check donations, we will mail you a receipt for your records.
                    </p>
                    <p className="mt-4 text-sm text-center text-gray-600">
                      Tax ID: [Insert your EIN here]
                    </p>
                  </div>
                </div>
              </section> */}

              {/* Questions Section */}
              <section className="py-12 border-t border-gray-200 md:py-16">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                    Questions About Donating?
                  </h3>
                  <p className="mb-6 text-lg text-gray-700">
                    We're here to help. Contact us with any questions about donations or how your contribution will be used.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                      href="mailto:edutogether22@gmail.com"
                      className="inline-flex items-center justify-center px-8 py-3 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
                    >
                      Email Us
                    </a>
                    <Link href="/contact">
                      <a className="inline-flex items-center justify-center px-8 py-3 font-bold border-2 border-[#c17854] text-[#c17854] hover:bg-[#c17854] hover:text-white transition-all duration-300 rounded-lg">
                        Contact Form
                      </a>
                    </Link>
                  </div>
                </div>
              </section>
            </Container>

            {/* Related Pages Navigation */}
            <RelatedPages 
              title="Learn More About Our Work"
              pages={[
                { href: "/about", title: "Our Mission", description: "Learn about our vision and values" },
                { href: "/programs", title: "Programs", description: "See what we offer" },
                { href: "/roots-and-routes", title: "Roots & Routes", description: "Our flagship program" },
                { href: "/partner-with-us", title: "Partner With Us", description: "Collaboration opportunities" }
              ]}
            />
          </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}