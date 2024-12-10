import Head from "next/head";
import { useRouter } from "next/router";
// import { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import Image from "next/image"
import Layout from "@/components/layout";
import Container from "@/components/container";
import { fade, textReveal } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from 'react';

export default function Donate(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', caption: '' });

   const clippings = [
    { src: '/clippings/ny10_11.jpeg', caption: '뉴욕일보' },
    { src: '/clippings/ny10_12.jpeg', caption: '뉴욕일보' },
    { src: '/clippings/ny10_26.jpeg', caption: '뉴욕일보' },
    { src: '/clippings/IMG_5696.PNG', caption: '' },
    { src: '/clippings/IMG_5695.PNG', caption: '' },
  ];

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage({ src: '', caption: '' });
  };



  return (
    <>
      <Layout>
        <NextSeo title="Essays" />
            <LazyMotion features={domAnimation}>
               <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pb-[45px]"
          variants={fade}
        >
           <div className="relative w-full pt-8 pb-[28px] border-b border-black">
           <Container>
                <div className="flex items-center justify-between">
                  <h3 className="relative block pb-0 pr-0 mb-0 text-3xl tracking-tight md:pr-12 font-pt md:text-5xl lg:text-6xl 2xl:text-6xl">
                      Essays and News
                  </h3>
                   <div className="tracking-wide uppercase text-sm md:text-[20px] font-semibold text-gray-600 font-arial">
                    
                  </div>
                </div>
            </Container>
          </div>

        
      
          <div className="container px-4 py-8 mx-auto ">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold">Writings, Essays, and Interviews</h1>
          <p className="text-lg text-gray-600">
            Explore a collection of writings, essays, interviews, and articles by our founder.
          </p>
        </header>

        
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Featured Articles</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {clippings.map((clipping, index) => (
            <div
              key={index}
              className="overflow-hidden transition border rounded-lg shadow cursor-pointer hover:shadow-lg"
              onClick={() => openModal(clipping)}
            >
              <div className="overflow-hidden group">
                <img
                  src={clipping.src}
                  alt={`Clipping ${index + 1}`}
                  className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <p className="p-4 text-sm text-gray-700">{clipping.caption}</p>
            </div>
          ))}
        </div>
      </section>

     {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-screen-md p-4 bg-white rounded-lg shadow-lg">
            <button
              className="absolute text-gray-600 top-2 right-2 hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={modalImage.src} alt="Expanded view" className="max-w-full max-h-[70vh] mx-auto" />
            <p className="mt-4 text-sm text-center text-gray-600">{modalImage.caption}</p>
          </div>
        </div>
      )}
        {/* Links Section */}
        <section className="py-10 mx-auto mt-5">
          <h2 className="mb-4 text-2xl font-semibold text-center">Read More</h2>
          <ul className="max-w-2xl mx-auto space-y-4">
            <li className="articles-item">
              <a
                href="http://www.koreatimes.com/article/1526308"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                한인사회 현안 논의·개선 약속
              </a>
              {/* <p className="text-sm text-gray-500">Source: Example Publication</p> */}
            </li>
            <li className="articles-item">
              <a
                href="http://www.koreatimes.com/article/1525659"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                10개 한인단체 대표·고든 존슨 주상원의원 등 참석… 한인들 관심 당부
              </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
            <li className="articles-item">
              <a
                href="http://www.koreatimes.com/article/1440731"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
               함께하는교육, 뉴저지 한인 교육위원 간담회
              </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
            <li className="articles-item">
              <a
                href="https://www.newyorkilbo.com/42721"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
             “우리를 더 잘 알고, 이웃들과 더불어 함께 웃으며 살아가자”
              </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
            <li className="articles-item">
              <a
                href="http://www.koreatimes.com/article/1425438"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
37선거구 타운홀 미팅… 13개 한인단체 대표 참석              </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
        
            <li className="articles-item">
              <a
                href="http://www.koreatimes.com/article/1412232"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                  ‘함께하는 교육’ 26일 KCC한인동포회관서        </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
        
            <li className="articles-item">
              <a
                href="http://www.koreatimes.com/article/1217915"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                뉴욕총영사관, 국민교육발전 정부포상 전수식  </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
            <li className="articles-item">
              <a
                href="https://www.dongponews.net/news/articleView.html?idxno=38425"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
               미 ‘함께하는 교육’ 김경화 대표, 국민교육발전 국민포장 수훈 </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
            <li className="articles-item">
              <a
                href="http://ny.koreatimes.com/article/20060920/338121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
               ‘함께하는 교육’ 김경화 대표, 교육 세미나 개최  </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
            <li className="articles-item">
              <a
                href="https://hinykorea.com/townnews/221104ny2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
               아시안 혐오범죄 예방 교육위원 간담회 </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
            <li className="articles-item">
              <a
                href="http://www.inmulnews.com/689"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
               [클릭이사람] (225) 미국 뉴저지 3선 교육위원 김(하)경화  </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
            <li className="articles-item">
              <a
                href="https://gkjournal.org/30/?bmode=view&idx=8554726"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
               김경화 뉴욕 한인회 수석 부회장 인터뷰   </a>
              {/* <p className="text-sm text-gray-500">Source: Another Publication</p> */}
            </li>
        
          </ul>
        </section>
      </div>

      
    
        </m.div>
        </LazyMotion>

     
      </Layout>
    </>
  );
}
