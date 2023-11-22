import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';

import style from './TabItem.module.css';
import QuestionIcon from '/public/question.svg';

export const TabItem = ({ data, isBenefit = false, height }) => {
  const { id, title, description, addition, link } = data;
  const textLines = description.split('\n');

  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <li
          className={` bg-block px-9 py-6 rounded-3xl mb-2 
      ${selected && isBenefit && `${style.bg_ellipse}`}
      ${selected && !isBenefit && `${style.bg_ellipse_ques}`}
      ${
        !selected
          ? `hover:bg-blockHover cursor-pointer max-h-[144px] ${height} outline-none`
          : 'cursor-auto max-h-[1000px] outline-none'
      }
      } transition-all duration-1000`}
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
            {selected && (
              <div
                className={`text-base text-justify pt-4 
            ${isBenefit ? 'pl-[45px]' : 'pl-10'}
            ${!selected ? 'max-h-[120px]' : 'max-h-[1000px]'}
            transition duration-300 ${style.fade}
            `}
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
            )}
          </div>
        </li>
      )}
    </Tab>
  );
};

TabItem.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object.isRequired,
  isBenefit: PropTypes.bool,
  toggle: PropTypes.func,
};
