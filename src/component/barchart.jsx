import React from 'react';
import * as echarts from 'echarts';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class BarChart extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    unit: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.object,
    colorbar: PropTypes.object,
    className: PropTypes.string,
    left: PropTypes.number,
    fixed: PropTypes.number,
  }

  componentDidMount() {
    const { title, data } = this.props;
    this.myChart = echarts.init(document.getElementById(`barchart-${data._id}-${title}`));
    this.myChart.resize();
    this.setChart();
  }

  componentDidUpdate() {
    this.setChart();
  }

  setChart = () => {
    const { data, name, colorbar, unit, left, fixed } = this.props;
    this.myChart.resize();
    if (!data[name] || !data[name].length) {
      this.myChart.clear();
      return;
    }
    const xAxis = data[name].map((item) => {
      return item.year ? item.year : item.date;
    });
    let seriesData = {};
    data[name][0].stats.forEach((item, index) => {
      seriesData[item.name] = data[name].map((_item) => {
        return {
          value: Number(_item.stats[index].value),
          area: _item.stats[index].area,
          CGM: _item.stats[index].CGM,
          SMM: _item.stats[index].SMM,
          totalYield: Number(_item.stats[index].totalYield),
        };
      });
    })
    const series = Object.keys(seriesData).map((key, index) => {
      const result = {
        name: key,
        type: 'bar',
        stack: '农作物',
        barMaxWidth: 25,
        data: seriesData[key]
      }
      if (name === 'growth' || name === 'yield') {
        result.itemStyle = {
          normal: {
            color: function (params) {
              let color = '';
              const value = params.data.value;
              if (colorbar.gradient.length) {
                for(let i=0; i<colorbar.gradient.length-1; i++) {
                  if (value >= colorbar.gradient[i][0] && value <= colorbar.gradient[i+1][0]) {
                    color = `rgba(${colorbar.gradient[i][1]})`;
                  }
                }
              }
              if (colorbar.range.length && !colorbar.gradient.length) {
                for(let i=0; i<colorbar.range.length; i++) {
                  const _item = colorbar.range[i][0].split(',');
                  if (value >= _item[0] && value < _item[1]) {
                    color = `rgba(${colorbar.range[i][1]})`;
                  }
                }
              }
              if (colorbar.single.length) {
                for(let i=0; i<colorbar.single.length-1; i++) {
                  if (value >= colorbar.single[i][0] && value <= colorbar.single[i+1][0]) {
                    color = `rgba(${colorbar.single[i][1]})`;
                  }
                }
              }
              return color;
            }
          }
        }
      }
      return result;
    });

    const option = {
      grid: {
        height: '68%',
        top: '12',
        left: left ? left : '25',
        right: '0',
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
        data: xAxis,
      }],
      yAxis: [{
        name: `${unit}/日期`,
        nameLocation: 'start',
        nameGap: 23,
        offset: 10,
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
        },
      }],
      series: series,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (param) {
          const item1 = param[0];
          let result = item1.axisValue + ' : ' + '<br/>';
          param.forEach((item) => {
            const dot = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>';
            const empty = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px"></span>';
            if (item.data.area) {
              result = result + dot + item.seriesName + ' : ' + item.data.value.toFixed(fixed) + unit + ' ( ' + item.data.area + '亩' + ' ) ' + '<br/>';
            } else if (item.data.CGM) {
              result = result + dot + '作物: ' + item.seriesName + '<br/>' + empty +'长势: ' + item.data.CGM + '<br/>' + empty + '墒情: ' + item.data.SMM + '<br/>';
            } else if (item.data.totalYield){
              result = result + dot + '作物: ' + item.seriesName + '<br/>' + empty + '亩产: ' + item.data.value.toFixed(fixed) + '<br/>' + empty + '地块总产量: ' + item.data.totalYield.toFixed(fixed) + '<br/>';
            } else {
              result = result + dot + item.seriesName + ' : ' + item.data.value + '<br/>';
            }
          });
          return result;
        }
      }
    }

    if (name !== 'yield' && name !== 'growth') {
      const color = colorbar.single.map((item) => {
        return `rgba(${item[1]})`;
      });
      option.color = color;
      option.legend = {
        align: 'right',
        icon: 'circle',
        itemGap: 8,
        itemWidth: 10,
        textStyle: {
          color: '#fff',
        },
        data: Object.keys(seriesData),
        bottom: '0',
      };
    }
    this.myChart.setOption(option);
  }

  render() {
    const { title, data, className } = this.props;

    return (
      <div className={classnames('chart-module', className)}>
        <div className="chart-module__title">{title}</div>
        <div id={`barchart-${data._id}-${title}`} className="chart-module__content"></div>
      </div>
    )
  }
}
