import Image from 'next/image';
import data from '@/data/hero.json';
import heroImage from '../../../public/hero.png';

const HeroSection = () => {
  const { title, subtitle, alt } = data;
  return (
    <section className="relative overflow-x-hidden xl:pt-[24px]">
      <div className="container">
        <div className="relative flex flex-col xl:items-end gap-[8px] md:gap-[4px] xl:gap-[16px] px-[16px] xl:px-[36px] pt-[24px] xl:pb-[170px] xl:pt-[146px] bg-heroBg backdrop-blur-[10px] rounded-[36px] z-10">
          <h1 className="mx-auto xl:ml-0 max-w-[288px] md:max-w-none md:w-full xl:w-[702px] text-[24px] md:text-[36px] xl:text-[60px] font-bold leading-[1.2] text-center xl:text-left order-2">
            {title}
          </h1>
          <h2 className="flex flex-col md:block justify-center mx-auto xl:ml-0 max-w-[180px] md:max-w-none text-[16px] md:text-[24px] leading-[1.25] font-normal  text-center xl:text-left order-1">
            <span>{subtitle.line1} </span>
            <span>{subtitle.line2}</span>
          </h2>
          <div className="relative xl:absolute xl:bottom-0 xl:right-[36px] mx-auto mt-[12px] md:mt-[8px] w-[262px] h-[300px] md:w-[286px] md:h-[322px] xl:w-[493px] xl:h-[563px] object-cover order-3">
            <Image
              src={heroImage}
              alt={alt}
              fill
              sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[94px] md:top-[104px]  xl:top-[165px] right-[58px] md:right-[406px] xl:right-[982px] w-[749px] h-[749px] bg-purple blur-[200px] rounded-[749px] z-0"></div>
      <div className="absolute left-[180px] md:left-[405px] xl:left-[967px] bottom-[-41px] md:bottom-[-51px] xl:bottom-[35px] w-[603px] h-[603px] bg-rose blur-[200px] rounded-[603px] z-0"></div>
    </section>
  );
};

export default HeroSection;
