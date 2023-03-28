import Image from 'next/image';
import { useState } from 'react';

function GrayscaleImage({ src, alt, width, height }) {
  const [isHovered, setIsHovered] = useState(false);

 

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
      className='gray-img'
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
      
      />
      <div
      className='overlay-toggle'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          opacity: isHovered ? 0 : 1, // make the overlay invisible on hover
          transition: 'opacity 0.3s', // add a transition effect
        }}
      
      />
    </div>
  );
}

export default GrayscaleImage;