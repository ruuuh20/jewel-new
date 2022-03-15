import Layout from "@/components/layout";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Link from "next/link";

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

import Image from "next/image";

export default function Leadership(props) {
  const { postdata, preview, program } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });
 
  const boardNames = ["Officers", "Directors", "Honorable Advisor"];
  return (
    <Layout>
      <NextSeo title="Leadership" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pt-[75px] pb-[75px]"
        >
          <Container>
            <div className="relative pb-[50px] md:mb-3">
              <div className="mx-auto max-w-[600px] md:max-w-[740px]">
                <h1 className="block uppercase py-7 md:text-5xl ">
                  {locale === "ko" ? "함께하는 사람들" : "Our Team"}
                </h1>
              </div>
            </div>
            {boardNames.map((name) => (
              <>
                <div className="border-b border-current w-full py-1">
                  <h3 className="text-xl">{name}</h3>

                  <ul className="list-none">
                    {posts
                      .filter((post) => post.boardName.en === name)
                      .map((filteredPost) => (
                        <li className="py-2">
                          <p className="font-bold text-lg">
                            {filteredPost.name.en}
                          </p>
                          <p className="text-gray-500">
                            {filteredPost.position.en}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            ))}

            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <Container>
                      <div className="max-w-3xl  relative mb-16 md:mb-20 2xl:mb-28 mx-[3%] md:mx-[5%] lg:mx-24 2xl:mx-32">
                        <div className="block mb-4 overflow-hidden md:mb-6 2xl:mb-8">
                          <div className="relative mb-2 md:mb-3">
                            <h2 className="block uppercase md:text-lg ">asd</h2>
                          </div>
                          <div className="w-full pr-12 text-2xl md:text-3xl xl:text-4xl">
                            <p className="font-bold leading-snug">asd</p>
                          </div>
                        </div>
                      </div>
                    </Container>

                    <Link href="/about" locale="ko">
                      <a>To /ko/another</a>
                    </Link>

                    <hr />
                    <Container>
                      <div className="relative mb-2 md:mb-3">
                        <h2 className="block uppercase md:text-lg ">
                          Our Team / Leadership
                        </h2>
                      </div>
                      <div className="relative z-20 grid grid-cols-2 gap-4 mb-16 md:gap-6 md:grid-cols-3 md:mb-24 2xl:mb-32 md:mx-16 2xl:mx-24">
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="block pb-0 mb-0 text-lg leading-tight md:text-xl 2xl:text-2xl font-display">
                            Joe Smith
                          </h4>
                          <span className="text-xs italic md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="block pb-0 mb-0 text-lg leading-tight md:text-xl 2xl:text-2xl font-display">
                            Joe Smith
                          </h4>
                          <span className="text-xs italic md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="block pb-0 mb-0 text-lg leading-tight md:text-xl 2xl:text-2xl font-display">
                            Joe Smith
                          </h4>
                          <span className="text-xs italic md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="block pb-0 mb-0 text-lg leading-tight md:text-xl 2xl:text-2xl font-display">
                            Joe Smith
                          </h4>
                          <span className="text-xs italic md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="block pb-0 mb-0 text-lg leading-tight md:text-xl 2xl:text-2xl font-display">
                            Joe Smith
                          </h4>
                          <span className="text-xs italic md:text-sm">
                            Member
                          </span>
                        </div>
                        <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                          <div className="border-blue border-2 mb-3 md:mb-4 bg-pink h-[50vw] md:h-[27vw] lg:h-[29vw] xl:h-[33vw] 2xl:h-[31.5vw] max-h-[480px] relative team-image">
                            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                              image
                            </div>
                          </div>
                          <h4 className="block pb-0 mb-0 text-lg leading-tight md:text-xl 2xl:text-2xl font-display">
                            Joe Smith
                          </h4>
                          <span className="text-xs italic md:text-sm">
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
 *[_type == "team"] | order(_createdAt desc) {
  
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
