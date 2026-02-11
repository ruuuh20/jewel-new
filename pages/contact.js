import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Image from "next/image";
import Container from "@/components/container";
import RelatedPages from "@/components/RelatedPages";
import { ContactForm } from "@/components/form";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fade } from "@/helpers/transitions";

export default function Contact(props) {
  const { postdata, preview } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <>
      <Layout>
        <NextSeo title="Contact Us" description="contact information for Educate Together" />
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
                      Contact Us
                    </h1>
                    <div className="text-sm font-semibold tracking-wide text-gray-600 uppercase md:text-lg">
                      <span>연락처</span>
                    </div>
                  </div>
                  <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                    We'd love to hear from you. Get in touch with any questions about our programs.
                  </p>
                </div>
              </Container>
            </div>

            <Container>
              {/* Contact Section */}
              <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                  <div className="grid gap-12 lg:grid-cols-5">
                    {/* Contact Info - Left Side */}
                    <div className="lg:col-span-2">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-6">
                        Get In Touch
                      </h2>
                      <p className="mb-8 text-lg leading-relaxed text-gray-700">
                        For any inquiries, you can send an email at{" "}
                        <a
                          className="font-semibold text-[#c17854] hover:text-[#a85232] transition-colors underline"
                          href="mailto:edutogether22@gmail.com"
                        >
                          {posts && posts[0]?.email}
                        </a>{" "}
                        or fill out the form, and we will get back to you.
                      </p>

                      {/* Contact Info Cards */}
                      <div className="space-y-4">
                        {posts &&
                          posts.map((post) => (
                            <div key={post._id}>
                              {/* Email Card */}
                              <div className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm">
                                <div className="flex items-start gap-4">
                                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c17854] flex items-center justify-center text-white">
                                    <svg
                                      className="w-5 h-5"
                                      fill="currentColor"
                                      viewBox="0 0 512 512"
                                    >
                                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                    </svg>
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-[#120902] mb-1">Email</h3>
                                    <a
                                      href={`mailto:${post.email}`}
                                      className="text-gray-700 hover:text-[#c17854] transition-colors"
                                    >
                                      {post.email}
                                    </a>
                                  </div>
                                </div>
                              </div>

                              {/* Address Card */}
                              {post.address && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm">
                                  <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c17854] flex items-center justify-center text-white">
                                      <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 384 512"
                                      >
                                        <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-[#120902] mb-1">Address</h3>
                                      <p className="text-gray-700">{post.address}</p>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Phone Card */}
                              {post.phoneNumber && (
                                <div className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm">
                                  <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c17854] flex items-center justify-center text-white">
                                      <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                      >
                                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-[#120902] mb-1">Phone</h3>
                                      <a
                                        href={`tel:${post.phoneNumber}`}
                                        className="text-gray-700 hover:text-[#c17854] transition-colors"
                                      >
                                        {post.phoneNumber}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-3">
                      <div className="p-8 bg-white border-2 border-gray-100 shadow-sm md:p-10 rounded-xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-6">
                          Send Us a Message
                        </h2>
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Container>

            {/* Related Pages Navigation */}
            <RelatedPages 
              title="Explore More"
              pages={[
                { href: "/about", title: "About Us", description: "Learn about our mission" },
                { href: "/programs", title: "Programs", description: "Explore our offerings" },
                { href: "/roots-and-routes", title: "Roots & Routes", description: "Spring 2026 program" },
                { href: "/leadership", title: "Leadership", description: "Meet our team" }
              ]}
            />
          </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}

const query = groq`
*[_type == "contact"] | order(_createdAt desc) {
  ..., 
}
`;

export async function getStaticProps({ params, preview = false }) {
  const contactData = await getClient(preview).fetch(query);

  return {
    props: {
      postdata: contactData,
      preview,
    },
    revalidate: 10,
  };
}