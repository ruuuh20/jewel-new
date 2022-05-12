
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
import PageNav from "@/components/pageNav";

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
          <div className="relative w-full pt-8 md:pb-[88px]">
            <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
              Contact Us
            </span>
          </div>
        </Container>
        <Container>
          <div className="flex flex-wrap py-6">
            <div className="w-full md:p-10 lg:w-5/12">
              <p className="text-xl">
                We’d love to hear from you. For all inquiries, you can send us
                an email at{" "}
                <a
                  className="border-b border-indigo-500 hover:text-indigo-500"
                  href="mailto:kaykim@wearejewel.org"
                >
                  {posts && posts[0].email}
                </a>{" "}
                or fill out the form, and we will get back to you.
              </p>{" "}
              <div className="py-5 pl-5 mt-4 bg-gray-200 rounded box">
                {posts &&
                  posts.map((post) => (
                    <>
                      <div className="flex mb-4 text-base md:text-lg">
                        {" "}
                      
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="envelope"
                            class="svg-inline--fa email-icon inline-block mr-3 text-primary"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                            ></path>
                          </svg>
                          <a href="mailto:kaykim@wearejewel.org" className="text-xl transition duration-500 ease-in-out text-secondary-dark hover:text-purple">{post.email} </a>
                        
                      </div>
                      <div className="flex mb-4 text-base md:text-lg">
                      
                          <svg
                            aria-hidden="true"
                            className="inline-block mr-3 svg-inline--fa location-icon fa-w-16 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                          </svg>
                          <span className="text-xl transition duration-500 ease-in-out text-secondary-dark hover:text-purple">{post.address} </span>
                      
                      </div>
                      <div className="flex mb-4 text-base md:text-lg">
                    
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="phone-alt"
                            className="inline-block mr-3 svg-inline--fa phone-icon fa-w-16 text-primary"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                              class=""
                            ></path>
                          </svg>
                          <a href="tel:2017677500" className="text-xl transition duration-500 ease-in-out text-secondary-dark hover:text-purple">{post.phoneNumber}</a>
                     
                      </div>
                     
                    </>
                  ))}
              </div>
            </div>

            <div className="w-full p-6 lg:w-7/12">
              <p className="text-xl text-center text-gray-600">Get in Touch</p>
              <Form />
            </div>
          </div>
           <section className="relative pt-6 pb-6 md:pt-16 md:pb-8 xl:pt-24 2xl:pb-24">
                    <PageNav />
                  </section>
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
