import Head from "next/head";
import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Layout from "@/components/layout";
import Container from "@/components/container";
import RelatedPages from "@/components/RelatedPages";
import { PartnershipForm } from "@/components/form";
import Image from "next/image";

const Partner = (props) => {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo 
          title="Partner With Us" 
          description="Partner with Educate Together to create educational opportunities and cultural connections between Korean and American communities."
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
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#1e3a5f] tracking-tight">
                      Partner With Us
                    </h1>
                    <div className="text-sm font-semibold tracking-wide text-gray-600 uppercase md:text-lg">
                      <span>함께해요</span>
                    </div>
                  </div>
                  <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                    Join us in bridging educational and cultural connections between Korea and America. Together, we can create meaningful opportunities for students and communities.
                  </p>
                </div>
              </Container>
            </div>

            <Container>
              {/* Why Partner Section */}
              <section className="py-16 md:py-24">
                <div className="max-w-5xl mx-auto">
                  <div className="mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                      Why Partner With Educate Together?
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                      We believe in the power of collaboration to create lasting impact in education and cultural exchange.
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid gap-6 mb-16 md:grid-cols-3">
                    {/* Benefit 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-[#120902] mb-3">
                        Meaningful Impact
                      </h3>
                      <p className="text-gray-700">
                        Make a real difference in students' lives through educational and cultural programs that build global understanding.
                      </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-[#120902] mb-3">
                        Community Connection
                      </h3>
                      <p className="text-gray-700">
                        Build relationships with schools, families, and organizations in both Korean and American communities.
                      </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-[#120902] mb-3">
                        Brand Alignment
                      </h3>
                      <p className="text-gray-700">
                        Align your organization with educational excellence, cultural diversity, and global citizenship values.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Partnership Opportunities Section */}
              <section className="py-12 border-t border-gray-200 md:py-16">
                <div className="max-w-5xl mx-auto">
                  <div className="mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                      Partnership Opportunities
                    </h2>
                    <p className="text-lg text-gray-700">
                      We welcome diverse partnerships across education, business, and community sectors.
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Educational Institutions */}
                    <div className="bg-gradient-to-br from-[#f8fafc] to-white p-8 rounded-xl border-2 border-gray-100">
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                        🎓 Educational Institutions
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Host student exchange programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Collaborate on curriculum development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Joint professional development workshops</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Sister school partnerships (Korea-US)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Corporate Partners */}
                    <div className="bg-gradient-to-br from-[#f8fafc] to-white p-8 rounded-xl border-2 border-gray-100">
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                        🏢 Corporate Partners
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Program sponsorship opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Employee volunteer programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Scholarship funding</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>In-kind donations and services</span>
                        </li>
                      </ul>
                    </div>

                    {/* Cultural Organizations */}
                    <div className="bg-gradient-to-br from-[#f8fafc] to-white p-8 rounded-xl border-2 border-gray-100">
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                        🎨 Cultural Organizations
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Co-host cultural events and festivals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Joint programming and workshops</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Resource and network sharing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Cross-promotional opportunities</span>
                        </li>
                      </ul>
                    </div>

                    {/* Community Organizations */}
                    <div className="bg-gradient-to-br from-[#f8fafc] to-white p-8 rounded-xl border-2 border-gray-100">
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                        🤝 Community Organizations
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Youth program collaborations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Community outreach initiatives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Shared facilities and resources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c17854] mt-1">•</span>
                          <span>Joint grant applications</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="py-12 border-t border-gray-200 md:py-16">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-8 md:p-12 text-white text-center">
                    <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                      Ready to Partner?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
                      We're excited to explore partnership opportunities with organizations that share our commitment to education and cultural exchange.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                      <a
                        href="#partnership-form"
                        className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg"
                      >
                        Fill Out Partnership Form
                      </a>
                      <a
                        href="mailto:edutogether22@gmail.com"
                        className="inline-flex items-center justify-center px-8 py-4 font-bold bg-white text-[#1e3a5f] hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg"
                      >
                        Email Us Directly
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Partnership Form Section */}
              <section id="partnership-form" className="py-12 border-t border-gray-200 md:py-16">
                <div className="max-w-3xl mx-auto">
                  <div className="mb-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                      Partnership Inquiry Form
                    </h2>
                    <p className="text-lg text-gray-700">
                      Tell us about your organization and how you'd like to partner with us.
                    </p>
                  </div>

                  <div className="p-8 bg-white border-2 border-gray-100 shadow-sm md:p-10 rounded-xl">
                    <PartnershipForm />
                  </div>
                </div>
              </section>
            </Container>

            {/* Related Pages Navigation */}
            <RelatedPages 
              title="Learn More About Us"
              pages={[
                { href: "/about", title: "Our Mission", description: "Learn about our vision and values" },
                { href: "/programs", title: "Programs", description: "See what we offer" },
                { href: "/roots-and-routes", title: "Roots & Routes", description: "Our flagship program" },
                { href: "/contact", title: "Contact Us", description: "Get in touch" }
              ]}
            />
          </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}

export default Partner;