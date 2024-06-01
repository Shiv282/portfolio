// components/Catalogue.js
import React from 'react';

const Catalogue = ({ mainImage, leftImage, rightImage }) => {
  return (
    <div className="relative flex justify-center items-center h-80">
      <img
        src={leftImage}
        alt="Left Image"
        className="absolute left-0 h-48 w-48 object-contain transform -translate-x-2/3"
      />
      <img
        src={mainImage}
        alt="Main Image"
        className="relative h-72 w-96 object-contain z-10"
      />
      <img
        src={rightImage}
        alt="Right Image"
        className="absolute right-0 h-48 w-48 object-contain transform translate-x-2/3"
      />
    </div>
  );
};

export default Catalogue;
