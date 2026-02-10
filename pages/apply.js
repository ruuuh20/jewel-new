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
        description="Apply for the Roots and Routes Spring Break 2026 program - an educational and cultural exchange for Korean-American students in grades 7-12."
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
                      Spring Break 2026 • April 2–11, 2026
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-[#120902]">
                    Apply to Roots and Routes
                  </h1>
                  
                  <p className="mb-4 text-lg leading-relaxed text-gray-700 md:text-xl">
                    Thank you for your interest in the Roots and Routes program! This application is for our Spring 2026 cohort, a 10-day educational and cultural exchange program for Korean-American students in grades 7–12.
                  </p>

                  <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                    Please set aside <strong>15-25 minutes</strong> to complete this application thoughtfully. We're excited to learn more about you!
                  </p>
                </div>
              </div>
            </Container>
          </m.section>

           {/* Application Process Overview */}
          <section className="bg-white border-t border-gray-200">
            <Container>
              <div className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-light mb-8 text-[#1e3a5f] text-center">
                    Application Process
                  </h2>
                  
                  <div className="grid gap-8 mb-12 md:grid-cols-2">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold text-xl">
                          1
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 text-[#120902]">
                            Online Application
                          </h3>
                          <p className="mb-3 text-gray-700">
                            Complete the application form below with student information and thoughtful responses to our essay questions.
                          </p>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                              <span className="text-[#c17854]">•</span>
                              <span>Basic information & contact details</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c17854]">•</span>
                              <span>3 short essay questions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c17854]">•</span>
                              <span>Parent/guardian consent</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c17854]">•</span>
                              <span><strong>$1,000 security deposit</strong> (fully refundable if not selected)</span>
                            </li>
                          </ul>
                          <p className="mt-4 text-sm font-semibold text-[#1e3a5f]">
                            📅 Deadline: February 25, 2026
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold text-xl">
                          2
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 text-[#120902]">
                            Virtual Interview
                          </h3>
                          <p className="mb-3 text-gray-700">
                            Selected applicants will be invited to a virtual interview with our program directors.
                          </p>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                              <span className="text-[#c17854]">•</span>
                              <span>15-20 minute video call</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c17854]">•</span>
                              <span>Conversation about interests & goals</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c17854]">•</span>
                              <span>Opportunity to ask questions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#c17854]">•</span>
                              <span>Parent/guardian welcome to attend</span>
                            </li>
                          </ul>
                          <p className="mt-4 text-sm font-semibold text-[#1e3a5f]">
                            📅 Interviews: Early March 2026
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Note */}
                  <div className="p-6 bg-[#e0e7ef] rounded-lg border-l-4 border-[#1e3a5f]">
                    <h4 className="font-semibold text-lg mb-2 text-[#120902]">
                      📅 Timeline
                    </h4>
                    <p className="text-sm text-gray-700 md:text-base">
                      Applications reviewed on a rolling basis. Final decisions announced by <strong>March 15, 2026</strong>. Accepted students will receive program details and payment instructions for the $2,900 balance, along with passport submission requirements.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Application Details Section */}
          <section className="bg-[#faf8f3]">
            <Container>
              <div className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1e3a5f]">
                    What to Expect in Your Application
                  </h2>
                  
                  <div className="grid gap-6 mb-8 md:grid-cols-3">
                    <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                      <div className="text-[#c17854] text-3xl font-bold mb-2">01</div>
                      <h3 className="font-semibold text-lg mb-2 text-[#120902]">Basic Information</h3>
                      <p className="text-sm text-gray-600">
                        Contact details, grade level, and school information
                      </p>
                    </div>

                    <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                      <div className="text-[#c17854] text-3xl font-bold mb-2">02</div>
                      <h3 className="font-semibold text-lg mb-2 text-[#120902]">Short Essays</h3>
                      <p className="text-sm text-gray-600">
                        3 questions about your interest, experiences, and curiosity about Korea
                      </p>
                    </div>

                    <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                      <div className="text-[#c17854] text-3xl font-bold mb-2">03</div>
                      <h3 className="font-semibold text-lg mb-2 text-[#120902]">Authorization</h3>
                      <p className="text-sm text-gray-600">
                        Parent/guardian consent and program acknowledgments
                      </p>
                    </div>
                  </div>

                  {/* Important Notes */}
                  <div className="p-6 mb-8 border-l-4 border-[#1e3a5f] bg-[#f8fafc] rounded-r-lg">
                    <h3 className="font-semibold text-lg mb-3 text-[#120902]">
                      📋 Important Notes
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700 md:text-base">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-[#c17854]">•</span>
                        <span>This is an <strong>application</strong>, not a confirmation of acceptance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-[#c17854]">•</span>
                        <span>The <strong>$1,000 security deposit</strong> is required with your application and is <strong>fully refundable</strong> if you are not selected</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-[#c17854]">•</span>
                        <span>We do <strong>not</strong> need passport information at this stage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-[#c17854]">•</span>
                        <span>You can save your progress and return later</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-[#c17854]">•</span>
                        <span>Application deadline: <strong>February 25, 2026 at 11:59 PM EST</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          

           {/* Embedded Form Section */}
          <section className="py-12 bg-white border-t border-gray-200 md:py-16 lg:py-20">
            <Container>
              <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-light mb-4 text-[#1e3a5f]">
                    Ready to Apply?
                  </h2>
                  <p className="text-gray-600">
                    Complete the form below to submit your application.
                  </p>
                </div>

                {/* Loading State */}
                {isLoading && (
                  <div className="p-12 text-center shadow-sm bg-gray-50 rounded-xl">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#c17854] mb-4"></div>
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
         <section className="bg-[#faf8f3] border-t border-gray-200">
            <Container>
              <div className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-light mb-4 text-[#1e3a5f]">
                    Questions About the Application?
                  </h2>
                  <p className="mb-8 text-lg text-gray-700">
                    We're here to help! Reach out via email, schedule a consultation call, or send us a message through our contact form.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                    {/* Calendly Button */}
                    <a
                      href="https://calendly.com/edutogether22/roots-routes-consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 font-semibold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-5 h-5 mr-2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      Schedule a Call
                    </a>
                    
                    {/* Email Button */}
                    <a
                      href="mailto:edutogether22@gmail.com"
                      className="inline-flex items-center justify-center px-8 py-4 font-semibold bg-[#1e3a5f] text-white hover:bg-[#0f1f3d] transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-5 h-5 mr-2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      Email Us
                    </a>
                    
                    {/* Contact Form Button */}
                    <Link href="/contact">
                      <a className="inline-flex items-center justify-center px-8 py-4 font-semibold border-2 border-[#c17854] text-[#c17854] hover:bg-[#c17854] hover:text-white transition-all duration-300 rounded-lg">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={2} 
                          stroke="currentColor" 
                          className="w-5 h-5 mr-2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                        </svg>
                        Contact Form
                      </a>
                    </Link>
                  </div>
                  <p className="mt-6 text-sm text-gray-600">
                    Typical response time: Within 24 hours on weekdays
                  </p>
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