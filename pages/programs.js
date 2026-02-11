import Layout from "@/components/layout";
import Container from "@/components/container";
import RelatedPages from "@/components/RelatedPages";
import Link from "next/link";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";
import Accordion from "@/components/accordion";
import { PortableText } from "@portabletext/react";
import ImageComponent from "@/components/image";

export default function Programs(props) {
  const { postdata, preview } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <Layout>
      <NextSeo title="Programs" description="Our current programs" />

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
                    Programs
                  </h1>
                  <div className="text-sm font-semibold tracking-wide text-gray-600 uppercase md:text-lg">
                    <span>프로그램</span>
                  </div>
                </div>
                <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                  Explore our educational and cultural programs designed to empower students and build global connections.
                </p>
              </div>
            </Container>
          </div>

          <Container>
            {/* Programs List Section */}
            <section className="py-16 md:py-24">
              <div className="max-w-5xl mx-auto">
                <m.div>
                  <ul className="space-y-4">
                    {posts &&
                      posts.map((post, i) => (
                        <li key={i}>
                          <Accordion
                            heading={post.title.en}
                            index={`0${i + 1}`}
                          >
                            <div className="mb-6 prose prose-lg max-w-none">
                              <PortableText value={post.descriptionBlockEn} />
                            </div>
                            
                            {/* Image Gallery */}
                            {post.images && post.images.length > 0 && (
                              <div className="grid gap-4 mt-6 md:grid-cols-3">
                                {post.images.map((img, index) => (
                                  <div key={index} className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-md hover:shadow-xl">
                                    <ImageComponent
                                      alt={`${post.title.en} - Image ${index + 1}`}
                                      className="block object-cover object-center w-full h-full"
                                      image={img}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </Accordion>
                        </li>
                      ))}
                  </ul>
                </m.div>
              </div>
            </section>
          </Container>

          {/* Call to Action */}
          <Container>
            <section className="py-12 md:py-16">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] rounded-2xl p-8 md:p-12 text-center border-2 border-[#1e3a5f]/10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                  Ready to Join a Program?
                </h3>
                <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-700">
                  Discover how our programs can help you grow, learn, and connect with cultures around the world.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/roots-and-routes">
                    <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg hover:-translate-y-0.5">
                      Roots & Routes Program
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#1e3a5f] text-white hover:bg-[#0f1f3d] transition-all duration-300 text-lg shadow-lg hover:shadow-xl rounded-lg hover:-translate-y-0.5">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </Container>

          {/* Related Pages Navigation */}
          <RelatedPages 
            title="Learn More About Educate Together"
            pages={[
              { href: "/about", title: "Our Mission", description: "Learn about our vision and values" },
              { href: "/leadership", title: "Leadership", description: "Meet our team" },
              { href: "/history", title: "Our History", description: "Explore our journey" },
              { href: "/contact", title: "Contact Us", description: "Get in touch" }
            ]}
          />
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "program"] | order(ID) {
  ...,
  title,
  descriptionBlockEn,
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