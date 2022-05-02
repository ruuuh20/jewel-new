
import Head from "next/head";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
} from "../sanity";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Form from "@/components/form";

export default function GetInvolved(props) {
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
        <NextSeo title="Get Involved" />
        <Container>
          <div className="relative w-full pt-8 pb-[88px]">
            <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
            Get Involved
            </span>
          </div>
        </Container>
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full p-10 lg:w-5/12">
              <p className="text-xl">
                Volunteer opportunities for students. Sign up for our email list.

              </p>{" "}
              <div className="py-8 box">
                {posts &&
                  posts.map((post) => (
                     <p>{post.title}</p> 
                   
                  ))}
              </div>
            </div>

            <div className="w-full p-6 lg:w-7/12">
              <Form />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

const query = groq`
*[_type == "callToActionMain" && title == "Get Involved"] | order(_createdAt desc) {
  ..., 
  
 
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
