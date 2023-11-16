import { Collapse } from 'react-collapse';
import PropTypes from 'prop-types';

import QuestionIcon from '/public/question.svg';
import style from './TabItem.module.css';

export const TabItem = ({ open, data, type, toggle }) => {
  const { id, title, description } = data;
  return (
    <li
      className={`cursor-pointer bg-[#D3D3D340] px-9 py-6 rounded-3xl mb-2 ${
        open && type === 'benefits' && style.bg_ellipse
      } ${open && type === 'questions' && style.bg_ellipse_ques}
      }`}
      onClick={toggle}
    >
      <div className="relative z-[10]">
        <div className="flex gap-4 items-center mb-4">
          {type === 'benefits' ? (
            <span className="whitespace-nowrap text-base">( {id} )</span>
          ) : (
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <QuestionIcon width={24} height={24} />
            </div>
          )}
          <p
            className={`uppercase font-bold ${
              type === 'benefits' && 'text-base'
            } ${type === 'questions' && 'text-xl md:text-2xl'}`}
          >
            {title}
          </p>
        </div>
        <Collapse isOpened={open}>
          <p
            className={`text-base text-justify ${
              type === 'benefits' && 'pl-[45px]'
            } ${type === 'questions' && 'pl-10'}`}
          >
            {description}
          </p>
        </Collapse>
      </div>
    </li>
  );
};

TabItem.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object.isRequired,
  type: PropTypes.string,
  toggle: PropTypes.func,
};