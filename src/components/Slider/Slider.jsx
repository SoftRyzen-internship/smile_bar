'use client';

import React from 'react';
import ReactSlider from 'react-slick';
import PropTypes from 'prop-types';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

export const Slider = ({ children }) => {
  const SampleNextArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          position: 'absolute',
          width: '24px',
          height: '24px',
          top: '100%',
          right: '50%',
          transform: 'translate(32px)',
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          position: 'absolute',
          width: '24px',
          height: '24px',
          top: '100%',
          left: '50%',
          transform: 'translate(-32px)',
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          infinite: false,
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return <ReactSlider {...settings}>{children}</ReactSlider>;
};

Slider.propType = {
  children: PropTypes.element,
};
