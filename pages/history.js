import Layout from "@/components/layout";
import Container from "@/components/container";
import RelatedPages from "@/components/RelatedPages";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

const myPortableTextComponents = {
  types: {
    listItem: {
      bullet: ({ children }) => (
        <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
      ),
      checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
    image: ({ value }) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
};

export default function History(props) {
  const { postdata, preview, program } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <Layout>
      <NextSeo title="Our History" description="History of the organization" />
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
                    Our History
                  </h1>
                  <div className="text-sm font-semibold tracking-wide text-gray-600 uppercase md:text-lg">
                    <span>우리의 역사</span>
                  </div>
                </div>
                {posts && posts[0] && (
                  <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                    {posts[0].history[locale]}
                  </p>
                )}
              </div>
            </Container>
          </div>

          {/* Timeline Section */}
          <Container>
            <section className="py-16 md:py-24">
              <div className="max-w-5xl mx-auto">
                <m.div variants={fade}>
                  {posts &&
                    posts.map((post) => (
                      <div key={post._id} className="space-y-12">
                        {post.timelineItems?.map((item, i) => {
                          const isLast = i === post.timelineItems.length - 1;
                          
                          return (
                            <div 
                              key={i} 
                              className={`relative pl-8 md:pl-12 ${
                                isLast ? 'border-l-4 border-gray-300' : 'border-l-4 border-[#c17854]'
                              }`}
                            >
                              {/* Timeline Marker */}
                              <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-white ${
                                isLast ? 'bg-[#1e3a5f]' : 'bg-[#c17854]'
                              }`}></div>
                              
                              {/* Year Badge */}
                              <div className="mb-4">
                                <span className={`inline-block px-4 py-2 text-sm font-bold text-white rounded-full ${
                                  isLast ? 'bg-[#1e3a5f]' : 'bg-[#c17854]'
                                }`}>
                                  {item.timelineItemYear[locale]}
                                </span>
                              </div>

                              {/* Content */}
                              <div className="leading-relaxed prose prose-lg text-gray-700 max-w-none">
                                <PortableText 
                                  value={item.timelineBlockEn} 
                                  components={myPortableTextComponents}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                </m.div>
              </div>
            </section>
          </Container>

          {/* Call to Action */}
          <Container>
            <section className="py-12 md:py-16">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] rounded-2xl p-8 md:p-12 text-center border-2 border-[#1e3a5f]/10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                  Be Part of Our Story
                </h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">
                  Join us in creating educational opportunities and cultural connections for the next generation.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/programs">
                    <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg hover:-translate-y-0.5">
                      Explore Our Programs
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#1e3a5f] text-white hover:bg-[#0f1f3d] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg hover:-translate-y-0.5">
                      Get Involved
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </Container>

          {/* Related Pages Navigation */}
          <RelatedPages 
            title="Learn More About Us"
            pages={[
              { href: "/about", title: "Our Mission", description: "Learn about our vision and values" },
              { href: "/founder", title: "Founder's Message", description: "Hear from our founder" },
              { href: "/leadership", title: "Leadership", description: "Meet our team" },
              { href: "/programs", title: "Programs", description: "See what we offer" }
            ]}
          />
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "about" && title.en == "Our Mission"] {
  ...,
  history,
  content,
  welcomeText,
  introText,
  founderBlurb,
  "imageUrl": heroImage.asset->url,
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