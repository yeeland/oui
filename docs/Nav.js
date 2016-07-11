import React from 'react';

const Nav = (props) => {

  return (
    <ul
      className="nav border--top border--bottom soft-double--ends">
      { props.items.map((item, i) => {
        return (
          <li key={ i }><a href={ item.href }>{ item.label }</a></li>
        );
      }) }
    </ul>
  );
};

Nav.propTypes = {
  items: React.PropTypes.array,
};

export default Nav;
