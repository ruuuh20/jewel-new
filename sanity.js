// import { groq, createClient, createImageUrlBuilder, fetchQuery, createPreviewSubscriptionHook, } from "next-sanity"

// class Sanity {
//   config = {
 
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   useCdn: process.env.NODE_ENV === "production",


// }

// previewMode = false
//   setPreviewMode = (previewMode) => this.previewMode = previewMode

//  sanityClient = createClient(this.config)

//   previewClient = createClient({
//     ...this.config,
//     useCdn: false,
//     token: process.env.SANITY_API_TOKEN,
//   })

//   urlFor = (source) => createImageUrlBuilder(this.config).image(source)

//   PortableText = createPortableTextComponent({
//   ...this.config,
//   // Serializers passed to @sanity/block-content-to-react
//   // (https://github.com/sanity-io/block-content-to-react)
//   serializers: {
//     types: {
//       code: props => (
//         <pre data-language={props.node.language}>
//           <code>{props.node.code}</code>
//         </pre>
//       )
//     },
//   }
// });

//   usePreviewSubscription = createPreviewSubscriptionHook(this.config)

//    get client() {
//     return this.previewMode ? this.previewClient : this.sanityClient
//   }


  
//   sanityClient = createClient(this.config)
  

//   async fetchQuery({ query = '', params }) {
//     const res = await this.client.fetch(groq`${query}`, params)
//     if (!res) console.error(`Nothing was returned from the query: ${query}, with params: ${JSON.stringify(params)}`)
//     return res
//   }
// }

 




// // Set up the client for fetching data in the getProps page functions
// export default new Sanity() 





import {
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook
} from "next-sanity";


const config = {
 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: '2022-01-08',


}


if (!config.projectId) {
  throw Error(
    "The Project ID is not set. Check your environment variables."
  );
}
// export const urlFor = source =>
//   createImageUrlBuilder(config).image(source);

export const imageBuilder = source =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription =
  createPreviewSubscriptionHook(config);


export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false
});

export const getClient = usePreview =>
  usePreview ? previewClient : client;
export default client;