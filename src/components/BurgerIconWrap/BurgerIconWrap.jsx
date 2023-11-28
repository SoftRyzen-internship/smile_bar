import PropTypes from 'prop-types';

import labelBurger from '@/data/labelBurger.json';

export const BurgerIconWrap = ({ setMenuShow, open, children }) => {
  return (
    <button
      className="p-3 cursor-pointer xl:hidden"
      aria-label={
        open ? labelBurger.map(el => el.close) : labelBurger.map(el => el.open)
      }
      onClick={() => setMenuShow()}
    >
      {children}
    </button>
  );
};

BurgerIconWrap.propTypes = {
  setMenuShow: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
