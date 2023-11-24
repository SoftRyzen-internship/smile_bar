'use client';

import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import style from './TabItem.module.css';
import QuestionIcon from '/public/question.svg';

export const TabItem = ({ data, isBenefit = false }) => {
  const { id, title, description, addition, link } = data;
  const [isOpen, setIsOpen] = useState(false);
  const [waitClick, setWaitClick] = useState();
  const ref = useRef(null);

  const textLines = description.split('\n');

  const handleFocus = () => {
    setIsOpen(true);
    setWaitClick(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
    setWaitClick(false);
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

  return (
    <li
      ref={ref}
      className={`group h-full cursor-pointer bg-block p-4 md:p-6 xl:px-9 rounded-2xl md:rounded-3xl mb-2 
hover:bg-blockHover ${style.item} 
      }`}
      key={id}
      tabIndex={id}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
    >
      <div className="relative z-[10]">
        <div className={`flex gap-4 items-center`}>
          {isBenefit ? (
            <span className="whitespace-nowrap text-base">( {id} )</span>
          ) : (
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <QuestionIcon width={24} height={24} />
            </div>
          )}
          <p
            className={`uppercase font-bold 
            ${isBenefit ? 'text-base' : 'text-xl md:text-2xl'}
            `}
          >
            {title}
          </p>
        </div>
        <div className="overflow-hidden h-auto">
          <div className="mt-[-200vh] pl-[40px]  text-[16px] leading-[1.2] text-justify  transition-[margin] duration-1000 group-focus:mt-[16px] ">
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
              <>
                <span>{link.text}</span>
                <a
                  href={link.src}
                  className="underline"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {link.link}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

TabItem.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object.isRequired,
  isBenefit: PropTypes.bool,
  toggle: PropTypes.func,
};
