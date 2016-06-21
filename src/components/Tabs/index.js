import React from 'react';
import classNames from 'classnames';

const Tabs = (props) => {
  let dataTestSection = props.testSection ? props.testSection : null;
  let tabStyleClasses = props.style ? props.style.map((style) => {
    return 'tabs--' + style;
  }) : '';
  let classes = classNames(tabStyleClasses, 'tabs');
  return (
    <div data-test-section={dataTestSection} className={classes}>
      {_getMenuItems(props)}
      {_getPanels(props)}
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

Tabs.defaultProps = {
  onClick: setTabActive,
};

const setTabActive = (index, e) => {
  // e.preventDefault();

  // let clickedTab = this.props.children[index];
  // if (clickedTab.props.isDisabled) {
  //   return;
  // }

  // Tabs.render({

  // });
  console.log('click')
}

const _getMenuItems = (props) => {
  let menuItems =  props.children.map((panel, index) => {
    let dataTestSection = panel.props.testSection ? panel.props.testSection : null;
    let title = panel.props.title;
    let classes = classNames('tabs-nav__item', panel.props.isDisabled && 'tab-disabled', props.activeTab === index && 'is-active');
    return (
      <li data-test-section={dataTestSection} key={index} className={classes} onClick={props.onClick} disabled={ panel.props.isDisabled ? 'disabled' : false }>
        {title}
      </li>
    );
  });

  return (
    <ul className="tabs-nav" data-test-section="tabs-menu">{menuItems}</ul>
  );
}

const _getPanels = (props) => {
  let panels = props.children.map((panel, index) => {
    let dataTestSection = panel.props.testSection ? panel.props.testSection : null;
    let classes = classNames('tabs-pane__item', props.activeTab === index && 'is-active');
    return (
      <div data-test-section={dataTestSection} className={classes} key={index}>{panel}</div>
    );
  });
  return (
    <div className="tabs-pane" data-test-section="tabs-panels">{panels}</div>
  );
};

Tabs.Panel = (props) => {
  return (
    <div>{props.children}</div>
  );
};

Tabs.Panel.propTypes = {
  title: React.PropTypes.string.isRequired,
  testSection: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element,
  ]).isRequired,
  isDisabled: React.PropTypes.bool,
};

export default Tabs;
