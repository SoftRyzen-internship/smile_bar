'use client';

import Image from 'next/image';
import React from 'react';
import DollarIcon from '/public/dollar.svg';
import ClockIcon from '/public/clock.svg';
import SunIcon from '/public/sun.svg';
import ForwardIcon from '/public/forward.svg';
import FlashIcon from '/public/flash.svg';
import { urlForImage } from '../../../sanity/lib/image';
import procedureCard from '@/data/procedureCard.json';

export const Procedure = ({ service }) => {
  const { title, price, description, image, list } = service;

  return (
    <div className=" group bg-transparent cursor-pointer [perspective:1000px]">
      <div className="relative mx-auto w-auto h-[502px] md:w-[342px] xl:w-[390px] xl:h-[482px] z-auto [transform-style:preserve-3d] xl:group-hover:[transform:rotateY(180deg)] duration-1000  ">
        <div className="absolute [backface-visibility:hidden] [transform:rotateY(180deg)] xl:[transform:rotateY(0deg)] w-full h-full inset-0">
          <div className="w-full h-full absolute z-10 bg-gradient-to-b from-white/0 from-50% to-white/75"></div>
          <Image
            className="object-cover rounded-3xl w-full h-full"
            src={urlForImage(image).url()}
            alt={image.caption || 'Зображення процедури відбілювання'}
            width={300}
            height={300}
          />
          <p className=" left-1/2 top-[413px] translate-x-[-50%] absolute z-20 text-right text-primary text-2xl font-bold font-sans uppercase">
            {title}
          </p>
        </div>
        <div className="flex flex-col justify-between p-9 bg-zinc-400 bg-opacity-10 rounded-3xl backdrop-blur-[25px] absolute inset-0 w-full h-full xl:[transform:rotateY(180deg)] [backface-visibility:hidden] text-primary font-sans">
          <div className="flex-col  items-center  gap-6 inline-flex ">
            <div className="flex-col justify-start items-center gap-1 inline-flex">
              <p className="text-right  text-base uppercase tracking-[16px]">
                {procedureCard.map(item => item.title)}
              </p>
              <p className="text-right text-2xl font-bold uppercase">{title}</p>
            </div>
            <div>
              <p className="text-justify text-base leading-tight ">
                {description}
              </p>
            </div>
          </div>
          <div className="flex-col gap-6 inline-flex ">
            <div className="flex-col justify-center gap-3 inline-flex">
              <div className="flex gap-2">
                <ClockIcon width={24} height={24} />
                <p className="text-base font-medium">
                  {procedureCard.map(item => item.duration)}
                  <span className="font-normal">{list.time}</span>
                </p>
              </div>
              <div className="flex gap-2">
                <SunIcon width={24} height={24} />
                <p className="text-base font-medium">
                  {procedureCard.map(item => item.light)}
                  <span className="font-normal">{list.lighting}</span>
                </p>
              </div>
              <div className="flex gap-2">
                <ForwardIcon width={24} height={24} />
                <p className="text-base font-medium">
                  {procedureCard.map(item => item.gel)}
                  <span className="font-normal">{list.gel}</span>
                </p>
              </div>
              <div className="flex gap-2">
                <FlashIcon width={24} height={24} />
                <p className="text-base font-medium">
                  {procedureCard.map(item => item.result)}
                  <span className="font-normal">{list.result}</span>
                </p>
              </div>
            </div>
            <div className=" pt-6 flex gap-2 justify-center items-center ">
              <DollarIcon width={24} height={24} />
              <p className="text-2xl font-medium">
                {procedureCard.map(item => item.price)}
                <span className="font-normal">
                  {price} {procedureCard.map(item => item.currency)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
