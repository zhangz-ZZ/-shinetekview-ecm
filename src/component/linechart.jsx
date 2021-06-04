import React from 'react';
import * as echarts from 'echarts';
import PropTypes from 'prop-types';

export default class LineChart extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.object,
    colorbar: PropTypes.object,
  }

  componentDidMount() {
    const { title, data } = this.props;
    this.myChart = echarts.init(document.getElementById(`linechart-${data._id}-${title}`));
    this.myChart.resize();
  }

  componentDidUpdate() {
    const { data, name, colorbar, unit } = this.props;
    this.myChart.resize();
    if (!data[name]) {
      this.myChart.clear();
      return;
    }

    let option = {};
    let xAxis = [];
    let seriesData = {};
    let series = [];

    xAxis = data[name].map((item) => {
      return item.year;
    });
    data[name][0].stats.forEach((item, index) => {
      seriesData[item.name] = data[name].map((_item) => {
        return _item.stats[index].value.toFixed(3);
      });
    })
    series = Object.keys(seriesData).map((key) => {
      return {
        name: key,
        type: 'line',
        data: seriesData[key]
      }
    });

    const color = colorbar.single.map((item) => {
      return `rgba(${item[1]})`;
    });

    option = {
      grid: {
        height: '68%',
        top: '12',
        left: '50',
        right: '0',
      },
      color: color,
      legend: {
        align: 'right',
        icon: 'circle',
        itemGap: 12,
        itemWidth: 20,
        textStyle: {
          color: '#fff',
        },
        data: Object.keys(seriesData),
        bottom: '0',
      },
      xAxis: [{
        type: 'category',
        axisLabel: {
          textStyle: {
            color: '#ffffff',
            fontSize: 10,
          }
        },
        axisLine: {
          lineStyle: {
            color: '#8ED6FF'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#8ED6FF'],
          }
        },
        minorSplitLine: {
          show: true,
          lineStyle: {
              color: '#8ED6FF'
          }
        },
        data: xAxis,
      }],
      yAxis: [{
        name: `${unit}/日期`,
        nameLocation: 'start',
        nameGap: 23,
        nameTextStyle: {
          color: '#ffffff'
        },
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#ffffff'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#8ED6FF'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#8ED6FF'],
          }
        }
      }],
      series: series,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      }
    }

    this.myChart.setOption(option);
  }

  render() {
    const { title, data, name } = this.props;

    return (
      <div className="chart-module">
        <div className="chart-module__title">{title}</div>
        <div id={`linechart-${data._id}-${title}`} className="chart-module__content"></div>
        {
          data[name] ? <img alt="" className="chart-module__background" src="/img/background.png"></img> : null
        }
      </div>
    )
  }
}
