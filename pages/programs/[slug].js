import client, { sanityClient } from "sanity";
import NextImage from "next/image";
import ImageComponent from "../../components/image";
import groq from "groq";
import { ImageUrlBuilder } from "@sanity/image-url";

// function urlFor(source) {
//   return imageUrlBuilder(client).image(source);
// }
const Program = ({ program }) => {
 
console.log(program)
  return (
    <div className="container">
    
      <p>{program.title ? program.title : 'no title'}</p>
      <div className="images-section">
        <NextImage
          src="https://via.placeholder.com/150"
          width={200}
          height={200}
        />
      </div>
      <div className="images-section">
        <ImageComponent identifier="main-image" image={mainImage} />
      </div>
    </div>
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
const query = groq`*[_type == "program" && slug.current == $slug][0]{
  title,
 mainImage
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`
      *[_type == "program" && defined(slug.current)][].slug.current
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
    *[_type == "program" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      program,
    },
  };
}

export default Program;
