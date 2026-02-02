import Layout from "@/components/layout";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { getClient, usePreviewSubscription } from "../sanity";
import ImageComponent from "@/components/image";
import { PortableText } from "@portabletext/react";

const myPortableTextComponents = {
  types: {
    quote: ({ value }) => (
      <div className="pt-5 pb-5 border-b md:border-t md:border-b-0 border-[#d96e34] md:pb-0 md:pt-8 2xl:pt-10 my-6">
        <span className="block pb-0 mb-2 text-4xl leading-none text-[#d96e34] md:text-5xl 2xl:text-6xl md:mb-0">
          "
        </span>
        <p className="block mb-3 -mt-5 text-xl font-semibold leading-tight text-gray-800 md:text-xl lg:text-2xl xl:text-3xl md:leading-tight 2xl:leading-tight md:mb-4">
          {value.quote}
        </p>
        <div className="">
          <span className="block italic leading-snug text-gray-600 md:text-lg">
            {value.personJobTitle}
          </span>
        </div>
      </div>
    ),
    numeric: ({ value }) => <li className="mb-2 text-lg">{value.text}</li>,
    image: ({ value }) => (
      <div className="my-8">
        <img src={value.imageUrl} className="rounded-lg shadow-md" alt="" />
      </div>
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url} className="text-[#d96e34] hover:text-[#c45e24] font-semibold underline">
          {value.text}
        </a>
      ) : (
        <div className="callToAction my-6 p-4 bg-[#d96e34] text-white rounded-lg text-center font-bold">
          {value.text}
        </div>
      ),
  },
  block: {
    // Paragraphs
    normal: ({ children }) => (
      <p className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg">
        {children}
      </p>
    ),
    // Headings
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-[#120902] mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-[#120902] mb-5 mt-7">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold text-[#120902] mb-4 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-bold text-[#120902] mb-3 mt-5">
        {children}
      </h4>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#d96e34] pl-6 py-2 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Bullet lists
    bullet: ({ children }) => (
      <ul className="mb-6 space-y-2 text-gray-700 list-disc list-inside">
        {children}
      </ul>
    ),
    // Numbered lists
    number: ({ children }) => (
      <ol className="mb-6 space-y-2 text-gray-700 list-decimal list-inside">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-4 text-base leading-relaxed md:text-lg">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-4 text-base leading-relaxed md:text-lg">{children}</li>
    ),
  },
  marks: {
    // Bold text
    strong: ({ children }) => (
      <strong className="font-bold text-[#120902]">{children}</strong>
    ),
    // Italic text
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    // Underline
    underline: ({ children }) => (
      <span className="underline">{children}</span>
    ),
    // Code
    code: ({ children }) => (
      <code className="px-2 py-1 font-mono text-sm bg-gray-100 rounded">
        {children}
      </code>
    ),
    // Links
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel}
          className="text-[#d96e34] hover:text-[#c45e24] underline font-semibold"
          target={!value.href.startsWith("/") ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export default function Founder(props) {
  const { postdata, preview } = props;
  const router = useRouter();

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });
  return (
    <Layout>
      <NextSeo title="Founder's Message" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="pb-16"
          variants={fade}
        >
          {/* Header */}
          <div className="relative w-full py-12 md:py-16 border-b-2 border-[#d96e34] bg-gradient-to-r from-[#FFF8F0] to-white">
            <Container>
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#120902]">
                  Founder's Message
                </h1>
                <div className="text-2xl font-bold text-gray-600 md:text-3xl font-pretend">
                  대표 인사말
                </div>
              </div>
            </Container>
          </div>

          <Container>
            {/* Main Content - Better Layout */}
            <div className="py-12 md:py-20">
              {posts && posts.map((post) => (
              <div key={post._id} className="grid gap-10 md:grid-cols-5 md:gap-16">
                
                {/* Left Column - Profile (2 cols) */}
                <div className="md:col-span-2">
                    {/* Profile Image */}
                    <div className="mb-8">
                      <div className="relative w-64 h-64 mx-auto overflow-hidden shadow-2xl rounded-2xl">
                        <ImageComponent
                          image={
                            post.foundersImage !== null
                              ? post.foundersImage.url
                              : "https://via.placeholder.com/300"
                          }
                        />
                      </div>
                    </div>

                  {/* Name & Title */}
                  <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#120902] mb-2">
                      <span className="font-pretend">김경화</span> Kay Kim
                    </h2>
                    <p className="text-lg font-semibold text-gray-600">
                      Founding President / <span className="font-pretend">대표</span>
                    </p>
                  </div>

                  {/* Current Positions */}
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-[#120902] mb-6 pb-2 border-b-2 border-[#d96e34]">
                      Current Positions
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#FFF8F0] to-white p-4 rounded-lg border-l-4 border-[#d96e34]">
                        <div className="font-bold text-[#120902] mb-1">Educate Together</div>
                        <div className="text-sm text-gray-700 font-pretend">함께하는교육 | 비영리교육단체 대표</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#FFF8F0] to-white p-4 rounded-lg border-l-4 border-[#d96e34]">
                        <div className="font-bold text-[#120902] mb-1">JEWEL</div>
                        <div className="text-sm text-gray-700 font-pretend">Joining East & West | 국제교류협력 대표</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#FFF8F0] to-white p-4 rounded-lg border-l-4 border-[#d96e34]">
                        <div className="font-bold text-[#120902] mb-1 font-pretend">NY한글박물관</div>
                        <div className="text-sm text-gray-700 font-pretend">NY한글뮤지엄 추진위원회 위원장</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#FFF8F0] to-white p-4 rounded-lg border-l-4 border-[#d96e34]">
                        <div className="font-bold text-[#120902] mb-1">Roots and Routes</div>
                        <div className="text-sm text-gray-700 font-pretend">교육문화체험 대표</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#FFF8F0] to-white p-4 rounded-lg border-l-4 border-[#d96e34]">
                        <div className="font-bold text-[#120902] mb-1">YWCA of Queens</div>
                        <div className="text-sm text-gray-700 font-pretend">이사</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#FFF8F0] to-white p-4 rounded-lg border-l-4 border-[#d96e34]">
                        <div className="font-bold text-[#120902] mb-1">Ganadara Korean School</div>
                        <div className="text-sm text-gray-700 font-pretend">가나다라 한국문화역사학교 교장</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="bg-[#d96e34] text-white p-6 rounded-xl shadow-xl">
                    <h3 className="mb-4 text-xl font-bold">Key Highlights</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-bold">🏆</span>
                        <span>Civil Merit Medal (<span className="font-pretend">국민포장</span>, 2018)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">📚</span>
                        <span>5-term School Board Member, NJ Norwood</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">🌏</span>
                        <span>Executive Vice President, Korean American Association of Greater NY (36th & 37th)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">👥</span>
                        <span>Founded multiple educational and cultural organizations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Message & Experience (3 cols) */}
                <div className="md:col-span-3">
                  {/* Founder's Message */}
                  <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#120902] mb-6">
                      Founder's Message
                    </h3>
                    <div className="prose prose-lg max-w-none">
                      <div className="content bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-xl border border-gray-200 shadow-sm text-gray-700 leading-relaxed">
                        <PortableText
                          value={post.content}
                          components={myPortableTextComponents}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Experience & Background */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#120902] mb-6">
                      Experience & Leadership
                    </h3>
                    
                    {/* Grid of Experience Cards */}
                    <div className="grid gap-4 mb-8 md:grid-cols-2">
                      <div className="bg-white p-5 rounded-lg border-2 border-gray-200 hover:border-[#d96e34] transition-colors">
                        <div className="font-bold text-[#120902] mb-2 font-pretend">뉴욕한인회</div>
                        <div className="mb-1 text-sm text-gray-700 font-pretend">수석부회장 36대, 37대</div>
                        <div className="text-xs text-gray-600">Korean American Association of Greater NY</div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg border-2 border-gray-200 hover:border-[#d96e34] transition-colors">
                        <div className="font-bold text-[#120902] mb-2">NJ Norwood School Board</div>
                        <div className="mb-1 text-sm text-gray-700">5-term Member (1998-2013)</div>
                        <div className="text-xs text-gray-600 font-pretend">뉴저지 교육위원 5선</div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg border-2 border-gray-200 hover:border-[#d96e34] transition-colors">
                        <div className="font-bold text-[#120902] mb-2">Queens College of CUNY</div>
                        <div className="mb-1 text-sm text-gray-700">Advisory Board</div>
                        <div className="text-xs text-gray-600 font-pretend">재외동포사회문제연구소 자문위원</div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg border-2 border-gray-200 hover:border-[#d96e34] transition-colors">
                        <div className="font-bold text-[#120902] mb-2">League of Women Voters</div>
                        <div className="mb-1 text-sm text-gray-700">Board Member</div>
                        <div className="text-xs text-gray-600">Northern Valley Region</div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg border-2 border-gray-200 hover:border-[#d96e34] transition-colors">
                        <div className="font-bold text-[#120902] mb-2 font-pretend">민주평통 뉴욕협의회</div>
                        <div className="mb-1 text-sm text-gray-700 font-pretend">감사 (18기), 교육분과위원장 (16기)</div>
                        <div className="text-xs text-gray-600">National Unification Advisory Council</div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-lg border-2 border-gray-200 hover:border-[#d96e34] transition-colors">
                        <div className="font-bold text-[#120902] mb-2">Bergen County Korean Parents</div>
                        <div className="mb-1 text-sm text-gray-700">President</div>
                        <div className="text-xs text-gray-600 font-pretend">뉴저지버겐카운티한인학부모연합회장</div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="p-6 border-l-4 border-blue-500 rounded-r-lg bg-blue-50">
                      <p className="text-sm leading-relaxed text-gray-700">
                        <span className="font-bold text-blue-900">Recognition: </span>
                        Kay has received the highest recommendation from educators and community leaders for her commitment, charismatic attitude, and excellence, making her a role model for women everywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>

            {/* Bottom Bio/Quote Section */}
            {posts && posts[0] && posts[0].founderBlurb && (
              <div className="py-12 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                  <div className="blurb bg-gradient-to-br from-[#d96e34]/10 to-white p-8 md:p-12 rounded-2xl prose prose-lg max-w-none">
                    <PortableText value={posts[0].founderBlurb} components={myPortableTextComponents} />
                  </div>
                </div>
              </div>
            )}
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "about" && title.en == "Our Mission"] | order(_createdAt desc) {
...,
foundersMessage,
founderBlurb,
introBlurb,
foundersImage {
    ...asset->
},
content
 
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