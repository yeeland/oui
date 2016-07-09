import React from 'react';
import classNames from 'classnames';

const TabsMenu = (props) => {
  let menuItems =  React.Children.map(props.children, (tab, index) => {
    let isActive = props.activeTab === index;
    let dataTestSection = tab.props.testSection ? tab.props.testSection : null;
    let classes = classNames('tabs-nav__item', tab.props.isDisabled && 'tab-disabled', isActive && 'is-active');
    return (
      <li
        data-test-section={dataTestSection}
        key={index}
        className={classes}
        onClick={tab.props.onClick}
        disabled={ tab.props.isDisabled ? 'disabled' : false }>
        {tab.props.children}
      </li>
    );
  });

  return (
    <ul
      className="tabs-nav"
      data-test-section="tabs-menu">
      {menuItems}
    </ul>
  );
}

const Tabs = (props) => {
  let dataTestSection = props.testSection ? props.testSection : null;
  let tabStyleClasses = props.style ? props.style.map((style) => {
    return 'tabs--' + style;
  }) : '';
  let classes = classNames(tabStyleClasses, 'tabs');
  return (
    <div data-test-section={dataTestSection} className={classes}>
      {TabsMenu(props)}
    </div>
  );
};

Tabs.propTypes = {
  children: React.PropTypes.array.isRequired,
  testSection: React.PropTypes.string,
  style: React.PropTypes.arrayOf(React.PropTypes.oneOf([
    'small',
    'center',
    'sub',
  ])),
  tabActive: React.PropTypes.number,
};

Tabs.Tab = (props) => {
  return (
    <div>{props.children}</div>
  );
};

Tabs.Tab.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  testSection: React.PropTypes.string,
  isDisabled: React.PropTypes.bool,
  isActive: React.PropTypes.bool.isRequired,
};

export default Tabs;
