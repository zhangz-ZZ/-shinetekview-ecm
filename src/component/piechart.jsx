import React from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';

export default class PieChart extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.object,
    colorbar: PropTypes.object
  }

  componentDidMount() {
    const { title, data } = this.props;
    this.myChart = echarts.init(document.getElementById(`piechart-${data._id}-${title}`));
    this.myChart.resize();
  }

  componentDidUpdate() {
    const { data, name, colorbar, unit } = this.props;
    this.myChart.resize();
    if (!data[name] || !data[name].length) {
      this.myChart.clear();
      return;
    }

    let seriesData = data[name][0].stats.map(item => item.name);
    const series = data[name].map((item, index) => {
      return {
        name: item.year,
        type: 'pie',
        label: {
          // show: index === data[name].length - 1 ? true : false,
          show: true,
          position: 'inner',
        },
        top: '0',
        height: '95%',
        radius: ['42%', '80%'],
        // radius: [`${index*2}0%`, `${index*2+2}0%`],
        data: item.stats.map((_item) => {
          return {
            value: _item.value,
            name: _item.name
          }
        })
      }
    });

    const color = colorbar.single.map((item) => {
      return `rgba(${item[1]})`;
    });

    const option = {
      color: color,
      label: {
        formatter: '{c}' + (unit)
      },
      legend: {
        align: 'right',
        icon: 'circle',
        itemGap: 8,
        itemWidth: 10,
        textStyle: {
          color: '#fff',
        },
        data: seriesData,
        bottom: '0',
      },
      series: [series[0]],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      }
    }
    this.myChart.setOption(option);
  }

  render() {
    const { title, data, name } = this.props;
    let total = 0;
    if (data[name]) {
      data[name][0].stats.forEach((item) => {
        total = total + Number(item.value);
      })
    }

    return (
      <div className="chart-module">
        <div className="chart-module__title">{title}</div>
        <div id={`piechart-${data._id}-${title}`} className="chart-module__content"></div>
        <div className="chart-module__total">{total}<br/>总面积/亩</div>
      </div>
    )
  }
}
