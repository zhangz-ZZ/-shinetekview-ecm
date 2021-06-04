import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
  }

  render() {
    return (
      <div className="header">
        <img className="header__logo" src="/img/logo.png" alt="" />
        <div className="header__time">{moment().format('YYYY-MM-DD HH:mm')}（BTC）</div>
      </div>
    )
  }
}
