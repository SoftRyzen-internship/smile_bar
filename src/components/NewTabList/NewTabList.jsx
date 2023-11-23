'use client';
import data from '@/data/questions.json';
import style from './NewTab.module.css';
import QuestionIcon from '/public/question.svg';
import { useRef, useState } from 'react';
import bgl from '@/../public/bgl.svg';

const NewTabItem = ({ id, title, description, addition, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [waitClick, setWaitClick] = useState();
  const ref = useRef(null);
  const refDescription = useRef(null);

  const textLines = description.split('\n');

  const handleFocus = () => {
    setIsOpen(true);
    setWaitClick(true);
  };

  const handleBlur = () => {
    setIsOpen(true);
    setWaitClick(true);
  };

  const handleClick = () => {
    if (isOpen) {
      if (waitClick) {
        setWaitClick(false);
      } else {
        ref.current.blur();
      }
    }
  };
  // focus:bg-[url(/bgl.svg),_url(/bgr.svg)] focus:bg-no-repeat focus:bg-[top_left,_bottom_right]
  return (
    <li
      ref={ref}
      className={`group h-full p-[16px] rounded-[16px] bg-block hover:bg-blockHover ${style.item} `}
      style={
        {
          // backgroundImage: 'url(/bgl.svg), url(/bgr.svg)',
          // backgroundSize: 'contain, contain',
          // backgroundRepeat: 'no-repeat, no-repeat',
          // backgroundPosition: 'top left, bottom right',
        }
      }
      key={id}
      tabIndex={id}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
    >
      <div className="flex items-center gap-[20px] ">
        <QuestionIcon width={24} height={24} className="shrink-0" />
        <p className=" uppercase font-bold text-[20px] leading-[1.2] align-middle">
          {title}
        </p>
      </div>
      <div className="overflow-hidden h-auto">
        <div
          ref={refDescription}
          className="mt-[-100vh] pl-[40px]  text-[16px] leading-[1.2] text-justify  transition-[margin] duration-1000 group-focus:mt-[16px] "
        >
          {textLines.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
          {addition &&
            addition.map((item, index) => {
              if (typeof item === 'string') {
                return <p key={index}>{item}</p>;
              }
              if (typeof item === 'object') {
                return (
                  <ul className="list-disc pl-4 my-2" key={index}>
                    {item.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              }
            })}
          {link && (
            <a
              href={link}
              className="underline"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              {link}
            </a>
          )}
        </div>
        {/* <p
            ref={refDescription}
            className="mt-[-100vh] pl-[40px]  text-[16px] leading-[1.2] text-justify  transition-[margin] duration-1000 group-focus:mt-[16px] "
          >
            {description}
          </p> */}
      </div>
    </li>
  );
};

export const NewTabList = className => {
  return (
    <ul className={`flex flex-col gap-[10px] ${className}`}>
      {data.map((elem, index) => (
        <NewTabItem key={elem.id} {...elem} />
      ))}
    </ul>
  );
};
