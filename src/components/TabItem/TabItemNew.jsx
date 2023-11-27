'use client';

import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';

import style from './TabItem.module.css';
import QuestionIcon from '/public/question.svg';
import { scrollIfNeedForItem } from '@/utils';
import { useWindowWidth } from '@/hooks';

export const TabItemNew = ({ data, isBenefit = false }) => {
  const { id, title, description, addition, link } = data;
  const [isOpen, setIsOpen] = useState(false);
  const [waitClick, setWaitClick] = useState();
  const ref = useRef(null);
  const refDescription = useRef(null);
  const windowWidth = useWindowWidth();
  const [descriptionHeight, setDescriptionHeight] = useState(3000);
  const textLines = useMemo(() => description.split('\n'), [description]);

  useEffect(() => {
    if (windowWidth) {
      setDescriptionHeight(refDescription.current?.clientHeight);
      console.log({ first: refDescription.current?.clientHeight });
    }
  }, [windowWidth]);

  const handleFocus = () => {
    setIsOpen(true);
    setWaitClick(true);
    console.log('focus');
    setTimeout(() => scrollIfNeedForItem(ref.current, true), 500);
  };

  const handleBlur = () => {
    setIsOpen(false);
    setWaitClick(false);
    console.log('blur');
  };

  const handleClick = () => {
    if (isOpen) {
      if (waitClick) {
        setWaitClick(false);
      } else {
        console.log('click');
        scrollIfNeedForItem(ref.current);
        ref.current.blur();
      }
    }
  };

  return (
    <li
      ref={ref}
      className={`group h-full cursor-pointer bg-block p-4 md:p-6 xl:px-9 rounded-2xl md:rounded-3xl mb-2 
hover:bg-blockHover transition-colors duration-300 ${style.item} 
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
          <div
            className="mt-[-300vh] pl-[40px]  text-[16px] leading-[1.2] text-justify  transition-[margin] duration-500 group-focus:mt-[16px] "
            ref={refDescription}
            style={{
              marginTop: isOpen ? 16 : -descriptionHeight - 16,
            }}
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
              <>
                <span>{link.text}</span>
                <a
                  href={link.src}
                  className="underline"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  onFocus={() => ref.current.focus()}
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
TabItemNew.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object.isRequired,
  isBenefit: PropTypes.bool,
  toggle: PropTypes.func,
};
