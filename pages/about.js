import Layout from "@/components/layout";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Link from "next/link";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";

export default function About(props) {
  const { postdata, preview } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <Layout>
      <NextSeo title="About" description="Educate Together is a nonprofit organization" />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
          className="mb-12 md:mb-16 xl:mb-24"
        >
          {/* Hero Header */}
          <div className="relative w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] pt-16 pb-12 md:pt-24 md:pb-16">
            <Container>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#1e3a5f] tracking-tight">
                    About Us
                  </h1>
                  <div className="text-sm font-semibold tracking-wide text-gray-600 uppercase md:text-lg">
                    <span>함께하는교육 소개</span>
                  </div>
                </div>

                {posts && posts.map((post) => (
                  <div key={post._id}>
                    <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                      {post.introText}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </div>

          {/* Mission & Goals Section */}
          <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-6xl mx-auto">
                <div className="grid gap-12 md:gap-16 lg:grid-cols-2">
                  {/* Our Mission */}
                  <div>
                    <div className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 relative inline-block pb-3">
                        Our Mission
                        <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#c17854]"></span>
                      </h2>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border-l-4 border-[#c17854] shadow-sm">
                        <p className="text-lg leading-relaxed text-gray-700">
                          To enhance awareness and appreciation of cultural diversity by providing resources and expertise in language education and cultural programs.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-lg border-l-4 border-[#c17854] shadow-sm">
                        <p className="text-lg leading-relaxed text-gray-700">
                          By fostering mutual understanding and collaboration, Educate Together serves as a bridge for communities to explore cultures around the world.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Our Goals */}
                  <div>
                    <div className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 relative inline-block pb-3">
                        Our Goals
                        <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#c17854]"></span>
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold">
                            1
                          </div>
                          <p className="flex-1 text-lg leading-relaxed text-gray-700">
                            Provide opportunities for the enrichment and learning of Asian cultures and history.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold">
                            2
                          </div>
                          <p className="flex-1 text-lg leading-relaxed text-gray-700">
                            Empower future generations to celebrate their own heritage while engaging with other cultures.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c17854] text-white flex items-center justify-center font-bold">
                            3
                          </div>
                          <p className="flex-1 text-lg leading-relaxed text-gray-700">
                            Promote mutual understanding for world cultures and methods of education.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Container>

          {/* Related Pages Navigation */}
          <Container>
            <section className="py-12 border-t border-gray-200 md:py-16">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
                  Learn More About Educate Together
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Link href="/founder">
                    <a className="group">
                      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854] h-full hover:-translate-y-1">
                        <h4 className="text-xl font-bold text-[#120902] mb-2 group-hover:text-[#1e3a5f] transition-colors">
                          Founder's Message
                        </h4>
                        <p className="text-gray-600">
                          Hear from our founder
                        </p>
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="/leadership">
                    <a className="group">
                      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854] h-full hover:-translate-y-1">
                        <h4 className="text-xl font-bold text-[#120902] mb-2 group-hover:text-[#1e3a5f] transition-colors">
                          Leadership
                        </h4>
                        <p className="text-gray-600">
                          Meet our team
                        </p>
                      </div>
                    </a>
                  </Link>
                  
                  <Link href="/history">
                    <a className="group">
                      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854] h-full hover:-translate-y-1">
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
                      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854] h-full hover:-translate-y-1">
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
            </section>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "about" && title.en == "Our Mission"] | order(_createdAt desc) {
  ...,
  title,
  introText,
  "imageUrl": heroImage.asset->url,
  "foundersImageUrl": foundersImage.asset->url
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