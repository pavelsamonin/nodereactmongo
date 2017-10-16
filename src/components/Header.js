import React from 'react';
import PropTypes from 'prop-types';
const Header = ({message})=>{
  return (
    <div>
      <h2 className='Header text-center'>
        {message}
      </h2>
    </div>
  );
};
Header.propTypes = {
  message: PropTypes.string
};
Header.defaultProps = {
  message: 'Hello!'
};
export default Header;
