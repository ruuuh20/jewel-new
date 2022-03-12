import Head from "next/head";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "../sanity";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Container from "@/components/container";

export default function Contact(props) {
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
        <NextSeo title="Contact Us" />
        <Container>
          <div className="relative w-full pt-8 pb-[88px]">
            <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
              Contact Us
            </span>
          </div>
        </Container>
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full p-6 lg:w-7/12">
              <p className="text-xl">
                We’d love to hear from you. For all inquiries or feedback, send
                us an email at{" "}
                <a
                  className="border-b border-indigo-500 hover:text-indigo-500"
                  href="mailto:"
                >
                  {posts && posts[0].email}
                </a>{" "}
                or fill out the form below.
              </p>{" "}
            </div>
            <div className="w-full lg:w-5/12 p-6">
              <div className="box bg-blue-light p-4">
                {posts &&
                  posts.map((post) => (
                    <ul>
                      <li className="text-lg mb-2"> {post.email} </li>
                      <li className="text-lg mb-2"> {post.address} </li>
                      <li>socials</li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

const query = groq`
*[_type == "contact"] | order(_createdAt desc) {
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
