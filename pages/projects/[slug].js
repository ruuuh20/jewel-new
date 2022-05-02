import client, { sanityClient } from "sanity";
import Layout from "@/components/layout";
import ImageComponent from "../../components/image";
import groq from "groq";
import { useRouter } from "next/router";
import Container from "@/components/container";
import { NextSeo } from "next-seo";
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
          <h1 className="font-serif text-[32px] md:text-[50px] leading">
            {program.title[locale] ? program.title[locale] : ""}
          </h1>
        </div>
        <div className="mb-16 images-section">
          <ImageComponent
            identifier="main-image"
            image={program.mainImage ? program.mainImage : null}
          />
        </div>
        <div className="grid grid-cols-12 gap-16 mb-2">
          <div className="col-span-8 col-end-auto">
            <div className="content-inner">
              <p className="mb-4 text-xl">{program.contentOne}</p>
              <p className="mb-4 text-xl">{program.contentTwo}</p>
              <p className="mb-4 text-xl">{program.contentThree}</p>
            </div>
          </div>
          <div className="col-span-4 col-end-auto">
            <div className="sticky top-3">
              <div className="border-t">
                <div className="border-b">
                  <div className="text-center uppercase">Overview</div>
                  <div className="mb-2">
                    <p> {program.overview}</p>
                  </div>
                </div>
                <div className="border-b">
                  <div className="text-center uppercase">Key Dates</div>
                  <div className="mb-2">
                    <p> {program.keyDates}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 gallery-container">
          <div>
            <h3 className="text-xl font-bold">
              Photos from our past events or programs
            </h3>
          </div>
          <div>
            <section class="overflow-hidden text-gray-700 ">
              <div class="container px-4 py-2 mx-auto lg:pt-12 lg:px-16">
                <div class="flex flex-wrap -m-1 md:-m-2">
                  {program.images
                    ? program.images.map((img, index) => (
                        <div class="flex flex-wrap w-1/3">
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
 mainImage
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
