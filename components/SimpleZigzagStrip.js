// Simple Zigzag Photo Strip Component
// Clean white borders, tilted at different angles, no captions

export default function SimpleZigzagStrip({ photos }) {
  // Rotation angles for each photo (alternating left/right tilt)
  const rotations = [-4, 3, -2, 5, -3, 2, -5, 4];
  
  // Vertical offsets (some higher, some lower)
  const offsets = [-8, 12, 4, -6, 10, -4, 8, -10];

  return (
    <section className="py-12 md:py-12 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-6 md:flex-nowrap">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 transition-all duration-300 cursor-pointer group"
              style={{
                transform: `rotate(${rotations[index % rotations.length]}deg) translateY(${offsets[index % offsets.length]}px)`,
              }}
            >
              {/* Photo with white border */}
              <div className="w-32 h-32 overflow-hidden transition-all duration-300 border-4 border-white rounded-lg shadow-md md:w-40 md:h-40 lg:w-48 lg:h-48 hover:shadow-2xl">
                <img
                  src={photo.src}
                  alt={photo.alt || `Photo ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Hover effect - straighten photo */}
              <style jsx>{`
                .group:hover {
                  transform: rotate(0deg) translateY(-8px) !important;
                  z-index: 10;
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}