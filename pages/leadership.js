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
      <NextSeo title="Leadership" />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24  pt-[90px] md:pt-[180px] pb-[45px]"
          variants={fade}
        >
          <Container>
            <div className="relative w-full pt-8 pb-[88px]">
               <div className="hidden md:block absolute overflow-visible spin-slow spin-container mt-3">
              <div className="relative">
                <Image
                  
                  src="/ham-logo.png"
                  width="40"
                  height="40"
                />
              </div>
            </div>
              <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl left-0 md:left-[4%]">
                {locale === "ko" ? "함께하는 사람들" : "Leadership"}
              </span>
            </div>

            <div className="flex flex-wrap mx-auto md:px-0 md:w-10/12">
              {boardNames.map((name, i) => {
                let col = "w-full";
                let p = "pr-0";
                // if (i === 2 || i === 3) {
                //   col = "md:w-1/2";
                //   p = "pr-4";
                // }
                if (i === 1) {
                  
                }
                return (
                  <>
                    <div className={`${col} w-full md:mb-4`}>
                      <div className="mx-auto">
                        <div className="w-full mx-auto overflow-hidden">
                          <div className="flex flex-wrap w-full">
                            <div className={`${p} w-full mb-16`}>
                              <div className="flex flex-col flex-wrap items-center justify-center">
                                <div className="flex flex-col flex-wrap mb-2 md:mb-6">
                                  <span className="uppercase tracking-wide text-2xl  md:text-3xl block mb-0 pb-0 font-display leading-none pt-1 relative block pb-2 mb-2  after:absolute after:h-[4px] after:bg-yellow after:w-[100%] after:left-[0] after:right-[12.5%] after:bottom-[-5%] text-center">
                                    {name}
                                  </span>

                                  <span className="text-base italic text-center text-gray-500 md:text-xl">
                                    {name === "Honorary Advisory Board"
                                      ? "Former School Superintendants"
                                      : null}
                                  </span>
                                </div>
                                <div className="w-full 2xl:max-w-5xl">
                                  <div className="leading-snug text-center lg:text-lg">
                                    <ul className="flex flex-wrap list-none">
                                      {posts
                                        .filter(
                                          (post) => post.boardName.en === name
                                        )
                                        .map((filteredPost, i) => (
                                         ( i >= 3 && filteredPost.boardName.en === "Directors" || filteredPost.boardName.en === "Honorary Advisory Board") ? (
                                            <li className="w-1/3 py-2">
                                            <p className="font-bold md:text-lg">
                                               {filteredPost.name.en} 
                                            </p>
                                            <p className="text-gray-500">
                                              {filteredPost.position.en}
                                            </p>
                                          </li>
                                          ) : (
                                            <li className="w-full py-2 md:px-16">
                                            <p className="font-bold md:text-lg">
                                               {filteredPost.name.en}
                                            </p>
                                            <p className="text-gray-500">
                                              {filteredPost.position.en}
                                            </p>
                                          </li>
                                          )
                                          
                                         
                                        ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            {/* <Container>
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
                     
                      </div>
                    </Container> */}

                    <hr className="my-8 md:my-16"/>
            <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
              <PageNav />
            </section>
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
