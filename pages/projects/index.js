import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
} from "../../sanity";
import { fade } from "@/helpers/transitions";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Link from "next/link";
import ImageComponent from "@/components/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

export default function Projects(props) {
  const { postdata, preview } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <>
      <Layout>
        <NextSeo title="Projects" />
         <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pt-[90px] md:pt-[180px] pb-[45px]"
          variants={fade}
        >
        <Container>
          <div className="relative w-full pt-8 pb-[88px] md:max-4xl">
           
            <h2 className="relative block pb-0 pr-12 mb-0 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
             Current Projects
            </h2>
             <span className="relative block pt-2 pb-0 pr-12 mb-0 text-xl font-light leading-normal tracking-tight text-gray-400 md:text-2xl lg:text-3xl">
              We implement a broad range of educational and cultural initiatives.
            </span>
          </div>

          {posts &&
            posts.map((post) => (
              <section>
                <div className="max-w-screen-xl px-4 md:py-16 mx-auto sm:px-6 px-0 lg:px-8">
                  <div className="grid grid-cols-1 gap-0 lg:gap-16 lg:grid-cols-2">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                      <div
                        className="absolute inset-0 object-cover w-full h-full image-container2"
                        alt="Student studying"
                      >
                        {/* <Image
                    src="/ganadara-logo.png"
                    alt="Student studying"
                    layout="fill"
                  /> */}

                        <ImageComponent
                          image={
                            post.mainImage !== null
                              ? post.mainImage.url
                              : "https://via.placeholder.com/50"
                          }
                        />
                      </div>
                    </div>

                    <div className="lg:py-24">
                      <h2 className="font-serif text-2xl font-bold md:text-3xl mb-0">
                        {post.title[locale]}
                      </h2>

                      <p className="mt-4 text-gray-600">{post.cardDescription}</p>
                      <Link href={`/projects/${post.slug.current}`}>
                        <a className="inline-flex items-center px-8 py-3 mt-4 font-extrabold border rounded text-darkgray bg-yellow border-yellow hover:bg-transparent hover:text-blue active:text-blue focus:outline-none focus:ring">
                          <span className="text-base font-extrabold">
                            {" "}
                            Explore
                          </span>

                          <svg
                            className="w-5 h-5 ml-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ))}
        </Container>
        </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}

const query = groq`
*[_type == "project"] | order(id) {
  ..., 
  title,
  cardDescription,
  slug,
  mainImage {
  ...asset->
},
 
}
`;

export async function getStaticProps({ params, preview = false }) {
  const contactData = await getClient(preview).fetch(query);

  return {
    props: {
      postdata: contactData,
      preview,
    },
    revalidate: 10,
  };
}
