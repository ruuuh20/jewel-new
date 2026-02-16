// ZigzagPhotoStrip Component - Photos hanging on a string effect

export default function ZigzagPhotoStrip({ photos }) {
  // Predefined rotations and vertical offsets for zigzag effect
  const variations = [
    { rotate: -4, translateY: -8 },
    { rotate: 3, translateY: 12 },
    { rotate: -2, translateY: 4 },
    { rotate: 5, translateY: -6 },
    { rotate: -3, translateY: 10 },
    { rotate: 2, translateY: -4 },
    { rotate: -5, translateY: 8 },
    { rotate: 4, translateY: -10 },
  ];

  return (
    <section className="relative py-12 overflow-hidden bg-white md:py-16">
      {/* Optional: String/line across top */}
      <div className="absolute top-8 left-0 right-0 h-[2px] bg-gray-300 opacity-40" />

      <div className="px-4 mx-auto max-w-7xl">
        {/* Photo Strip Container */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 md:flex-nowrap">
          {photos.map((photo, index) => {
            const variation = variations[index % variations.length];
            
            return (
              <div
                key={index}
                className="relative flex-shrink-0 group"
                style={{
                  transform: `rotate(${variation.rotate}deg) translateY(${variation.translateY}px)`,
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Polaroid-style photo */}
                <div className="p-2 transition-shadow duration-300 bg-white shadow-lg md:p-3 hover:shadow-2xl">
                  {/* Pin effect at top */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#c17854] rounded-full shadow-md z-10" />
                  
                  {/* Image */}
                  <div className="relative w-24 h-24 overflow-hidden md:w-32 md:h-32 lg:w-40 lg:h-40">
                    <img
                      src={photo.src}
                      alt={photo.alt || `Photo ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  {/* Optional caption area (like polaroid) */}
                  {photo.caption && (
                    <div className="pt-2 text-center">
                      <p className="text-xs text-gray-700 md:text-sm font-handwriting">
                        {photo.caption}
                      </p>
                    </div>
                  )}
                </div>

                {/* Hover effect - straighten and lift */}
                <style jsx>{`
                  .group:hover {
                    transform: rotate(0deg) translateY(-8px) !important;
                    z-index: 10;
                  }
                `}</style>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Alternative Version: Simpler, no polaroid effect
export function SimpleZigzagStrip({ photos }) {
  const rotations = [-4, 3, -2, 5, -3, 2, -5, 4];
  const offsets = [-8, 12, 4, -6, 10, -4, 8, -10];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 md:flex-nowrap">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 cursor-pointer group"
              style={{
                transform: `rotate(${rotations[index % rotations.length]}deg) translateY(${offsets[index % offsets.length]}px)`,
              }}
            >
              <div className="w-24 h-24 overflow-hidden transition-all duration-300 border-4 border-white rounded-lg shadow-md md:w-28 md:h-28 lg:w-36 lg:h-36 hover:shadow-xl">
                <img
                  src={photo.src}
                  alt={photo.alt || `Photo ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Version with tape effect (like taped to wall)
export function TapedPhotoStrip({ photos }) {
  const rotations = [-3, 4, -2, 3, -4, 2, -3, 5];
  const yOffsets = [-10, 8, -4, 12, -8, 6, -12, 4];

  return (
    <section className="py-12 bg-white md:py-16">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 md:flex-nowrap">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 group"
              style={{
                transform: `rotate(${rotations[index % rotations.length]}deg) translateY(${yOffsets[index % yOffsets.length]}px)`,
              }}
            >
              {/* Tape pieces at top */}
              <div className="absolute z-10 w-8 h-4 transform -top-2 left-1/4 bg-yellow-100/80 opacity-60 -rotate-12" />
              <div className="absolute z-10 w-8 h-4 transform -top-2 right-1/4 bg-yellow-100/80 opacity-60 rotate-12" />
              
              {/* Photo */}
              <div className="transition-shadow duration-300 shadow-lg w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 hover:shadow-2xl">
                <img
                  src={photo.src}
                  alt={photo.alt || `Photo ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}