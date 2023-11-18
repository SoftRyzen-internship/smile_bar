import React from 'react';
import Image from 'next/image';
import PropTypes, { objectOf, string } from 'prop-types';

export const Gallery = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="xl:h-fit">
          <Image
            className="block m-auto rounded-3xl w-80 h-[264px] md:w-[342px] xl:w-[342px] xl:h-[264px] "
            src={item.img}
            alt={item.alt}
            width={342}
            height={264}
          />
        </div>
      ))}
    </>
  );
};

Gallery.propTypes = {
  data: PropTypes.arrayOf(objectOf(string)).isRequired,
};
