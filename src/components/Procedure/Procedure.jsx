import Image from 'next/image';
import React from 'react';
import img from '../../../public/SliderImg/photo.webp';
import DollarIcon from '/public/dollar.svg';
import ClockIcon from '/public/clock.svg';
import SunIcon from '/public/sun.svg';
import ForwardIcon from '/public/forward.svg';
import FlashIcon from '/public/flash.svg';

export const Procedure = () => {
  return (
    <div className=" group bg-transparent cursor-pointer [perspective:1000px]">
      <div className="relative w-[390px] h-[482px] z-auto [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000  ">
        <div className="absolute [backface-visibility:hidden] [transform:rotateY(180deg)] w-full h-full inset-0">
          <div className="w-full h-full absolute z-10 bg-gradient-to-b from-white/0 to-white/75"></div>
          <Image
            className="object-cover rounded-3xl w-full h-full"
            src={img}
            alt="fyu"
            width={300}
            height={300}
          />
          <p className="left-[137px] top-[413px] absolute z-20 text-right text-stone-900 text-2xl font-bold font-['Montserrat'] uppercase">
            EXPRESS
          </p>
        </div>
        <div className="flex flex-col justify-between p-9 bg-zinc-400 bg-opacity-10 rounded-3xl backdrop-blur-[25px] absolute inset-0 w-full h-full [backface-visibility:hidden] text-primary font-sans">
          <div className="flex-col  items-center  gap-6 inline-flex ">
            <div className="flex-col justify-start items-center gap-1 inline-flex">
              <p className="text-right  text-base uppercase tracking-[16px]">
                процедура
              </p>
              <p className="text-right text-2xl font-bold uppercase">Express</p>
            </div>
            <div>
              <p className="text-justify text-base ">
                Ідеальний вибір для тих, хто шукає швидкий та ефективний
                результат. Підходить для легкого відбілювання та освітлення
                усмішки.
              </p>
            </div>
          </div>
          <div className="flex-col gap-6 inline-flex ">
            <div className="flex-col justify-center gap-3 inline-flex">
              <div className="flex gap-2">
                <ClockIcon width={24} height={24} />
                <p className="text-base font-medium">
                  Тривалість процедури:
                  <span className="font-normal">15хв</span>
                </p>
              </div>
              <div className="flex gap-2">
                <SunIcon width={24} height={24} />
                <p className="text-base font-medium">
                  Освітлення: <span className="font-normal">до 6 тонів</span>
                </p>
              </div>
              <div className="flex gap-2">
                <ForwardIcon width={24} height={24} />
                <p className="text-base font-medium">
                  Гель наноситься: <span className="font-normal">1 раз</span>
                </p>
              </div>
              <div className="flex gap-2">
                <FlashIcon width={24} height={24} />
                <p className="text-base font-medium">
                  Результат: <span className="font-normal">3 місяці</span>
                </p>
              </div>
            </div>
            <div className=" pt-5 flex gap-2 justify-center items-center ">
              <DollarIcon width={24} height={24} />
              <p className="text-2xl font-medium">
                Ціна: <span className="font-normal">1000 грн</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
