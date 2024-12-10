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
    { src: '/clippings/ny10_11.jpeg', caption: '뉴욕일보 10.11' },
    { src: '/clippings/ny10_12.jpeg', caption: '뉴욕일보 10.12' },
    { src: '/clippings/ny10_26.jpeg', caption: '뉴욕일보 10.26' },
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
                      Essays
                  </h3>
                   <div className="tracking-wide uppercase text-sm md:text-[20px] font-semibold text-gray-600 font-arial">
                    
                  </div>
                </div>
            </Container>
          </div>

        
        <Container>
          <div className="container px-4 py-8 mx-auto">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold">Writings, Essays, and Interviews</h1>
          <p className="text-lg text-gray-600">
            Explore a collection of writings, essays, interviews, and articles by our founder.
          </p>
        </header>

        
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Featured Clippings</h2>
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
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Read More</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="https://example.com/article-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                Headline of Article 1
              </a>
              <p className="text-sm text-gray-500">Source: Example Publication</p>
            </li>
            <li>
              <a
                href="https://example.com/article-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                Headline of Article 2
              </a>
              <p className="text-sm text-gray-500">Source: Another Publication</p>
            </li>
            {/* Add more links as needed */}
          </ul>
        </section>
      </div>

      
        </Container>
        </m.div>
        </LazyMotion>

     
      </Layout>
    </>
  );
}
