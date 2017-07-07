import React from 'react';
import components from 'docs/data/index.json';
import { supportedLanguages, toTitleCase } from 'docs/utils/';
import SideNavContainer from 'docs/containers/SideNavContainer';
import PropsTable from 'docs/components/react/PropsTable';
import ReactComponentExample from 'docs/components/react/ComponentExample';
import SassComponentExample from 'docs/components/sass/ComponentExample';
import { browserHistory } from 'react-router';
import { css } from 'glamor';
import s from 'docs/styles/';
import ouiIcons from 'oui-icons';

import TabNav from '../../src/components/TabNav';

const routeProps = ({ routes, params }) => {
  let language = params.language;
  let subComponentName = params.subcomponent;

  if (!language && supportedLanguages[params.subcomponent]) {
    language = params.subcomponent;
    subComponentName = null;
  }

  return {
    categoryName: routes[1].path,
    componentName: params.component,
    subComponentName,
    language,
  };
};

const getData = (categoryName, componentName) => {
  let yamlData;
  let reactData;
  let sassData;

  try {
    yamlData = require(`docs/data/${categoryName}/${componentName}/properties.json`);
  } catch (e) {}

  try {
    reactData = require(`docs/data/${categoryName}/${componentName}/react.json`);
  } catch (e) {}

  try {
    reactData.examples = require(`src/${categoryName}/${componentName}/example/index.js`).default;
  } catch (e) {}

  try {
    sassData = require(`docs/data/${categoryName}/${componentName}/sass.json`);
  } catch (e) {}

  return {
    yamlData,
    reactData,
    sassData,
  };
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'sass',
    };
    this.handelTabClick = this.handelTabClick.bind(this);
  }
  componentDidMount() {
    document.title = `${this.componentDisplayName} | ${this.categoryDisplayName} | OUI`;
  }

  componentDidUpdate() {
    document.title = `${this.componentDisplayName} | ${this.categoryDisplayName} | OUI`;
  }

  componentWillUnmount() {
    document.title = 'OUI Documentation';
  }

  handelTabClick(evt) {
    const {
      categoryName,
      componentName,
      subComponentName,
    } = routeProps(this.props);

    const componentFullName = `${componentName}${subComponentName ? '/' + subComponentName : ''}`;
    browserHistory.push({pathname: `/${categoryName}/${componentFullName}/${evt.target.textContent}`});
    this.setState({currentTab: evt.target.textContent});
  }

  render() {
    const {
      categoryName,
      componentName,
      subComponentName,
    } = routeProps(this.props);

    const componentFullName = `${componentName}${subComponentName ? '/' + subComponentName : ''}`;

    const {
      yamlData,
      reactData,
      sassData,
    } = getData(categoryName, componentFullName);

    let languages = [];

    this.componentDisplayName = (yamlData && yamlData.name) || componentFullName;
    this.categoryDisplayName = toTitleCase(categoryName);

    const componentDescription = yamlData && yamlData.description;
    const componentPaths = components[categoryName][this.componentDisplayName].path;

    componentPaths['sass'] && languages.push('sass');
    componentPaths['react'] && languages.push('react');
    const lang = this.state.currentTab;
    return (
      <div { ...css(s.container) } style={{minWidth: 800}}>
        <div className="flex push-quad--bottom">
          <div { ...css(s.componentSidebar) }>
            <SideNavContainer
              categoryName={ categoryName }
              currentRoute={ this.props.location.pathname }
            />
          </div>

          <div { ...css(s.componentContent) }>
            <TabNav activeTab={ this.state.currentTab } style={ ['small', 'sub'] }>
              { languages.length >= 1 &&
                languages.map((language) => {
                  return (
                    <TabNav.Tab
                      key={ language }
                      onClick={ this.handelTabClick }
                      tabId={ language }>
                      { language }
                    </TabNav.Tab>
                  );
                })
              }
            </TabNav>
            <h2>{ this.componentDisplayName }</h2>
            <p>{ componentDescription }</p>

            { lang === 'react' &&
              <div>
                { reactData.examples && reactData.examples.map((example, i) => (
                  <ReactComponentExample
                    key={ i }
                    backgroundColor={ example.backgroundColor }
                    isPadded={ example.isPadded }
                    components={ example.examples }
                  />
                )) }
                <PropsTable componentProps={ reactData.props } />
              </div>
            }

            { lang === 'sass' && sassData && sassData.example &&
              <div>
                <div dangerouslySetInnerHTML={{ __html: ouiIcons }} className="display--none"></div>
                { sassData.example.map((example, i) => (
                  <SassComponentExample key={ i } component={ example } />
                )) }
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Component;
