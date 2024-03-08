import PropTypes from 'prop-types';

import Style from "./Button.module.css";

const Button = (props) => {
  return (
      <div className={Style.main}>
        {props.children}
      </div>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
