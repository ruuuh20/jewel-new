import client, { sanityClient } from "sanity";
import Layout from "@/components/layout";
import ImageComponent from "../../components/image";
import groq from "groq";
import { useRouter } from "next/router";
import Container from "@/components/container";
import { NextSeo } from "next-seo";
import { PortableText } from "@portabletext/react";
// function urlFor(source) {
//   return imageUrlBuilder(client).image(source);
// }
const Project = ({ program }) => {
  if (!program) return null;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <Layout>
      <NextSeo title={program.title[locale]} />
      <Container>
        <section class="h-auto py-4 md:py-[6rem]">
          <button
            className="flex flex-wrap items-center"
            type="button"
            onClick={() => router.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4"
              viewBox="0 0 27.197 23.217"
            >
              <g
                data-name="Group 116"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  data-name="Path 1"
                  d="M12.314 22.51l-10.9-10.9 10.9-10.9"
                ></path>
                <path data-name="Path 2" d="M1.414 11.609h25.783"></path>
              </g>
            </svg>
            <span className="ml-3">Go Back to Projects</span>
          </button>
        </section>

        {/* <div className="relative w-full pt-8 pb-[88px]"></div> */}
        <div className="w-full md:w-1/2">
          <h1 className="font-serif text-[26px] md:text-[50px] leading">
            {program.title[locale] ? program.title[locale] : ""}
          </h1>
        </div>
        <div className="mb-16 images-section">
          <ImageComponent
            identifier="main-image"
            image={program.mainImage ? program.mainImage : null}
          />
        </div>
        <div className="grid grid-cols-12 gap-4 mb-2 md:gap-16">
          <div className="col-span-12 col-end-auto md:col-span-8">
            <div className="content-inner">
              <p className="mb-4 text-xl">{program.contentOne}</p>
              <p className="mb-4 text-xl">{program.contentTwo}</p>
              <p className="mb-4 text-xl">{program.contentThree}</p>
              {program.blockContent ? (
                <PortableText value={program.blockContent} />
              ) : null}
            </div>
            <div className="col-span-12 col-end-auto md:col-span-6">
              {program.poster
                ? program.poster.map((poster, i) => (
                    <ImageComponent
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      image={poster}
                    />
                  ))
                : null}
            </div>
          </div>
          <div className="col-span-12 col-end-auto mb-4 md:col-span-4 md:mb-0">
            <div className="md:sticky md:top-3">
              <div className="border-t">
                <div className="py-2 border-b">
                  <div className="mb-2 text-center uppercase ">Overview</div>
                  <div className="mb-2">
                    <p> {program.overview}</p>
                  </div>
                </div>
                <div className="py-2 border-b">
                  <div className="mb-2 text-center uppercase ">Key Dates</div>
                  <div className="mb-2">
                    <p> {program.keyDates}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 gallery-container">
          <div>
            <section class="overflow-hidden text-gray-700 ">
              <div class="container px-0 md:px-4 md:py-2 mx-auto lg:pt-12 lg:px-8">
                <div class="flex flex-wrap -m-1 md:-m-2">
                  {program.images
                    ? program.images.map((img, index) => (
                        <div class="flex flex-wrap w-full md:w-1/3">
                          <div class="w-full p-1 md:p-2">
                            <ImageComponent
                              alt="gallery"
                              class="block object-cover object-center w-full h-full rounded-lg"
                              image={img}
                            />
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="py-2 md:py-10">
          <div className="flex items-center justify-end">
            <div className="flex md:my-4">
              {program.previousSlug ? (
                <a
                  href={`/projects/${program.previousSlug}`}
                  class="inline-flex items-center py-2 px-4 mr-3 text-xl font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    class="mr-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Previous Project
                </a>
              ) : null}
              {program.nextSlug ? (
                <a
                  href={`/projects/${program.nextSlug}`}
                  class="inline-flex items-center py-2 px-4 text-xl font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next Project
                  <svg
                    class="ml-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

// export const getServerSideProps = async (pageContext) => {
//   const pageSlug = pageContext.query.slug;
//   const query = `*[ _type == "program" && slug.current == $pageSlug][0]{

//         mainImage,
//         images,
//         description
//     }`;

//   const program = await sanityClient.fetch(query, { pageSlug });

//   if (!program) {
//     return {
//       props: null,
//       notFound: true,
//     };
//   } else {
//     return {
//       props: {
//         title: program.title,
//         mainImage: program.mainImage,
//         images: program.images,
//         description: program.description,
//       },
//     };
//   }
// };
const query = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
 mainImage,
 previousSlug,
 nextSlug
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`
      *[_type == "project" && defined(slug.current)][].slug.current
    `
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const program = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      program,
    },
  };
}

export default Project;
