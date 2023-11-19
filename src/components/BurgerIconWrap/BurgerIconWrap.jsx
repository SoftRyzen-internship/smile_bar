import PropTypes from 'prop-types';

import labelBurger from '../../data/labelBurger.json';

export const BurgerIconWrap = ({ setMenuShow, open, children }) => {
  return (
    <div
      className="p-3 cursor-pointer"
      aria-label={
        open ? labelBurger.map(el => el.close) : labelBurger.map(el => el.open)
      }
      onClick={() => setMenuShow()}
    >
      {children}
    </div>
  );
};

BurgerIconWrap.propTypes = {
  setMenuShow: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
