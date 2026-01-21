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

const RootsAndRoutesApplication = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Small delay to show loading state
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <NextSeo 
        title="Apply - Roots and Routes Spring 2026" 
        description="Apply for the Roots and Routes Spring Break 2026 program - a 9-day educational and cultural exchange for Korean-American students in grades 7-12."
      />
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
            className="relative w-full overflow-hidden bg-gradient-to-b from-[#faf8f3] to-white"
          >
            <Container>
              <div className="py-12 md:py-16 lg:py-20">
                {/* Breadcrumb */}
                <div className="mb-6">
                  <Link href="/roots-and-routes">
                    <a className="text-[#d96e34] hover:text-[#c85a28] transition-colors text-sm md:text-base font-medium flex items-center gap-2">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                      Back to Roots and Routes
                    </a>
                  </Link>
                </div>

                {/* Header Content */}
                <div className="max-w-4xl">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-[#d96e34] text-white font-semibold rounded-full text-sm md:text-base">
                      Spring Break 2026 • April 2–10
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-[#120902]">
                    Apply to Roots and Routes
                  </h1>
                  
                  <p className="mb-4 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Thank you for your interest in the Roots and Routes program! This application is for our Spring 2026 cohort, a 9-day educational and cultural exchange program for Korean-American students in grades 7–12.
                  </p>

                  <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                    Please set aside <strong>15-25 minutes</strong> to complete this application thoughtfully. We're excited to learn more about you!
                  </p>
                </div>
              </div>
            </Container>
          </m.section>

          {/* Application Details Section */}
          <section className="bg-white border-t border-gray-200">
            <Container>
              <div className="py-12 md:py-16">
                <div className="max-w-4xl">
                  <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#120902]">
                    What to Expect
                  </h2>
                  
                  <div className="grid gap-6 mb-8 md:grid-cols-3">
                    <div className="bg-[#faf8f3] p-6 rounded-lg">
                      <div className="text-[#d96e34] text-3xl font-bold mb-2">01</div>
                      <h3 className="font-semibold text-lg mb-2 text-[#120902]">Basic Information</h3>
                      <p className="text-sm text-gray-600">
                        Contact details, grade level, and passport information
                      </p>
                    </div>

                    <div className="bg-[#faf8f3] p-6 rounded-lg">
                      <div className="text-[#d96e34] text-3xl font-bold mb-2">02</div>
                      <h3 className="font-semibold text-lg mb-2 text-[#120902]">Short Answers</h3>
                      <p className="text-sm text-gray-600">
                        3 essay questions about your interest, experiences, and curiosity
                      </p>
                    </div>

                    <div className="bg-[#faf8f3] p-6 rounded-lg">
                      <div className="text-[#d96e34] text-3xl font-bold mb-2">03</div>
                      <h3 className="font-semibold text-lg mb-2 text-[#120902]">Authorization</h3>
                      <p className="text-sm text-gray-600">
                        Parent/guardian consent and program acknowledgments
                      </p>
                    </div>
                  </div>

                  {/* Important Notes */}
                  <div className="p-6 mb-8 border-l-4 border-blue-400 bg-blue-50">
                    <h3 className="font-semibold text-lg mb-3 text-[#120902]">
                      📋 Important Notes
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700 md:text-base">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-blue-400">•</span>
                        <span>This is an <strong>application</strong>, not a confirmation of acceptance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-blue-400">•</span>
                        <span>We do <strong>not</strong> need passport information at this stage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-blue-400">•</span>
                        <span>You can save your progress and return later</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-blue-400">•</span>
                        <span>Applications are due <strong>February 25, 2026</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-blue-400">•</span>
                        <span>Decisions will be sent by <strong>[INSERT DECISION DATE]</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Embedded Form Section */}
          <section className="bg-[#faf8f3] py-12 md:py-16 lg:py-20">
            <Container>
              <div className="max-w-5xl mx-auto">
                {/* Loading State */}
                {isLoading && (
                  <div className="p-12 text-center bg-white shadow-sm rounded-xl">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#d96e34] mb-4"></div>
                    <p className="text-gray-600">Loading application form...</p>
                  </div>
                )}

                {/* Tally Embed */}
                <div 
                  className={`transition-opacity duration-300 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}
                  style={{ minHeight: isLoading ? 0 : '800px' }}
                >
                  <iframe
                    data-tally-src="https://tally.so/r/9qZ0gQ"
                    loading="lazy"
                    width="100%"
                    height="1200"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Roots and Routes Spring 2026 Application"
                    className="bg-white shadow-lg rounded-xl"
                  ></iframe>
                </div>
              </div>
            </Container>
          </section>

          {/* Help Section */}
          <section className="bg-white border-t border-gray-200">
            <Container>
              <div className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-light mb-4 text-[#120902]">
                    Questions?
                  </h2>
                  <p className="mb-6 text-lg text-gray-700">
                    If you have any questions about the application process or the program itself, please don't hesitate to reach out.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                      href="mailto:info@yourdomain.org"
                      className="inline-flex items-center justify-center px-8 py-3 font-semibold bg-[#d96e34] text-white hover:bg-[#c85a28] transition-all duration-300 rounded-lg"
                    >
                      Email Us
                    </a>
                    <Link href="/contact">
                      <a className="inline-flex items-center justify-center px-8 py-3 font-semibold border-2 border-[#d96e34] text-[#d96e34] hover:bg-[#d96e34] hover:text-white transition-all duration-300 rounded-lg">
                        Contact Form
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>

        </m.main>
      </LazyMotion>
    </Layout>
  );
};

export default RootsAndRoutesApplication;