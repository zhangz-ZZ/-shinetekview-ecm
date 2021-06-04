import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import PieChart from 'component/piechart.jsx';
import BarChart from 'component/barchart.jsx';
import LineChart from 'component/linechart.jsx';
import Descriptions from 'component/descriptions.jsx';
import Model from 'component/model.jsx';

import Map from 'pages/map-chart/map.jsx';
import api from 'apiRequest/index.js';

import { TITLE } from 'constants.js';

export default class MapChart extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      sidebarLeftShow: true,
      sidebarRightShow: true,
      data: {},
      colorbar: {
        single: [],
        range: [],
        gradient: [],
      }
    }
  }

  componentDidMount() {
    api.getColorBar('AGRI').then((rep) => {
      const echartColorBar = rep.data.find((_item) => {
        return _item.group.indexOf('CDE-ALL') !== -1;
      });
      this.setState({ colorbar: echartColorBar });
    })
    api.getCaseInfoById('5fd064f940f1f2257e673395').then((rep) => {
      this.setState({ data: rep.data });
    })
  }

  mapAddLayer() {

  }

  renderSidebarLeft() {
    const { sidebarLeftShow, data, colorbar } = this.state;

    return (
      <div className={classnames('sidebar-left', {'hide': !sidebarLeftShow, 'show': sidebarLeftShow})}>
        <PieChart
          title="植被面积"
          name="areaStats"
          unit="亩"
          data={data}
          colorbar={colorbar}
        />
        <LineChart
          title="牧草产量"
          name="yield"
          unit="万吨"
          data={data}
          colorbar={colorbar}
        />
        <Descriptions
          title="天气"
          list={[]}
        />
      </div>
    )
  }

  renderSidebarRight() {
    const { sidebarRightShow, data, colorbar } = this.state;

    return (
      <div className={classnames('sidebar-right', {'hide': !sidebarRightShow, 'show': sidebarRightShow})}>
        <div className="thematic-btn"></div>
        <BarChart
          title="草地植被覆盖度"
          unit="%"
          left={40}
          fixed={3}
          name="landUseRate"
          data={data}
          colorbar={colorbar}
        />
        <LineChart
          title="牧草面积/草地植被面积占比"
          name="yield"
          unit="公顷"
          data={data}
          colorbar={colorbar}
        />
        <LineChart
          title="地上生物量"
          name="yield"
          unit="克/平方米"
          data={data}
          colorbar={colorbar}
        />
      </div>
    )
  }

  renderMap() {

  }

  render() {
    const { username } = this.state;

    return (
      <div className="MapChart">
        {this.renderSidebarLeft()}
        {this.renderSidebarRight()}
        <div className="prod-list">
          <div className="prod-list-time"></div>
          <div className="prod-list-ul">
            {
              TITLE.map((item) => {
                return (
                  <div className="prod-list-ul__li" key={item.name}>
                    <span className="prod-list-ul__li-name">
                      {item.name}
                      <img className="icon" alt="" src="/img/expand.png" />
                    </span>
                    {
                      item.child.length ? (
                        <ul className="prod-list-ul__li-ul">
                          {
                            item.child.length ? (
                              item.child.map((_item) => {
                                return <li key={_item.name} className="prod-list-ul__li-ul-li" onClick={this.mapAddLayer}>{_item.name}</li>
                              })
                            ) : null
                          }
                        </ul>
                      ) : null
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        <Map />
      </div>
    )
  }
}
