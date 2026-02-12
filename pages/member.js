import Head from "next/head";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Layout from "@/components/layout";
import Container from "@/components/container";
import RelatedPages from "@/components/RelatedPages";
import { MemberForm } from "@/components/form";
import Image from "next/image";

export default function Member(props) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo 
          title="Membership" 
          description="Become a member of Educate Together and stay connected with educational opportunities and cultural exchange programs."
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
                      Become a Member
                    </h1>
                    <div className="text-sm font-semibold tracking-wide text-gray-600 uppercase md:text-lg">
                      <span>함께해요</span>
                    </div>
                  </div>
                  <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                    Join our community of educators, parents, and supporters committed to bridging Korean and American educational systems.
                  </p>
                </div>
              </Container>
            </div>

            <Container>
              {/* Member Benefits Section */}
              <section className="py-16 md:py-24">
                <div className="max-w-5xl mx-auto">
                  <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4 text-center">
                      Member Benefits
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-center text-gray-700">
                      As a member of Educate Together, you will receive exclusive updates and opportunities:
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid gap-6 mb-12 md:grid-cols-3">
                    {/* Benefit 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold text-xl mb-4">
                        1
                      </div>
                      <h3 className="text-lg font-bold text-[#120902] mb-3">
                        Educational Collaboration
                      </h3>
                      <p className="leading-relaxed text-gray-700">
                        Stay updated on new ways American and Korean educators are organizing collaborative projects to foster greater communication between the two educational systems.
                      </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold text-xl mb-4">
                        2
                      </div>
                      <h3 className="text-lg font-bold text-[#120902] mb-3">
                        Educational Technology
                      </h3>
                      <p className="leading-relaxed text-gray-700">
                        Receive information about new technologies for assisting students in the learning process to ensure success in the classroom.
                      </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold text-xl mb-4">
                        3
                      </div>
                      <h3 className="text-lg font-bold text-[#120902] mb-3">
                        Cultural Exchange
                      </h3>
                      <p className="leading-relaxed text-gray-700">
                        Access cultural information and travel opportunities to bridge the gap between Korean and American cultures.
                      </p>
                    </div>
                  </div>

                  {/* Contact Info Box */}
                  <div className="p-6 md:p-8 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] rounded-xl border-2 border-[#1e3a5f]/10">
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                      Interested in Other Opportunities?
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      If you are interested in exploring career or volunteer opportunities with us, please send your resume and a brief introduction to{" "}
                      <a
                        className="font-semibold text-[#c17854] hover:text-[#a85232] transition-colors underline"
                        href="mailto:edutogether22@gmail.com"
                      >
                        edutogether22@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Membership Form Section */}
              <section className="py-12 border-t border-gray-200 md:py-16">
                <div className="max-w-3xl mx-auto">
                  <div className="mb-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                      Join Our Community
                    </h2>
                    <p className="text-lg text-gray-700">
                      Fill out the form below to become a member and start receiving updates and opportunities.
                    </p>
                  </div>

                  <div className="p-8 bg-white border-2 border-gray-100 shadow-sm md:p-10 rounded-xl">
                    <MemberForm />
                  </div>
                </div>
              </section>
            </Container>

            {/* Related Pages Navigation */}
            <RelatedPages 
              title="Learn More About Educate Together"
              pages={[
                { href: "/about", title: "Our Mission", description: "Learn about our vision and values" },
                { href: "/programs", title: "Programs", description: "Explore our offerings" },
                { href: "/partner-with-us", title: "Partner With Us", description: "Collaboration opportunities" },
                { href: "/contact", title: "Contact Us", description: "Get in touch" }
              ]}
            />
          </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}