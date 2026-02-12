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
            {/* Hero Header */}
            <div className="relative w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] pt-16 pb-12 md:pt-24 md:pb-16">
              <Container>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#1e3a5f] tracking-tight">
                      Current Projects
                    </h1>
                    <div className="text-sm font-semibold tracking-wide text-gray-600 uppercase md:text-lg">
                      <span>프로젝트</span>
                    </div>
                  </div>
                  <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                    Discover our ongoing initiatives that bridge educational systems and cultures between Korea and America.
                  </p>
                </div>
              </Container>
            </div>

            <Container>
              {/* Projects List */}
              <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                  {posts && posts.length > 0 ? (
                    posts.map((post, index) => (
                      <m.div
                        key={post.slug.current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 ${
                          index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                        }`}
                      >
                        {/* Project Image */}
                        <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                          <div className="relative h-64 overflow-hidden shadow-lg sm:h-80 lg:h-96 rounded-xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                        </div>

                        {/* Project Content */}
                        <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                          <div className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300 shadow-sm">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                              {post.title[locale]}
                            </h2>
                            
                            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                              {post.cardDescription}
                            </p>

                            <Link href={`/projects/${post.slug.current}`}>
                              <a className="inline-flex items-center gap-3 px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
                                <span className="text-base">Explore Project</span>
                                <svg
                                  className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </m.div>
                    ))
                  ) : (
                    /* No Projects State */
                    <div className="py-16 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="w-20 h-20 rounded-full bg-[#f8fafc] flex items-center justify-center mx-auto mb-6">
                          <svg className="w-10 h-10 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                          No Projects Yet
                        </h3>
                        <p className="mb-6 text-gray-700">
                          We're currently developing exciting new projects. Check back soon!
                        </p>
                        <Link href="/programs">
                          <a className="inline-flex items-center gap-2 px-6 py-3 font-bold text-[#c17854] border-2 border-[#c17854] hover:bg-[#c17854] hover:text-white rounded-lg transition-all duration-300">
                            Explore Our Programs
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Call to Action */}
              {posts && posts.length > 0 && (
                <section className="py-12 border-t border-gray-200 md:py-16">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-8 md:p-12 text-white text-center">
                      <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                        Interested in Our Projects?
                      </h2>
                      <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
                        Learn more about how you can get involved, support our initiatives, or partner with us on future projects.
                      </p>
                      <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link href="/partner-with-us">
                          <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg">
                            Partner With Us
                          </a>
                        </Link>
                        <Link href="/contact">
                          <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-white text-[#1e3a5f] hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg">
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
                { href: "/news", title: "News & Updates", description: "Latest announcements" }
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