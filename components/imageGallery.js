

const ImageGallery = () => {
  const images = [
    'clip1.png',
    'clip2.png',
    'clip3.png',
    'clip4.png',
    'clip5.png',
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-1/2 p-2 sm:w-1/4 md:w-1/5"
          style={{
            transform: index % 2 === 0 ? 'translateY(-20px)' : 'translateY(20px)',
          }}
        >
          <img
            src={`/${image}`}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
