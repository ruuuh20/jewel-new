import Image from "next/image";

// Simple Photo Gallery Component
export default function PhotoGallery({ title, subtitle, photos }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            {title || ""}
          </h2>
          {subtitle && (
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              {subtitle}
            </p>
          )}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden shadow-lg cursor-pointer md:h-80 rounded-xl group"
            >
              {/* Image */}
              <Image
                src={photo.src}
                alt={photo.alt || `Photo ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 transform group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  {photo.caption && (
                    <p className="mb-1 text-lg font-bold">{photo.caption}</p>
                  )}
                  {photo.location && (
                    <p className="text-sm opacity-90">{photo.location}</p>
                  )}
                </div>
              </div>

              {/* Optional Badge */}
              {photo.badge && (
                <div className="absolute top-4 right-4 bg-[#c17854] text-white px-3 py-1 rounded-full text-xs font-bold">
                  {photo.badge}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        {/* {photos.length >= 6 && (
          <div className="mt-12 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              View Full Gallery
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )} */}
      </div>
    </section>
  );
}

// Alternative: Masonry-style Gallery (More Dynamic)
export function MasonryGallery({ photos }) {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="gap-6 space-y-6 columns-1 md:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative mb-6 overflow-hidden shadow-lg cursor-pointer break-inside-avoid rounded-xl group"
            >
              <Image
                src={photo.src}
                alt={photo.alt || `Photo ${index + 1}`}
                width={photo.width || 400}
                height={photo.height || 300}
                className="transition-transform duration-500 transform group-hover:scale-105"
              />
              {photo.caption && (
                <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100">
                  <p className="font-semibold text-white">{photo.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Photo Testimonial Component
export function PhotoTestimonial({ image, quote, name, role, year }) {
  return (
    <div className="p-8 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#c17854] transition-all duration-300">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#c17854] mx-auto md:mx-0">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <svg className="w-8 h-8 text-[#c17854] mb-3 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="mb-4 text-lg italic leading-relaxed text-gray-700">
            "{quote}"
          </p>
          <div>
            <p className="font-bold text-[#1e3a5f]">{name}</p>
            <p className="text-sm text-gray-600">{role} • {year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}