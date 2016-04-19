import React from 'react';
import ReactDOM from 'react-dom';

import Attention from './Attention';
import ArrowsInline from './ArrowsInline';
import Code from './Code';

const Component = ({ children, title }) => {
  return (
    <div className="push-triple--ends">
      <h2 className="push-double--bottom soft--bottom border--bottom">
        { title }
      </h2>
      { children }
    </div>
  );
};

Component.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired,
};

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: '50px auto', width: '800px' }}>
        <h1>OUI React Components</h1>

        <Component title="Attention">
          <Attention isDismissable alignment="center" type="warning">
            Hello! This is a short attention bar.
          </Attention>

          <Attention alignment="left" type="bad-news">
            Hello! This is a short attention bar.
          </Attention>

          <Attention alignment="center">
            Hello! This is a short attention bar.
          </Attention>
        </Component>

        <Component title="Arrows Inline">
          <ul>
            <li>
              <ArrowsInline direction="up" /> Up
            </li>
            <li>
              <ArrowsInline direction="down" /> Down
            </li>
            <li>
              <ArrowsInline direction="left" /> Left
            </li>
            <li>
              <ArrowsInline direction="right" /> Right
            </li>
          </ul>
        </Component>

        <Component title="Code">
          <Code type="inline">var foo;</Code>
          <Code type="block">
{`var foo = 'bar';
var bat = 'baz';`}
          </Code>
        </Component>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
