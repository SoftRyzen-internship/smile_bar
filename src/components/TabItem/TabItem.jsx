import PropTypes from 'prop-types';

import QuestionIcon from '/public/question.svg';
import style from './TabItem.module.css';

export const TabItem = ({ open, data, isBenefit = false, toggle }) => {
  const { id, title, description, addition, link } = data;
  const textLines = description.split('\n');

  return (
    <li
      className={`h-full cursor-pointer bg-block p-4 md:p-6 xl:px-9 rounded-2xl md:rounded-3xl mb-2 overlay-hidden transition duration-300 easy-out
      ${!open ? 'hover:bg-blockHover' : `${style.item_focus}`}
      
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
          className={`overflow-hidden  ${style.hidden_block} ${
            open ? 'h-full' : 'h-0'
          } `}
        >
          <div
            className={`text-base text-justify transition-[margin] duration-700 ${
              !open
                ? 'mt-[-200vh] invisible opacity-0 pointer-events-none'
                : 'mt-4 visible opacity-100  pointer-events-auto'
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
