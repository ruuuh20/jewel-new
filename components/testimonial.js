const Testimonial = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="items-end justify-between sm:flex">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                What People are Saying
              </h2>

              <p className="max-w-lg mt-8 text-base text-gray-500">
                Educators, administrators, and students' testimonials about their experiences with JEWEL.
              </p>
            </div>

            {/* <a
        class="inline-flex items-center flex-shrink-0 px-5 py-3 mt-8 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
        href=""
      >
        Read all reviews

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a> */}
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            <blockquote className="flex flex-col justify-between h-full p-6 transition-colors duration-300 bg-white md:p-12 hover:bg-[#fcecbe]">
              <div>
                {/* <div class="flex space-x-0.5 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div> */}

                <div className="mt-4">
                  <p className="mt-4 text-gray-600">
                    JEWEL did a great job running the trip. Everyone was
                    helpful, friendly, and informative."
                  </p>
                </div>
              </div>

              <footer className="mt-8 italic text-gray-500">
                Participant, 2019
              </footer>
            </blockquote>

            <blockquote className="flex flex-col justify-between h-full p-12 transition-colors duration-300 bg-white hover:bg-[#fcecbe]">
              <div>
                <div className="mt-4">
                  <p className="mt-4 text-gray-600">
                    “The trip was meticulously planned and the volunteers were
                    excellent in all areas.”
                  </p>
                </div>
              </div>

              <footer className="mt-8 italic text-gray-500">
                Participant, 2019
              </footer>
            </blockquote>

            <blockquote className="flex flex-col justify-between h-full p-12 transition-colors duration-300 bg-white hover:bg-[#fcecbe]">
              <div>
                <div className="mt-4">
                  <p className="mt-4 text-gray-600">
                    “It was obvious that a great deal of planning and care went
                    into preparing for our visit on the part of JEWEL... a
                    phenomenal success- an experience which will be remembered
                    fondly by all participants for a lifetime."
                  </p>
                </div>
              </div>

              <footer className="mt-8 italic text-gray-500">
                Participant, 2018
              </footer>
            </blockquote>

            <blockquote className="flex flex-col justify-between h-full p-12 transition-colors duration-300 bg-white hover:bg-[#fcecbe]">
              <div>
                <div className="mt-4">
                  <p className="mt-4 text-gray-600">
                    “I will ever cherish the memories collected and friendships
                    cultivated on this remarkable journey... We look forward to
                    expanding future Korean Language and culture offerings in
                    our school division and to sustaining those we currently
                    have in place.”
                  </p>
                </div>
              </div>

              <footer className="mt-8 italic text-gray-500">
                Participant, 2018
              </footer>
            </blockquote>

            <blockquote className="flex flex-col justify-between h-full p-12 transition-colors duration-300 bg-white hover:bg-[#fcecbe]">
              <div>
                <div className="mt-4">
                  <p className="mt-4 text-gray-600">
                    “JEWEL coordinated the program with efficiency. I
                    appreciated the way personal information and travel
                    arrangements were handled..."
                  </p>
                </div>
              </div>

              <footer className="mt-8 italic text-gray-500">
                Participant, 2017
              </footer>
            </blockquote>

            <blockquote className="flex flex-col justify-between h-full p-12 transition-colors duration-300 bg-white hover:bg-[#fcecbe]">
              <div>
                <div className="mt-4">
                  <p className="mt-4 text-gray-600">
                    Overall it was an unforgettable adventure and learning
                    experience.
                  </p>
                </div>
              </div>

              <footer className="mt-8 italic text-gray-500">
                Participant, 2017
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
