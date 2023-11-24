'use client';

import React from 'react';
import ReactSlider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Slider = ({
  centralMode = true,
  className = 'centralMode',
  infinite = true,
  children,
}) => {
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
          transform: 'translate(32px, -24px)',
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
          transform: 'translate(-32px, -24px)',
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    className: className,
    centerMode: centralMode,
    infinite: infinite,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          infinite: infinite,
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
          infinite: infinite,
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

Slider.propTypes = {
  centralMode: PropTypes.bool,
  className: PropTypes.string,
  infinite: PropTypes.bool,
  children: PropTypes.node,
};
