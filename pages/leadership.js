import Layout from "@/components/layout";
import Container from "@/components/container";
import PageNav from "@/components/pageNav";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";
import Link from "next/link";

export default function Leadership(props) {
  const { postdata, preview, program } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  const boardNames = [
    "Officers",
    "Directors",
    "Advisory Board",
    "Honorary Advisory Board",
  ];
  
  return (
    <Layout>
      <NextSeo title="Leadership" description="Leadership positions at Educate Together" />
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
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-4 text-[#1e3a5f] tracking-tight">
                  Leadership
                </h1>
                <p className="text-xl md:text-2xl text-[#334e68] font-semibold mb-2">
                  함께하는 사람들
                </p>
                <p className="max-w-2xl mx-auto text-base text-gray-600 md:text-lg">
                  Meet the dedicated individuals guiding Educate Together's mission to empower students through education and cultural exchange.
                </p>
              </div>
            </Container>
          </div>

          <Container>
            {/* Leadership Sections */}
            <div className="max-w-6xl py-12 mx-auto md:py-16">
              {boardNames.map((name, i) => {
                const isOfficers = name === "Officers";
                const isDirectors = name === "Directors";
                const isHonorary = name === "Honorary Advisory Board";
                
                return (
                  <div key={name} className="mb-16 md:mb-20">
                    {/* Section Header */}
                    <div className="mb-8 text-center md:mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#1e3a5f] relative inline-block pb-4">
                        {name}
                        <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#c17854]"></span>
                      </h2>
                      {isHonorary && (
                        <p className="mt-4 text-lg italic text-gray-500">
                          Former School Superintendents
                        </p>
                      )}
                    </div>

                    {/* Members Grid */}
                    <div className={`grid gap-6 ${
                      isOfficers 
                        ? "md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto" 
                        : isDirectors || isHonorary
                        ? "md:grid-cols-2 lg:grid-cols-3"
                        : "md:grid-cols-2 max-w-3xl mx-auto"
                    }`}>
                      {posts
                        .filter((post) => post.boardName.en === name)
                        .map((filteredPost, idx) => {
                          const isMultiColumn = (isDirectors && idx >= 4) || isHonorary;
                          
                          return (
                            <div
                              key={idx}
                              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854]/30 ${
                                !isMultiColumn && "md:col-span-2 lg:col-span-3"
                              }`}
                            >
                              <div className={isMultiColumn ? "text-center" : "text-center md:text-left"}>
                                <h3 className="text-xl md:text-2xl font-bold text-[#120902] mb-2">
                                  {filteredPost.name.en}
                                </h3>
                                <p className="text-base text-gray-600 md:text-lg">
                                  {filteredPost.position.en}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto mt-16 mb-12 md:mt-24 md:mb-16">
              <div className="bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] rounded-2xl p-8 md:p-12 text-center border-2 border-[#1e3a5f]/10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                  Join Our Mission
                </h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">
                  Interested in supporting educational opportunities for students? Learn more about our programs and how you can get involved.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/about">
                    <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg">
                      Learn About Us
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#1e3a5f] text-white hover:bg-[#0f1f3d] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Pages Navigation */}
            <div className="max-w-6xl pt-12 pb-16 mx-auto border-t border-gray-200 md:pt-16 md:pb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
                Explore More About Us
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Link href="/about">
                  <a className="group">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854] h-full">
                      <div className="mb-4 text-4xl">🎯</div>
                      <h4 className="text-xl font-bold text-[#120902] mb-2 group-hover:text-[#1e3a5f] transition-colors">
                        Our Mission
                      </h4>
                      <p className="text-gray-600">
                        Learn about our vision and values
                      </p>
                    </div>
                  </a>
                </Link>
                
                <Link href="/founder">
                  <a className="group">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854] h-full">
                      <div className="mb-4 text-4xl">✍️</div>
                      <h4 className="text-xl font-bold text-[#120902] mb-2 group-hover:text-[#1e3a5f] transition-colors">
                        Founder's Message
                      </h4>
                      <p className="text-gray-600">
                        Hear from our founder
                      </p>
                    </div>
                  </a>
                </Link>
                
                <Link href="/history">
                  <a className="group">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854] h-full">
                      <div className="mb-4 text-4xl">📚</div>
                      <h4 className="text-xl font-bold text-[#120902] mb-2 group-hover:text-[#1e3a5f] transition-colors">
                        Our History
                      </h4>
                      <p className="text-gray-600">
                        Explore our journey
                      </p>
                    </div>
                  </a>
                </Link>
                
                <Link href="/programs">
                  <a className="group">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854] h-full">
                      <div className="mb-4 text-4xl">🌏</div>
                      <h4 className="text-xl font-bold text-[#120902] mb-2 group-hover:text-[#1e3a5f] transition-colors">
                        Programs
                      </h4>
                      <p className="text-gray-600">
                        See what we offer
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "team"] | order(order) {
  ...,
}
`;

export async function getStaticProps({ params, preview = false }) {
  const program = await getClient(preview).fetch(query);

  return {
    props: {
      postdata: program,
      preview,
    },
    revalidate: 10,
  };
}