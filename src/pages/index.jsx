import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { HashRouter, Route, NavLink } from "react-router-dom";

import Header from 'pages/header.jsx';
import MapChart from 'pages/map-chart/grass.jsx';

import { MENU } from 'constants.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pathName: MENU[0],
      menu: MENU,
    }
  }

  componentDidMount() {

  }

  render() {
    const { pathName, menu } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="main">
          <HashRouter>
            <div className="submodule-menu">
              {
                menu.map((item) => {
                  return (
                    <NavLink
                      key={item.enName}
                      to={item.pathname}
                      className="submodule-menu__item"
                      activeClassName="submodule-menu__item--selected"
                    >
                      <img className="submodule-menu__item-img" alt="" src={item.icon} />
                      <span className="submodule-menu__item-name">{item.name}</span>
                    </NavLink>
                  )
                })
              }
            </div>
            <Route path="/grass" component={MapChart}></Route>
            <Route path="/desert" component={MapChart}></Route>
            <Route path="/wich" component={MapChart}></Route>
            <Route path="/sand" component={MapChart}></Route>
          </HashRouter>
        </div>
      </div>
    )
  }
}
