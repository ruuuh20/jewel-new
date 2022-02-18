import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";

import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
  urlFor,
} from "../sanity";
import ImageStandard from "@/components/imageStandard";
import ImageWrapper from "@/components/imageWrapper";
import ImageComponent from "@/components/image";

import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";

export default function About(props) {
  const { postdata, preview, program } = props;

  const router = useRouter();

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });
  console.log(posts);
  return (
    <Layout>
      <NextSeo title="About" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pt-[75px] pb-[75px]"
        >
          <Container>
            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <Container>
                      <div className="max-w-3xl  relative mb-16 md:mb-20 2xl:mb-28 mx-[3%] md:mx-[5%] lg:mx-24 2xl:mx-32">
                        <div className="block overflow-hidden mb-4 md:mb-6 2xl:mb-8">
                          <div className="relative mb-2 md:mb-3">
                            <h2 className="md:text-lg uppercase block ">
                              {post.title}
                            </h2>
                          </div>
                          <div className="text-2xl md:text-3xl xl:text-4xl w-full pr-12">
                            <p className="font-bold leading-snug">
                              {post.introText}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Container>

                    <Container>
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 content md:px-12 xl:px-16 max-w-2xl">
                          <div className="content">
                            <p>{post.goals}</p>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 relative content mb-8 md:mb-0 overflow-hidden">
                          <figure className="mb-6 md:mb-8 xl:mb-10">
                            <ImageComponent
                              image={
                                post.imageUrl !== null
                                  ? post.imageUrl
                                  : "https://via.placeholder.com/50"
                              }
                            />
                          </figure>
                        </div>
                      </div>
                    </Container>

                    {/* flex 2 columns */}
                    <Container>
                      <div className="relative mb-2 md:mb-3">
                        <h2 className="md:text-lg uppercase block ">
                          Our History
                        </h2>
                      </div>

                      <div className="flex flex-wrap md-mx-6 border-t border-opacity-50 md:py-8 py-5">
                        <div className="w-full md:w-7/12 xl:w-2/6 md:px-6 md:mb-0">
                          <div className="max-w-xl">
                            <div className="text-2xl md:text-3xl xl:text-4xl w-full text-right">
                              <p>2021</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-7/12 xl:w-4/6 md:pl-10 ml-auto leading-8">
                          <p>01 list of events lorem ipsum </p>
                          <p>02 list of events lorem ipsum</p>
                          <p> 03 list of events lorem ipsum</p>
                          <p>04 list of events lorem ipsum</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap md-mx-6 border-t border-opacity-50 md:py-8 py-5">
                        <div className="w-full md:w-7/12 xl:w-2/6 md:px-6 md:mb-0">
                          <div className="max-w-xl">
                            <div className="text-2xl md:text-3xl xl:text-4xl w-full text-right">
                              <p>2020</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-7/12 xl:w-4/6 md:pl-10 ml-auto leading-8">
                          <p>01 list of events</p>
                          <p>02 list of events</p>
                          <p> 03 list of events</p>
                          <p>04 list of events</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap md-mx-6 border-t border-opacity-50 md:py-8 py-5">
                        <div className="w-full md:w-7/12 xl:w-2/6 md:px-6 md:mb-0">
                          <div className="max-w-xl">
                            <div className="text-2xl md:text-3xl xl:text-4xl w-full text-right">
                              <p>2019</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-7/12 xl:w-4/6 md:pl-10 ml-auto leading-8">
                          <p>01 list of events</p>
                          <p>02 list of events</p>
                          <p>03 list of events</p>
                          <p>04 list of events</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap md-mx-6 border-t border-opacity-50 md:py-8 py-5">
                        <div className="w-full md:w-7/12 xl:w-2/6 md:px-6 md:mb-0">
                          <div className="max-w-xl">
                            <div className="text-2xl md:text-3xl xl:text-4xl w-full text-right">
                              <p>2018</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-7/12 xl:w-4/6 md:pl-10 ml-auto leading-8">
                          <p>01 list of events</p>
                          <p>02 list of events</p>
                          <p> 03 list of events</p>
                          <p>04 list of events</p>
                        </div>
                      </div>
                    </Container>
                    <hr />
                    <Container>
                      <div className="relative mb-2 md:mb-3">
                        <h2 className="md:text-lg uppercase block ">
                          Our Team / Leadership
                        </h2>
                      </div>
                      <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 mb-16 md:mb-24 2xl:mb-32 relative z-20 md:mx-16 2xl:mx-24">
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="mb-0 pb-0 text-lg md:text-xl 2xl:text-2xl font-display block mb-0 pb-0 leading-tight">
                            Joe Smith
                          </h4>
                          <span className="italic text-xs md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="mb-0 pb-0 text-lg md:text-xl 2xl:text-2xl font-display block mb-0 pb-0 leading-tight">
                            Joe Smith
                          </h4>
                          <span className="italic text-xs md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="mb-0 pb-0 text-lg md:text-xl 2xl:text-2xl font-display block mb-0 pb-0 leading-tight">
                            Joe Smith
                          </h4>
                          <span className="italic text-xs md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="mb-0 pb-0 text-lg md:text-xl 2xl:text-2xl font-display block mb-0 pb-0 leading-tight">
                            Joe Smith
                          </h4>
                          <span className="italic text-xs md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="mb-0 pb-0 text-lg md:text-xl 2xl:text-2xl font-display block mb-0 pb-0 leading-tight">
                            Joe Smith
                          </h4>
                          <span className="italic text-xs md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="mb-0 pb-0 text-lg md:text-xl 2xl:text-2xl font-display block mb-0 pb-0 leading-tight">
                            Joe Smith
                          </h4>
                          <span className="italic text-xs md:text-sm">
                            Member
                          </span>
                        </div>
                      </div>
                    </Container>

                    <div className="max-w-3xl mb-4 content">
                      <p className="block font-bold text-xl md:text-[2.75vw] 2xl:text-[38px] leading-snug relative mb-5 md:mb-8 2xl:mb-10">
                        {post.introText}
                      </p>
                    </div>
                    <ImageComponent
                      image={
                        post.imageUrl !== null
                          ? post.imageUrl
                          : "https://via.placeholder.com/50"
                      }
                    />
                    {/* <Img src={post.heroImage? post.heroImage : "https://via.placeholder.com/100"}layout="fill" />  */}
                  </>
                ))}

              <FancyLink
                destination="/"
                a11yText="Navigate to the home page"
                label="Home Page"
              />
              {posts &&
                posts.map((post) => (
                  <article>
                    <h3 className="text-lg"> this is an article </h3>
                  </article>
                ))}
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}

const query = groq`
 *[_type == "about" && title == "About"] | order(_createdAt desc) {
  
...,
 "imageUrl": heroImage.asset->url

 
}
`;

// export const getServerSideProps = async() => {
//   const query = `*[ _type == "about"]{
//     title,
//     description
//   }`
//   const about = await sanityClient.fetch(query)

//   if (!about.length) {
//     return {
//       props: {
//         about: []
//       },
//     }

//   } else {
//     return {
//       props: {
//        about
//       }
//     }
//   }
// }

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
