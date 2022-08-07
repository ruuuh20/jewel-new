

import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
} from "../sanity";
import { NextSeo } from "next-seo";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Container from "@/components/container";
import {ContactForm} from "@/components/form";
import Link from "next/link";

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
        <NextSeo title="Support" />
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
            <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
           {posts[0].title ? posts[0].title : 'Support'}
            </span>
          </div>
        </Container>
        <Container>
          <div className="m-auto">
           
      
            <section className="max-w-3xl">
              <div><p className="text-base"><Link href="/donate"><a>To donate to JEWEL, click here.</a></Link>Or if you are interested in more information about supporting JEWEL, please fill out the form and we will get back to you!</p></div>
              <div className="w-full p-6 lg:w-7/12">
                <ContactForm />
              </div>
            </section>
          </div>
        </Container>
        </m.div></LazyMotion>
      </Layout>
    </>
  );
}

const query = groq`
*[_type == "callToActionMain" && title == "Support"] | order(_createdAt desc) {
  ..., 
  title
 
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
