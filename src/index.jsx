import React from 'react';
import ReactDOM from 'react-dom';

import Attention from './components/Attention';
import ArrowsInline from './components/ArrowsInline';
import Button from './components/Button';
import Code from './components/Code';
import Input from './components/Input';
import Label from './components/Label';
import Checkbox from './components/Checkbox';

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

const ComponentRow = ({ backgroundColor, children, isPadded }) => {
  let backgroundColorClass = backgroundColor ? 'background--' + backgroundColor : '';
  let paddingClass = isPadded ? 'soft' : '';
  let classes = ('push--bottom ' + backgroundColorClass + ' ' + paddingClass).trim();

  return (
    <div className={ classes }>
      { children }
    </div>
  );
};

ComponentRow.propTypes = {
  children: React.PropTypes.any.isRequired,
  backgroundColor: React.PropTypes.oneOf([
    'faint',
    'light',
    'muted',
    'medium',
    'charcoal',
    'brand',
    'brand-dark',
    'warning',
    'bad-news',
    'good-news',
    'live',
    'draft',
  ]),
  isPadded: React.PropTypes.bool,
};

const ComponentRowItem = ({ children }) => {
  return (
    <div className="push--right display--inline">
      { children }
    </div>
  );
};

ComponentRowItem.propTypes = {
  children: React.PropTypes.any.isRequired,
};

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: '50px auto', width: '800px' }}>
        <h1>OUI React Components</h1>

        <Component title="Attention">
          <ComponentRow>
            <Attention isDismissable alignment="center" type="warning">
              Hello! This is a short attention bar.
            </Attention>
          </ComponentRow>
          <ComponentRow>
            <Attention alignment="left" type="bad-news">
              Hello! This is a short attention bar.
            </Attention>
          </ComponentRow>
          <ComponentRow>
            <Attention type="brand">
              Hello! This is a short attention bar.
            </Attention>
          </ComponentRow>
          <ComponentRow>
            <Attention type="good-news">
              Hello! This is a short attention bar.
            </Attention>
          </ComponentRow>
          <ComponentRow>
            <Attention type="warning">
              Hello! This is a short attention bar.
            </Attention>
          </ComponentRow>
          <ComponentRow>
            <Attention alignment="center">
              Hello! This is a short attention bar.
            </Attention>
          </ComponentRow>
        </Component>

        <Component title="Arrows Inline">
          <ComponentRow>
            <ArrowsInline direction="up" /> Up
          </ComponentRow>
          <ComponentRow>
            <ArrowsInline direction="down" /> Down
          </ComponentRow>
          <ComponentRow>
            <ArrowsInline direction="left" /> Left
          </ComponentRow>
          <ComponentRow>
            <ArrowsInline direction="right" /> Right
          </ComponentRow>
        </Component>

        <Component title="Button">
          <ComponentRow isPadded>
            <ComponentRowItem>
              <Button>Button</Button>
            </ComponentRowItem>
            <ComponentRowItem>
              <Button style="highlight">Highlight Button</Button>
            </ComponentRowItem>
            <ComponentRowItem>
              <Button style="danger">Danger Button</Button>
            </ComponentRowItem>
            <ComponentRowItem>
              <Button style="outline">Outline Button</Button>
            </ComponentRowItem>
            <ComponentRowItem>
              <Button style="plain">Plain Button</Button>
            </ComponentRowItem>
            <ComponentRowItem>
              <Button style="toggle">Toggle Button</Button>
            </ComponentRowItem>
          </ComponentRow>
          <ComponentRow backgroundColor="brand-dark" isPadded>
            <ComponentRowItem>
              <Button style="outline-reverse">Outline Reverse Button</Button>
            </ComponentRowItem>
          </ComponentRow>
          <ComponentRow isPadded>
            <ComponentRowItem>
              <Button isDisabled>Disabled Button</Button>
            </ComponentRowItem>
          </ComponentRow>
          <ComponentRow backgroundColor="faint" isPadded>
            <ComponentRow>
              <ComponentRowItem>
                <Button size="small">Small Button</Button>
              </ComponentRowItem>
              <ComponentRowItem>
                <Button size="large">Large Button</Button>
              </ComponentRowItem>
              <ComponentRowItem>
                <Button size="narrow">Narrow Button</Button>
              </ComponentRowItem>
              <ComponentRowItem>
                <Button size="tight">Tight Button</Button>
              </ComponentRowItem>
            </ComponentRow>
            <ComponentRow>
              <ComponentRowItem>
                <Button size="full">Full Button</Button>
              </ComponentRowItem>
            </ComponentRow>
          </ComponentRow>
        </Component>

        <Component title="Code">
          <ComponentRow>
            <Code type="inline">var foo;</Code>
          </ComponentRow>
          <ComponentRow>
            <Code type="block">
{`var foo = 'bar';
var bat = 'baz';`}
            </Code>
          </ComponentRow>
        </Component>

        <Component title="Input">
          <ComponentRow>
            <Input type="text" defaultValue="foo" />
          </ComponentRow>
          <ComponentRow>
            <Input type="number" value="42" onChange={function() {}} />
          </ComponentRow>
          <ComponentRow>
            <Input type="password" label="Password" />
          </ComponentRow>
          <ComponentRow>
            <Input type="date" />
          </ComponentRow>
        </Component>

        <Component title="Label">
          <ComponentRow>
            <Label>I'm a Label</Label>
          </ComponentRow>
          <ComponentRow>
            <Label>
              <div>When I have nodes,</div>
              <div>I'm unstyled</div>
            </Label>
          </ComponentRow>
        </Component>

        <Component title="Checkbox">
          <ComponentRow>
            <Checkbox isChecked={true} onChange={function() {}} />
          </ComponentRow>
          <ComponentRow>
            <Checkbox isDefaultChecked={true} />
          </ComponentRow>
          <ComponentRow>
            <Checkbox label="A label, click me" />
          </ComponentRow>
        </Component>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
