import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, browserHistory } from 'react-router';
import { useBasename } from 'history';
import ReactGA from 'react-ga';

import Category from './pages/category';
import Component from './pages/component';

import { version } from '../package.json';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-13208639-7');
}

const onUpdate = () => {
  window.scrollTo(0, 0);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

let hist = browserHistory;

if (process.env.NODE_ENV === 'production') {
  hist = useBasename(() => browserHistory)({ basename: `/docs/oui/${ version }` });
}

const Routes = (props) => (
  <Router history={ hist } onUpdate={ onUpdate }>
    <Route path="/" component={ props.shell }>
      <Route path="components" component={ Category }>
        <Route path=":component(/:subcomponent)(/:language)" component={ Component }></Route>
      </Route>
      <Route path="overrides" component={ Category }>
        <Route path=":component(/:subcomponent)(/:language)" component={ Component }></Route>
      </Route>
    </Route>
  </Router>
);

Routes.propTypes = {
  shell: PropTypes.func,
};

export default Routes;
