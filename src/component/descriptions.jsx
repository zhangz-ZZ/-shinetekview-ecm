import React from 'react';
import PropTypes from 'prop-types';

export default class Descriptions extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
  }

  render() {
    const { title, list } = this.props;
    return (
      <div className="chart-module">
        <div className="chart-module__title">{title}</div>
        <div className="chart-module__content">
          <ul className="Descriptions-ul">
          {
            list.map((item) => {
              const value = !Boolean(item.value) ? '' : item.value === 'undefined' ? '' : item.value;
              return (
                <li key={item.name} className="Descriptions-ul__li">
                  <img alt="" className="Descriptions-ul__li-icon" src={item.icon}/>
                  <span className="Descriptions-ul__li-desc">{item.name}</span>
                  <span className="Descriptions-ul__li-value">{value}</span>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}
