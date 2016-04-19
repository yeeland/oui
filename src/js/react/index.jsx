import React from 'react';
import ReactDOM from 'react-dom';

import Attention from './Attention.jsx'
import ArrowsInline from './ArrowsInline.jsx'

const Component = ({ children, title }) => {
  return (
    <div className="push-triple--ends">
      <h2>{ title }</h2>
      { children }
    </div>
  )
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
