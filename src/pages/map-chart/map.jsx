import React from 'react';
import PropTypes from 'prop-types';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.openlayer = new window.ShinetekView();
  }

  componentDidMount() {
    const mapParams = {
      divID: 'view',
      extendParam: {
        isFullScreen: true,
        isMousePosition: true,
        isScaleLine: true,
        isZoomSlider: true
      },
      viewParam: {
        projection: "EPSG:4326",                                          // 投影方式 
        center: [105, 36],                                                // 中心点位置
        zoom: 4,                                                          // 当前 zoom 等级
        minZoom: 0,                                                       // 最小 zoom 等级
        maxZoom: 20,                                                      // 最大 zoom 等级
        extent: [-180, -90, 180, 90]                                      // View 范围
      }
    };
    this.openlayer.initMap(mapParams);
  }

  render() {
    return (
      <div id="view">

      </div>
    )
  }
}
