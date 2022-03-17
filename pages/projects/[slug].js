import client, { sanityClient } from "sanity";
import Layout from "@/components/layout";
import ImageComponent from "../../components/image";
import groq from "groq";
import { useRouter } from "next/router";
import Container from "@/components/container";
// function urlFor(source) {
//   return imageUrlBuilder(client).image(source);
// }
const Project = ({ program }) => {
  if (!program) return null;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <Layout>
      <Container>
        {/* <div className="relative w-full pt-8 pb-[88px]"></div> */}

        <div className="images-section mb-16">
          <ImageComponent
            identifier="main-image"
            image={program.mainImage ? program.mainImage : null}
          />
        </div>
        <div className="grid grid-cols-12 gap-16 mb-2">
          <div className="col-span-8 col-end-auto">
            <h1 className="md:text-6xl">
              {program.title[locale] ? program.title[locale] : ""}
            </h1>
            <h2 className="md:text-6xl mb-12">July - Aug 2022</h2>
            <div className="content-inner">
              <p className="mb-4 text-xl">{program.contentOne}</p>
              <p className="mb-4 text-xl">{program.contentTwo}</p>
              <p className="mb-4 text-xl">{program.contentThree}</p>
            </div>
            <div>Photos from previous trips</div>
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