import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
} from "../../sanity";
import { fade } from "@/helpers/transitions";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Container from "@/components/container";
import RelatedPages from "@/components/RelatedPages";
import Link from "next/link";
import ImageComponent from "@/components/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Projects(props) {
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
        <NextSeo 
          title="Projects" 
          description="Explore our current educational and cultural exchange projects connecting Korea and America."
        />
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="mb-12 md:mb-16 xl:mb-24"
            variants={fade}
          >
            {/* Hero Section - Updated */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
              <Container>
                <div className="max-w-4xl mx-auto text-center text-white">
                  <div className="inline-block px-6 py-2 bg-[#c17854] rounded-full mb-6">
                    <span className="font-bold">Current Initiatives • 현재 프로젝트</span>
                  </div>
                  
                  <h1 className="mb-4 text-4xl font-bold md:text-5xl xl:text-6xl">
                    Projects
                  </h1>
                  
                  <p className="mb-6 text-2xl font-semibold md:text-3xl">
                    프로젝트
                  </p>

                  <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
                    Ongoing initiatives bridging educational systems and cultures between Korea and America
                  </p>
                </div>
              </Container>
            </section>

            <Container>
              {/* Projects Grid - Cleaner Design */}
              <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                  {posts && posts.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
                      {posts.map((post, index) => (
                        <m.div
                          key={post.slug.current}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link href={`/projects/${post.slug.current}`}>
                            <a className="block h-full group">
                              <div className="h-full bg-white rounded-2xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <ImageComponent
                                    image={
                                      post.mainImage !== null
                                        ? post.mainImage.url
                                        : "https://via.placeholder.com/800x600"
                                    }
                                    alt={post.title[locale] || "Project image"}
                                    className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
                                  />
                                </div>

                                {/* Project Content */}
                                <div className="p-8">
                                  <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4 group-hover:text-[#c17854] transition-colors">
                                    {post.title[locale]}
                                  </h2>
                                  
                                  <p className="mb-6 leading-relaxed text-gray-700 line-clamp-3">
                                    {post.cardDescription}
                                  </p>

                                  <div className="inline-flex items-center gap-2 text-[#c17854] font-semibold group-hover:gap-3 transition-all">
                                    <span>Learn More</span>
                                    <svg
                                      className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </m.div>
                      ))}
                    </div>
                  ) : (
                    /* No Projects State - Improved */
                    <div className="py-20 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] flex items-center justify-center mx-auto mb-6">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                          New Projects Coming Soon
                        </h3>
                        <p className="mb-8 text-lg leading-relaxed text-gray-700">
                          We're currently developing exciting new initiatives. Check back soon for updates!
                        </p>
                        <Link href="/programs">
                          <a className="inline-flex items-center gap-2 px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                            <span>Explore Our Programs</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Call to Action - Improved */}
              {posts && posts.length > 0 && (
                <section className="py-12 md:py-16">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-10 md:p-12 text-white text-center shadow-xl">
                      <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                        Get Involved
                      </h2>
                      <p className="mb-2 text-xl font-semibold">
                        함께하기
                      </p>
                      <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-white/80">
                        Learn more about how you can support our initiatives or partner with us on future projects
                      </p>
                      <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link href="/partner-with-us">
                          <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg">
                            Partner With Us
                          </a>
                        </Link>
                        <Link href="/contact">
                          <a className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 border rounded-lg bg-white/10 hover:bg-white/20 border-white/25">
                            Contact Us
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </Container>

            {/* Related Pages Navigation */}
            <RelatedPages 
              title="Explore More"
              pages={[
                { href: "/about", title: "Our Mission", description: "Learn about our vision and values" },
                { href: "/programs", title: "Programs", description: "See all our offerings" },
                { href: "/roots-and-routes", title: "Roots & Routes", description: "Our flagship program" },
                { href: "/contact", title: "Contact", description: "Get in touch with us" }
              ]}
            />
          </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}

const query = groq`
*[_type == "project"] | order(id) {
  ..., 
  title,
  cardDescription,
  slug,
  mainImage {
    ...asset->
  },
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