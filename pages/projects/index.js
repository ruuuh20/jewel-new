import Head from "next/head";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "../../sanity";

import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Link from "next/link";
import ImageComponent from "@/components/image";
import ImageStandard from "@/components/imageStandard";
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

        <Container>
          <div className="relative w-full pt-8 pb-[88px]">
            <h2 className="relative block pb-0 pr-12 mb-0 text-2xl font-light leading-normal tracking-tight text-gray-400 md:text-3xl lg:text-4xl 2xl:text-5xl">
              Projects
            </h2>
            <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
              Our Current Projects
            </span>
          </div>

          <div className="relative flex flex-wrap">
            {posts &&
              posts.map((post) => (
                <Link href={`/${post.slug}`}>
                  <a className="flex flex-wrap m-auto border-b group md:mb-10 md:w-2/5 project-card">
                    <div className="m-auto w-full">
                      <ImageComponent
                        image={
                          post.mainImage !== null
                            ? post.mainImage.url
                            : "https://via.placeholder.com/50"
                        }
                      />
                    </div>

                    <div className="flex w-full justify-center">
                      <div className="p-5 intro">
                        <h3 className="block w-full text-2xl md:text-3xl project-title">
                          {post.title[locale]}
                        </h3>
                        <p>{post.description}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}

const query = groq`
*[_type == "project"] | order(_createdAt desc) {
  ..., 
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
