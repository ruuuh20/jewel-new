import Head from "next/head";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "../sanity";

import { groq } from "next-sanity";

export default function Post(props) {
  const { postdata, preview } = props;

  const router = useRouter();

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });
  console.log(posts)
  return (
    <>
      {posts &&
        posts.map((post) => (
          <article>
            <h3 className="text-lg"> {post.title} </h3>
            <h3 className="text-lg"> {post.address} </h3>
            
          </article>
        ))}
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