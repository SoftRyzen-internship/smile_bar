// import { Collapse } from 'react-collapse';
// import { Disclosure } from '@headlessui/react';
import PropTypes from 'prop-types';

import QuestionIcon from '/public/question.svg';
import style from './TabItem.module.css';

export const TabItem = ({ open, data, isBenefit = false, toggle }) => {
  const { id, title, description, addition, link } = data;
  const textLines = description.split('\n');

  return (
    <li
      className={`h-auto cursor-pointer bg-block px-9 py-6 rounded-3xl mb-2 overlay-hidden transition duration-300 easy-out
      ${open && isBenefit && style.bg_ellipse}
      ${open && !isBenefit && style.bg_ellipse_ques}
      ${!open && 'hover:bg-blockHover'}
      }`}
      onClick={toggle}
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
        <div
          className={`text-base text-justify transition duration-300 ${
            !open
              ? 'h-0 invisible opacity-0 translate-y-5 pointer-events-none'
              : 'h-auto visible opacity-100 translate-y-0 pt-4 pointer-events-auto'
          }
            ${isBenefit ? 'pl-[45px]' : 'pl-10'}
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
