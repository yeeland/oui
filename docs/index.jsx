/* eslint-disable react/jsx-filename-extension, react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import * as doctrine from 'doctrine';

import ComponentWrapper from './ComponentWrapper';
import Nav from './Nav';
import componentsJSON from './data.json';

import Attention from '../src/components/Attention';
import AttentionExample from '../src/components/Attention/example';
import ArrowsInline from '../src/components/ArrowsInline';
import ArrowsInlineExample from '../src/components/ArrowsInline/example';
import Button from '../src/components/Button';
import ButtonExample from '../src/components/Button/example';
import Code from '../src/components/Code';
import CodeExample from '../src/components/Code/example';
import Input from '../src/components/Input';
import InputExample from '../src/components/Input/example';
import Label from '../src/components/Label';
import LabelExample from '../src/components/Label/example';
import Table from '../src/components/Table';
import TableExample from '../src/components/Table/example';

// Component array to loop over
const componentsArray = [
  {
    index: ArrowsInline,
    example: ArrowsInlineExample,
  },
  {
    index: Attention,
    example: AttentionExample,
  },
  {
    index: Button,
    example: ButtonExample,
  },
  {
    index: Code,
    example: CodeExample,
  },
  {
    index: Input,
    example: InputExample,
  },
  {
    index: Label,
    example: LabelExample,
  },
  {
    index: Table,
    example: TableExample,
  },
];

const ComponentRow = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  );
};

ComponentRow.propTypes = {
  children: React.PropTypes.any.isRequired,
};

class App extends React.Component {
  render() {

    let componentItems = [];
    componentsArray.map(function(component) {
      componentItems.push(
        {
          label: component.index.name,
          href: '#' + component.index.name,
        }
      );
    });

    let componentNodes = componentsArray.map(function(component) {
      let json = componentsJSON['src/components/' + component.index.name + '/index.js'];
      let desc = doctrine.parse(json.description);

      return (
        <ComponentWrapper
          key={ component.index.name }
          description={ desc.description }
          examples={ component.example }
          title={ component.index.name }
          props={ json.props }>
        </ComponentWrapper>
      );
    });

    return (
      <div style={ { padding: '20px', margin: '50px auto', maxWidth: '900px' } }>

        <header className="push-quad--ends">
          <h1>
            <img
              className="push--right soft-half--bottom display--inline-block vertical-align--middle"
              src="https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif"
              width="130"
            />
                 OUI React Components
          </h1>
        </header>

        <Nav items={ componentItems } />

        { componentNodes }

        <footer className="soft-quad--ends border--top">
          <p className="muted">
            <img
              className="push--right soft-half--bottom display--inline-block vertical-align--middle"
              src="https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif"
              style={ {WebkitFilter: 'grayscale(100%)'} }
              width="40"
            />
            Our React component documentation is a work in progress. <a href="https://optimizely.slack.com/messages/oui">Ask for help</a>!
          </p>
        </footer>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
