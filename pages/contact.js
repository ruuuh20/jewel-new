import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Image from "next/image";
import Container from "@/components/container";
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
        <NextSeo title="Contact Us" description="contact information for JEWEL" />
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mb-12 md:mb-16 xl:mb-24  pt-[90px] md:pt-[180px] pb-[45px]"
            variants={fade}
          >
            <Container>
              <div className="relative w-full pb-[120px]">
                <div className="pb-1 md:pb-8 tracking-widest uppercase text-sm md:text-[20px] font-semibold text-gray-400 font-arial">
                  <span>연락처</span>
                </div>
                <div className="absolute hidden mt-t overflow-visible md:block spin-slow spin-container">
                  <div className="relative">
                    <Image src="/ham-logo.png" width="60" height="60" />
                  </div>
                </div>
                <h3 className="font-pt relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl left-0 md:left-[5%]">
                  {locale === "ko" ? "연락처" : "Contact Us"}
                </h3>
              </div>
            </Container>
            <Container>
              <div className="flex flex-wrap">
                <div className="w-full mt-4 md:p-10 lg:w-5/12">
                  <p className="text-base md:text-xl">
                    We’d love to hear from you. For all inquiries, you can send
                    an email at{" "}
                    <a
                      className="border-b border-yellow hover:text-yellow"
                      href="mailto:kaykim@wearejewel.org"
                    >
                      {posts && posts[0].email}
                    </a>{" "}
                    or fill out the form, and we will get back to you.
                  </p>{" "}
                  <div className="pt-4 pb-2 pl-5 mt-4 bg-gray-100 rounded-lg box">
                    {posts &&
                      posts.map((post) => (
                        <>
                          <div className="flex mb-4 text-base md:text-lg">
                            {" "}
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="envelope"
                              className="inline-block mr-3 svg-inline--fa email-icon text-primary"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                              ></path>
                            </svg>
                            <a
                              href="mailto:kaykim@wearejewel.org"
                              className="transition duration-500 ease-in-out md:text-xl text-secondary-dark hover:text-yellow"
                            >
                              {post.email}{" "}
                            </a>
                          </div>
                          <div className="flex mb-4 text-base md:text-lg">
                            <svg
                              aria-hidden="true"
                              className="inline-block mr-3 svg-inline--fa location-icon fa-w-16 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                            </svg>
                            <span className="transition duration-500 ease-in-out md:text-xl text-secondary-dark hover:text-yellow">
                              {post.address}{" "}
                            </span>
                          </div>
                          <div className="flex mb-4 text-base md:text-lg">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="phone-alt"
                              className="inline-block mr-3 svg-inline--fa phone-icon fa-w-16 text-primary"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                                className=""
                              ></path>
                            </svg>
                            <a
                              href="tel:2017677500"
                              className="transition duration-500 ease-in-out md:text-xl text-secondary-dark hover:text-yellow"
                            >
                              {post.phoneNumber}
                            </a>
                          </div>
                        </>
                      ))}
                  </div>
                </div>

                <div className="w-full pt-10 lg:w-7/12 md:px-16">
                  <ContactForm />
                </div>
              </div>
              {/* <hr className="my-8 md:my-16" /> */}

              <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
                <div className="flex flex-col-reverse mt-12 md:mt-0 md:flex-row">
                  <div className="w-full max-w-4-col md:order-last mt-6 md:mt-0 border-t border-dashed md:border-none pt-10 md:pt-0">
                    <div className="relative w-full">
                      <div className="relative flex items-center h-auto select-none md:h-20">
                        <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                          1
                        </div>
                        <a
                          className="relative w-full text-3xl italic leading-loose pointer-events-none group md:text-5xl font-pt"
                          href="/about"
                        >
                          <span className="group-hover:italic group-hover:normal-case relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-100">
                            <span className="relative z-10">About us</span>
                          </span>
                        </a>
                      </div>

                      <div className="relative flex items-center h-auto select-none md:h-20">
                        <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                          2
                        </div>
                        <a
                          className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
                          href="/programs"
                        >
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">Programs</span>
                          </span>
                        </a>
                      </div>

                      <div className="relative flex items-center h-auto select-none md:h-20">
                        <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                          3
                        </div>
                        <a
                          className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
                          href="/projects"
                        >
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">Projects</span>
                          </span>
                        </a>
                      </div>

                      <div className="relative flex items-center h-auto select-none md:h-20">
                        <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                          4
                        </div>
                        <a
                          className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
                          href="/news"
                        >
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow  relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">News</span>
                          </span>
                        </a>
                      </div>

                      <div className="relative flex items-center h-auto select-none md:h-20">
                        <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
                          5
                        </div>
                        <a
                          className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
                          href="/affiliates"
                        >
                          <span className="group-hover:italic group-hover:normal-case group-hover:text-yellow relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                            <span className="relative z-10">Affiliates</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between w-full md:max-w-4-col md:block text-right md:text-left">
                    <div className="relative w-full">
                      <nav className="m-auto md:w-2/3">
                        <span className="block mb-4 text-base md:text-[18px] text-gray-600 leading-tight uppercase">
                          {"About Us"}
                        </span>
                        <ul className="flex flex-wrap">
                          <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                            <Link href="/about">
                              <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                                <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                                <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                  Our Mission
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                            <Link href="/founder">
                              <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                                <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                                <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                  Founder's Message
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                            <Link href="/leadership">
                              <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                                <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                                <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                  Leadership
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                            <Link href="/history">
                              <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                                <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                                <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                  Our History
                                </span>
                              </a>
                            </Link>
                          </li>
                          <li className="relative w-full py-0 pl-6 md:py-2 md:pl-10">
                            <Link href="/contact">
                              <a className="block transition-all duration-300 ease-in-out pointer-events-none group hover:pl-2">
                                <span className="w-2 h-2 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 hidden md:block absolute top-0 left-0 mt-[24px]"></span>
                                <span className="block mb-2 text-xl font-display md:text-3xl text-slate pm rmd:mb-3">
                                  Contact
                                </span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </section>
            </Container>
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
