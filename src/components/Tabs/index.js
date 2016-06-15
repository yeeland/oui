import React from 'react';
import classNames from 'classnames';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabActive: this.props.tabActive || 0,
    };
  }

  setTabActive(index, e) {
    e.preventDefault();

    let clickedTab = this.props.children[index];
    if (clickedTab.props.isDisabled) {
      return;
    }

    this.setState({
      tabActive: index,
    });
  }

  _getMenuItems() {
    let menuItems = this.props.children.map((panel, index) => {
      let dataTestSection = panel.props.testSection ? panel.props.testSection : null;
      let title = panel.props.title;
      let classes = classNames('tabs-nav__item', panel.props.isDisabled && 'tab-disabled', this.state.tabActive === index && 'is-active');
      return (
        <li data-test-section={dataTestSection} key={index} className={classes} onClick={this.setTabActive.bind(this, index)} disabled={ panel.props.isDisabled ? 'disabled' : false }>
          {title}
        </li>
      );
    });

    return (
      <ul className="tabs-nav" data-test-section="tabs-menu">{menuItems}</ul>
    );
  }

  _getPanels() {
    let panels = this.props.children.map((panel, index) => {
      let dataTestSection = panel.props.testSection ? panel.props.testSection : null;
      let classes = classNames('tabs-pane__item', this.state.tabActive === index && 'is-active');
      return (
        <div data-test-section={dataTestSection} className={classes} key={index}>{panel}</div>
      );
    });
    return (
      <div className="tabs-pane" data-test-section="tabs-panels">{panels}</div>
    );
  }

  render() {
    let dataTestSection = this.props.testSection ? this.props.testSection : null;
    let tabStyleClasses = this.props.style ? this.props.style.map((style) => {
      return 'tabs--' + style;
    }) : '';
    let classes = classNames(tabStyleClasses, 'tabs');
    return (
      <div data-test-section={dataTestSection} className={classes}>
        {this._getMenuItems()}
        {this._getPanels()}
      </div>
    );
  }
}

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
