/*!
 * shinetekview.js
 * version:v1.7.4 
 * 2021-04-22 17:07
 * http://www.shinetek.com.cn/
 * 电话：010-68409523/6347
 * 邮箱：shinetek@cma.gov.cn
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/shinetekview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@rgba-image/bilinear/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@rgba-image/bilinear/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bilinear = function (source, dest) {
        var sx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var sy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var sw = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : source.width - sx;
        var sh = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : source.height - sy;
        var dx = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        var dy = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
        var dw = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : dest.width - dx;
        var dh = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : dest.height - dy;

        sx = sx | 0;
        sy = sy | 0;
        sw = sw | 0;
        sh = sh | 0;
        dx = dx | 0;
        dy = dy | 0;
        dw = dw | 0;
        dh = dh | 0;
        if (sw <= 0 || sh <= 0 || dw <= 0 || dh <= 0) return;
        var xRatio = sw / dw;
        var yRatio = sh / dh;
        for (var y = 0; y < dh; y++) {
            var destY = dy + y;
            if (destY < 0 || destY >= dest.height) continue;
            var sourceY = y * yRatio + sy;
            var yMin = sourceY | 0;
            var yMax = Math.min(Math.ceil(sourceY), source.height - 1);
            for (var x = 0; x < dw; x++) {
                var destX = dx + x;
                if (destX < 0 || destX >= dest.width) continue;
                var sourceX = x * xRatio + sx;
                var xMin = sourceX | 0;
                var xMax = Math.min(Math.ceil(sourceX), source.width - 1);
                var destIndex = (destY * dest.width + destX) * 4;
                assign(source, dest, destIndex, 0, sourceX, xMin, xMax, sourceY, yMin, yMax);
                assign(source, dest, destIndex, 1, sourceX, xMin, xMax, sourceY, yMin, yMax);
                assign(source, dest, destIndex, 2, sourceX, xMin, xMax, sourceY, yMin, yMax);
                assign(source, dest, destIndex, 3, sourceX, xMin, xMax, sourceY, yMin, yMax);
            }
        }
    };
    var interpolate = function interpolate(k, kMin, vMin, kMax, vMax) {
        // special case - k is integer
        if (kMin === kMax) return vMin;
        return Math.round((k - kMin) * vMax + (kMax - k) * vMin);
    };
    var assign = function assign(source, dest, destIndex, channel, sx, xMin, xMax, y, yMin, yMax) {
        var sw = source.width;
        var sourceData = source.data;
        var destData = dest.data;
        var minIndex = (yMin * sw + xMin) * 4 + channel;
        var maxIndex = (yMin * sw + xMax) * 4 + channel;
        var vMin = interpolate(sx, xMin, sourceData[minIndex], xMax, sourceData[maxIndex]);
        // special case, y is integer
        if (yMax === yMin) {
            destData[destIndex + channel] = vMin;
        } else {
            minIndex = (yMax * sw + xMin) * 4 + channel;
            maxIndex = (yMax * sw + xMax) * 4 + channel;
            var vMax = interpolate(sx, xMin, sourceData[minIndex], xMax, sourceData[maxIndex]);
            destData[destIndex + channel] = interpolate(y, yMin, vMin, yMax, vMax);
        }
    };
    /**
     * Copyright (c) 2015 Guyon Roche
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    //# sourceMappingURL=index.js.map
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Action/Draw.js":
/*!****************************!*\
  !*** ./src/Action/Draw.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Map/Map */ "./src/Map/Map.js"), __webpack_require__(/*! ../Layers/layerZIndex */ "./src/Layers/layerZIndex.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map, _layerZIndex) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.endEditDrawVector = exports.editDrawVector = exports.endDrawVector = exports.removeDrawVector = exports.addDrawVector = undefined;
  /* global PubSub */
  /** @module Draw */
  var drawVectorLayer = null;
  var drawVectorLayerSource = null;
  var drawInteraction = null;
  var defaultColor = '#1E90FF';
  var drawColor = null;
  var _drawType = null;
  var hasArea = false;

  /**
   * @description 新增绘制图层
   * @function
   * @param {String}  drawType 绘制类型 'Point'  'Box' 'Polygon' 'Circle' 'LineString'
   * @param {Object}  style 样式 {hasArea:false,color:{showColor:'#000',drawColor:'#000'},zIndex:500}
   * @param {Boolean} [style.hasArea =false] 是否计算面积
   * @param {Object}  [style.color] 展示颜色
   * @param {String}  [style.color.showColor ='#000'] 展示颜色
   * @param {String}  [style.color.drawColor ='#000'] 绘制颜色
   * @param {Number}  [style.zIndex ] 绘制zIndex
   * @example
   *  const typeList= ['Point','LineString','Box','Polygon','Circle']
   *  const type= typeList[0]
   *  const style = {
   *    color: {
   *      drawColor: '#FF0000',
   *      showColor: '#00FF00',
   *    },
   *    hasArea: true,
   * }
   *  mOlClass.addDrawVector(type, style)
  */
  function addDrawVector(drawType, style) {
    var _olMap = (0, _Map.getMap)();
    _drawType = drawType || 'Box';
    var color = style.color;
    var zIndex = style.zIndex;
    hasArea = style.hasArea;
    // 先删除 当前的 绘制图层
    // 如果已经存在绘制的图层
    if (!drawVectorLayer) {
      var source = new ol.source.Vector({ wrapX: false });
      // const style = getDrawShowStyle(color)
      drawColor = color;
      var vector = new ol.layer.Vector({
        source: source,
        style: getDrawShowStyle
      });
      drawVectorLayer = vector;
      drawVectorLayerSource = source;
      var zIndexNow = zIndex;
      if (!zIndex) {
        zIndexNow = (0, _layerZIndex.getDrawLayerZIndex)();
      }
      vector.setZIndex(zIndexNow);
      _olMap.addLayer(vector);
    } else {
      drawColor = color;
    }
    // 控制绘制
    setDrawMode(drawType, color);
  }

  // 获取绘制时的样式
  function _getDrawStyle(feature, resolution) {
    var lineColor = defaultColor;
    if (drawColor) {
      if (drawColor.drawColor) {
        lineColor = drawColor.drawColor;
      }
    }
    var style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.0)'
      }),
      stroke: new ol.style.Stroke({
        color: lineColor,
        width: 2,
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.0)'
        })
      }),
      image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({
          color: lineColor
        })
      })
    });
    return style;
  }

  // 获取绘制后显示内容样式
  function getDrawShowStyle(feature, res) {
    var lineColor = defaultColor;
    if (drawColor) {
      if (drawColor.showColor) {
        lineColor = drawColor.showColor;
      }
    }
    var _style = feature.get('style');
    if (_style) {
      return _style;
    }
    var style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.0)'
      }),
      stroke: new ol.style.Stroke({
        color: lineColor,
        width: 2,
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.0)'
        })
      }),
      image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({
          color: lineColor
        })
      })
    });
    feature.set('style', style);
    return style;
  }

  /**
   * @description 结束绘制图层 保留图层展示
   * @example
   * mOlClass.endDrawVector()
   */
  function endDrawVector() {
    // 如果存在
    var _olMap = (0, _Map.getMap)();
    if (drawInteraction) {
      _olMap.removeInteraction(drawInteraction);
      drawInteraction = null;
      helpLayerList.forEach(function (layer) {
        _olMap.removeOverlay(layer);
      });
    }
  }

  /**
   * @description 移除绘制图层
   * @example
   * mOlClass.removeDrawVector()
   */
  function removeDrawVector() {
    var _olMap = (0, _Map.getMap)();
    var vector = drawVectorLayer;
    if (vector) {
      _olMap.removeLayer(vector);
      drawVectorLayer = null;
      drawVectorLayerSource = null;
    }
    /* 清除提示信息 */
    overlayerList.forEach(function (layer) {
      _olMap.removeOverlay(layer);
    });
    helpLayerList.forEach(function (layer) {
      _olMap.removeOverlay(layer);
    });
  }

  // 绘制矩形
  function setDrawMode(drawType, color) {
    endDrawVector();
    var _map = (0, _Map.getMap)();
    var value = drawType || 'Polygon';
    var _draw = new ol.interaction.Draw({
      source: drawVectorLayerSource,
      type: value,
      style: _getDrawStyle
    });
    if (drawType === 'Box') {
      var geometryFunction = ol.interaction.Draw.createBox();
      _draw = new ol.interaction.Draw({
        source: drawVectorLayerSource,
        type: 'Circle',
        geometryFunction: geometryFunction,
        style: _getDrawStyle
      });
    }
    _map.addInteraction(_draw);
    drawInteraction = _draw;

    // 新增开始监听
    var listener = void 0,
        sketch = void 0,
        output = void 0;

    var pointerMoveHandler = function pointerMoveHandler(evt) {
      if (evt.dragging) {
        return;
      }

      var helpMsg = '点击开始绘制';

      if (sketch) {
        if (drawType === 'LineString' || drawType === 'Polygon') {
          helpMsg = '单击继续绘制, 双击结束';
        } else {
          helpMsg = '单击结束';
        }
      }

      helpTooltipElement.innerHTML = helpMsg;
      helpTooltip.setPosition(evt.coordinate);

      helpTooltipElement.classList.remove('hidden');
    };
    _map.on('pointermove', pointerMoveHandler);

    createMeasureTooltip();
    createHelpTooltip();

    _draw.on('drawstart', function (evt) {
      sketch = evt.feature;
      listener = sketch.getGeometry().on('change', function (evt) {
        var geom = evt.target;
        output = formatArea(geom, drawType);
        if ((_drawType === 'Box' || _drawType === 'Polygon') && hasArea) {
          tooltipCoord = geom.getInteriorPoint().getCoordinates();
          measureTooltipElement.innerHTML = output.area;
          measureTooltip.setPosition(tooltipCoord);
        }
      });
    });

    _draw.on('drawend', function (evt) {
      sketch = null;
      if (_drawType === 'Point') {
        output = evt.target.sketchCoords_;
      }
      if ((_drawType === 'Box' || _drawType === 'Polygon') && hasArea) {
        measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
        measureTooltip.setOffset([0, -7]);
        measureTooltipElement = null;
        createMeasureTooltip();
      }
      if (PubSub) {
        PubSub.publish('shineket_drawend', output);
      }
      ol.Observable.unByKey(listener);
    });
  }

  /* 创建帮助提示 */
  var tooltipCoord = void 0;
  var helpTooltipElement;
  var helpTooltip;
  var helpLayerList = [];
  function createHelpTooltip() {
    var _olMap = (0, _Map.getMap)();
    if (helpTooltipElement) {
      helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'ol-tooltip hidden';
    helpTooltip = new ol.Overlay({
      element: helpTooltipElement,
      offset: [15, 0],
      positioning: 'center-left'
    });
    _olMap.addOverlay(helpTooltip);
    helpLayerList.push(helpTooltip);
  }

  /* 创建面积提示 */
  var measureTooltipElement = void 0;
  var measureTooltip = void 0;
  var overlayerList = [];
  function createMeasureTooltip() {
    var _olMap = (0, _Map.getMap)();
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
    measureTooltip = new ol.Overlay({
      element: measureTooltipElement,
      offset: [0, -15],
      positioning: 'bottom-center'
    });
    _olMap.addOverlay(measureTooltip);
    overlayerList.push(measureTooltip);
  }

  var formatArea = function formatArea(polygon, drawType) {
    var output = void 0;
    if ((drawType === 'Box' || drawType === 'Polygon') && hasArea) {
      var area = ol.sphere.getArea(polygon, { projection: 'EPSG:4326' });
      if (area > 10000) {
        output = Math.round(area / 1000000 * 100) / 100 + ' ' + 'km²';
      } else {
        output = Math.round(area * 100) / 100 + ' ' + 'm²';
      }
    }

    var info = {
      extent: polygon.extent_,
      flatCoordinates: polygon.flatCoordinates,
      area: output
    };
    return info;
  };

  var modify = null;
  var select = null;
  function editDrawVector(_hasArea) {
    var _olMap = (0, _Map.getMap)();
    hasArea = _hasArea;

    var overlayStyle = function () {
      var styles = {};
      styles.Polygon = [new ol.style.Style({
        fill: new ol.style.Fill({
          color: [255, 255, 255, 0.5]
        })
      }), new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: [255, 255, 255, 1],
          width: 5
        })
      }), new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: [0, 153, 255, 1],
          width: 3
        })
      })];
      styles.MultiPolygon = styles.Polygon;

      styles.LineString = [new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: [255, 255, 255, 1],
          width: 5
        })
      }), new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: [0, 153, 255, 1],
          width: 3
        })
      })];
      styles.MultiLineString = styles.LineString;

      styles.Point = [new ol.style.Style({
        image: new ol.style.Circle({
          radius: 7,
          fill: new ol.style.Fill({
            color: [0, 153, 255, 1]
          }),
          stroke: new ol.style.Stroke({
            color: [255, 255, 255, 0.75],
            width: 1.5
          })
        }),
        zIndex: 100000
      })];
      styles.MultiPoint = styles.Point;

      styles.GeometryCollection = styles.Polygon.concat(styles.Point);

      return function (feature) {
        return styles[feature.getGeometry().getType()];
      };
    }();
    select = new ol.interaction.Select({
      style: overlayStyle
    });
    modify = new ol.interaction.Modify({
      features: select.getFeatures(),
      style: overlayStyle,
      insertVertexCondition: function insertVertexCondition() {
        return !select.getFeatures().getArray().every(function (feature) {
          return feature.getGeometry().getType().match(/Polygon/);
        });
      }
    });

    createMeasureTooltip();
    select.on('select', function shineketEditDelect(e) {
      if (PubSub && e.selected[0]) {
        PubSub.publish('shineket_editdelect', {
          id: e.selected[0].values_.id
        });
      }
    });
    modify.on('modifyend', function (e) {
      var geom = e.features.item(0).getGeometry();
      var output = formatArea(geom, 'Polygon');
      tooltipCoord = geom.getInteriorPoint().getCoordinates();
      measureTooltipElement.innerHTML = output.area;
      measureTooltip.setPosition(tooltipCoord);
      if (PubSub) {
        PubSub.publish('shineket_editdrawend', {
          extent: output.extent,
          flatCoordinates: output.flatCoordinates,
          id: e.features.item(0).get('id'),
          area: output.area
        });
      }
    });
    _olMap.addInteraction(select);
    _olMap.addInteraction(modify);
  }

  function endEditDrawVector() {
    var _olMap = (0, _Map.getMap)();
    if (modify) {
      _olMap.removeInteraction(select);
      _olMap.removeInteraction(modify);
      modify = null;
      select = null;
      /* 清除提示信息 */
      overlayerList.forEach(function (layer) {
        _olMap.removeOverlay(layer);
      });
    }
  }

  exports.addDrawVector = addDrawVector;
  exports.removeDrawVector = removeDrawVector;
  exports.endDrawVector = endDrawVector;
  exports.editDrawVector = editDrawVector;
  exports.endEditDrawVector = endEditDrawVector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Action/featureClick.js":
/*!************************************!*\
  !*** ./src/Action/featureClick.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Map/Map */ "./src/Map/Map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addFeaturesSelect = exports.addFeatureClick = undefined;


  function addFeatureClick(map) {
    // 点击事件
    map.on('click', function (evt) {
      var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        // console.log(feature)
        return feature;
      });
      var mapId = (0, _Map.getMapTargetID)();
      var returnValue = {};
      if (feature) {
        // TODO 修改为Pubsub
        returnValue.info = feature.getProperties();
        // 传出 被点击的事件
        $('#' + mapId).trigger('mapClickEvent', returnValue);
      } else {
        $('#' + mapId).trigger('unMapClickEvent', []);
      }
    });
  }

  function createStyle(src, img) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 0.96],
        crossOrigin: 'anonymous',
        src: src,
        img: img,
        imgSize: img ? [img.width, img.height] : undefined
      })
    });
  }

  function addFeaturesSelect(map, params) {
    // 点击事件
    var selectStyle = {};
    var select = new ol.interaction.Select({
      style: function style(feature) {
        var image = feature.get('style').getImage().getImage();
        if (!selectStyle[image.src]) {
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, image.width, image.height);
          var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          var data = imageData.data;
          // 此处 部分 可对 canvas 进行 重新绘制
          for (var i = 0, ii = data.length; i < ii; i = i + (i % 4 === 2 ? 2 : 1)) {
            data[i] = 255 - data[i];
          }
          context.putImageData(imageData, 0, 0);
          selectStyle[image.src] = createStyle(undefined, canvas);
        }
        return selectStyle[image.src];
      }
    });
    map.addInteraction(select);
  }

  exports.addFeatureClick = addFeatureClick;
  exports.addFeaturesSelect = addFeaturesSelect;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Action/mapDoubleClick.js":
/*!**************************************!*\
  !*** ./src/Action/mapDoubleClick.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /** @module Map */
  /**
   * @description 双击事件 PubSub
   * 设置 默认的双击事件
   * 使用PubSub 关键字  dblClick 进行发布
   * 返回数组形式的json ：
   * {
   *    coordinate: coor
   *  }
   * @author liuyp
   * @param {ol/Map} map
   */
  function setMapDoubleClickDefault(map) {
    function onDoubleClick(evt) {
      if (evt.dragging) {
        return;
      }
      // 经纬度
      var coor = evt.coordinate;
      var msg = {
        coordinate: coor
      };
      if (PubSub) {
        PubSub.publish('dbClick', msg);
      }
    }
    // 设置
    map.on('dblclick', onDoubleClick);
  }

  exports.setMapDoubleClickDefault = setMapDoubleClickDefault;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Action/mapMove.js":
/*!*******************************!*\
  !*** ./src/Action/mapMove.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Map/Map */ "./src/Map/Map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setMapMoveDefault = undefined;


  /**
   * 设置Map触发移动信息 PubSub.publish mapMove
   * @param {Map} map 当前显示地图
   * @example
   *  const msg = {
   *    extent: extent,
   *    resolution: resolutionDegree,
   *    resolutionView: resolutionDegree
   *   }
   */
  function setMapMoveDefault(map) {
    function onMoveEnd(evt) {
      if (evt.dragging) {
        return;
      }
      var _view = map.getView();
      // 范围
      var extent = _view.calculateExtent(map.getSize());
      // 分辨率
      var resolution = _view.getResolution();
      // 从 m 转化为 经纬度
      var resolutionDegree = getResolutionByViewMode(_view, resolution);
      var msg = {
        extent: extent,
        resolution: resolutionDegree,
        resolutionView: resolutionDegree
      };
      if (PubSub) {
        // 兼容旧版本移动
        var mapID = (0, _Map.getMapTargetID)();
        $('#' + mapID).trigger('mapMove', msg);
        PubSub.publish('mapMove', msg);
      }
    }
    // 设置
    map.on('moveend', onMoveEnd);
  }

  // 添加基于 view 的分辨率转化
  /** @module Map */
  function getResolutionByViewMode(view, res) {
    var projView = view.getProjection();
    var viewUnit = projView.units_;
    if (viewUnit === 'm') {
      res = res / 100000;
    }
    return res;
  }

  exports.setMapMoveDefault = setMapMoveDefault;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Action/measure.js":
/*!*******************************!*\
  !*** ./src/Action/measure.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Map/Map */ "./src/Map/Map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.stopMeasure = exports.endMeasure = exports.startMeasure = undefined;

  var draw = void 0; /** @module ol.interaction.Draw */

  var layerList = [];
  var overlayerList = [];
  var helpLayerList = [];

  /**
   * @description 退出测距模式 同时移除测距相关图层
   * @example
   * mOlClass.endMeasure()
   */
  function endMeasure() {
    var _olMap = (0, _Map.getMap)();
    if (draw) {
      _olMap.removeInteraction(draw);
      layerList.forEach(function (layer) {
        _olMap.removeLayer(layer);
      });
      overlayerList.forEach(function (layer) {
        _olMap.removeOverlay(layer);
      });
      helpLayerList.forEach(function (layer) {
        _olMap.removeOverlay(layer);
      });
    }
  }

  /**
   * @description 停止测距 保留测距内容
   * @example
   * mOlClass.stopMeasure()
   */
  function stopMeasure() {
    var _olMap = (0, _Map.getMap)();
    if (draw) {
      _olMap.removeInteraction(draw);
      helpLayerList.forEach(function (layer) {
        _olMap.removeOverlay(layer);
      });
    }
  }

  /**
   * @description 开始测距
   * @param {Number} zIndex 图层Zindex
   * @returns 测距是否成功
   * @example
   * mOlClass.startMeasure(500)
   */
  function startMeasure(zIndex) {
    var _olMap = (0, _Map.getMap)();
    _olMap.removeInteraction(draw);
    var source = new ol.source.Vector();
    var vector = new ol.layer.Vector({
      source: source,
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
          color: '#ffcc33',
          width: 2
        }),
        image: new ol.style.Circle({
          radius: 7,
          fill: new ol.style.Fill({
            color: '#ffcc33'
          })
        })
      })
    });
    // todo 从 总控中获取 zIndex
    vector.setZIndex(zIndex);

    var sketch = void 0;
    var helpTooltipElement = void 0;
    var helpTooltip = void 0;
    var measureTooltip = void 0;
    var measureTooltipElement = void 0;

    var pointerMoveHandler = function pointerMoveHandler(evt) {
      if (evt.dragging) {
        return;
      }

      var helpMsg = '点击开始绘制';

      if (sketch) {
        helpMsg = '单击继续绘制, 双击结束';
      }

      helpTooltipElement.innerHTML = helpMsg;
      helpTooltip.setPosition(evt.coordinate);

      helpTooltipElement.classList.remove('hidden');
    };

    _olMap.addLayer(vector);
    layerList.push(vector);

    _olMap.on('pointermove', pointerMoveHandler);

    _olMap.getViewport().addEventListener('mouseout', function () {
      helpTooltipElement.classList.add('hidden');
    });

    var formatLength = function formatLength(line) {
      var length = ol.sphere.getLength(line, { projection: 'EPSG:4326' });
      var output = void 0;
      if (length > 100) {
        output = Math.round(length / 1000 * 100) / 100 + ' ' + 'km';
      } else {
        output = Math.round(length * 100) / 100 + ' ' + 'm';
      }
      return output;
    };

    function addInteraction() {
      var _olMap = (0, _Map.getMap)();
      draw = new ol.interaction.Draw({
        source: source,
        type: 'LineString',
        style: new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
          }),
          stroke: new ol.style.Stroke({
            color: '#ffcc33',
            lineDash: [10, 10],
            width: 2
          }),
          image: new ol.style.Circle({
            radius: 5,
            stroke: new ol.style.Stroke({
              color: '#ffcc33'
            }),
            fill: new ol.style.Fill({
              color: 'rgba(255, 255, 255, 0.2)'
            })
          })
        })
      });
      _olMap.addInteraction(draw);

      createMeasureTooltip();
      createHelpTooltip();

      var listener = void 0;
      draw.on('drawstart', function (evt) {
        // set sketch
        sketch = evt.feature;
        var tooltipCoord = evt.coordinate;

        listener = sketch.getGeometry().on('change', function (evt) {
          var geom = evt.target;
          var output = formatLength(geom);
          tooltipCoord = geom.getLastCoordinate();
          measureTooltipElement.innerHTML = output;
          measureTooltip.setPosition(tooltipCoord);
        });
      });

      draw.on('drawend', function () {
        measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        sketch = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        ol.Observable.unByKey(listener);
      });
    }

    function createHelpTooltip() {
      var _olMap = (0, _Map.getMap)();
      if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
      }
      helpTooltipElement = document.createElement('div');
      helpTooltipElement.className = 'ol-tooltip hidden';
      helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left'
      });
      _olMap.addOverlay(helpTooltip);
      helpLayerList.push(helpTooltip);
    }

    function createMeasureTooltip() {
      var _olMap = (0, _Map.getMap)();
      if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
      }
      measureTooltipElement = document.createElement('div');
      measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
      measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center'
      });
      _olMap.addOverlay(measureTooltip);
      overlayerList.push(measureTooltip);
    }

    addInteraction();
    return true;
  }

  exports.startMeasure = startMeasure;
  exports.endMeasure = endMeasure;
  exports.stopMeasure = stopMeasure;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Action/mouseMove.js":
/*!*********************************!*\
  !*** ./src/Action/mouseMove.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function pointerMoveDefault(map) {
    // 点击事件
    map.on('pointermove', function (evt) {
      if (evt.dragging) {
        return;
      }

      var coordinate = map.getCoordinateFromPixel(evt.pixel);
      // var resolution = map.getView().getResolution()
      // 转化为经纬度模式
      var coordinate4326 = convertCoordinate24326(map.getView(), coordinate);
      var info = {
        coordinate: coordinate4326,
        coordinateView: coordinate
      };
      if (PubSub) {
        // 20200316 基于VIEW 返回正确的分辨率
        // console.logg(info)
        PubSub.publish('mouseMove', info);
      }
    });
  }

  function convertCoordinate24326(view, cood) {
    var projView = view.getProjection();
    var cood4326 = ol.proj.toLonLat(cood, projView);
    return cood4326;
  }

  exports.pointerMoveDefault = pointerMoveDefault;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Action/singleClick.js":
/*!***********************************!*\
  !*** ./src/Action/singleClick.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Map/Map */ "./src/Map/Map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addSingleClickEvent = undefined;


  /**
   * @description 添加单独点击事件 返回属性为kashi的id Pubsub SHINETEKVIEW_AEROSAT_FIELDS_CLICK
   * @param {Object} params 单击事件返回参数
   * @param {function} params.iconClick  触发函数 当且仅当 type为kashi时生效
   */
  function addSingleClickEvent(params) {
    var map = (0, _Map.getMap)();
    map.on('singleclick', function (event) {
      var feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
      });
      if (feature === undefined) {
        return;
      }
      // 调用 kashi 返回ID
      if (feature.get('type') === 'kashi') {
        params.iconClick(feature.get('id'));
      }

      if (feature.get('type') === 'shinetekview-aerosat-fields') {
        if (PubSub) {
          PubSub.publish('SHINETEKVIEW_AEROSAT_FIELDS_CLICK', feature.get('id'));
        }
      }
    });
  } /* global PubSub */
  /**  @module Map */
  exports.addSingleClickEvent = addSingleClickEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/ColorBar/blur.js":
/*!******************************!*\
  !*** ./src/ColorBar/blur.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // 对 image 进行转化
  function blurImage(inputData, width, height) {
    var kernel = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    kernel = normalize(kernel);
    function normalize(kernel) {
      var len = kernel.length;
      var normal = new Array(len);
      var i;var sum = 0;
      for (i = 0; i < len; ++i) {
        sum += kernel[i];
      }
      if (sum <= 0) {
        normal.normalized = false;
        sum = 1;
      } else {
        normal.normalized = true;
      }
      for (i = 0; i < len; ++i) {
        normal[i] = kernel[i] / sum;
      }
      return normal;
    }

    // var canvas = context.canvas
    // var width = canvas.width
    // var height = canvas.height

    var size = Math.sqrt(kernel.length);
    var half = Math.floor(size / 2);

    // 输出路径
    var outputData = new Array(inputData.length);

    for (var pixelY = 0; pixelY < height; ++pixelY) {
      var pixelsAbove = pixelY * width;
      for (var pixelX = 0; pixelX < width; ++pixelX) {
        var r = 0;var g = 0;var b = 0;var a = 0;
        for (var kernelY = 0; kernelY < size; ++kernelY) {
          for (var kernelX = 0; kernelX < size; ++kernelX) {
            var weight = kernel[kernelY * size + kernelX];
            var neighborY = Math.min(height - 1, Math.max(0, pixelY + kernelY - half));
            var neighborX = Math.min(width - 1, Math.max(0, pixelX + kernelX - half));
            var inputIndex = (neighborY * width + neighborX) * 4;
            r += inputData[inputIndex] * weight;
            g += inputData[inputIndex + 1] * weight;
            b += inputData[inputIndex + 2] * weight;
            a += inputData[inputIndex + 3] * weight;
          }
        }
        var outputIndex = (pixelsAbove + pixelX) * 4;
        outputData[outputIndex] = r;
        outputData[outputIndex + 1] = g;
        outputData[outputIndex + 2] = b;
        outputData[outputIndex + 3] = kernel.normalized ? a : 255;
      }
    }
    return outputData;
  }
  exports.blurImage = blurImage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/ColorBar/colorBar.js":
/*!**********************************!*\
  !*** ./src/ColorBar/colorBar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /**
   * Created by liuyp on 2018/11/30.
   * 调色板转化函数 新模式不再需要指定模式
   * 按照 single range gradient的 顺序进行顺序优先查找
   * single 模式 不适用slope 进行数值换算
   * @module ColorBar
   */

  /**
   * @description 从colorBar中转化数据
   * @param {Json} colorbar 调色板数据
   * @param {Array} data 数据
   */
  function getColorData(colorbar, data) {
    var colorbarF = formatCB(colorbar);

    //  // console.log('getColorData')
    //  // console.log(colorbar)
    // rangaTest(colorbar, data)
    var dataRGB = [];
    if (data) {
      for (var i = 0; i < data.length; i++) {
        var dataI = data[i];
        // let dataIRGB = [0, 0, 0, 0]
        //  dataRGB[i] = colorbar(data[i])
        var dataIRGB = findColorBar(colorbarF, dataI);
        dataRGB.push(dataIRGB);
      }
    }
    //  // console.log(dataRGB)
    return dataRGB;
  }

  function formatCB(colorbar1) {
    var colorbar = colorbar1;
    if (colorbar.gradient) {
      colorbar.gradient.forEach(function (gradientItem) {
        var gradientItem1 = gradientItem[1];
        if (gradientItem1.length === 1) {
          gradientItem[1] = gradientItem1.split(',');
          for (var i = 0; i < gradientItem[1].length; i++) {
            gradientItem[1][i] = parseInt(gradientItem[1][i]);
          }
          if (gradientItem[1].length === 3) {
            gradientItem[1].push(255);
          }
        }
      });
    }
    // console.log(colorbar)
    return colorbar;
  }

  function rgbFix4(RGB) {
    var _RGB = RGB;
    if (RGB === [255, 255, 255]) {
      _RGB = [255, 255, 255, 0];
    }
    if (!RGB) {
      _RGB = [255, 255, 255, 0];
    }
    return _RGB;
  }

  function findColorBar(colorbar, value) {
    // 根据 color bar
    var RGB = [];
    // 20190516 修复tiff中存在无效值的时候 返回调色板异常bug
    if (checkValueVaild(value) === false) {
      RGB = [255, 255, 255, 0];
      return RGB;
    }

    var isFind = false;

    // 填充值查找
    var fill = colorbar.fill;
    if (fill) {
      var fillInfo = fillColorBar(colorbar, value);
      if (fillInfo.isFind) {
        RGB = fillInfo.RGB;
        isFind = true;
      }
    }

    // 单值查找
    if (colorbar.single) {
      if (isFind === false) {
        var singleInfo = singleColorBar(colorbar, value);
        if (singleInfo.isFind) {
          RGB = singleInfo.RGB;
          isFind = true;
        }
      }
    }

    // 基于slope 进行计算
    if (colorbar.slope) {
      var slope = colorbar.slope;
      if (slope !== 1) {
        value = slope * value;
      }
    }
    // range 模式查找

    if (isFind === false) {
      var range = colorbar.range;
      if (range) {
        var rangeInfo = rangeColorBar(colorbar, value);
        if (rangeInfo.isFind) {
          RGB = rangeInfo.RGB;
          isFind = true;
        }
      }
    }
    if (isFind === false) {
      // 渐变模式查找
      var gradient = colorbar.gradient;
      if (gradient && isFind === false) {
        var info = gradientColorBar(colorbar, value);
        if (info.isFind) {
          RGB = info.RGB;
          isFind = true;
        }
      }
    }
    RGB = rgbFix4(RGB, isFind);
    return RGB;
  }

  // 校验调色板值的正确性
  function checkValueVaild(value) {
    var vaild = true;
    if (value === 0) {
      vaild = true;
      return true;
    }
    value = parseFloat(value);
    if (!value) {
      vaild = false;
    }
    return vaild;
  }

  // 填充值
  function fillColorBar(colorbar, data) {
    var cb = colorbar;
    var isFind = false;
    var RGBAValue = [255, 255, 255, 0];
    if (!cb.single) {
      return {
        isFind: false,
        RGB: null
      };
    }
    cb.fill.forEach(function (singleItem) {
      if (singleItem[0] === data) {
        RGBAValue = singleItem[1];
        isFind = true;
      }
    });
    if (RGBAValue.length === 3) {
      RGBAValue.push(255);
    }
    return {
      isFind: isFind,
      RGB: RGBAValue
    };
  }

  function singleColorBar(colorbar, data) {
    // if (data == 32000) {
    //    // console.log('water')
    // }
    var cb = colorbar;
    var isFind = false;
    var RGBAValue = [255, 255, 255, 0];
    if (!cb.single) {
      return {
        isFind: false,
        RGB: null
      };
    }
    cb.single.forEach(function (singleItem) {
      if (singleItem[0] === data) {
        RGBAValue = singleItem[1];
        isFind = true;
        if (singleItem[2] === undefined || singleItem[2] === '' || singleItem[2] === '填充值') {
          RGBAValue = [255, 255, 255, 0];
        }
      }
    });
    if (RGBAValue.length === 3) {
      RGBAValue.push(255);
    }

    return {
      isFind: isFind,
      RGB: RGBAValue
    };
  }

  function rangeColorBar(colorbar, data) {
    var cb = colorbar;
    // if (data > 0) {
    //    // console.log(data)
    // }

    var rangeList = cb.range;
    if (!rangeList) {
      return {
        isFind: false,
        RGB: null
      };
    }
    var selectRangeRGB = null;
    var isFind = false;
    for (var i = 0; i < rangeList.length; i++) {
      var rangeItem = rangeList[i];
      if (!isFind) {
        var rangeValue = rangeItem[0];
        var rangeRGB = rangeItem[1];
        // 判断渐变调色板模式
        if (rangeValue instanceof Array) {
          // 数组模式
          var slopeData = data;
          // 如果存在
          //  rangeValue[0] 为null
          if (!rangeValue[0] && rangeValue[0] !== 0) {
            if (slopeData <= rangeValue[1]) {
              selectRangeRGB = rangeRGB;
              isFind = true;
            }
          }
          //  rangeValue[1] 为null
          if (!isFind) {
            if (!rangeValue[1] && rangeValue[1] !== 0) {
              if (slopeData >= rangeValue[0]) {
                selectRangeRGB = rangeRGB;
                isFind = true;
              }
            }
          }
          if (!isFind) {
            if (slopeData <= rangeValue[1] && slopeData >= rangeValue[0]) {
              selectRangeRGB = rangeRGB;
              isFind = true;
            }
          }
          // if (slopeData <= rangeValue[0] && slopeData >= rangeValue[1]) {
          //   selectRangeRGB = rangeRGB;
          //   isFind = true;
          // }
        }
      }
    }

    if (!selectRangeRGB) {
      selectRangeRGB = [255, 255, 255, 0];
    } else {
      if (selectRangeRGB.length === 3) {
        selectRangeRGB.push(255);
      }
    }
    return {
      isFind: isFind,
      RGB: selectRangeRGB
    };
  }

  function gradientColorBar(colorbar, data) {
    // 渐变调色板
    var cb = colorbar;
    if (!cb.gradient) {
      return {
        isFind: false,
        RGB: null
      };
    }
    if (cb.gradient.length === 0) {
      return {
        isFind: false,
        RGB: null
      };
    }

    var RGBAValue = [255, 255, 255, 0];

    // 默认为第一个Index
    var valueIndex = 0;
    var isFind = false;
    var value = data;
    // 判断第一个值
    if (cb.gradient[0]) {
      if (cb.gradient[0][0] > value) {
        RGBAValue = cb.gradient[0][1];
        isFind = true;
      }
    }
    if (!isFind) {
      // 判断最后一个值
      // 20190312 修复值域等于最大值 绘制失败bug
      if (cb.gradient[cb.gradient.length - 1][0] <= value) {
        // return cb.gradient[cb.gradient.length - 1][1];
        RGBAValue = cb.gradient[cb.gradient.length - 1][1];
        if (RGBAValue.length === 3) {
          RGBAValue.push(255);
        }
        isFind = true;
      }
    }

    if (isFind) {
      // 对 4 位进行处理
      if (RGBAValue.length === 4) {
        RGBAValue = [RGBAValue[0], RGBAValue[1], RGBAValue[2], RGBAValue[3]];
      } else {
        RGBAValue = [RGBAValue[0], RGBAValue[1], RGBAValue[2], 255];
      }
      return {
        isFind: isFind,
        RGB: RGBAValue
      };
    }

    // 查找位于第几阶级
    for (var i = 0; i < cb.gradient.length - 1; i++) {
      if (!isFind) {
        var cbI = cb.gradient[i];
        var cbI1 = cb.gradient[i + 1];
        if (value >= cbI[0] && cbI1[0] > value) {
          valueIndex = i;
          isFind = true;
        }
      }
    }
    // if (isFind === false) {

    // }
    // 阶级 前一个颜色
    var beforeValue = cb.gradient[valueIndex][0];
    // 阶级 后一个颜色
    var afterValue = cb.gradient[valueIndex + 1][0];
    //
    var valueRGB = (value - beforeValue) / (afterValue - beforeValue);
    // R
    var beforeRgbR = cb.gradient[valueIndex][1][0];
    var afterRgbR = cb.gradient[valueIndex + 1][1][0];
    // G
    var beforeRgbG = cb.gradient[valueIndex][1][1];
    var afterRgbG = cb.gradient[valueIndex + 1][1][1];
    // B
    var beforeRgbB = cb.gradient[valueIndex][1][2];
    var afterRgbB = cb.gradient[valueIndex + 1][1][2];
    // A
    var beforeRgbA = cb.gradient[valueIndex][1][3];
    var afterRgbA = cb.gradient[valueIndex + 1][1][3];
    // 计算实际的RGB
    var valueR = valueRGB * (afterRgbR - beforeRgbR) + beforeRgbR;
    var valueG = valueRGB * (afterRgbG - beforeRgbG) + beforeRgbG;
    var valueB = valueRGB * (afterRgbB - beforeRgbB) + beforeRgbB;

    // 获取渐变的 透明度
    var valueA = 0;
    if (beforeRgbA && afterRgbA) {
      valueA = valueRGB * (afterRgbA - beforeRgbA) + beforeRgbA;
    }
    // 返回实际值
    // RGBAValue = [valueR, valueG, valueB, 255] 20190523
    RGBAValue = [parseInt(valueR), parseInt(valueG), parseInt(valueB), valueA];
    // return RGBAValue;
    return {
      isFind: isFind,
      RGB: RGBAValue
    };
  }

  exports.getColorData = getColorData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/ColorBar/colorBarBase64.js":
/*!****************************************!*\
  !*** ./src/ColorBar/colorBarBase64.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /** @module ColorBar */
  /**
   * @description 调色板数据 Base64转化
   * @function
   * @param {json} colorBar  JSON 形式的调色板
   * @returns {string} 返回Base64格式调色板
   */
  function convertColorBar2Base64(colorBar) {
    var cbStr = JSON.stringify(colorBar);
    var base = new Base64();
    var result = base.encode(cbStr);
    return result;
  }

  /**
   *  @description 处理 Base64 基础类
   *  @constructor
   */
  function Base64() {
    var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    /**
     * @description Base 64 转码
     * @function
     * @param {string} input 输入str
     * @return {string} Base64 处理后的字符串
     */
    this.encode = function (input) {
      var output = '';
      var chr1 = void 0,
          chr2 = void 0,
          chr3 = void 0,
          enc1 = void 0,
          enc2 = void 0,
          enc3 = void 0,
          enc4 = void 0;
      var i = 0;
      input = utf8Encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
      }
      return output;
    };

    // public method for decoding
    /**
    * @description Base 64 解码
    * @function
    * @param {string} input  Base64 编码字符串
    * @return {string} 原始字符串
    */
    this.decode = function (input) {
      var output = '';
      var chr1 = void 0,
          chr2 = void 0,
          chr3 = void 0;
      var enc1 = void 0,
          enc2 = void 0,
          enc3 = void 0,
          enc4 = void 0;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
      output = utf8Decode(output);
      return output;
    };

    // private method for UTF-8 encoding
    function utf8Encode(string) {
      string = string.replace(/\r\n/g, '\n');
      var utftext = '';
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode(c >> 6 | 192);
          utftext += String.fromCharCode(c & 63 | 128);
        } else {
          utftext += String.fromCharCode(c >> 12 | 224);
          utftext += String.fromCharCode(c >> 6 & 63 | 128);
          utftext += String.fromCharCode(c & 63 | 128);
        }
      }
      return utftext;
    }

    // private method for UTF-8 decoding
    function utf8Decode(utftext) {
      var string = '';
      var i = 0;
      var c = 0;
      // let c1 = 0
      var c2 = 0;
      var c3 = 0;
      while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if (c > 191 && c < 224) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode((c & 31) << 6 | c2 & 63);
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          i += 3;
        }
      }
      return string;
    }
  }

  exports.convertColorBar2Base64 = convertColorBar2Base64;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Format/lonlatFormat.js":
/*!************************************!*\
  !*** ./src/Format/lonlatFormat.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /** @module Format/formatDegree */
  /**
   * 根据数值 对经纬度进行处理
   * @param {Array} value  数组形式 经纬度 [lon,lat]
   * @returns {String}  lon,lat(度分秒)
   */
  function formatDegree(value) {
    var x = value[0];
    var y = value[1];

    // if (x > 180) {
    //   x = x - Math.ceil(x / 360) * 360
    // }
    // if (x < -180) {
    //   x = x + Math.ceil(x / 360) * 360
    // }

    // TODO 切换while
    while (x > 180) {
      x = x - 360;
    }
    while (x < -180) {
      x = x + 360;
    }

    var lonAdd = '';
    var latAdd = '';
    if (x > 0) {
      lonAdd = 'E';
    } else if (x < 0) {
      lonAdd = 'W';
      x = -x;
    }
    if (y > 0) {
      latAdd = 'N';
    } else if (y < 0) {
      latAdd = 'S';
      y = -y;
    }
    var isYvaild = true;
    if (y > 90 || y < -90) {
      isYvaild = false;
    }
    // 附：29.73784595,103.5863933 转化为度分秒就是：北纬N29°44′16.25″ 东经E103°35′11.02″

    var valuelon = Math.abs(x);
    var v1lon = Math.floor(valuelon); // 度
    var v2lon = Math.floor((valuelon - v1lon) * 60); // 分
    var v3lon = Math.round((valuelon - v1lon) * 3600 % 60); // 秒

    var valuelat = Math.abs(y);
    var v1lat = Math.floor(valuelat); // 度
    var v2lat = Math.floor((valuelat - v1lat) * 60); // 分
    var v3lat = Math.round((valuelat - v1lat) * 3600 % 60); // 秒
    // let newValue = v1lon + '°' + v2lon + "'" + v3lon + '" ' + lonAdd +
    //   ',' +
    //   v1lat + '°' + v2lat + "'" + v3lat + '"' + latAdd
    var newValue = v1lon + '\xB0' + v2lon + '\'' + v3lon + '"' + lonAdd + ',' + v1lat + '\xB0' + v2lat + '\'' + v3lat + '"' + latAdd;
    if (!isYvaild) {
      newValue = '--,--';
    }

    return newValue;
  }

  // 转化经纬度
  // function convertLonLat (value) {
  //   const worlds = Math.floor((value + 180) / 360)
  //   return value - worlds * 360
  // }

  exports.formatDegree = formatDegree;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Interface/map.js":
/*!******************************!*\
  !*** ./src/Interface/map.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Map/Map */ "./src/Map/Map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getDistance = exports.getPixelByCoordinate = exports.getHdmsByCoordinates = exports.getCoordinateByPixel = undefined;


  function getCoordinateByPixel(pixel) {
    var _olMap = (0, _Map.getMap)();
    return _olMap.getCoordinateFromPixel(pixel);
  }

  function getHdmsByCoordinates(coordinate) {
    var hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate, 'EPSG:4326'));
    return hdms;
  }

  function getPixelByCoordinate(coordinate) {
    var _olMap = (0, _Map.getMap)();
    return _olMap.getPixelFromCoordinate(coordinate);
  }

  function getDistance(start, end) {
    return ol.sphere.getDistance(start, end);
  }

  exports.getCoordinateByPixel = getCoordinateByPixel;
  exports.getHdmsByCoordinates = getHdmsByCoordinates;
  exports.getPixelByCoordinate = getPixelByCoordinate;
  exports.getDistance = getDistance;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/Layer.js":
/*!*****************************!*\
  !*** ./src/Layers/Layer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Map/Map */ "./src/Map/Map.js"), __webpack_require__(/*! ./getWMSLayer */ "./src/Layers/getWMSLayer.js"), __webpack_require__(/*! ./getTMSLayer */ "./src/Layers/getTMSLayer.js"), __webpack_require__(/*! ./getTMS5Layer */ "./src/Layers/getTMS5Layer.js"), __webpack_require__(/*! ./getWMTSLayer */ "./src/Layers/getWMTSLayer.js"), __webpack_require__(/*! ./getTopoJsonLayer */ "./src/Layers/getTopoJsonLayer.js"), __webpack_require__(/*! ./getClusterLayer */ "./src/Layers/getClusterLayer.js"), __webpack_require__(/*! ./getWindLayer */ "./src/Layers/getWindLayer.js"), __webpack_require__(/*! ./getWindCloudLayer */ "./src/Layers/getWindCloudLayer.js"), __webpack_require__(/*! ./getWindArrowLayer */ "./src/Layers/getWindArrowLayer.js"), __webpack_require__(/*! ./getSingleImageLayer */ "./src/Layers/getSingleImageLayer.js"), __webpack_require__(/*! ./getHeatmapLayer */ "./src/Layers/getHeatmapLayer.js"), __webpack_require__(/*! ./getGeoTiffLayer */ "./src/Layers/getGeoTiffLayer.js"), __webpack_require__(/*! ./getImageCanvasLayer */ "./src/Layers/getImageCanvasLayer.js"), __webpack_require__(/*! ./getXYZLayer */ "./src/Layers/getXYZLayer.js"), __webpack_require__(/*! ./getVectorLayer */ "./src/Layers/getVectorLayer.js"), __webpack_require__(/*! ./defaultLayers/getDefaultLayer */ "./src/Layers/defaultLayers/getDefaultLayer.js"), __webpack_require__(/*! ../Action/featureClick */ "./src/Action/featureClick.js"), __webpack_require__(/*! ../Layers/getGeoJsonLayer */ "./src/Layers/getGeoJsonLayer.js"), __webpack_require__(/*! ../Layers/layerZIndex */ "./src/Layers/layerZIndex.js"), __webpack_require__(/*! ../Layers/getlsolineLayer */ "./src/Layers/getlsolineLayer.js"), __webpack_require__(/*! ./layergroup/getTyphoonLayer.js */ "./src/Layers/layergroup/getTyphoonLayer.js"), __webpack_require__(/*! ./layergroup/getCloudLayer.js */ "./src/Layers/layergroup/getCloudLayer.js"), __webpack_require__(/*! ./layergroup/getSailLayer.js */ "./src/Layers/layergroup/getSailLayer.js"), __webpack_require__(/*! ./getPointClusterLayer */ "./src/Layers/getPointClusterLayer.js"), __webpack_require__(/*! ./getUTSLayer/getUTSLayer */ "./src/Layers/getUTSLayer/getUTSLayer.js"), __webpack_require__(/*! ./layergroup/getDateChangeLayer */ "./src/Layers/layergroup/getDateChangeLayer.js"), __webpack_require__(/*! ./getFPWTSLayer */ "./src/Layers/getFPWTSLayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map, _getWMSLayer, _getTMSLayer, _getTMS5Layer, _getWMTSLayer, _getTopoJsonLayer, _getClusterLayer, _getWindLayer, _getWindCloudLayer, _getWindArrowLayer, _getSingleImageLayer, _getHeatmapLayer, _getGeoTiffLayer, _getImageCanvasLayer, _getXYZLayer, _getVectorLayer, _getDefaultLayer, _featureClick, _getGeoJsonLayer, _layerZIndex, _getlsolineLayer, _getTyphoonLayer, _getCloudLayer, _getSailLayer, _getPointClusterLayer, _getUTSLayer, _getDateChangeLayer, _getFPWTSLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setAddLayerParams = exports.getAddLayerParams = exports.setLayerFeaturtSelect = exports.getLayerByParams = exports.removeLayer = exports.addOlLayer = undefined;

  // 点聚合

  // 对流

  // 默认图层

  // XYZ 图层

  // GEOTiff


  // 单个图片

  // 集群图层

  // TMS 图层

  /** @module Layer */

  var addLayerParams = {};

  // UTSS UTTS
  // import { getUTSSLayer, getUTTSLayer } from '../Layers/getUTTSLayer'

  // 航线


  // 台风

  // 矢量图层

  // 单图绘制

  // 热力图

  // 动云图 TODO 云图bug 修复


  // WMS图层


  function getAddLayerParams() {
    return addLayerParams;
  }

  /**
   * @description 添加 图层分组部分
   * @function
   * @param {JSON} layerinfo 添加图层信息
   */
  function addOlLayer(layerinfo) {
    var layerInfo = JSON.parse(JSON.stringify(layerinfo));

    var map = (0, _Map.getMap)();

    // 同屏左右分屏
    if (layerinfo.type === 'swipe') {
      setSwipeLayer(layerInfo, map);
      return true;
    }

    if (!layerInfoCheck(layerInfo)) {
      console.log('图层参数校验异常，请传入正确参数', layerinfo);
      return false;
    }
    if (checkLayerExist(layerInfo)) {
      console.log('此ID已经添加过，请勿重复添加图层', layerinfo._id);
      return false;
    }
    // 初始化添加图层
    var _addLayer = null;

    // 添加Map todo 此处移植到控制处进行 先判断 tiff
    // tiff 由于异步 单独 处理
    if (layerinfo.mapType === 'tiff') {
      // 若 为 tiff 格式 则 先获取数据
      (0, _getGeoTiffLayer.getGeoTiffLayer)(layerinfo).then(function (data) {
        _addLayer = data;
        // 异步加载
        addLayerToOl(layerinfo, _addLayer, map);
      });
      return true;
    }

    // 将 获取layer 部分移植到单独函数 用于 跨天图层组 的复用
    _addLayer = getLayerByParams(layerinfo, map);
    // 此处为同步的处理

    addLayerToOl(layerinfo, _addLayer, map);
    return true;
  }

  function setSwipeLayer(layerinfo, map) {
    var layerParams = layerinfo.layerParams;
    if (checkLayerExist(layerParams)) {
      return;
    }
    var swipe = document.getElementById('swipeInput');
    function mapRender() {
      map.render();
    }
    swipe.removeEventListener('input', mapRender, false);
    swipe.addEventListener('input', mapRender, false);
    var _layer = getLayerByParams(layerParams, map);
    addLayerToOl(layerParams, _layer, map);
    _layer.on('prerender', function (event) {
      var ctx = event.context;
      var mapSize = map.getSize();
      var width = mapSize[0] * (swipe.value / 100);
      //  const getRenderPixel = olGetRenderPixel
      var tl = null;
      var tr = null;
      var bl = null;
      var br = null;
      if (layerinfo.contrast === 'B') {
        tl = ol.render.getRenderPixel(event, [width, 0]);
        tr = ol.render.getRenderPixel(event, [mapSize[0], 0]);
        bl = ol.render.getRenderPixel(event, [width, mapSize[1]]);
        br = ol.render.getRenderPixel(event, mapSize);
      } else {
        tl = ol.render.getRenderPixel(event, [0, 0]);
        tr = ol.render.getRenderPixel(event, [width, 0]);
        bl = ol.render.getRenderPixel(event, [0, mapSize[1]]);
        br = ol.render.getRenderPixel(event, [width, mapSize[1]]);
      }
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(tl[0], tl[1]);
      ctx.lineTo(bl[0], bl[1]);
      ctx.lineTo(br[0], br[1]);
      ctx.lineTo(tr[0], tr[1]);
      ctx.closePath();
      ctx.clip();
    });
    _layer.on('postrender', function (event) {
      var ctx = event.context;
      ctx.restore();
    });
  }

  // 基于图层给定信息 返回Layer
  function getLayerByParams(layerInfo, map) {
    var _addLayer = null;

    switch (layerInfo.mapType) {
      case 'WMS':
        {
          _addLayer = (0, _getWMSLayer.getWMSLayer)(layerInfo);
          break;
        }
      case 'TMS':
        {
          _addLayer = (0, _getTMSLayer.getTMSLayer)(layerInfo);
          break;
        }
      case 'WMTS':
        {
          _addLayer = (0, _getWMTSLayer.getWMTSLayer)(layerInfo);
          break;
        }
      case 'TMS5':
        {
          _addLayer = (0, _getTMS5Layer.getTMS5Layer)(layerInfo);
          break;
        }
      case 'TMS6':
        {
          _addLayer = (0, _getTMSLayer.getTMSLayer)(layerInfo);
          break;
        }
      case 'Vector':
        {
          _addLayer = (0, _getVectorLayer.getVectorLayer)(layerInfo);
          (0, _featureClick.addFeatureClick)(map);
          // 修改点击 事件
          (0, _featureClick.addFeaturesSelect)(map);
          break;
        }
      case 'Fire':
      case 'Cluster':
        {
          // 集群火点部分
          _addLayer = (0, _getClusterLayer.getClusterLayer)(layerInfo);
          (0, _featureClick.addFeatureClick)(map);
          break;
        }
      case 'Wind':
        {
          // 风场
          _addLayer = (0, _getWindLayer.getWindLayer)(layerInfo, map);
          break;
        }
      case 'WindData':
        {
          // 风场底图
          _addLayer = (0, _getWindCloudLayer.getWindCloudLayer)(layerInfo, map);
          break;
        }
      case 'WindArrow':
        {
          // 风场箭头图
          _addLayer = (0, _getWindArrowLayer.getWindArrowLayer)(layerInfo, map);
          break;
        }
      case 'Data':
        {
          // 数据
          _addLayer = (0, _getImageCanvasLayer.getImageCanvasLayer)(layerInfo);
          break;
        }
      case 'IMAGE':
        {
          // 单图
          _addLayer = (0, _getSingleImageLayer.getSingleImageLayer)(layerInfo);
          break;
        }
      case 'HeatMap':
        {
          // 热力图
          _addLayer = (0, _getHeatmapLayer.getHeatmapLayer)(layerInfo);
          break;
        }
      case 'geojson':
        {
          // geojson 数据类型
          _addLayer = (0, _getGeoJsonLayer.getGeoJsonLayer)(layerInfo);
          break;
        }
      case 'topojson':
        {
          // topo json
          _addLayer = (0, _getTopoJsonLayer.getTopoJsonLayer)(layerInfo);
          break;
        }
      case 'XYZ':
        {
          // XYZ
          _addLayer = (0, _getXYZLayer.getXYZLayer)(layerInfo);
          break;
        }
      case 'isoLine':
        {
          // 等值线
          _addLayer = (0, _getlsolineLayer.getIsolineLayer)(layerInfo);
          break;
        }
      case 'typhoon':
        {
          // 台风动画
          _addLayer = (0, _getTyphoonLayer.getTyphoonLayer)(layerInfo, map);
          break;
        }
      case 'cloud':
        {
          // 对流动画
          _addLayer = (0, _getCloudLayer.getCloudLayer)(layerInfo, map);
          break;
        }
      case 'sail':
        {
          // 航线
          _addLayer = (0, _getSailLayer.getSailLayer)(layerInfo, map);
          break;
        }
      case 'pointCluster':
        {
          // 点聚合
          _addLayer = (0, _getPointClusterLayer.getPointClusterLayer)(layerInfo);
          break;
        }
      case 'default':
        {
          // 默认 图层  google 天地图 bing 等
          _addLayer = (0, _getDefaultLayer.getDefaultLayer)(layerInfo);
          break;
        }
      case 'UTTS':
      case 'UTSS':
        {
          // UTSS
          _addLayer = (0, _getUTSLayer.getUTSLayer)(layerInfo);
          break;
        }
      // case 'UTSS': {
      //   // UTSS
      //   _addLayer = getUTSSLayer(layerInfo)
      //   break
      // }
      case 'DateChange':
        {
          _addLayer = (0, _getDateChangeLayer.getDateChangeLayers)(layerInfo);
          break;
        }
      case 'FPWTS':
        {
          _addLayer = (0, _getFPWTSLayer.getFPWTSLayer)(layerInfo);
          break;
        }
      default:
        {
          // 默认 图层  google 天地图 bing 等
          break;
        }
    }

    return _addLayer;
  }

  function addLayerToOl(layerinfo, _addLayer, map) {
    if (!_addLayer) {
      return false;
    }
    map.addLayer(_addLayer);
    // 获取 zINDEX 基于类型设定
    layerinfo.zIndex = (0, _layerZIndex.getZIndexByType)(layerinfo);
    // 设置 zINDEX
    _addLayer.setZIndex(layerinfo.zIndex);

    //  对visible 属性进行设置
    // _addLayer.isVisible = true
    var isVisible = layerinfo.visible;
    if (isVisible === false) {
      _addLayer.setVisible(isVisible);
    }

    //  20200707 对透明度属性 进行修改
    var opacity = layerinfo.opacity;
    if (opacity || opacity === 0) {
      _addLayer.setOpacity(parseFloat(opacity));
    }

    // 对数据和 当前数据添加的图层 进行保存
    addLayerParams[layerinfo.id] = {
      // 11 传a
      info: layerinfo,
      layer: _addLayer,
      // 每次 都修改
      isVisible: layerinfo.isVisible
    };
    return true;
  }

  function checkLayerExist(layerinfo) {
    // 校验是否已经存在 若 ID存在 则不再添加
    if (addLayerParams[layerinfo.id]) {
      return true;
    }
    return false;
  }

  /**
   * @description 基于图层信息 移除指定图层
   * @function
   * @param {JSON} layerinfo 图层信息 主要使用id
   */
  function removeLayer(layerinfo) {
    // 判断此图层是否被添加
    if (addLayerParams[layerinfo.id]) {
      // 获取被添加的 Layer
      var _removeLayer = addLayerParams[layerinfo.id].layer;
      if (_removeLayer) {
        var map = (0, _Map.getMap)();
        map.removeLayer(_removeLayer);
        if (this.addLayerParams[layerinfo.id].info.mapType === 'Wind') {
          /* 移除风场时实例未执行销毁，需手动销毁 */
          var renderer = _removeLayer.getRenderer();
          if (renderer && renderer.oRender) {
            var executors = renderer.oRender.executors;
            Object.keys(executors).forEach(function (key) {
              var wind = executors[key];
              if (wind) {
                wind.clearCanvas();
              }
            });
          }
        }
        // 删除
        addLayerParams[layerinfo.id] = null;
        // 删除key
        delete addLayerParams[layerinfo.id];
        // 若为 tiff 类型 则删除缓存的tiff 数据
        // 20190903 liuyp 20210331 改
        (0, _getGeoTiffLayer.clearTiffInfo)(layerinfo);
        // if (this.tiffInfo) {
        //   if (this.tiffInfo[layerinfo.id]) {
        //     delete this.tiffInfo[layerinfo.id]
        //   }
        // }
        return true;
      }
    }
    return false;
  }

  /**
   * @description 设置选择火点信息 TODO 这个策略还是需要研究 是否使用字段添加
   * 目前 bug 其他类型的 Vector 的点击事件 会被重写
   * @param {JSON} layerinfo 图层类型
   * @param {JSON} selectInfo 选择信息
   */
  function setLayerFeaturtSelect(layerinfo, selectInfo) {
    // 需要被设置的信息
    switch (layerinfo.mapType) {
      case 'Vector':
        {
          // 集群火点部分
          (0, _getVectorLayer.setVectorData)(layerinfo, selectInfo);

          break;
        }
      case 'Fire':
      case 'Cluster':
        {
          // 集群火点部分
          (0, _getClusterLayer.setClusterData)(layerinfo, selectInfo);

          break;
        }
      default:
        {
          break;
        }
    }
  }

  /**
   * @description 对输入的 信息进行 正确性校验
   * @private
   * @param {*} layerinfo
   * @returns boolen 当前传入信息是否符合标准
   */
  function layerInfoCheck(layerinfo) {
    // TODO 对Layerinfo 进行校验
    // id 必循存在
    if (!layerinfo.id) {
      return false;
    }
    return true;
  }

  function setAddLayerParams(_addLayerParams) {
    addLayerParams = _addLayerParams;
  }

  exports.addOlLayer = addOlLayer;
  exports.removeLayer = removeLayer;
  exports.getLayerByParams = getLayerByParams;
  exports.setLayerFeaturtSelect = setLayerFeaturtSelect;
  exports.getAddLayerParams = getAddLayerParams;
  exports.setAddLayerParams = setAddLayerParams;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/defaultLayers/getAhocevarLayer.js":
/*!******************************************************!*\
  !*** ./src/Layers/defaultLayers/getAhocevarLayer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  // 添加 AhocevarLayer 图层
  function getAhocevarLayer() {
    var WMSlayer = new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: 'https://ahocevar.com/geoserver/wms',
        params: {
          LAYERS: 'ne:NE1_HR_LC_SR_W_DR',
          TILED: true
        }
      })
    });
    return WMSlayer;
  }

  exports.getAhocevarLayer = getAhocevarLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/defaultLayers/getBingLayer.js":
/*!**************************************************!*\
  !*** ./src/Layers/defaultLayers/getBingLayer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function getBingLayer(layerinfo) {
    // var styles = [
    //   'Road',
    //   'RoadOnDemand',
    //   'Aerial',
    //   'AerialWithLabels',
    //   'collinsBart',
    //   'ordnanceSurvey'
    // ]
    // 这个是ol版本下 使用的key
    var defaultKey = 'As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5';

    var defaultStyle = 'Aerial';
    var params = layerinfo.default || {};
    // 这个是目前个人用户申请的key
    // const defaultKey = 'bvhoToET9VoPaWLTVEgm~zYfdrPGSgr0CChS5R8uFsg~Akqaq8yqDjMn-PSYEmFbCejJ0uK5EdeGfwI9oLjESH-k5QC_SgGWmPMCd-j4fAe-'
    var key = params.bingKey || defaultKey;
    var style = params.styles || defaultStyle;

    // Aerial  Road
    var layer = new ol.layer.Tile({
      visible: true,
      preload: Infinity,
      source: new ol.source.BingMaps({
        //  key: 'Your Bing Maps Key from http://www.bingmapsportal.com/ here',
        key: key,
        imagerySet: style
      })
    });
    return layer;
  }

  exports.getBingLayer = getBingLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/defaultLayers/getDefaultLayer.js":
/*!*****************************************************!*\
  !*** ./src/Layers/defaultLayers/getDefaultLayer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./getOSMLayer */ "./src/Layers/defaultLayers/getOSMLayer.js"), __webpack_require__(/*! ./getTDTLayer */ "./src/Layers/defaultLayers/getTDTLayer.js"), __webpack_require__(/*! ./getTDTInnerLayer */ "./src/Layers/defaultLayers/getTDTInnerLayer.js"), __webpack_require__(/*! ./getBingLayer */ "./src/Layers/defaultLayers/getBingLayer.js"), __webpack_require__(/*! ./getGoogleLayer */ "./src/Layers/defaultLayers/getGoogleLayer.js"), __webpack_require__(/*! ./getAhocevarLayer */ "./src/Layers/defaultLayers/getAhocevarLayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _getOSMLayer, _getTDTLayer, _getTDTInnerLayer, _getBingLayer, _getGoogleLayer, _getAhocevarLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getDefaultLayer = undefined;

  // 调用 ol 中 默认的OSM BING等测试图像

  function getDefaultLayer(params) {
    if (!params.default) {
      return null;
    }
    // name类型
    var defaultType = params.default.name;
    // 默认  参数
    var defaultParam = params.default;
    var layer = null;
    switch (defaultType) {
      case 'OSM':
        {
          layer = (0, _getOSMLayer.getOSMLayer)(params);
          break;
        }
      case 'Google':
        {
          layer = (0, _getGoogleLayer.getGoogleLayer)(defaultParam);
          break;
        }
      case 'Bing':
        {
          layer = (0, _getBingLayer.getBingLayer)(params);
          break;
        }
      case 'ARC':
        {
          layer = (0, _getAhocevarLayer.getAhocevarLayer)(params);
          break;
        }
      case 'tdt':
      case 'TDT':
        {
          layer = (0, _getTDTLayer.getTDTLayer)(params);
          break;
        }
      case 'TDTInner':
        {
          // 内网天地图 ol6 版本
          layer = (0, _getTDTInnerLayer.getTDTInnerLayer)(params);
          break;
        }
      case 'TDTInner5':
        {
          // 内网天地图 ol5 版本
          layer = (0, _getTDTInnerLayer.getTDTInner5Layer)(params);
          break;
        }
      default:
        {
          break;
        }
    }
    return layer;
  }

  exports.getDefaultLayer = getDefaultLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/defaultLayers/getGoogleLayer.js":
/*!****************************************************!*\
  !*** ./src/Layers/defaultLayers/getGoogleLayer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  // 获取 google 图层
  function getGoogleLayer(params) {
    var layerType = params.layerType;
    layerType = layerType || 's';
    // h skeleton map light  http://mt2.google.cn/vt/lyrs=h&hl=zh-CN&gl=cn&x=420&y=193&z=9
    // m 全地图   http://mt2.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x=420&y=193&z=9
    // p terrain+map  http://mt2.google.cn/vt/lyrs=p&hl=zh-CN&gl=cn&x=420&y=193&z=9
    // r skeleton map dark   http://mt2.google.cn/vt/lyrs=r&hl=zh-CN&gl=cn&x=420&y=193&z=9
    // y hybrid satellite map   http://mt1.google.cn/vt/lyrs=y&hl=zh-CN&gl=cn&x=420&y=193&z=9
    // t 地形图   http://mt0.google.cn/vt/lyrs=t&hl=zh-CN&gl=cn&x=420&y=193&z=9
    // s 卫星地图   http://mt3.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=420&y=193&z=9
    // 也可以进行组合，例如：s,r 或者 t,h   http://mt3.google.cn/vt/lyrs=t,h&hl=zh-CN&gl=cn&x=420&y=193&z=9

    var oURL = 'http://mt2.google.cn/maps/vt?lyrs=' + layerType + '@804&gl=cn&x={x}&y={y}&z={z}';
    var layer = new ol.layer.Tile({
      title: 'googleSate',
      projection: 'EPSG:4326',
      source: new ol.source.XYZ({
        url: oURL,
        wrapX: true
      })
    });
    return layer;
  }

  exports.getGoogleLayer = getGoogleLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/defaultLayers/getOSMLayer.js":
/*!*************************************************!*\
  !*** ./src/Layers/defaultLayers/getOSMLayer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function getOSMLayer() {
    // OSM 为openlayer 自带模式 不需使用任何参数
    var layer = new ol.layer.Tile({
      source: new ol.source.OSM()
    });
    return layer;
  }

  exports.getOSMLayer = getOSMLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/defaultLayers/getTDTInnerLayer.js":
/*!******************************************************!*\
  !*** ./src/Layers/defaultLayers/getTDTInnerLayer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  // 获取内网天地图
  function getTDTInnerLayer(params) {
    var defaultParams = params.default;
    // google 地图
    // let url = 'https://www.google.cn/maps/vt?lyrs=s@804&gl=cn&x={x}&y={y}&z={z}'
    var urlTemplate = defaultParams.url || 'http://121.36.13.81/TESTDATA/TDT/img_c/{z}/{x}/{y}.png';
    //  urlTemplate = 'http://121.36.13.81/TESTDATA/TDT/img_c/'
    var optResolutions = [0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.0439453125 / 2, 0.0439453125 / 4, 0.0439453125 / 8, 0.0439453125 / 16];
    var layer = new ol.layer.Tile({
      source: new ol.source.TileImage({
        crossOrigin: 'anonymous',
        projection: 'EPSG:4326',
        tileGrid: new ol.tilegrid.TileGrid({
          // 设置 左下角为原点
          origin: [-180, 90],
          // 设置原点坐标
          resolutions: optResolutions,
          extent: [-180, -90, 180, 90],
          tileSize: [256, 256]
        }),
        tileUrlFunction: function tileUrlFunction(tileCoord, pixelRatio, projection) {
          var z = tileCoord[0];
          var x = tileCoord[1];
          var y = Math.abs(tileCoord[2]);

          var n = Math.pow(2, z);
          // y = y - 1 + n
          y = y % n;
          if (y * n < 0) {
            y = y + n;
          }
          z = z + 1;
          var url = urlTemplate.replace('{z}', z.toString()).replace('{y}', y.toString()).replace('{x}', x.toString());

          return url;
        }
      })
    });
    return layer;
  }

  function getTDTInner5Layer(params) {
    var defaultParams = params.default;
    // google 地图
    // let url = 'https://www.google.cn/maps/vt?lyrs=s@804&gl=cn&x={x}&y={y}&z={z}'
    var urlTemplate = defaultParams.url || 'http://121.36.13.81/TESTDATA/TDT/img_c/{z}/{x}/{y}.png';
    //  urlTemplate = 'http://121.36.13.81/TESTDATA/TDT/img_c/'
    var optResolutions = [0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.0439453125 / 2, 0.0439453125 / 4, 0.0439453125 / 8, 0.0439453125 / 16];
    var layer = new ol.layer.Tile({
      source: new ol.source.TileImage({
        crossOrigin: 'anonymous',
        projection: 'EPSG:4326',
        tileGrid: new ol.tilegrid.TileGrid({
          // 设置 左下角为原点
          origin: [-180, 90],
          // 设置原点坐标
          resolutions: optResolutions,
          extent: [-180, -90, 180, 90],
          tileSize: [256, 256]
        }),
        tileUrlFunction: function tileUrlFunction(tileCoord, pixelRatio, projection) {
          var z = tileCoord[0];
          var x = tileCoord[1];
          var y = Math.abs(tileCoord[2]);

          var n = Math.pow(2, z);
          y = y - 1 + n;
          y = y % n;
          if (y * n < 0) {
            y = y + n;
          }
          z = z + 1;
          var url = urlTemplate.replace('{z}', z.toString()).replace('{y}', y.toString()).replace('{x}', x.toString());

          return url;
        }
      })
    });
    return layer;
  }

  exports.getTDTInnerLayer = getTDTInnerLayer;
  exports.getTDTInner5Layer = getTDTInner5Layer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/defaultLayers/getTDTLayer.js":
/*!*************************************************!*\
  !*** ./src/Layers/defaultLayers/getTDTLayer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  // 天地图图层
  function getTDTLayer(params) {
    // console.log('getTDTLayer')
    var defaultKey = '82cf878ce0a7719801f26ca2dcee8b73';
    var defaultParams = params.default || null;
    if (!defaultParams) {
      console.log('请使用 defaultParams 参数 设置 天地图显示信息');
      return null;
    }
    var mapTypeName = defaultParams.type || 'img';
    var mapTypeProj = defaultParams.proj || 'c';
    var key = defaultParams.key || defaultKey;

    var defaultRes = [0.703125];
    var res = 0.703125;
    for (var i = 0; i < 20; i++) {
      res = res / 2;
      defaultRes.push(res);
    }
    // const optResolutions = params.resolutions ? params.resolutions : defaultRes
    // const optTileSize = params.tileSize ? params.tileSize : [256, 256]
    var vectorUrl4 = 'http://t2.tianditu.com/DataServer?T=' + mapTypeName + '_' + mapTypeProj + '&x={x}&y={y}&l={z}&tk=';
    // 带 key的
    var urlTemplate = vectorUrl4 + key;
    var layer = new ol.layer.Tile({
      title: '天地图矢量图层注记',
      source: new ol.source.XYZ({
        url: urlTemplate,
        // 投影方式
        projection: 'EPSG:4326',
        crossOrigin: 'anonymous'
      })
    });

    return layer;
  }
  // 天地图图层
  function getTDTLayerWMTS(params) {
    var defaultParams = params.default;
    if (!defaultParams) {
      console.log('请使用 defaultParams参数 设置 天地图显示信息');
      return null;
    }
    var mapTypeName = defaultParams.type || 'img';
    var mapTypeProj = defaultParams.proj || 'c';
    var key = defaultParams.key || 'fb5273dc89827113cbd67842a1354408';
    var resolutions = [];
    var resolutionsBegin = 1.40625;
    for (var i = 1; i < 20; i++) {
      resolutionsBegin = resolutionsBegin / 2;
      resolutions.push(resolutionsBegin);
      // = resolutions[resolutionsBegin / i]
    }
    // 这个是个人key
    // var key='aeb66810e08d1c2effa2a76a06f5279f'
    var urlTemplate = params.url;
    // http://t0.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&tk=fb5273dc89827113cbd67842a1354408&VERSION=1.0.0&LAYER=vec&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX=7&TILECOL=109&TILEROW=22
    // http://t0.tianditu.gov.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&tk=fb5273dc89827113cbd67842a1354408&VERSION=1.0.0&LAYER=cva&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX=5&TILECOL=25&TILEROW=5
    urlTemplate = 'http://t0.tianditu.gov.cn/' + mapTypeName + '_' + mapTypeProj + '/wmts?SERVICE=WMTS&REQUEST=GetTile&tk=' + key + '&VERSION=1.0.0&LAYER=' + mapTypeName + '&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}';
    var origin = [-180, -90];
    var layer = new ol.layer.Tile({
      projection: 'EPSG:4326',
      source: new ol.source.TileImage({
        crossOrigin: 'anonymous',
        tileGrid: new ol.tilegrid.TileGrid({
          // 设置原点坐标
          origin: origin,
          resolutions: resolutions,
          extent: [-180, -90, 180, 90],
          tileSize: [256, 256]
        }),

        tileUrlFunction: function tileUrlFunction(tileCoord, pixelRatio, projection) {
          var z = tileCoord[0];
          var x = tileCoord[1];
          /* var y = Math.pow(2, z) + tileCoord[2]; */
          var y = tileCoord[2];
          // wrap the world on the X axis
          var n = Math.pow(2, z + 1); // 2 tiles at z=0
          x = x % n;
          if (x * n < 0) {
            // x and n differ in sign so add n to wrap the result
            // to the correct sign
            x = x + n;
          }
          // y = Math.abs(Math.pow(2, z) - (y + 1))
          y = y % n;
          if (y * n < 0) {
            // x and n differ in sign so add n to wrap the result
            // to the correct sign
            y = y + n;
          }
          y = Math.pow(2, z - 1) - 1 - y;

          return urlTemplate.replace('{z}', z.toString()).replace('{y}', y.toString()).replace('{x}', x.toString());
        }
      })
    });
    return layer;
  }

  exports.getTDTLayer = getTDTLayer;
  exports.getTDTLayerWMTS = getTDTLayerWMTS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/geoJsonStyle/getAirInfoHover.js":
/*!****************************************************!*\
  !*** ./src/Layers/geoJsonStyle/getAirInfoHover.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../Map/Map */ "./src/Map/Map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addAirHoverOverLayer = undefined;

  var airHover = null;
  // 生成 滑过弹出框体
  /* global  PubSub */

  function creatAirInfoHoverElement(info) {
    // 位置
    var location = info.name;
    // hoverkey
    var itemList = info.itemList;
    // 主DIV
    var container = document.createElement('div');
    container.id = 'AirInfoContainerHover';

    // container.setAttribute('style', 'border:1px soild #000')
    var _title = document.createElement('label');
    _title.innerHTML = location;
    _title.className = 'AirInfoContainerHover_label';
    container.appendChild(_title);
    var _titleSplit = document.createElement('div');
    container.appendChild(_titleSplit);
    if (itemList) {
      itemList.forEach(function (item) {
        if (item.isHover) {
          var _itemDiv = document.createElement('label');
          _itemDiv.innerHTML = item.label + ':' + item.value;
          _itemDiv.className = 'AirInfoContainerHover_label';
          container.appendChild(_itemDiv);
        }
      });
    }
    return container;
  }

  // 生成点击弹出框体
  function createAirInfoClickElement(info) {
    var container = document.createElement('div');
    container.id = 'AirContainerClick';
    container.className = 'air_container';
    var containerTitle = getContainerTitle(info);
    var containerBody = getContainerBody(info);
    var containerBorder = document.createElement('div');
    containerBorder.id = 'AirContainerClickBorder';
    container.appendChild(containerTitle);
    container.appendChild(containerBody);
    container.appendChild(containerBorder);
    return container;
  }

  function getContainerTitle(info) {
    // title
    var location = info.name || '';
    var containerTitle = document.createElement('div');
    containerTitle.id = 'AirContainerClickTitle';
    // location
    var containerTitleP = document.createElement('label');
    containerTitleP.innerHTML = location;
    containerTitleP.className = 'AirContainerClickTitle_label';
    containerTitle.appendChild(containerTitleP);
    // 添加按钮
    var containerTitleAdd = document.createElement('button');
    containerTitleAdd.innerHTML = '添加';
    containerTitleAdd.className = 'btn btn-xs btn-success AirContainerClickTitle_btn_add';
    containerTitleAdd.onclick = clickGetInfo;
    containerTitle.appendChild(containerTitleAdd);
    // 关闭按钮
    var containerTitleClose = document.createElement('button');
    containerTitleClose.innerHTML = 'X';
    containerTitleClose.className = 'btn btn-xs';
    containerTitleClose.onclick = closeOverLayer;
    containerTitle.appendChild(containerTitleClose);
    return containerTitle;
  }

  function clickGetInfo() {
    PubSub.publish('shineket_geoinfo_site', selectedGeoInfo);
  }

  function closeOverLayer() {
    overlay.setPosition(undefined);
    selected = false;
  }

  function getContainerBody(info) {
    var itemList = info.itemList || [];
    // body
    var containerBody = document.createElement('div');
    containerBody.id = 'AirContainerClickBody';

    // body 分为3个 DIV

    // 第一个DIV 列表显示详情信息
    var containerBodyInfo = document.createElement('div');
    containerBodyInfo.id = 'AirContainerClickBodyInfo';
    var containerBodyInfoAir = getAirStatus(info);
    containerBodyInfo.appendChild(containerBodyInfoAir);
    // 位置
    var containerBodyInfoList = document.createElement('div');
    containerBodyInfoList.className = 'airContainer-left';

    // 列表形式的 信息
    if (itemList) {
      itemList.forEach(function (item, index) {
        var li = document.createElement('div');
        li.className = 'airContainer_list';
        if (!index) {
          li.className = 'airContainer_list airContainer_list-target';
        }
        // label
        var label = document.createElement('label');
        label.className = 'airContainer_list_label';
        label.innerHTML = '' + item.label;

        var label_ = document.createElement('label');
        label_.className = 'airContainer_list_label_split';
        label_.innerHTML = '&nbsp:&nbsp';
        // value
        var labelValue = document.createElement('label');
        labelValue.className = 'airContainer_list_label_value';
        labelValue.innerHTML = item.value + ' ';
        var color = item.valuecolor;
        var bColor = 'background-color:' + color;
        labelValue.setAttribute('style', bColor);
        li.appendChild(label);
        li.appendChild(label_);
        li.appendChild(labelValue);
        containerBodyInfoList.appendChild(li);
      });
    }
    containerBodyInfo.appendChild(containerBodyInfoList);

    // 第二个 DIV 显示数据观测时间
    var containerBodyTime = document.createElement('div');
    containerBodyTime.id = 'AirContainerClickBodyTime';

    var containerBodyTimeP = document.createElement('label');
    containerBodyTimeP.id = 'AirContainerClickBodyTimeP';
    containerBodyTimeP.className = 'airContainer_label_time';
    var time = info.time || '--';
    containerBodyTimeP.innerHTML = '观测时间：' + time;
    containerBodyTime.appendChild(containerBodyTimeP);
    containerBodyInfo.appendChild(containerBodyTime);

    // 第三个 DIV 显示 echarts 图表
    var containerBodyEchart = document.createElement('div');
    containerBodyEchart.id = 'AirContainerClickBodyEchart';

    // 加入 container
    containerBody.appendChild(containerBodyInfo);
    containerBody.appendChild(containerBodyTime);
    containerBody.appendChild(containerBodyEchart);
    return containerBody;
  }

  function getAirStatus(info) {
    var airInfo = info.airInfo || '--';
    var li = document.createElement('div');
    li.className = 'airContainer_airinfo';
    // label
    var label = document.createElement('label');
    label.className = 'airContainer_airinfo_label';
    label.innerHTML = '\u7B49\u7EA7\uFF1A' + airInfo;
    li.appendChild(label);
    return li;
  }

  var overlay = null;
  var selected = false;
  var selectedGeoInfo = null;

  function addAirHoverOverLayer(params) {
    var _map = (0, _Map.getMap)();
    var _overlay = airHover;
    if (_overlay) {
      _map.removeOverlay(_overlay.layer);
    }
    var container = creatAirInfoHoverElement('', []);
    overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      // x 正右 y 正下
      offset: [0, -20],
      // 位置
      positioning: 'bottom-center',
      autoPanAnimation: {
        duration: 250
      }
    });
    _map.addOverlay(overlay);

    _map.on('pointermove', function (event) {
      if (!selected) {
        // 滑动事件
        overlay.setPosition(undefined);
        var feature = _map.forEachFeatureAtPixel(event.pixel, function (feature) {
          return feature;
        });
        if (feature === undefined) {
          _map.getTargetElement().style.cursor = 'auto';
        } else {
          if (feature.get('type') === 'airInfo') {
            _map.getTargetElement().style.cursor = 'pointer';
            var properties = feature.getProperties();

            container = creatAirInfoHoverElement(properties.info);
            overlay.setElement(container);
            var center = [feature.values_.geometry.flatCoordinates[0], feature.values_.geometry.flatCoordinates[1]];
            overlay.setPosition(center);
          }
        }
      }
    });

    _map.on('singleclick', function (event) {
      var feature = _map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
      });
      if (feature !== undefined) {
        if (feature.get('type') === 'airInfo') {
          selected = true;
          _map.getTargetElement().style.cursor = 'pointer';
          var properties = feature.getProperties();
          selectedGeoInfo = properties;
          // const titleInfo = properties.name + '-' + properties.value
          container = createAirInfoClickElement(properties.info);
          overlay.setElement(container);
          var center = [feature.values_.geometry.flatCoordinates[0], feature.values_.geometry.flatCoordinates[1]];
          overlay.setPosition(center);

          // 点击时在 id 为 AirContainerClickBodyEchart 的节点下添加统计图
          params.addEchartFunc('AirContainerClickBodyEchart', properties.info);
        }
      }
    });
    // 设置全局变量
    var info = {
      layer: overlay
      // 全局变量信息已知
    };airHover = info;

    return overlay;
  }

  exports.addAirHoverOverLayer = addAirHoverOverLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/geoJsonStyle/getAirInfoStyle.js":
/*!****************************************************!*\
  !*** ./src/Layers/geoJsonStyle/getAirInfoStyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // 空气污染模式 样式
  function getAirInfoStyle(params) {
    var _StyleFunction = pointStyleFunction;

    function pointStyleFunction(feature, resolution) {
      var fillColor = feature.get('fill-color') || 'rgba(255, 255,0,0)';
      var strokeWidth = feature.get('stroke-width') || 2;
      var strokeColor = feature.get('stroke-color') || 'rgba(255, 255, 0, 0)';
      var padding = feature.get('padding') || [1, 10, 1, 10];

      var _style = null;
      if (params.displayTypeCompose) {
        if (resolution < 0.04) {
          _style = circleSytleFunction(feature, resolution, true);
          _style.setText(new ol.style.Text({
            text: getText(feature, resolution),
            padding: padding,
            font: '13px/20px arial, sans-serif',
            offsetY: 0,
            backgroundFill: new ol.style.Fill({
              color: fillColor
            }),
            backgroundStroke: new ol.style.Stroke({
              color: strokeColor,
              width: strokeWidth
            })
          }));
        } else {
          _style = circleSytleFunction(feature, resolution);
        }
      } else {
        if (params.typeStyle === 'number') {
          _style = circleSytleFunction(feature, resolution, true);
          _style.setText(new ol.style.Text({
            text: getText(feature, resolution),
            padding: padding,
            font: '13px/20px arial, sans-serif',
            offsetY: 0,
            backgroundFill: new ol.style.Fill({
              color: fillColor
            }),
            backgroundStroke: new ol.style.Stroke({
              color: strokeColor,
              width: strokeWidth
            })
          }));
        } else {
          _style = circleSytleFunction(feature, resolution);
        }
      }
      return _style;
    }

    function circleSytleFunction(feature, resolution, isTrans) {
      var fillColor = feature.get('fill-color') || 'rgba(255, 255,  0, 1)';
      var strokeWidth = feature.get('stroke-width') || 2;
      var strokeColor = feature.get('stroke-color') || 'rgba(255, 255, 0, 1)';
      var radius = feature.get('radius') || 5;
      if (isTrans) {
        fillColor = 'rgba(0, 0, 0, 0)';
        strokeColor = 'rgba(0, 0, 0, 0)';
      }
      var _style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: radius,
          stroke: new ol.style.Stroke({
            color: strokeColor,
            width: strokeWidth
          }),
          fill: new ol.style.Fill({
            color: fillColor
          })
        })
      });
      return _style;
    }

    function getText(feature, resolution) {
      var info = feature.get('info') || {};
      var _text = info.value;
      if (_text || _text === 0) {
        _text = _text.toString();
      } else {
        _text = '--';
      }
      return _text;
    }

    return _StyleFunction;
  }
  exports.getAirInfoStyle = getAirInfoStyle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/geoJsonStyle/getFireLevelStyle.js":
/*!******************************************************!*\
  !*** ./src/Layers/geoJsonStyle/getFireLevelStyle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function getFireLevelStyle(params) {
    var _StyleFunction = pointStyleFunction;
    function createTextStyle(feature, resolution) {
      return new ol.style.Text({
        textBaseline: 'middle',
        textAlign: 'center',
        text: getText(feature, resolution),

        font: 'bold 16px Calibri,sans-serif',
        fill: new ol.style.Fill({
          color: '#ED8116'
        }),
        stroke: new ol.style.Stroke({
          color: '#fff',
          width: 3
        }),
        offsetX: 0,
        offsetY: 0,
        placement: 'line',
        maxAngle: '0.7853981633974483',
        overflow: false,
        rotation: 0
      });
    }

    function pointStyleFunction(feature, resolution) {
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0)'
        }),
        stroke: new ol.style.Stroke({
          color: '#ED8116',
          width: 3
        }),
        text: createTextStyle(feature, resolution)
      });
    }

    function getText(feature, resolution) {
      // var type = 'normal'
      // var maxResolution = '1200'
      var text = feature.get('level');
      // console.log(text.toString())
      text = text.toString();
      // text = 'level'
      // if (resolution > maxResolution) {
      //   text = ''
      // } else if (type === 'hide') {
      //   text = ''
      // } else if (type === 'shorten') {
      //   text = text.trunc(12)
      // } else if (type === 'wrap' && 'point' !== 'line') {
      //   text = stringDivider(text, 16, '\n')
      // }
      return text;
    }
    return _StyleFunction;
  }

  exports.getFireLevelStyle = getFireLevelStyle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/geoJsonStyle/getFlashStyle.js":
/*!**************************************************!*\
  !*** ./src/Layers/geoJsonStyle/getFlashStyle.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  // 基于当前样式进行闪电的加载
  function getHNFlashJsonLayerStyle(params) {
    var _StyleFunction = pointStyleFunction;

    function pointStyleFunction(feature, resolution) {
      var pro = feature.getProperties();
      var pointStyle = new ol.style.Style({
        image: new ol.style.Icon(
        /** @type {module:ol/style/Icon~Options} */
        {
          // color: pro.iconColor || '#8959A8',
          crossOrigin: 'anonymous',
          src: pro.src || './flash.png'
        })
      });
      return pointStyle;
    }
    return _StyleFunction;
  }

  exports.getHNFlashJsonLayerStyle = getHNFlashJsonLayerStyle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/geoJsonStyle/getOrbitStyle.js":
/*!**************************************************!*\
  !*** ./src/Layers/geoJsonStyle/getOrbitStyle.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  // 移植轨道 geojson样式
  var defaultOrbitStyle = {
    lineColor: '#06cae5',
    lineWidth: 3,
    circleColor: '#06cae5',
    circleWidth: 8
  };

  function getOrbitStyle() {
    var _StyleFunction = pointStyleFunction;
    function createTextStyle(feature, resolution) {
      var align = 'center';
      var baseline = 'top';
      var size = '12px';
      var offsetX = parseInt(0, 10);
      var offsetY = parseInt(15, 10);
      var weight = '12px';
      var placement = 'point';
      var maxAngle = '0.7853981633974483';
      var exceedLength = false;
      var rotation = parseFloat(0);
      var font = weight + ' ' + size + ' ' + '12px';
      var fillColor = '#000';
      var outlineColor = '#eee';
      var outlineWidth = parseInt(3, 10);

      return new ol.style.Text({
        textAlign: align === '' ? undefined : align,
        textBaseline: baseline,
        font: font,
        text: getText(feature, resolution),
        fill: new ol.style.Fill({
          color: fillColor
        }),
        stroke: new ol.style.Stroke({
          color: outlineColor,
          width: outlineWidth
        }),
        offsetX: offsetX,
        offsetY: offsetY,
        placement: placement,
        maxAngle: maxAngle,
        exceedLength: exceedLength,
        rotation: rotation
      });
    }

    function pointStyleFunction(feature, resolution) {
      var _circleColor = defaultOrbitStyle.circleColor;
      var _circleWidth = defaultOrbitStyle.circleWidth;
      var _lineColor = defaultOrbitStyle.lineColor;
      var _lineWidth = defaultOrbitStyle.lineWidth;
      return new ol.style.Style({
        image: new ol.style.Circle({
          radius: 1,
          fill: new ol.style.Fill({
            color: _circleColor
          }),
          stroke: new ol.style.Stroke({
            color: _circleColor,
            width: _circleWidth
          })
        }),
        stroke: new ol.style.Stroke({
          color: _lineColor,
          width: _lineWidth
        }),
        text: createTextStyle(feature, resolution)
      });
    }

    function getText(feature, resolution) {
      var text = feature.get('title');
      var maxResolution = 0.3515625;
      if (resolution > maxResolution) {
        text = '';
      }
      return text;
    }

    return _StyleFunction;
  }

  exports.getOrbitStyle = getOrbitStyle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getClusterLayer.js":
/*!***************************************!*\
  !*** ./src/Layers/getClusterLayer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Layer */ "./src/Layers/Layer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Layer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.resetClusterSourceByGeojson = exports.setClusterData = exports.addClusterSelect = exports.getClusterLayer = undefined;


  /**
   * @module Layer
   * @description 基于参数获取聚合图层 (ol 内置聚合算法)
   * @private
   * @param {JSON} params 图层参数 url or data
   */
  function getClusterLayer(params) {
    var clusterSource = null;
    if (params.url) {
      clusterSource = getClusterSourceLayerByUrl(params);
    } else {
      clusterSource = getClusterSourceByGeojson(params);
    }
    var styleCache = {};
    var clusters = new ol.layer.Vector({
      source: clusterSource,
      projection: 'EPSG:4326',
      wrapX: false,
      style: function style(feature) {
        var imgSrc = getImgSrc(feature);
        // 根据
        var style = styleCache[imgSrc];
        if (!style) {
          style = new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0.5, 0.96],
              crossOrigin: 'anonymous',
              src: imgSrc
            })
          });
          styleCache[imgSrc] = style;
        }
        feature.set('style', style);
        return style;
      }
    });
    return clusters;
  }

  /**
   * popover 官方例子 使用了 bootstrap 的 pop 控件部分
   * @private
   * @param {*} params JSON
   * @inner
   */
  function getClusterSourceLayerByUrl(params) {
    var oUrl = params.url;
    // 由于 ClusterSource 不支持通过URL直接获取
    // 故使用 ajax async 模式对数据进行获取
    var geoInfo = {};
    $.ajax({
      url: oUrl,
      async: false,
      success: function success(data) {
        geoInfo = data;
      },
      error: function error(err) {
        console.log(err);
        return false;
      }
    });

    var _features = new ol.format.GeoJSON().readFeatures(geoInfo);

    var clusterSource = new ol.source.Cluster({
      distance: 10,
      wrapX: false,
      projection: 'EPSG:4326',
      source: new ol.source.Vector({
        features: _features
      })
      // url: oUrl
    });
    return clusterSource;
  }

  /**
   * 集群部分信息转化为图像src
   * @private
   * @param {JSON} feature 集群数据
   * @inner
   */
  function getImgSrc(feature) {
    var size = feature.get('features').length;
    var feature0 = feature.get('features')[0];
    var isHover = false;
    // 遍历进行选择
    for (var i = 0; i < size; i++) {
      var featurei = feature.get('features')[i];
      var proi = featurei.getProperties();
      if (proi.isSelected === true) {
        isHover = true;
      }
    }

    var pro = feature0.getProperties();
    var _src = pro.src;

    var imgSrc = './publics/plus.png';
    if (_src) {
      imgSrc = _src;
    }
    if (size > 1) {
      // TODO 集群样式也可以使用传参进入
      imgSrc = './publics/plus.png';
    }
    if (isHover) {
      imgSrc = imgSrc.replace('.png', '+.png');
    }
    return imgSrc;
  }

  /**
   * @private
   * @param {Object} map ol地图实例
   */
  function addClusterSelect(map) {
    // 单击事件
    var selectClick = new ol.interaction.Select({
      condition: ol.events.condition.click
    });
    var select = selectClick;
    if (select !== null) {
      map.addInteraction(select);
      select.on('select', function (e) {
        // let info = '&nbsp;' +
        //   e.target.getFeatures().getLength() +
        //   ' selected features (last operation selected ' + e.selected.length +
        //   ' and deselected ' + e.deselected.length + ' features)'
      });
    }
  }

  /**
   * 基于数据参数获取集群Source
   * @private
   * @param {JSON} params 数据参数 data
   */
  function getClusterSourceByGeojson(params) {
    var geoInfo = params.data;
    var distance = params.distance ? params.distance : 10;
    var _features = new ol.format.GeoJSON().readFeatures(geoInfo);
    var clusterSource = new ol.source.Cluster({
      distance: distance,
      wrapX: false,
      projection: 'EPSG:4326',
      source: new ol.source.Vector({
        features: _features
      }),
      geometryFunction: function geometryFunction(feature) {
        return feature.getGeometry();
      }
    });
    return clusterSource;
  }

  /**
   * 重设当前集群图层源信息
   * @private
   * @param {*} clusterLayer 现有集群图层
   * @param {*} newSource 新数据源
   * @param {*} params 图层其他参数
   */
  function resetClusterSourceByGeojson(clusterLayer, newSource, params) {
    if (!clusterLayer) {
      return false;
    }
    var _features = new ol.format.GeoJSON().readFeatures(newSource);
    var distance = params.distance ? params.distance : 10;
    var clusterSource = new ol.source.Cluster({
      distance: distance,
      wrapX: false,
      projection: 'EPSG:4326',
      source: new ol.source.Vector({
        features: _features
      })
    });
    clusterLayer.setSource(clusterSource);
    return true;
  }

  function setClusterData(params, data) {
    // TODO 此功能可以被 移除重新添加代替
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    var info = _addLayerParams[params.id];
    var _layer = info.layer;
    var _layerInfo = info.info;
    resetClusterSourceByGeojson(_layer, data, _layerInfo);
  }

  exports.getClusterLayer = getClusterLayer;
  exports.addClusterSelect = addClusterSelect;
  exports.setClusterData = setClusterData;
  exports.resetClusterSourceByGeojson = resetClusterSourceByGeojson;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getFPWTSLayer.js":
/*!*************************************!*\
  !*** ./src/Layers/getFPWTSLayer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @module Layer
   */

  /**
   * @description  添加基于火点数据的FPWTS图层数据
   * @function
   * @param {JSON} layerparams 图层参数
   * @returns {Object} ol类型图层
   */
  function getFPWTSLayer(layerparams) {
    // http://121.36.13.81:4629/image?SERVICE=FPWTS&BBOX=0,0,50,50&HEIGHT=500&WIDTH=500&SAT=FY3B&INSTR=VIRRX&STARTTIME=20200322002000&ENDTIME=20200324052000
    if (!layerparams.url) {
      return null;
    }
    var oURL = layerparams.url;
    var serviceType = 'SERVICE=FPWTS';
    // 获取 参数中的 星标仪器 时间等信息
    var paramsProd = layerparams.params;
    var layerParams = {
      SAT: paramsProd.SAT || 'FY3B',
      INSTR: paramsProd.INSTR || 'VIRRX',
      STARTTIME: paramsProd.STARTTIME || '20200322002000',
      ENDTIME: paramsProd.ENDTIME || '20200324052000'
    };
    var tileSize = layerparams.tileSize || [512, 512];
    var tileSizeNum = tileSize[0];
    var extent = ol.proj.get('EPSG:4326').getExtent();
    var projExtent = ol.proj.get('EPSG:4326').getExtent();
    var startResolution = ol.extent.getWidth(projExtent) / tileSizeNum / 2;
    // 分辨率  目前到 13层
    var resolutions = new Array(13);
    for (var i = 0, ii = resolutions.length; i < ii; ++i) {
      resolutions[i] = startResolution / Math.pow(2, i);
    }

    var fpwtLayer = new ol.layer.Tile({
      extent: extent,
      //  projection: proj,
      source: new ol.source.TileWMS({
        url: oURL,
        params: layerParams,
        serverType: 'geoserver',
        tileGrid: new ol.tilegrid.TileGrid({
          extent: extent,
          resolutions: resolutions,
          tileSize: tileSize
        }),
        tileLoadFunction: function tileLoadFunction(imageTile, src) {
          src = src.replace('SERVICE=WMS', serviceType);
          // 移除部分不需要的参数
          src = src.replace('&REQUEST=GetMap', '');
          src = src.replace('&TRANSPARENT=true', '');
          src = src.replace('&STYLES=', '');
          // 获取 bbox
          var srcSp = src.split('BBOX=');
          var info = srcSp[1];
          var infoSp = info.split('%2C');
          var bbox1 = infoSp[0] + '%2C' + infoSp[1] + '%2C' + infoSp[2] + '%2C' + infoSp[3];
          src = srcSp[0] + 'BBOX=' + bbox1;
          var tileCoord = imageTile.tileCoord;
          var z = tileCoord[0];
          src = src + '&LEVEL=' + z;
          // 添加调色板
          // console.log(src)
          imageTile.getImage().src = src;
        }
      })
    });
    return fpwtLayer;
  }

  exports.getFPWTSLayer = getFPWTSLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getGeoJsonLayer.js":
/*!***************************************!*\
  !*** ./src/Layers/getGeoJsonLayer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./geoJsonStyle/getFireLevelStyle */ "./src/Layers/geoJsonStyle/getFireLevelStyle.js"), __webpack_require__(/*! ./geoJsonStyle/getAirInfoStyle */ "./src/Layers/geoJsonStyle/getAirInfoStyle.js"), __webpack_require__(/*! ./geoJsonStyle/getAirInfoHover */ "./src/Layers/geoJsonStyle/getAirInfoHover.js"), __webpack_require__(/*! ./geoJsonStyle/getOrbitStyle */ "./src/Layers/geoJsonStyle/getOrbitStyle.js"), __webpack_require__(/*! ./geoJsonStyle/getFlashStyle */ "./src/Layers/geoJsonStyle/getFlashStyle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _getFireLevelStyle, _getAirInfoStyle, _getAirInfoHover, _getOrbitStyle, _getFlashStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getGeoJsonLayer = undefined;


  /**
   * @module Layer
   * @description 基于参数获取geojson数据显示图层
   * @param {JSON} params 图层参数
   * @return {*} ol 图层类型
   */
  function getGeoJsonLayer(params) {
    var geoJsonSource = null;
    // 基于参数 获取 数据
    if (params.url) {
      geoJsonSource = getGeoJsonByUrl(params);
    }
    if (params.data) {
      geoJsonSource = getGeoJsonByData(params.data);
    }

    // 获取 style 样式
    var _StyleFunction = getGeojsonStyleByType(params);

    // 涉及图层列表
    var layer = new ol.layer.Vector({
      source: geoJsonSource,
      style: _StyleFunction
    });

    return layer;
  }

  // 基于Url 获取数据
  function getGeoJsonByUrl(params) {
    var oURL = params.url;
    var oWrapX = params.wrapx ? params.wrapx : false;
    var urlSource = new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: oURL,
      wrapX: oWrapX
    });
    return urlSource;
  }

  // 基于GeoJson 进行数据转义
  function getGeoJsonByData(data) {
    // 基于GeoJson
    var vectorSource = new ol.source.Vector({
      features: new ol.format.GeoJSON().readFeatures(data)
    });
    return vectorSource;
  }

  // 基于当前参数 获取展示样式
  function getGeojsonStyleByType(params) {
    var geoShowType = params.geoShowType;
    // console.log('getFireLevelStyle', geoShowType)
    var _StyleFunction = void 0;
    switch (geoShowType) {
      case 'Flash':
        {
          // 闪电
          _StyleFunction = getFlashJsonLayerStyle(params);
          break;
        }
      case 'FireArea':
        {
          // 火区
          _StyleFunction = (0, _getFireLevelStyle.getFireLevelStyle)(params);
          break;
        }
      case 'AirInfo':
        {
          // 火区
          _StyleFunction = (0, _getAirInfoStyle.getAirInfoStyle)(params);
          (0, _getAirInfoHover.addAirHoverOverLayer)(params);
          break;
        }
      case 'Orbit':
        {
          // 轨道
          _StyleFunction = (0, _getOrbitStyle.getOrbitStyle)(params);
          break;
        }
      case 'Style':
        {
          // 基于Pro中的Style
          _StyleFunction = getGeojsonLayerStyle(params);
          break;
        }
      case 'NHFlash':
        {
          // 基于Pro中的Style
          _StyleFunction = (0, _getFlashStyle.getHNFlashJsonLayerStyle)(params);
          break;
        }
      default:
        {
          _StyleFunction = defaultStyle();
          break;
        }
    }
    return _StyleFunction;
  }

  function defaultStyle() {
    var _style = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0)'
      }),
      stroke: new ol.style.Stroke({
        color: '#319FD3',
        width: 1
      }),
      text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
          color: '#000'
        }),
        stroke: new ol.style.Stroke({
          color: '#fff',
          width: 3
        })
      })
    });
    return _style;
  }

  function getGeojsonLayerStyle() {
    function fn(feature, res) {
      var Type = feature.getGeometry().getType();
      switch (Type) {
        case 'Point':
          {
            return getPointStyle(feature, res);
          }
        case 'Polygon':
          {
            return getGeojsonPolygonStyle(feature, res);
          }
        default:
          {
            break;
          }
      }
    }
    return fn;
  }

  function getGeojsonPolygonStyle(feature, res) {
    var pro = feature.getProperties();
    var fillColor = pro.fillColor || 'rgba(255,255,0,1)';
    var strokeColor = pro.strokeColor || 'rgba(255,255,0,0.5)';
    var name = pro.name + '\n';
    var baseRes = 0.0054931640625 * 2;
    if (res > baseRes) {
      name = '';
    }
    var polygonStyle = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: strokeColor,
        width: pro.width
      }),
      fill: new ol.style.Fill({
        color: fillColor
      }),
      text: new ol.style.Text({
        // textAlign: 'center',
        text: name,
        offsetY: 8,
        font: 'bold 16px Times New Roman',
        fill: new ol.style.Fill({
          color: '#333'
        }),
        stroke: new ol.style.Stroke({
          color: '#eee',
          width: parseInt(3, 10)
        })
        // placement: 'point'
      })
    });
    return polygonStyle;
  }

  function getPointStyle(feature, res) {
    // 基于feature的属性进行判断
    var pro = feature.getProperties();

    var pointStyle = void 0;
    // TODO 默认为 圈模式
    if (!pro.style) {
      pro.style = 'circle';
    }
    switch (pro.style) {
      // 圈
      case 'circle':
        {
          pro['fill-color'] = pro.color;
          pro['stroke-color'] = pro.color;
          pointStyle = new ol.style.Style({
            image: new ol.style.Circle({
              radius: pro.radius ? pro.radius : 2,
              fill: new ol.style.Fill({
                color: pro['fill-color'] ? pro['fill-color'] : 'rgba(255,0,0,1)'
              }),
              stroke: new ol.style.Stroke({
                color: pro['stroke-color'] ? pro['stroke-color'] : 'rgba(255,0,0,1)',
                width: pro['stroke-width'] ? pro['stroke-width'] : 1
              })
            })
          });
          break;
        }
      // 贴img
      case 'icon':
        {
          var fontSize = pro.fontSize || 10;
          var lineHeight = pro.lineHeight || 1;
          pointStyle = new ol.style.Style({
            image: new ol.style.Icon(
            /** @type {module:ol/style/Icon~Options} */
            {
              color: pro.iconColor || '#8959A8',
              crossOrigin: 'anonymous',
              src: pro.src
            }),
            text: new ol.style.Text({
              text: pro.text || '',
              font: fontSize + 'px/' + lineHeight + ' Times New Roman',
              offsetY: pro.offsetY || 15,
              offsetX: pro.offsetX || 0,
              textAlign: 'left',
              fill: new ol.style.Fill({
                color: pro.textColor || 'rgba(255,255,255,1)'
              }),
              stroke: new ol.style.Stroke({
                color: pro.textStrokeColor || 'rgba(0,0,0,1)',
                width: 2
              })
            })
          });
          break;
        }
      // 贴实心圆
      case 'point':
        {
          var _fontSize = pro.fontSize || 10;
          pointStyle = new ol.style.Style({
            image: new ol.style.Circle({
              radius: pro.radius ? pro.radius : 5,
              fill: new ol.style.Fill({
                color: pro.color || 'rgba(255,0,0,1)'
              }),
              stroke: new ol.style.Stroke({
                color: pro.strokeColor || 'rgba(255,0,0,1)',
                width: 1
              })
            }),
            text: new ol.style.Text({
              text: pro.text,
              font: _fontSize + 'px Times New Roman',
              offsetY: pro.offsetY || 15,
              offsetX: pro.offsetX || 0,
              fill: new ol.style.Fill({
                color: pro.textColor || 'rgba(255,255,255,1)'
              }),
              stroke: new ol.style.Stroke({
                color: pro.textStrokeColor || 'rgba(0,0,0,1)',
                width: 2
              })
            })
          });
          break;
        }
      case 'rect':
        {
          var _color = pro.color || 'rgba(255,0,0,1)';
          var _strokeColor = pro.strokeColor || _color;
          pointStyle = new ol.style.Style({
            image: new ol.style.RegularShape({
              points: 4,
              rotateWithView: true,
              rotation: Math.PI / 4,
              radius: pro.radius ? pro.radius : 5,
              fill: new ol.style.Fill({
                color: _color
              }),
              stroke: new ol.style.Stroke({
                color: _strokeColor || 'rgba(255,0,0,1)',
                width: 1
              })
            })
          });

          break;
        }
      default:
        {
          break;
        }
    }

    return pointStyle;
  }

  // 基于当前样式进行闪电的加载
  function getFlashJsonLayerStyle(params) {
    var _StyleFunction = pointStyleFunction;

    function pointStyleFunction(feature, resolution) {
      var _circleColor = 'rgba(255, 0, 0, 1)';
      var _circleWidth = 1;
      var _lineColor = 'rgba(255, 0, 0, 1)';
      var _lineWidth = 1;

      return new ol.style.Style({
        image: new ol.style.Circle({
          radius: 1,
          fill: new ol.style.Fill({
            color: 'rgba(255, 0, 0, 0.1)'
          }),
          stroke: new ol.style.Stroke({
            color: _circleColor,
            width: _circleWidth
          })
        }),
        stroke: new ol.style.Stroke({
          color: _lineColor,
          width: _lineWidth
        })
      });
    }
    return _StyleFunction;
  }

  exports.getGeoJsonLayer = getGeoJsonLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getGeoTiffLayer.js":
/*!***************************************!*\
  !*** ./src/Layers/getGeoTiffLayer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../ColorBar/colorBar */ "./src/ColorBar/colorBar.js"), __webpack_require__(/*! ../ColorBar/blur */ "./src/ColorBar/blur.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _colorBar, _blur) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.clearTiffInfo = exports.resetGeoTiffColorBar = exports.getGeoTiffLayer = undefined;

  /** @module Layer */
  // 使用 IMAGECANVS 对GEOTIFF数据进行展示
  // todo 目前使用的为 单张 显示
  // todo 当 tiff 过大的时候 可以考虑 使用 切片tiff 进行展示 --geotiff 官网有设置

  var tiffInfo = {};
  async function getGeoTiffLayer(params) {
    // async function asyncGeo (params) {

    var id = params.id;

    // color bar
    var colorBar = params.colorBar;

    // url
    var url = params.url;
    var response = await fetch(url);
    var arrayBuffer = await response.arrayBuffer();
    // 从buff 中获取
    var _tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);

    var _tiffImage = await _tiff.getImage();
    var tiffData = await _tiffImage.readRasters();

    // 获取 tiff 数据信息
    // var tiffImage = await tiffInfo.getImage()
    // const tiffData = await tiffImage.readRasters()

    // const RGBdata = await _tiffImage.readRGB()
    // 基于data 设置cb
    var dataInfo = tiffData[0];

    if (tiffInfo) {
      tiffInfo = {};
    }

    // 获取调色板

    // 对调色板数据进行设置
    var dataWithColor = (0, _colorBar.getColorData)(colorBar, dataInfo);
    // 设置当前 tiff的数据 调色板 和 CB

    var info = {};
    // 基于 _tiffImage 添加图层
    // 宽高
    info.dataWidth = _tiffImage.getWidth();
    info.dataheight = _tiffImage.getHeight();
    // 经纬度范围
    info.bbox = _tiffImage.getBoundingBox();

    tiffInfo[id] = {
      // 数据信息
      dataInfo: dataInfo,
      // 调色板信息
      colorBar: colorBar,
      // 调色板转译后的信息
      dataWithColor: dataWithColor,
      // 基础经纬度信息
      info: info
      // 添加tifd
    };var _tiffLayer = addTiffLayer(info, id);
    return _tiffLayer;
    // }
    // asyncGeo(params).then(data => {
    //   return data
    // })
  }

  function addTiffLayer(tiffImageInfo, id, cbEnd) {

    var dataWithColor = tiffInfo[id].dataWithColor;
    // 数据宽度
    var dataWidth = tiffImageInfo.dataWidth;
    // 数据高度
    var dataheight = tiffImageInfo.dataheight;
    // 区域范围
    var bbox = tiffImageInfo.bbox;

    var bboxnew = bbox;

    var tiffSource = new ol.source.ImageCanvas({
      canvasFunction: function canvasFunction(extent, resolution, pixelRatio, size, projection) {
        dataWithColor = tiffInfo[id].dataWithColor;
        // size 的 进行int 初始化
        size = [parseInt(size[0]), parseInt(size[1])];
        var canvas = document.createElement('canvas');
        // 根据新的范围 重新插值粒度
        var _width = parseInt(size[0]);
        var _height = parseInt(size[1]);
        // 重设宽高
        canvas.width = _width;
        canvas.height = _height;
        //
        var ctx = canvas.getContext('2d');

        ctx.createImageData(_width, _height);
        var c = ctx.getImageData(0, 0, _width, _height);
        for (var i = 0; i < c.height; ++i) {
          for (var j = 0; j < c.width; ++j) {
            // 查找对应的 XY位置
            var canvasXY = findCood(extent, size, j, i);
            // 获取对应XY部分RGB
            var _RGB = findNext(dataWidth, dataheight, bbox, canvasXY, dataWithColor);
            // var _RGB = [255, 0, 255, 255];
            if (_RGB.length === 0) {
              _RGB = [255, 255, 255, 0];
            }
            var x = i * 4 * c.width + 4 * j;
            c.data[x + 3] = _RGB[3];
            c.data[x] = _RGB[0];
            c.data[x + 1] = _RGB[1];
            c.data[x + 2] = _RGB[2];
          }
        }
        // imageFilter(c, _width, _height)

        ctx.putImageData(c, 0, 0);

        if (cbEnd) {
          if (typeof cbEnd === 'function') {
            cbEnd();
          }
        }
        return canvas;
      }
    });

    var wmslayerResult = new ol.layer.Image({
      extent: bboxnew,
      source: tiffSource,
      // projection: newProj
      projection: 'EPSG:4326'
    });
    tiffInfo[id].tiffSource = tiffSource;
    return wmslayerResult;
  }

  function imageFilter(c, _width, _height) {
    var cdata = c.data;
    var cData1 = (0, _blur.blurImage)(cdata, _width, _height);
    // c.data = cData1
    for (var i = 0; i < c.height; ++i) {
      for (var j = 0; j < c.width; ++j) {
        var x = i * 4 * c.width + 4 * j;
        c.data[x + 3] = cData1[x + 3];
        c.data[x] = cData1[x];
        c.data[x + 1] = cData1[x + 1];
        c.data[x + 2] = cData1[x + 2];
      }
    }
    return c;
  }
  /**
   *
   * 通过函数 重新设置cb
   * @param {*} params 图层参数
   * @param {*} newColorBar 新的 cb
   */
  function resetGeoTiffColorBar(params, newColorBar) {

    // TODO 删除 图层时 需要删除 对应tiffInfo信息
    var id = params.id;
    if (tiffInfo) {
      if (tiffInfo[id]) {
        // 基于数据信息和 CB 重新计算数据转译信息
        var dataInfo = tiffInfo[id].dataInfo;
        tiffInfo[id].colorBar = newColorBar;
        tiffInfo[id].dataWithColor = (0, _colorBar.getColorData)(newColorBar, dataInfo);
        // 重新绘制当前的分析图层
        var tiffSource = tiffInfo[id].tiffSource;
        if (tiffSource) {
          tiffSource.refresh();
        }
      }
    }
  }

  function findNext(_dataWidth, _dataHeight, dataExtent, canvasXY, dataWithColor) {
    // 坐标经纬度
    // 判识是否在范围内
    var RGB = [0, 0, 0, 0];

    if (dataExtent[2] > canvasXY[0] && canvasXY[0] > dataExtent[0]) {
      if (dataExtent[3] > canvasXY[1] && canvasXY[1] > dataExtent[1]) {
        var lon = (canvasXY[0] - dataExtent[0]) * _dataWidth / (dataExtent[2] - dataExtent[0]);
        var lat = (dataExtent[3] - canvasXY[1]) / (dataExtent[3] - dataExtent[1]) * _dataHeight;
        // 获取RGB的值
        RGB = dataWithColor[parseInt(lon) + parseInt(lat) * _dataWidth];
      }
    }
    if (!RGB || RGB.length !== 4) {
      RGB = [0, 0, 0, 0];
    }
    return RGB;
  }

  function findCood(_extent, size, x, y) {
    var lon = (_extent[2] - _extent[0]) / (size[0] - 1) * x + _extent[0];
    var lat = (_extent[1] - _extent[3]) / (size[1] - 1) * y + _extent[3];
    // 反向转化为经纬度
    // var firstProjection =

    // var returnInfo = proj4(firstProjection).inverse([lon, lat]);
    var returnInfo = [lon, lat];

    return returnInfo;
  }

  // function getGeoTiffLayerByUrl (params, cb) {
  //   // 20181221 修改获取模式 解决跨域问题

  // }

  // function getGeoTiffLayerByData (params) {
  //   if (!params.data) {
  //     return null
  //   }
  //   var demoData = params.data
  //   return demoData
  // }

  function clearTiffInfo(layerinfo) {
    if (tiffInfo) {
      if (tiffInfo[layerinfo.id]) {
        delete tiffInfo[layerinfo.id];
      }
    }
  }

  exports.getGeoTiffLayer = getGeoTiffLayer;
  exports.resetGeoTiffColorBar = resetGeoTiffColorBar;
  exports.clearTiffInfo = clearTiffInfo;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getGraticuleLayer.js":
/*!*****************************************!*\
  !*** ./src/Layers/getGraticuleLayer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Map/Map */ "./src/Map/Map.js"), __webpack_require__(/*! ./layerZIndex */ "./src/Layers/layerZIndex.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map, _layerZIndex) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.removeGraticuleLayer = exports.addGraticuleLayer = undefined;


  /**
   * @description 获取经纬度网格图层 ol6
   * @param {Object} params 参数
   * @param {Number} [params.offsetY= 50] 文字偏移参数
   * @returns ol.Layer
   */

  /** @module Layer */
  function _getGraticuleLayer(params) {
    if (!params) {
      params = {};
    }
    var offsetY = params.offsetY || -50;

    var graticuleLayer = new ol.layer.Graticule({
      // the style to use for the lines, optional.
      strokeStyle: new ol.style.Stroke({
        //  color: 'rgba(255,120,0,0.9)',
        color: params.lineColor || '#eeeeee',
        width: 1.5,
        lineDash: [0.4, 4]
      }),
      showLabels: true,
      targetSize: 400,
      lonLabelFormatter: function lonLabelFormatter(e) {
        return e + '°';
      },
      latLabelFormatter: function latLabelFormatter(e) {
        return e + '°';
      },
      lonLabelStyle: new ol.style.Text({
        font: '22px Calibri,sans-serif',
        textBaseline: 'bottom',
        offsetY: offsetY,
        fill: new ol.style.Fill({
          color: 'rgba(0,0,0,1)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(255,255,255,1)',
          width: 3
        })
      }),
      latLabelStyle: new ol.style.Text({
        font: '22px Calibri,sans-serif',
        textAlign: 'end',
        // offsetY: offsetY,
        fill: new ol.style.Fill({
          color: 'rgba(0,0,0,1)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(255,255,255,1)',
          width: 3
        })
      })
      // wrapX: false
    });
    return graticuleLayer;
  }

  /**
   * @private
   * @description 经纬度网格图层 =》默认一个map只能存在一个经纬度网格图层
   */
  var graticuleLayer = null;

  /**
   * @description 添加经纬度网格图层
   * @function
   */
  function addGraticuleLayer(params) {
    var _olMap = (0, _Map.getMap)();
    if (graticuleLayer) {
      removeGraticuleLayer();
    }
    graticuleLayer = _getGraticuleLayer(params);
    _olMap.addLayer(graticuleLayer);
    // 设置当前zIndex
    var zIndex = (0, _layerZIndex.getZIndexByType)({ layerGroup: 'baseVector' });
    graticuleLayer.setZIndex(zIndex);
  }

  /**
   * @description 移除经纬度网格图层
   * @function
   */
  function removeGraticuleLayer() {
    var _olMap = (0, _Map.getMap)();
    _olMap.removeLayer(graticuleLayer);
    graticuleLayer = null;
  }

  exports.addGraticuleLayer = addGraticuleLayer;
  exports.removeGraticuleLayer = removeGraticuleLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getHeatmapLayer.js":
/*!***************************************!*\
  !*** ./src/Layers/getHeatmapLayer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /** @module Layer */

  //   聚合火点样式类型
  // demo 示例 https://openlayers.org/en/latest/examples/heatmap-earthquakes.html
  // todo 可以根据 kml 中其他字段位读取信息

  /**
   * 基于kml数据绘制热力图
   * @function
   * @param {json} params 热力图参数
   */
  function getHeatmapLayer(params) {
    if (params.url) {
      return getHeatmapLayerByUrl(params);
    } else {
      return getHeatmapLayerByGeoJson(params);
    }
  }

  function getHeatmapLayerByUrl(params) {
    var oURL = params.url;
    var oBlur = params.blur ? parseInt(params.blur, 10) : 20;
    var oRadius = params.radius ? parseInt(params.radius, 10) : 10;
    var vector = new ol.layer.Heatmap({
      source: new ol.source.Vector({
        // url: 'data/kml/2012_Earthquakes_Mag5.kml',
        url: oURL,
        format: new ol.format.KML({
          extractStyles: false
        })
      }),
      blur: oBlur,
      radius: oRadius
    });

    vector.getSource().on('addfeature', function (event) {
      // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
      // standards-violating <magnitude> tag in each Placemark.  We extract it from
      // the Placemark's name instead.
      var name = event.feature.get('name');
      var magnitude = parseFloat(name.substr(2));
      event.feature.set('weight', magnitude - 5);
    });

    return vector;
    // 可以后期设置  setBlur setRadius

    // blur.addEventListener('input',function () {
    //   vector.setBlur(parseInt(blur.value,10));
    // });

    // radius.addEventListener('input',function () {
    //   vector.setRadius(parseInt(radius.value,10));
    // });
  }

  function getHeatmapLayerByGeoJson(params) {
    var geoInfo = params.data;

    var _features = new ol.format.GeoJSON().readFeatures(geoInfo);

    // let  oURL = params.url
    var oBlur = params.blur ? parseInt(params.blur, 10) : 20;
    var oRadius = params.radius ? parseInt(params.radius, 10) : 10;
    var vector = new ol.layer.Heatmap({
      source: new ol.source.Vector({
        features: _features
      }),
      blur: oBlur,
      radius: oRadius
    });

    vector.getSource().on('addfeature', function (event) {
      // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
      // standards-violating <magnitude> tag in each Placemark.  We extract it from
      // the Placemark's name instead.
      var name = event.feature.get('name');
      var magnitude = parseFloat(name.substr(2));
      event.feature.set('weight', magnitude - 5);
    });

    return vector;
    // 可以后期设置  setBlur setRadius

    // blur.addEventListener('input',function () {
    //   vector.setBlur(parseInt(blur.value,10));
    // });

    // radius.addEventListener('input',function () {
    //   vector.setRadius(parseInt(radius.value,10));
    // });
  }

  exports.getHeatmapLayer = getHeatmapLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getImageCanvasLayer.js":
/*!*******************************************!*\
  !*** ./src/Layers/getImageCanvasLayer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../ColorBar/colorBar */ "./src/ColorBar/colorBar.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _colorBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getImageCanvasLayer = undefined;


  /**
   * @description 添加 getImageCanvasLayer
   * @param {*} params 图层参数
   */
  function getImageCanvasLayer(params) {
    if (params.data) {
      return getImageCanvasLayerByData(params);
    }
    // TODO 使用数据
  }
  /** @module Layer */


  function getImageCanvasLayerByData(params) {
    // 数据
    var data = params.data;
    var colorBar = params.colorBar;
    var dataWidth = params.dataWidth;
    var dataHeight = params.dataHeight;
    // 经纬度范围
    var bbox = params.extent ? params.extent : [-180, -90, 180, 90];
    // 基于调色板进行处理
    var dataWithColor = (0, _colorBar.getColorData)(colorBar, data);
    // 范围
    // var extent = params.extent
    var tiffSource = new ol.source.ImageCanvas({
      canvasFunction: function canvasFunction(extent, resolution, pixelRatio, size, projection) {
        // size 的 进行int 初始化
        size = [parseInt(size[0]), parseInt(size[1])];
        var canvas = document.createElement('canvas');
        // 根据新的范围 重新插值粒度
        var _width = parseInt(size[0]);
        var _height = parseInt(size[1]);
        canvas.width = _width;
        canvas.height = _height;

        var ctx = canvas.getContext('2d');

        ctx.createImageData(_width, _height);
        var c = ctx.getImageData(0, 0, _width, _height);
        for (var i = 0; i < c.height; ++i) {
          for (var j = 0; j < c.width; ++j) {
            var canvasXY = findCood(extent, size, j, i);
            var _RGB = findNext(dataWidth, dataHeight, bbox, canvasXY, dataWithColor);
            // var _RGB = [255, 0, 255, 255];
            if (_RGB.length === 0) {
              _RGB = [255, 0, 255, 255];
            }
            var x = i * 4 * c.width + 4 * j;
            // 对RGB进行赋值
            c.data[x + 3] = _RGB[3];
            c.data[x] = _RGB[0];
            c.data[x + 1] = _RGB[1];
            c.data[x + 2] = _RGB[2];
          }
        }
        ctx.putImageData(c, 0, 0);
        return canvas;
      },
      crossOrigin: 'anonymous'
    });

    // todo 添加对其他投影模式的支持

    var imageLayer = new ol.layer.Image({
      extent: bbox,
      source: tiffSource,
      projection: 'EPSG:4326'
      // projection: "EPSG:4326"
    });
    return imageLayer;
  }

  function findCood(_extent, size, x, y) {
    var lon = (_extent[2] - _extent[0]) / (size[0] - 1) * x + _extent[0];
    var lat = (_extent[1] - _extent[3]) / (size[1] - 1) * y + _extent[3];
    // 反向转化为经纬度
    // var firstProjection =

    // var returnInfo = proj4(firstProjection).inverse([lon, lat]);
    var returnInfo = [lon, lat];
    return returnInfo;
  }

  // TODO  双线性内插值
  // f(i+u,j+v) = (1-u)(1-v)f(i,j) + (1-u)vf(i,j+1) + u(1-v)f(i+1,j) + uvf(i+1,j+1)
  // function inner () {

  // }

  function findNext(_dataWidth, _dataHeight, dataExtent, canvasXY, dataWithColor) {
    // 坐标经纬度
    // 判识是否在范围内
    var RGB = [0, 0, 0, 0];

    if (dataExtent[2] > canvasXY[0] && canvasXY[0] > dataExtent[0]) {
      if (dataExtent[3] > canvasXY[1] && canvasXY[1] > dataExtent[1]) {
        var lon = (canvasXY[0] - dataExtent[0]) * _dataWidth / (dataExtent[2] - dataExtent[0]);
        var lat = (dataExtent[3] - canvasXY[1]) / (dataExtent[3] - dataExtent[1]) * _dataHeight;
        // 获取RGB的值
        RGB = dataWithColor[parseInt(lon) + parseInt(lat) * _dataWidth];
      }
    }
    if (!RGB || RGB.length !== 4) {
      RGB = [0, 0, 0, 0];
    }
    return RGB;
  }

  exports.getImageCanvasLayer = getImageCanvasLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getPointClusterLayer.js":
/*!********************************************!*\
  !*** ./src/Layers/getPointClusterLayer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Layer */ "./src/Layers/Layer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Layer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.pointClusterColorChange = exports.getPointClusterLayer = undefined;


  /**
   * @description 获取 点聚合图层 getPointClusterLayer
   * @function
   * @param {*} params 图层参数
   */
  function getPointClusterLayer(params) {
    params.data.features = _getGeoColorStyle(params.data, params.range);
    var clusterSource = new ol.source.Cluster({
      distance: params.distance || 40,
      wrapX: false,
      projection: 'EPSG:4326',
      source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(params.data),
        wrapX: false
      })
    });
    var layer = new ol.layer.Vector({
      source: clusterSource,
      style: getPointStyle(params)
    });
    return layer;
  }
  /** @module Layer */


  function getPointStyle(params) {
    return function (feature, res) {
      feature = feature.get('features')[0];
      var attr = feature.getProperties();
      //  const city = attr.stationname || ''
      var text = '';
      if (attr.value !== 0 && attr.value !== null && attr.value !== -999) {
        // text = city + ' ' + attr.value.toFixed(3)
        var _value = attr.value.toFixed(1);
        if (Number(_value) !== 0) {
          text = _value;
        }
      }

      return new ol.style.Style({
        image: new ol.style.Circle({
          radius: params.radius || 5,
          fill: new ol.style.Fill({
            color: attr.color || 'rgba(0,0,0,1)'
          }),
          stroke: new ol.style.Stroke({
            color: params.strokeColor || 'rgba(0,0,0,1)',
            width: 1
          })
        }),
        text: new Text({
          text: text,
          font: '10px Times New Roman',
          offsetY: 15
        })
      });
    };
  }

  function _getGeoColorStyle(data, range) {
    var tempDate = data.features.map(function (_data) {
      var target = range.find(function (_range) {
        var valueRange = _range[0];
        if (_data.properties.value >= valueRange[0] && _data.properties.value < valueRange[1]) {
          return true;
        }
        return false;
      });
      if (!target) {
        return _data;
      }
      var rgba = 'rgba(' + target[1][0] + ',' + target[1][1] + ',' + target[1][2] + ',' + target[1][3] + ')';
      _data.properties.color = rgba;
      return _data;
    });

    return tempDate;
  }

  /**
   * @description 修改聚合点颜色
   * @function
   * @param {JSON} layer 图层信息
   * @param {JSON} range 新颜色配置
   */
  function pointClusterColorChange(layer, range) {
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    if (!_addLayerParams[layer.id]) {
      return false;
    }
    var _layer = _addLayerParams[layer.id].layer;
    var data = layer.data;
    data.features = _getGeoColorStyle(data, range);

    var features = new ol.format.GeoJSON().readFeatures(data, { featureProjection: 'EPSG:4326' });
    var clusterSource = new ol.source.Cluster({
      wrapX: false,
      projection: 'EPSG:4326',
      source: new ol.source.Vector({
        features: features
      })
    });

    _layer.setSource(clusterSource);
  }

  exports.getPointClusterLayer = getPointClusterLayer;
  exports.pointClusterColorChange = pointClusterColorChange;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getSingleImageLayer.js":
/*!*******************************************!*\
  !*** ./src/Layers/getSingleImageLayer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./loadLayer */ "./src/Layers/loadLayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _loadLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSingleImageLayer = undefined;


  /** @module Layer */
  // 添加 单个图像产品
  function getSingleImageLayer(params) {
    var defaultImageExtent = [-180, -90, 180, 90];
    var oURL = params.url;
    var tileVisible = params.visible !== null ? params.visible : true;

    // let  tileVisible = params.visible ? params.visible : true
    if (params.visible === false) {
      tileVisible = false;
    }
    // 默认 不重复
    var oWrapX = params.wrapx ? params.wrapx : false;
    var oExtent = params.extent ? params.extent : defaultImageExtent;
    //  单个图片加载部分 todo拆分 并添加数据加载锁
    // 校验投影模式
    var projection = new ol.proj.Projection({
      units: 'pixels',
      extent: oExtent
    });
    var _layerSource = new ol.source.ImageStatic({
      url: oURL,
      projection: params.projection ? params.projection : projection,
      imageExtent: oExtent,
      crossOrigin: 'anonymous',
      imageLoadFunction: function imageLoadFunction(image, src) {
        (0, _loadLayer.addLoad)(params.id, src);
        image.getImage().src = src;
        return src;
      }
    });
    // 添加一个 layer
    var layer = new ol.layer.Image({
      wrapX: oWrapX,
      source: _layerSource,
      visible: tileVisible
    });
    // 20181023 修改单片图片锁
    layer.getSource().on('imageloadend', function (e) {
      var src = e.image.src_;
      (0, _loadLayer.endLoad)(params.id, src);
    });
    layer.getSource().on('imageloaderror', function (e) {
      var src = e.image.src_;
      (0, _loadLayer.endLoad)(params.id, src, true);
    });

    return layer;
  }
  exports.getSingleImageLayer = getSingleImageLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getTMS5Layer.js":
/*!************************************!*\
  !*** ./src/Layers/getTMS5Layer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./loadLayer */ "./src/Layers/loadLayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _loadLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getTMS5Layer = undefined;


  function getTMS5Layer(params) {
    // 图像类型
    var tileType = params.tileType ? params.tileType : 'jpg';
    // 可见性设置
    var tileVisible = params.visible ? params.visible : true;
    if (params.visible === false) {
      tileVisible = false;
    }

    var oURL = params.url;
    var optWrapX = params.wrapx ? params.wrapx : false;
    //   补充分辨率设置 此处默认跳变分辨率
    var optResolutions = params.resolutions ? params.resolutions : [0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.01953125, 0.009765625, 0.0048828125, 0.00244140625 /*, 0.00244140625 */
    ];

    var optTileSize = params.tileSize ? params.tileSize : [256, 256];
    // 如果末尾没有 / 则 在最后一位加上/
    if (oURL[oURL.length - 1] !== '/') {
      oURL = oURL + '/';
    }
    var urlTemplate = oURL + '{z}/{x}/{y}.' + tileType;

    // 图层
    var layer = new ol.layer.Tile({
      source: new ol.source.TileImage({
        crossOrigin: 'anonymous',
        projection: 'EPSG:4326',
        tileGrid: new ol.tilegrid.TileGrid({
          // 设置 左下角为原点
          //  origin: [-180, -90],
          // 设置原点坐标
          resolutions: optResolutions,
          extent: [-180, -90, 180, 90],
          tileSize: optTileSize
        }),
        wrapX: optWrapX,
        tileUrlFunction: function tileUrlFunction(tileCoord, pixelRatio, projection) {
          var z = tileCoord[0];
          var x = tileCoord[1];
          /* let  y = Math.pow(2, z) + tileCoord[2]; */
          var y = Math.abs(tileCoord[2]);
          // wrap the world on the X axis
          // console.log(n)

          //   x = x % n
          //   if (x * n < 0) {
          //     x = x + n
          //   }
          // 20200423 liuyp 修复6版本后 FY4 TMS 切片位移问题
          // y = Math.pow(2, z) + y - 1
          var n = Math.pow(2, z);
          y = y - 1 + n;
          y = y % n;
          if (y * n < 0) {
            y = y + n;
          }

          var url = urlTemplate.replace('{z}', z.toString()).replace('{y}', y.toString()).replace('{x}', x.toString());
          // 计算加载
          (0, _loadLayer.addLoad)(params.id, url);
          return url;
        }
      }),
      wrapX: optWrapX,
      visible: tileVisible
    });
    // start 加载瓦片函数
    // layer.getSource().on('tileloadstart', function (e) {

    // })
    // 瓦片加载完成
    layer.getSource().on('tileloadend', function (e) {
      var src = e.tile.src_;
      // 成功加载
      (0, _loadLayer.endLoad)(params.id, src);
    });
    // 瓦片加载异常
    layer.getSource().on('tileloaderror', function (e) {
      // 加载异常
      var src = e.tile.src_;
      (0, _loadLayer.endLoad)(params.id, src, true);
    });

    return layer;
  }
  /** @module Layer */

  /**
   * TMS 类型图像展示
   * 我们目前大部分高分辨率图像，使用此切片类型进行展示
   * 目前默认为512 * 512
   */
  exports.getTMS5Layer = getTMS5Layer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getTMSLayer.js":
/*!***********************************!*\
  !*** ./src/Layers/getTMSLayer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./loadLayer */ "./src/Layers/loadLayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _loadLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getTMSLayer = undefined;


  /**
   * 获取 TMS类型图层
   * @param {Object} params  TMS图层加载参数
   * @param {String}  params.id 图层唯一标识
   * @param {String}   [params.tileType = 'jpg'] 图像类型 如：jpg png
   * @param {Boolean}  [params.visible = true] 图像初始化显隐状态
   * @param {Boolean}  [params.wrapx =false] 图层是否跨地图重复
   * @param {Number[]} [params.resolutions] 图层各级分辨率
   * @param {Number[]} [params.tileSize =[256,256]] 单图片加载大小
   * @param {Number[]} [params.origin =[-180, 90]] 远点坐标经纬度
   * @returns ol.Layer
   * @example
   * const tmsParams={
   *   id: 'testtdtImgCParams',
   *    name: 'tdtImgCParams',
   *    mapType: 'TMS',
   *    url: 'http://localhost:4519/data/tianditu/img_c/',
   *    tileType: 'jpg',
   *    origin: [-180, 90]
   * }
   * mOlClass.addLayer(tdtImgCParams)
   */
  function getTMSLayer(params) {
    // 图像类型
    var tileType = params.tileType ? params.tileType : 'jpg';
    // 可见性设置
    var tileVisible = params.visible ? params.visible : true;
    if (params.visible === false) {
      tileVisible = false;
    }

    var oURL = params.url;
    var optWrapX = params.wrapx ? params.wrapx : false;
    //   补充分辨率设置 此处默认跳变分辨率
    var optResolutions = params.resolutions || [0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.01953125, 0.009765625, 0.0048828125, 0.00244140625 /*, 0.00244140625 */
    ];

    var optTileSize = params.tileSize ? params.tileSize : [256, 256];
    // 如果末尾没有 / 则 在最后一位加上/
    if (oURL[oURL.length - 1] !== '/') {
      oURL = oURL + '/';
    }
    var urlTemplate = oURL + '{z}/{x}/{y}.' + tileType;
    var _origin = params.origin || [-180, -90];
    // 图层
    var layer = new ol.layer.Tile({
      source: new ol.source.TileImage({
        crossOrigin: 'anonymous',
        projection: 'EPSG:4326',
        tileGrid: new ol.tilegrid.TileGrid({
          // 设置 左下角为原点
          // getTopLeft
          origin: _origin,
          // 设置原点坐标
          resolutions: optResolutions,
          extent: [-180, -90, 180, 90],
          tileSize: optTileSize
        }),
        wrapX: optWrapX,
        tileUrlFunction: function tileUrlFunction(tileCoord, pixelRatio, projection) {
          var z = tileCoord[0];
          var x = tileCoord[1];
          var y = Math.abs(tileCoord[2]);
          // wrap the world on the X axis
          // console.log(n)

          //   x = x % n
          //   if (x * n < 0) {
          //     x = x + n
          //   }
          // 20200423 liuyp 修复6版本后 FY4 TMS 切片位移问题
          // y = Math.pow(2, z) + y - 1
          var n = Math.pow(2, z);
          // y = y - 1 + n
          y = y % n;
          if (y * n < 0) {
            y = y + n;
          }

          var url = urlTemplate.replace('{z}', z.toString()).replace('{y}', y.toString()).replace('{x}', x.toString());
          // 计算加载
          (0, _loadLayer.addLoad)(params.id, url);
          return url;
        }
      }),
      wrapX: optWrapX,
      visible: tileVisible
    });
    // 瓦片加载完成
    layer.getSource().on('tileloadend', function (e) {
      var src = e.tile.src_;
      // 成功加载
      (0, _loadLayer.endLoad)(params.id, src);
    });
    // 瓦片加载异常
    layer.getSource().on('tileloaderror', function (e) {
      // 加载异常
      var src = e.tile.src_;
      (0, _loadLayer.endLoad)(params.id, src, true);
    });

    return layer;
  }
  /** @module Layer */

  /**
   * TMS 类型图像展示
   * 我们目前大部分高分辨率图像，使用此切片类型进行展示
   * 目前默认为512 * 512
   */
  exports.getTMSLayer = getTMSLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getTopoJsonLayer.js":
/*!****************************************!*\
  !*** ./src/Layers/getTopoJsonLayer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /** @module Layer */
  /**
   * 添加 addGEOJSON 类型的图像 根据geojson中字段 添加logo
   * 2019-04-22
   */

  function getTopoJsonLayer(params) {
    var topoJsonSource = null;
    // 基于参数 获取 数据
    if (params.url) {
      topoJsonSource = getTopoJsonByUrl(params);
    }
    if (params.data) {
      topoJsonSource = getTopoJsonByData(params.data);
    }

    // 获取 style 样式
    var _StyleFunction = getStyleByType(params);

    // 涉及图层列表
    var layer = new ol.layer.Vector({
      crossOrigin: 'anonymous',
      // extent: params.lonlat ? params.lonlat : paramsDefault.lonlat,
      source: topoJsonSource,
      style: _StyleFunction
      // zIndex: 5001
    });

    return layer;
  }

  // 基于Url 获取数据
  function getTopoJsonByUrl(params) {
    var oURL = params.url;
    var oWrapX = params.wrapx ? params.wrapx : false;
    var urlSource = new ol.source.Vector({
      crossOrigin: 'anonymous',
      format: new ol.format.TopoJSON({}),
      url: oURL,
      wrapX: oWrapX
    });
    return urlSource;
  }

  // 基于GeoJson 进行数据转义
  function getTopoJsonByData(data) {
    // 基于GeoJson
    var vectorSource = new ol.source.Vector({
      crossOrigin: 'anonymous',
      features: new ol.format.TopoJSON().readFeatures(data)
    });

    return vectorSource;
  }

  // 基于当前参数 获取展示样式
  function getStyleByType(params) {
    return getLayerStyle(params);
  }

  function getLayerStyle() {
    function fn(feature, res) {
      // 多边形
      return getPolygnStyle(feature, res);
    }

    return fn;
  }
  function getPolygnStyle(feature, res) {
    var pro = feature.getProperties();

    var fillColor = pro.fillColor || 'rgba(255, 255, 255, 0)';

    var strokeColor = pro.strokeColor || '#319FD3';

    var areaStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: fillColor
      }),
      stroke: new ol.style.Stroke({
        color: strokeColor,
        width: 1
      })
    });
    return areaStyle;
  }

  exports.getTopoJsonLayer = getTopoJsonLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getUTSLayer/convertFunc.js":
/*!***********************************************!*\
  !*** ./src/Layers/getUTSLayer/convertFunc.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../ColorBar/colorBarBase64 */ "./src/ColorBar/colorBarBase64.js"), __webpack_require__(/*! ../loadLayer */ "./src/Layers/loadLayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _colorBarBase, _loadLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setLayerImageFuncLonlat = exports.setLayerImageFunc = exports.setSourceLoadStatus = exports.getColorBar = exports.convertParams = undefined;


  function convertParams(layerParams) {
    var defaultParams = {};
    var PARAMList = ['COLORBAR', 'PRODUCT'];
    if (layerParams) {
      // PRODUCT位 必须存在
      defaultParams.PRODUCT = layerParams.PRODUCT || 'TEST';
      for (var key in layerParams) {
        if (PARAMList.indexOf(key) < 0) {
          defaultParams[key] = layerParams[key];
        }
      }
    }
    return defaultParams;
  }

  // colorBar 转化
  function getColorBar(layerinfo) {
    var colorBarStr = '';
    if (layerinfo.params.COLORBAR && layerinfo.params.COLORBAR !== '') {
      // 转 base64
      colorBarStr = (0, _colorBarBase.convertColorBar2Base64)(layerinfo.params.COLORBAR);
      colorBarStr = '&COLORBAR=' + colorBarStr;
    }
    var COLORBARSTR = colorBarStr;
    return COLORBARSTR;
  }

  function setSourceLoadStatus(source, layerinfo) {
    source.on('tileloadend', function (e) {
      // 成功加载
      var src = e.tile.src_;
      (0, _loadLayer.endLoad)(layerinfo.id, src);
    });
    source.on('tileloaderror', function (e) {
      // 加载异常
      var src = e.tile.src_;
      (0, _loadLayer.endLoad)(layerinfo.id, src, true);
    });
  }

  // 基础 url处理
  function setLaterImageBasic(src, imageTile, serviceType, colorbarStr, layerinfo, bboxtype) {
    src = src.replace('SERVICE=WMS', serviceType);
    // 移除部分不需要的参数
    src = src.replace('&REQUEST=GetMap', '');
    src = src.replace('&TRANSPARENT=true', '');
    src = src.replace('&STYLES=', '');
    // 获取 bbox
    var srcSp = src.split('BBOX=');
    var info = srcSp[1];
    var infoSp = info.split('%2C');
    var bboxConvert02 = '';
    if (bboxtype === 'lonlat') {
      // 等经纬顺序
      bboxConvert02 = infoSp[1] + '%2C' + infoSp[0] + '%2C' + infoSp[3] + '%2C' + infoSp[2];
    } else {
      // NOM顺序
      bboxConvert02 = infoSp[2] + '%2C' + infoSp[1] + '%2C' + infoSp[0] + '%2C' + infoSp[3];
    }

    src = srcSp[0] + 'BBOX=' + bboxConvert02;
    var tileCoord = imageTile.tileCoord;
    var z = tileCoord[0];
    src = src + '&LEVEL=' + z;
    // 添加调色板
    if (colorbarStr !== '') {
      src = src + colorbarStr;
    }
    (0, _loadLayer.addLoad)(layerinfo.id, src);
    return src;
  }

  // 标称 bbox
  function setLayerImageFunc(src, imageTile, serviceType, colorbarStr, layerinfo) {
    return setLaterImageBasic(src, imageTile, serviceType, colorbarStr, layerinfo, 'NOM');
  }

  // 等经纬bbox
  function setLayerImageFuncLonlat(src, imageTile, serviceType, colorbarStr, layerinfo) {
    return setLaterImageBasic(src, imageTile, serviceType, colorbarStr, layerinfo, 'lonlat');

    // src = src.replace('SERVICE=WMS', serviceType)
    // // 移除部分不需要的参数
    // src = src.replace('&REQUEST=GetMap', '')
    // src = src.replace('&TRANSPARENT=true', '')
    // src = src.replace('&STYLES=', '')
    // // 获取 bbox
    // const srcSp = src.split('BBOX=')
    // const info = srcSp[1]
    // const infoSp = info.split('%2C')
    // const bboxConvert02 = `${infoSp[1]}%2C${infoSp[0]}%2C${infoSp[3]}%2C${infoSp[2]}`
    // src = srcSp[0] + 'BBOX=' + bboxConvert02
    // const tileCoord = imageTile.tileCoord
    // const z = tileCoord[0]
    // src = src + '&LEVEL=' + z
    // // 添加调色板
    // if (colorbarStr !== '') {
    //   src = src + colorbarStr
    // }
    // addLoad(layerinfo.id, src)
    // return src
  }

  exports.convertParams = convertParams;
  exports.getColorBar = getColorBar;
  exports.setSourceLoadStatus = setSourceLoadStatus;
  exports.setLayerImageFunc = setLayerImageFunc;
  exports.setLayerImageFuncLonlat = setLayerImageFuncLonlat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getUTSLayer/getUTSLayer.js":
/*!***********************************************!*\
  !*** ./src/Layers/getUTSLayer/getUTSLayer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./getUTSLayerFY4A */ "./src/Layers/getUTSLayer/getUTSLayerFY4A.js"), __webpack_require__(/*! ./getUTSLayerLonlat */ "./src/Layers/getUTSLayer/getUTSLayerLonlat.js"), __webpack_require__(/*! ./getUTSLayerArctic */ "./src/Layers/getUTSLayer/getUTSLayerArctic.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _getUTSLayerFY4A, _getUTSLayerLonlat, _getUTSLayerArctic) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getUTSLayer = undefined;


  function getUTSLayer(layerinfo) {
    // 投影类型 及 图像类型
    var _project = layerinfo.projection || 'Lonlat';
    var _layerType = layerinfo.layerType || 'UTSS';
    switch (_project) {
      case 'NOM:FY4A':
      case 'NOM:H8':
      case 'NOM:FY4B':
        {
          return (0, _getUTSLayerFY4A.getUTSLayerFY4A)(layerinfo, _layerType);
        }
      case 'EPSG:3031':
      case 'EPSG:3091':
        {
          return (0, _getUTSLayerArctic.getUTSLayerArctic)(layerinfo, _layerType, _project);
        }
      default:
        {
          return (0, _getUTSLayerLonlat.getUTSTileLayerLonlat)(layerinfo, _layerType);
        }
    }
  } /**
     * @module Layer
     */
  exports.getUTSLayer = getUTSLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getUTSLayer/getUTSLayerArctic.js":
/*!*****************************************************!*\
  !*** ./src/Layers/getUTSLayer/getUTSLayerArctic.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./convertFunc */ "./src/Layers/getUTSLayer/convertFunc.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _convertFunc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getUTSLayerArctic = undefined;


  // 北极模式 切片图添加
  function getUTSLayerArctic(layerinfo, layerType, epsg) {
    var oURL = layerinfo.url;
    var serviceType = 'SERVICE=' + layerType;

    var extent = layerinfo.exetent || [-3921568, -3921568, 3921568, 3921568];
    var tileSize = layerinfo.tileSize ? layerinfo.tileSize : [512, 512];
    var tileSizeNum = tileSize[0];

    var proj = ol.proj.get(epsg);
    var startResolution = (extent[3] - extent[1]) / tileSizeNum;
    var resolutions = new Array(14);
    for (var i = 0, ii = resolutions.length; i < ii; ++i) {
      resolutions[i] = startResolution / Math.pow(2, i);
    }

    var layerParams = (0, _convertFunc.convertParams)(layerinfo.params);
    // 调色板
    var colorbarStr = (0, _convertFunc.getColorBar)(layerinfo);

    var utsSource = new ol.source.TileWMS({
      url: oURL,
      params: layerParams,
      serverType: 'geoserver',
      projection: proj,
      tileGrid: new ol.tilegrid.TileGrid({
        extent: extent,
        resolutions: resolutions,
        tileSize: tileSize
      }),
      tileLoadFunction: function tileLoadFunction(imageTile, src) {
        var _src = (0, _convertFunc.setLayerImageFunc)(src, imageTile, serviceType, colorbarStr, layerinfo);
        imageTile.getImage().src = _src;
      }
    });
    var utsLayer = new ol.layer.Tile({
      extent: extent,
      projection: proj,
      source: utsSource
    });

    (0, _convertFunc.setSourceLoadStatus)(utsSource, layerinfo);
    return utsLayer;
  }

  exports.getUTSLayerArctic = getUTSLayerArctic;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getUTSLayer/getUTSLayerFY4A.js":
/*!***************************************************!*\
  !*** ./src/Layers/getUTSLayer/getUTSLayerFY4A.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./convertFunc */ "./src/Layers/getUTSLayer/convertFunc.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _convertFunc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getUTSLayerFY4A = undefined;


  /**
   * @description 标称投影 UTSS 的产品
   * @param {Object}   layerinfo 图层配置信息
   * @param {String}   [layerinfo.url] 图层配置信息
   * @param {Number[]} [layerinfo.extent = [-5495000, -5495000, 5495000, 5495000]] 展示最大范围
   * @param {Number[]} [layerinfo.tileSize = [512, 512]] 单个图像大小
   * @param {Object}   [layerinfo.params] 图像参数
   * @param {String}   [layerinfo.params.PRODUCT ='TEST'] 图像参数-产品名称
   * @param {String}   layerType 图层类型 UTSS UTTS
   * @returns 基于标称投影的UTSS UTTS
   * @example
   *  const UTTSParams = {
   *    id: 'dsadujh2n1e0',
   *    name: 'testFY4AUTSS',
   *    mapType: 'UTSS',
   *    projection: "EPSG:FY4A",
   *    url: 'http://121.36.13.81:4619/image?',
   *    layerGroup: 'baseImage',
   *    params: {
   *      'STARTTIME': '202104141551',
   *      //'ENDTIME': '20191224025959',
   *      'PRODUCT': '/SatGroupB/shk401/lxl/project/ntUTSS/FY4B-_AGRI--_N_DISK_1047E_L1-_FDI-_MULT_NOM_20210104040000_20210104041459_0500M_V0001_NOMChannel02_0.jpg.ovr',
   *      'CRS': "EPSG:FY4A",
   *      'FORMAT': 'JPEG'
   *      //  'COLORBAR': COLORBAR
   *    }
   *  }
   *  mOlClass.addLayer(UTTSParams)
   */
  function getUTSLayerFY4A(layerinfo, layerType) {
    // url 为必选值
    var oURL = layerinfo.url;

    var epsgName = layerinfo.projection || 'NOM:FY4A';
    var serviceType = 'SERVICE=' + layerType;

    var _extent = getProjExtentByName(epsgName, layerinfo);
    // 当前配置 范围
    var tileSize = layerinfo.tileSize || [687, 687];
    var tileSizeNum = tileSize[0];

    var FY4AGeos = ol.proj.get(epsgName);
    FY4AGeos.setExtent(_extent);

    var FY4AGeosProjection = new ol.proj.Projection({
      code: epsgName,
      extent: _extent
    });

    var startResolution = ol.extent.getWidth(FY4AGeos.getExtent()) / tileSizeNum;
    var resolutions = new Array(10);
    for (var i = 0, ii = resolutions.length; i < ii; ++i) {
      resolutions[i] = startResolution / Math.pow(2, i);
    }

    var layerParams = (0, _convertFunc.convertParams)(layerinfo.params);
    // 调色板
    var colorbarStr = (0, _convertFunc.getColorBar)(layerinfo);

    var utsSource = new ol.source.TileWMS({
      url: oURL,
      params: layerParams,
      serverType: 'geoserver',
      projection: FY4AGeosProjection,
      tileGrid: new ol.tilegrid.TileGrid({
        extent: _extent,
        resolutions: resolutions,
        tileSize: tileSize
      }),
      tileLoadFunction: function tileLoadFunction(imageTile, src) {
        var _src = (0, _convertFunc.setLayerImageFunc)(src, imageTile, serviceType, colorbarStr, layerinfo);
        imageTile.getImage().src = _src;
      }
    });
    var utsLayer = new ol.layer.Tile({
      extent: _extent,
      projection: FY4AGeosProjection,
      source: utsSource
    });

    (0, _convertFunc.setSourceLoadStatus)(utsSource, layerinfo);
    return utsLayer;
  } /** @module/Layer */

  function getProjExtentByName(epsgName, layerinfo) {
    if (layerinfo.extent) {
      return layerinfo.extent;
    }
    var FY4AGeos = ol.proj.get(epsgName);
    var _extent = FY4AGeos.getExtent(epsgName);
    var projextent = _extent || [-5495000, -5495000, 5495000, 5495000];
    return projextent;
  }

  exports.getUTSLayerFY4A = getUTSLayerFY4A;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getUTSLayer/getUTSLayerLonlat.js":
/*!*****************************************************!*\
  !*** ./src/Layers/getUTSLayer/getUTSLayerLonlat.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./convertFunc */ "./src/Layers/getUTSLayer/convertFunc.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _convertFunc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getUTSTileLayerLonlat = undefined;


  // 基于参数 返回layer 类型
  function getUTSTileLayerLonlat(layerinfo, layerType) {
    var nameLayer = layerinfo.id;

    var layer = new ol.layer.Tile({
      title: nameLayer,
      extent: layerinfo.extent,
      source: _getSHKTileSource(layerinfo, layerType)
    });

    return layer;
  }

  // 获取 图层 source 信息
  function _getSHKTileSource(layerinfo, layerType) {
    // 必选参数 url
    var oURL = layerinfo.url;

    var serviceType = 'SERVICE=' + layerType;
    // URL拼接参数
    var layerParams = (0, _convertFunc.convertParams)(layerinfo.params);
    // 调色板转BASE64
    var colorbarStr = (0, _convertFunc.getColorBar)(layerinfo);

    var tileSize = layerinfo.tileSize ? layerinfo.tileSize : [512, 512];
    var tileSizeNum = tileSize[0];

    // 范围
    var projExtent = ol.proj.get('EPSG:4326').getExtent();
    var startResolution = ol.extent.getWidth(projExtent) / tileSizeNum / 2;
    // 分辨率  目前到 10层
    var resolutions = new Array(10);
    for (var i = 0, ii = resolutions.length; i < ii; ++i) {
      resolutions[i] = startResolution / Math.pow(2, i);
    }

    // 图层范围 TODO 是否补充
    // const layerExtent = layerinfo.extent ? layerinfo.extent : projExtent

    var tileGrid = new ol.tilegrid.TileGrid({
      extent: projExtent,
      resolutions: resolutions,
      tileSize: tileSize
    });
    // const _viewNow = getViewNow()
    var _projection = 'EPSG:4326';
    var _source = new ol.source.TileWMS({
      crossOrigin: 'anonymous',
      url: oURL,
      tileGrid: tileGrid,
      transition: 0,
      params: layerParams,
      serverType: 'geoserver',
      projection: _projection,
      tileLoadFunction: function tileLoadFunction(imageTile, src) {
        // `${infoSp[1]}%2C${infoSp[0]}%2C${infoSp[3]}%2C${infoSp[2]}`
        var _src = (0, _convertFunc.setLayerImageFuncLonlat)(src, imageTile, serviceType, colorbarStr, layerinfo);
        // src = src.replace('SERVICE=WMS', serviceType)
        // src = src.replace('&REQUEST=GetMap', '')
        // src = src.replace('&TRANSPARENT=true', '')
        // src = src.replace('&STYLES=', '')
        // // 获取 bbox
        // const srcSp = src.split('BBOX=')
        // const info = srcSp[1]
        // // 39.375%2C118.125%2C45%2C123.75 BOXX 位置移动
        // const infoSp = info.split('%2C')
        // const bbox1 = `${infoSp[1]}%2C${infoSp[0]}%2C${infoSp[3]}%2C${infoSp[2]}`
        // src = srcSp[0] + 'BBOX=' + bbox1
        // const tileCoord = imageTile.tileCoord
        // const z = tileCoord[0]
        // src = src + '&LEVEL=' + z
        // if (colorbarStr !== '') {
        //   src = src + colorbarStr
        // }
        imageTile.getImage().src = _src;
        // addLoad(layerinfo.id, src)
      }
    });
    (0, _convertFunc.setSourceLoadStatus)(_source, layerinfo);
    // _source.on('tileloadend', function (e) {
    //   // 成功加载
    //   const src = e.tile.src_
    //   endLoad(layerinfo.id, src)
    // })
    // _source.on('tileloaderror', function (e) {
    //   // 加载异常
    //   const src = e.tile.src_
    //   endLoad(layerinfo.id, src, true)
    // })
    return _source;
  }

  exports.getUTSTileLayerLonlat = getUTSTileLayerLonlat;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getVectorLayer.js":
/*!**************************************!*\
  !*** ./src/Layers/getVectorLayer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Layer */ "./src/Layers/Layer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Layer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.revertColor = exports.resetVectorSourceByGeojson = exports.setVectorData = exports.addVectorSelect = exports.getVectorLayer = undefined;


  /**
   * 添加 矢量图层
   * @param {Object} params  ol.layer.Vector 类型图层加载
   * @param {Object} params.id  图层唯一标识
   * @param {Object} [params.url] Vector Url url优先级高于data
   * @param {Object} [params.data] Vector 数据 data或url 2选一
   * @returns ol.Layer
   */
  function getVectorLayer(params) {
    var _vectorSource = null;
    if (params.url) {
      _vectorSource = getVectorSourceLayerByUrl(params);
    } else {
      _vectorSource = getVectorSourceByGeojson(params);
    }

    var Vectors = new ol.layer.Vector({
      source: _vectorSource,
      style: function style(feature) {
        var src = feature.getProperties().src;
        var id = feature.getProperties().id;
        if (!src) {
          var isCluster = feature.getProperties().isCluster;

          // todo 此处是否进行修改
          if (isCluster) {
            src = './publics/plus.png';
          } else {
            src = './publics/fire.png';
          }
        }
        src = getImgSrcPlus(feature, src);
        var style = new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 0.96],
            crossOrigin: 'anonymous',
            src: src
          })
        });

        feature.set('style', style);
        feature.set('id', id);
        return style;
      }
    });
    return Vectors;
  }

  // 集群部分

  /** @module Layer */

  function getImgSrcPlus(feature, src) {
    // todo 此处为火点hover使用，移动出现bug。需要再修改
    // let isHover = false
    // if (feature.getProperties().isSelected) {
    //   isHover = feature.getProperties().isSelected
    // }
    // if (isHover) {
    //   src = src.replace('.png', '+.png')
    // }
    return src;
  }

  // function setFeatuerSelect (vector, selectList, style) {
  //   let  featureList = vector.getSource().getFeatures()
  //   if (!style) {

  //   }
  //   featureList.forEach(function (_feature) {
  //     selectList.forEach(function (_selectItem) {
  //       if (_feature.id === _selectItem.id) {
  //         _feature.setStyle(style)
  //       }
  //     })
  //   })
  // }

  // function getImageRecovert (feature) {
  //   let  image = feature.get('style').getImage().getImage()
  //   //  if (!selectStyle[image.src]) {
  //   let  canvas = document.createElement('canvas')
  //   let  context = canvas.getContext('2d')
  //   canvas.width = image.width
  //   canvas.height = image.height
  //   context.drawImage(image, 0, 0, image.width, image.height)
  //   let  imageData = context.getImageData(0, 0, canvas.width, canvas.height)
  //   let  data = imageData.data

  //   // 此处 部分 可对 canvas 进行 重新绘制
  //   for (let  i = 0, ii = data.length; i < ii; i = i + (i % 4 === 2 ? 2 : 1)) {
  //     data[i] = 255 - data[i]
  //   }

  //   context.putImageData(imageData, 0, 0)
  //   let  reStyle = createStyle(undefined, canvas)
  //   // }
  //   return reStyle
  //   // [image.src]
  //   // return style
  // }

  // popover 官方例子 使用了 bootstrap 的 pop 控件部分
  function getVectorSourceLayerByUrl(params) {
    var oUrl = params.url;
    // 由于 ol.source.Vector 不支持通过URL直接获取
    // 故使用 ajax async 模式对数据进行获取
    var geoInfo = {};
    $.ajax({
      url: oUrl,
      async: false,
      success: function success(data) {
        geoInfo = data;
      },
      error: function error(err) {
        console.log(err);
        return false;
      }
    });

    var _features = new ol.format.GeoJSON().readFeatures(geoInfo);
    var vectorSource = new ol.source.Vector({
      crossOrigin: 'anonymous',
      features: _features
    });

    return vectorSource;
  }

  function addVectorSelect(map) {
    // 单击事件
    var selectClick = new ol.interaction.Select({
      condition: ol.events.condition.click
    });
    var select = selectClick;
    if (select !== null) {
      map.addInteraction(select);
      select.on('select', function (e) {
        //  // let  info = '&nbsp;' +
        //     e.target.getFeatures().getLength() +
        //     ' selected features (last operation selected ' + e.selected.length +
        //     ' and deselected ' + e.deselected.length + ' features)'
      });
    }
  }

  function getVectorSourceByGeojson(params) {
    var geoInfo = params.data;
    var _features = new ol.format.GeoJSON().readFeatures(geoInfo);

    var _vectorSource = new ol.source.Vector({
      crossOrigin: 'anonymous',
      features: _features
    });
    return _vectorSource;
  }

  // 反色
  function revertColor(feature) {
    var selectStyle = {};
    var image = feature.get('style').getImage().getImage();
    if (!selectStyle[image.src]) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);
      var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;

      // 此处 部分 可对 canvas 进行 重新绘制
      for (var i = 0, ii = data.length; i < ii; i = i + (i % 4 === 2 ? 2 : 1)) {
        data[i] = 255 - data[i];
      }

      context.putImageData(imageData, 0, 0);
      selectStyle[image.src] = createStyle(undefined, canvas);
    }
    return selectStyle[image.src];
  }

  function createStyle(src, img) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 0.96],
        crossOrigin: 'anonymous',
        src: src,
        img: img,
        imgSize: img ? [img.width, img.height] : undefined
      })
    });
  }

  function resetVectorSourceByGeojson(VectorLayer, newSource) {
    var _features = new ol.format.GeoJSON().readFeatures(newSource);

    //   let  ol.source.Vector = ol.layer.Vector.getSource()

    var VectorSource1 = new ol.source.Vector({
      crossOrigin: 'anonymous',
      features: _features
    });

    ol.layer.Vector.setSource(VectorSource1);

    // let  _source = ol.layer.Vector.getSource()
    // if (_source) {
    //   _source.features = _features
    //   (_features)
    // }

    // ol.layer.Vector.setSource(_source)
  }

  function setVectorData(params, data) {
    // 此功能可以被 移除重新添加代替
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    var _layer = _addLayerParams[params.id];

    // step2 基于当前Layer 重新设置 source todo 根据数据类型进行重新设置
    // resetVectorSourceByGeojson()
    resetVectorSourceByGeojson(_layer, data);
  }

  exports.getVectorLayer = getVectorLayer;
  exports.addVectorSelect = addVectorSelect;
  exports.setVectorData = setVectorData;
  exports.resetVectorSourceByGeojson = resetVectorSourceByGeojson;
  exports.revertColor = revertColor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getWMSLayer.js":
/*!***********************************!*\
  !*** ./src/Layers/getWMSLayer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /** @module Layer */

  /**
   * 获取基于配置信息的 WMS图层
   * @param {Object} layerinfo 图层信息
   * @param {String} layerinfo.id 图层id 唯一标识
   * @param {Object} layerinfo.url wms url
   * @param {Object} layerinfo.LAYERS 图层Layers名称 WMS特有参数
   * @param {String} layerinfo.name 图层name 中文名称
   * @param {String} layerinfo.mapType   WMS
   * @param {String} [layerinfo.type] 图层类型标识 'swipe'则为分屏显示
   * @param {String} [layerinfo.layerGroup] 图层展示层级分组 baseVector geoBound vector other productImage map baseImage
   * @param {Number} [layerinfo.zIndex]  图层层级zIndex位置。优先级高于layerGroup
   * @returns ol.Layer
   * @example
   * const wmsParams = {
   *   id: 'testWMSworld',
   *   name: 'testWMS',
   *   mapType: 'WMS',
   *   url: 'http://121.36.13.81:4067/geoserver/satelliteview/wms',
   *   LAYERS: 'satelliteview:shk-world-17085dc51d7',
   *   layerGroup:'geoBound'
   * }
   * mOlClass.addLayer(wmsParams)
   */
  function getWMSLayer(layerinfo) {
    var nameLayer = layerinfo.id;
    // const extent = layerinfo.extent ? layerinfo.extent : [-180, -90, 180, 90]
    var layer = new ol.layer.Tile({
      title: nameLayer,

      // extent: extent,
      source: getWMSSource(layerinfo)
    });
    return layer;
  }

  function getWMSSource(layerinfo) {
    var oURL = layerinfo.url;
    var _oURLname = oURL.split('?')[1];
    if (layerinfo.LAYERS) {
      _oURLname = layerinfo.LAYERS;
    }
    // const extent = layerinfo.extent ? layerinfo.extent : [-180, -90, 180, 90]
    // const _viewNow = getViewNow()
    // const _projection = _viewNow.getProjection() || 'EPSG:4326'
    var _projection = 'EPSG:4326';
    return new ol.source.TileWMS({
      crossOrigin: 'anonymous',
      url: oURL,
      params: {
        LAYERS: _oURLname,
        TILED: true,
        CRS: _projection
      },
      projection: _projection,
      serverType: 'geoserver'
      // crossOrigin: 'anonymous'
      // 加这个参数在加载geoserver发布的图层会存在跨域问题
      // 但是使用的是WebGL渲染器、使用Canvas渲染器访问像素数据必须有此值
    });
  }

  exports.getWMSLayer = getWMSLayer;
  exports.getWMSSource = getWMSSource;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getWMTSLayer.js":
/*!************************************!*\
  !*** ./src/Layers/getWMTSLayer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /** @module Layer */

  // 获取  ol.source.WMTS Layer
  function getWMTSLayer(layerInfo) {
    // 设置坐标系
    var projection = ol.proj.get('EPSG:4326');

    var _source = getWMTSSource(layerInfo);
    // TODO:修改为参数传递模式
    var WMTSLayer = new ol.layer.Tile({
      opacity: 1.0,
      projection: projection,
      source: _source
    });

    return WMTSLayer;
  }

  function getWMTSSource(layerinfo) {
    var _url = layerinfo.url;
    var projection = ol.proj.get('EPSG:4326');
    var projectionExtent = projection.getExtent();
    // 分辨率
    var resolutions = [1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.000021457672119140625, 0.000010728836059570312, 0.000005364418029785156, 0.000002682209014892578, 0.000001341104507446289];
    // 瓦片矩阵
    var matrixIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    var _WMTSTileGrid = new ol.tilegrid.WMTS({
      origin: ol.extent.getTopLeft(projectionExtent),
      resolutions: resolutions.slice(0, 15),
      matrixIds: matrixIds.slice(0, 15)
    });
    var params = layerinfo.params;

    var _source = new ol.source.WMTS(_extends({
      url: _url,
      projection: projection,
      tileGrid: _WMTSTileGrid
    }, params));
    return _source;
  }

  // https://t3.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL=20&TILEROW=11&TILEMATRIX=5&tk=9a02b3cdd29cd346de4df04229797710

  //http://t0.tianditu.gov.cn/vec_c/wmts?tk=aeb66810e08d1c2effa2a76a06f5279f&layer=img&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix=4&TileCol=13&TileRow=2&

  exports.getWMTSLayer = getWMTSLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getWindArrowLayer.js":
/*!*****************************************!*\
  !*** ./src/Layers/getWindArrowLayer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /** @module Layer */

  var data = null;

  function styleFunction(params) {
    return function (feature) {
      var geometry = feature.getGeometry();
      var styles = [new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: params.textColor || '#000',
          width: params.textWidth || 1
        })
      })];

      geometry.forEachSegment(function (start, end) {
        var dx = end[0] - start[0];
        var dy = end[1] - start[1];
        var rotation = Math.atan2(dy, dx);
        styles.push(new ol.style.Style({
          geometry: new ol.geom.Point(end),
          image: new ol.style.Icon({
            src: params.iconUrl,
            anchor: [0.75, 0.5],
            rotateWithView: true,
            rotation: -rotation
          })
        }));
      });

      return styles;
    };
  }

  /**
   * 双线性插值
   * @param sw 目标矩阵的宽度
   * @param sh 目标矩阵的高度
   * @param x_ 目标矩阵中的x坐标
   * @param y_ 目标矩阵中的y坐标
   * @param data 源数据矩阵（二维数组）
   */
  function interpolation(sw, sh, x_, y_, data) {
    var t1 = new Date().getTime();
    var w = data[0].length;
    var h = data.length;

    var x = (x_ + 0.5) * w / sw - 0.5;
    var y = (y_ + 0.5) * h / sh - 0.5;

    var x1 = Math.floor(x);
    var x2 = Math.floor(x + 0.5);
    var y1 = Math.floor(y);
    var y2 = Math.floor(y + 0.5);

    x1 = x1 < 0 ? 0 : x1;
    y1 = y1 < 0 ? 0 : y1;

    x1 = x1 < w - 1 ? x1 : w - 1;
    y1 = y1 < h - 1 ? y1 : h - 1;

    x2 = x2 < w - 1 ? x2 : w - 1;
    y2 = y2 < h - 1 ? y2 : h - 1;

    // 取出原矩阵中对应四个点的值
    var f11 = data[y1][x1];
    var f21 = data[y1][x2];
    var f12 = data[y2][x1];
    var f22 = data[y2][x2];
    // 计算该点的值
    var xm = x - x1;
    var ym = y - y1;
    var r1 = (1 - xm) * f11 + xm * f21;
    var r2 = (1 - xm) * f12 + xm * f22;
    var value = (1 - ym) * r1 + ym * r2;

    return value;
  }

  /**
   * 数据插值
   * @param w 目标矩阵宽度
   * @param h 目标矩阵高度
   * @param data 源数据矩阵（二维数组）
   */
  function scaleData(w, h, data) {
    var t1 = new Date().getTime();
    var dw = data[0].length;
    var dh = data.length;

    var resData = new Array(h);

    for (var j = 0; j < h; j++) {
      var line = new Array(w);
      for (var i = 0; i < w; i++) {
        line[i] = interpolation(w, h, i, j, data).toFixed(6);
      }
      resData[j] = line;
    }
    var t2 = new Date().getTime();
    return resData;
  }

  function getWindArrowLayer(params, maps) {
    $.ajax({
      url: params.url,
      async: false,
      success: function success(res) {
        if (!(res instanceof Array)) {
          data = null;
        }
        if (res) {
          data = res;
        }
      },
      error: function error() {
        data = null;
      }
    });

    if (!data) {
      return;
    }

    var arrowData = {
      type: 'FeatureCollection',
      features: []
    };

    var dataHeader = data[0].header;
    var dataDirection = data[0].data;
    var dataSpeed = data[1].data;

    /* 构造初始二维数组，原始数据是一维的 */
    var rawDirection = [];
    var rawSpeed = [];
    for (var i = dataHeader.la2; i <= dataHeader.la1; i++) {
      rawDirection[i + 90] = [];
      rawSpeed[i + 90] = [];
      for (var j = dataHeader.lo1; j <= dataHeader.lo2; j++) {
        var x = (i + 90) * dataHeader.nx + j;
        rawDirection[i + 90].push(dataDirection[x]);
        rawSpeed[i + 90].push(dataSpeed[x]);
      }
    }

    /* 插值 */
    rawDirection = scaleData(dataHeader.nx * 2, dataHeader.ny * 2, rawDirection);
    rawSpeed = scaleData(dataHeader.nx * 2, dataHeader.ny * 2, rawSpeed);

    var num = params.particleMultiplier;
    var length = params.lineLength;

    /* 注：这里很容易犯坐标偏移的错误，需要注意循环参数i,j的起止值 */
    for (var _i = dataHeader.la2; _i <= dataHeader.la1; _i = _i + num) {
      for (var _j = dataHeader.lo1; _j <= dataHeader.lo2; _j = _j + num) {
        var _x = _i;
        var y = _j;
        if (_i < 0) {
          _x = 270 - (_x + 180);
        } else {
          _x = 90 - _x;
        }
        if (_j < 180) {
          y = y + 180;
        } else {
          y = y - 180;
        }
        var jDate = rawDirection[_x * 2 + 1][y * 2 + 1] / length;
        var iDate = rawSpeed[_x * 2 + 1][y * 2 + 1] / length;
        var extent = params.extent;
        if (_j >= extent[0] && _j <= extent[2] && _i >= extent[1] && _i <= extent[3]) {
          arrowData.features.push({
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [[_j, _i], [_j + jDate, _i + iDate]]
            },
            properties: {
              direction: dataDirection[_x],
              speed: dataSpeed[_x]
            }
          });
        }
      }
    }

    var layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(arrowData)
      }),
      style: styleFunction(params),
      minZoom: params.minZoom
    });

    return layer;
  }

  exports.getWindArrowLayer = getWindArrowLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getWindCloudLayer.js":
/*!*****************************************!*\
  !*** ./src/Layers/getWindCloudLayer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @rgba-image/bilinear */ "./node_modules/@rgba-image/bilinear/dist/index.js"), __webpack_require__(/*! ../ColorBar/colorBar */ "./src/ColorBar/colorBar.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _bilinear, _colorBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getWindCloudLayer = undefined;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var data = null;
  var colorBar = void 0;
  var dataType = void 0;
  var windData = [];

  function getWindCloudLayer(params, maps) {
    dataType = params.dataType;
    colorBar = params.colorBar;
    $.ajax({
      url: params.url,
      async: false,
      success: function success(res) {
        if (!(res instanceof Array)) {
          data = null;
        }
        if (res) {
          data = res;
          if (dataType === 'BaseCloud') {
            windData = data[0].data;
          } else {
            var dataV = data[0].data;
            var dataU = data[1].data;
            for (var i = 0; i < dataV.length; i++) {
              windData[i] = Math.sqrt(dataV[i] * dataV[i] + dataU[i] * dataU[i]);
            }
          }
          windData = (0, _colorBar.getColorData)(colorBar, windData);
        }
      },
      error: function error() {
        data = null;
      }
    });

    if (!data) {
      return;
    }

    var source = new ol.source.ImageCanvas({
      canvasFunction: canvasFunction
    });

    var imageLayer = new ol.layer.Image({
      source: source,
      opacity: params.opacity || 0.65
    });

    imageLayer.set('originMap', maps);

    return imageLayer;
  }

  function canvasFunction(extent, resolution, pixelRatio, size, params) {
    var left = parseInt(extent[0]);
    var right = parseInt(extent[2]);
    var top = parseInt(extent[3]);
    var bottom = parseInt(extent[1]);

    var _size = _slicedToArray(size, 2),
        width = _size[0],
        height = _size[1];

    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');

    var dataExtentWidth = right - left + 1;
    var dataExtentHidth = top - bottom + 1;

    var imgData = ctx.createImageData(dataExtentWidth, dataExtentHidth);
    for (var i = 0; i < imgData.height; i++) {
      for (var j = 0; j < imgData.width; j++) {
        var y = top - i;
        var x = (j + left + 180) % 360;
        if (x > 0) {
          x = x % 360;
        } else {
          x = x % 360 + 360;
        }

        var rgba = void 0;
        if (y <= 90 && y >= -90) {
          rgba = windData[(90 - y) * 361 + x];
        } else {
          rgba = [255, 255, 255, 255];
        }

        if (!rgba) {
          rgba = [255, 255, 255, 255];
        }

        x = 4 * (i * imgData.width + j);
        imgData.data[x + 0] = rgba[0];
        imgData.data[x + 1] = rgba[1];
        imgData.data[x + 2] = rgba[2];
        imgData.data[x + 3] = rgba[3];
      }
    }

    var canvasData = ctx.createImageData(canvas.width, canvas.height);
    (0, _bilinear.bilinear)(imgData, canvasData);

    ctx.putImageData(canvasData, 0, 0);

    return canvas;
  }

  exports.getWindCloudLayer = getWindCloudLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getWindLayer.js":
/*!************************************!*\
  !*** ./src/Layers/getWindLayer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var COLORData = [[0, [0, 0, 255]], [12.5, [20, 255, 170]], [24, [90, 255, 45]], [37.5, [255, 45, 45]], [50, [255, 12, 147]], [62.5, [255, 100, 252]], [75, [247, 160, 245]], [87.5, [255, 218, 254]], [100, [255, 255, 255]]];

  function getInColor(valueAfter, valuebefore, value, RGBAfter, RBGbefore) {
    var RGBSP = RGBAfter - RBGbefore;
    var newRgb = RGBSP / (valueAfter - valuebefore) * (value - valuebefore) + RBGbefore;
    newRgb = parseInt(newRgb);
    if (Math.abs(newRgb) > 255) {
      console.log('err');
    }
    return newRgb;
  }

  function getColorList(COLORData) {
    // 渐变值为100
    var STEP = 101;
    var MinValue = COLORData[0][0];
    var MaxValue = COLORData[COLORData.length - 1][0];
    // 计算单位值
    var colorStepSacleValue = (MaxValue - MinValue) / (STEP - 1);
    var indexValue = 0;
    var colorList = [];
    for (var i = 0; i < 100; i++) {
      var countValue = MinValue + colorStepSacleValue * i;
      if (countValue > COLORData[indexValue + 1][0]) {
        indexValue++;
      }
      if (countValue >= COLORData[COLORData.length - 1][0] || indexValue === COLORData.length - 1) {
        break;
      }
      var minValue = COLORData[indexValue][0];
      var maxValue = COLORData[indexValue + 1][0];
      var minRgb = COLORData[indexValue][1];
      var maxRgb = COLORData[indexValue + 1][1];
      var colorR = getInColor(maxValue, minValue, countValue, maxRgb[0], minRgb[0]);
      var colorG = getInColor(maxValue, minValue, countValue, maxRgb[1], minRgb[1]);
      var colorB = getInColor(maxValue, minValue, countValue, maxRgb[2], minRgb[2]);
      var colorStep = {
        KeyValue: countValue,
        RGB: 'rgb(' + colorR + ', ' + colorG + ', ' + colorB + ')'
      };
      colorList.push(colorStep);
    }
    var MAXCOLOR = COLORData[COLORData.length - 1][1];
    colorList.push({
      KeyValue: COLORData[COLORData.length - 1][0],
      RGB: 'rgb(' + MAXCOLOR[0] + ', ' + MAXCOLOR[2] + ', ' + MAXCOLOR[2] + ')'
    });
    return colorList;
  }

  var colorList = getColorList(COLORData);

  function getLayer(res, params) {
    var windLayer = new OlWind.WindLayer(res, {
      windOptions: {
        colorScale: function colorScale(m) {
          if (!params.params.isColorful) {
            return 'rgb(255, 255, 255)';
          }
          var indexMax = colorList.length;
          if (m <= colorList[0].KeyValue) {
            return colorList[0].RGB;
          }
          if (m >= colorList[indexMax - 1].KeyValue) {
            return colorList[indexMax - 1].RGB;
          }
          for (var i = 0; i < indexMax - 1; i++) {
            if (m >= colorList[i].KeyValue && m < colorList[i + 1].KeyValue) {
              return colorList[i].RGB;
            }
          }
          return 'rgb(255,255,255)';
        },
        frameRate: 16,
        maxAge: 60,
        globalAlpha: 0.9,
        velocityScale: 1 / 26,
        width: 1,
        generateParticleOption: false,
        paths: 4000
      },
      wrapX: true,
      forceRender: false,
      projection: 'EPSG:4326',
      className: 'ol-wind-layer'
    });
    return windLayer;
  }

  function getWindLayer(params, maps, self) {
    var layer = void 0;
    $.ajax({
      url: params.url,
      async: false,
      success: function success(res) {
        res[0].header.lo1 = -180;
        res[0].header.lo2 = 180;
        res[1].header.lo1 = -180;
        res[1].header.lo2 = 180;
        layer = getLayer(res, params);
      }
    });
    return layer;
  }

  exports.getWindLayer = getWindLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getXYZLayer.js":
/*!***********************************!*\
  !*** ./src/Layers/getXYZLayer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /** @module Layer */
  // XYZ类型的 产品添加

  /**
   * @description XYZ类型的 产品图层添加
   * @function
   * @param {JSON} params 图层参数 {url:''}
   */
  function getXYZLayer(params) {
    var oURL = params.url;
    var nameLayer = params.name ? params.name : '';
    var optWrapX = params.wrapX ? params.wrapX : false;
    var projection = params.projection ? params.projection : 'EPSG:4326';

    var layer = new ol.layer.Tile({
      title: nameLayer,
      projection: projection,
      source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        url: oURL,
        wrapX: optWrapX
      })
    });
    return layer;
  }

  exports.getXYZLayer = getXYZLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/getlsolineLayer.js":
/*!***************************************!*\
  !*** ./src/Layers/getlsolineLayer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /** @module Layer */
  /**
   * @description 获取等值线图层
   * @param {*} params
   */
  function getIsolineLayer(params) {
    var source = getGeoJsonByData(params.data);
    var styleFunction = getGeojsonStyle(params);

    var layer = new ol.layer.Vector({
      source: source,
      style: styleFunction
    });
    return layer;
  }

  function getGeoJsonByData(datajson) {
    var lines = datajson;

    /*
    var _lFeatures = lines.features;
    for (var i = 0; i < _lFeatures.length; i++) {
      if (_lFeatures[i].geometry && _lFeatures[i].geometry.coordinates) {
        var curved = turf.bezierSpline(_lFeatures[i]);
        _lFeatures[i].geometry.coordinates = curved.geometry.coordinates;
      }
    }
    */

    var featureslines = new ol.format.GeoJSON().readFeatures(lines, { featureProjection: 'EPSG:4326' });
    var source = new ol.source.Vector({
      features: featureslines
    });

    return source;
  }

  function getGeojsonStyle(params) {
    if (params.type === 'LHPoint') {
      return function (feature, res) {
        var text = feature.get('value');
        return new ol.style.Style({
          text: new ol.style.Text({
            text: text ? params.highText : params.lowText,
            font: '14px Calibri,sans-serif',
            fill: new ol.style.Fill({
              color: text ? params.highColor : params.lowColor,
              width: 2
            }),
            stroke: new ol.style.Stroke({
              color: text ? params.highColor : params.lowColor,
              width: 1
            })
          })
        });
      };
    }

    return function (feature, res) {
      var slope = params.slope || 1;
      var toFixed = params.toFixed || 0;
      var text = feature.get(params.textName);
      if (params.prod === 'Temp') {
        text = Number(feature.get(params.textName)) - 273;
      }
      var color = params.lineColor || 'rgba(0,0,0,1)';
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: color
        }),
        stroke: new ol.style.Stroke({
          color: color,
          width: 1
        }),
        text: new ol.style.Text({
          text: toFixed ? String((text * slope).toFixed(toFixed)) : String(Math.round(text) * slope),
          font: '12px Calibri,sans-serif',
          placement: 'line',
          maxAngle: 0.2,
          fill: new ol.style.Fill({
            color: params.textFillColor || '#fff',
            width: 1
          }),
          stroke: new ol.style.Stroke({
            color: params.textStrokeColor || '#fff',
            width: 1
          })
        })
      });
    };
  }

  exports.getIsolineLayer = getIsolineLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/layerZIndex.js":
/*!***********************************!*\
  !*** ./src/Layers/layerZIndex.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /** @module Layer/LayerStatus */
  // 初始化 各自的数据图层索引
  /**
   * @default
   * 默认层级配置
   */
  var layerIndex = {
    baseVector: [50001, 55000],
    baseVectorIndex: 50001,
    geoBound: [45001, 50000],
    geoBoundIndex: 45001,
    vector: [40001, 45000],
    vectorIndex: 40001,
    // 其他范围
    other: [10001, 40000],
    otherIndex: 10001,
    productImage: [9001, 10000],
    productImageIndex: 9001,
    baseImage: [8001, 9000],
    baseImageIndex: 8001,
    // 20910923 通道图下加入map 类型
    map: [7001, 8000],
    mapIndex: 7001

    /**
     *  基于当前要添加的图层信息 获取当前图层应该在哪一层级显示的ZIndex
     * @param {*} layerInfo 需要添加的产品信息
     */
  };function getZIndexByType(layerInfo) {
    // 若存在 zIndex 则使用zindex的数据
    // 如果存在 Zindex 则使用Zindex
    if (layerInfo.zIndex) {
      // console.log(layerInfo.zIndex)
      return layerInfo.zIndex;
    }
    // TODO 超出阈值的处理

    var zIndexNum = 500;
    var layerType = layerInfo.layerGroup;
    switch (layerType) {
      case 'baseVector':
        {
          // 自身绘制的图层 保留段位 50000-55000
          zIndexNum = layerIndex.baseVectorIndex;
          layerIndex.baseVectorIndex = layerIndex.baseVectorIndex + 1;
          break;
        }
      case 'geoBound':
        {
          // A geoLayer 地理信息 段位 45000-50000 geoBound
          // geoBoundIndex: 45000,
          zIndexNum = layerIndex.geoBoundIndex;
          layerIndex.geoBoundIndex = layerIndex.geoBoundIndex + 1;
          break;
        }
      case 'vector':
        {
          // B 可叠加的矢量图层 40000-45000
          // vectorIndex: 40000,
          zIndexNum = layerIndex.vectorIndex;
          layerIndex.vectorIndex = layerIndex.vectorIndex + 1;
          break;
        }
      case 'other':
        {
          // C 自由增加减少的图层  10000-40000
          //    otherIndex: 10000,
          zIndexNum = layerIndex.otherIndex;
          layerIndex.otherIndex = layerIndex.otherIndex + 1;
          break;
        }
      case 'productImage':
        {
          // D 产品图层  9000-10000
          // productImageIndex: 9000,
          zIndexNum = layerIndex.productImageIndex;
          layerIndex.productImageIndex = layerIndex.productImageIndex + 1;
          break;
        }
      case 'map':
        {
          // E map图层 20190923
          // map  范围 mapIndex 8000,范围 8000-9000
          zIndexNum = layerIndex.mapIndex;
          layerIndex.mapIndex = layerIndex.mapIndex + 1;
          break;
        }
      case 'baseImage':
        {
          // E 基础底图 7000-8000
          // baseImageIndex: 7000
          zIndexNum = layerIndex.baseImageIndex;
          layerIndex.baseImageIndex = layerIndex.baseImageIndex + 1;
          break;
        }

      default:
        {
          // 所有未标识的图层都认为是自动添加图层
          // C 自由增加减少的图层  20000-40000
          // otherIndex: 10000,
          zIndexNum = layerIndex.otherIndex;
          layerIndex.otherIndex = layerIndex.otherIndex + 1;
          break;
        }
    }
    // console.log(zIndexNum)
    return zIndexNum;
  }

  // 获取 绘制图层的ZIndex
  function getDrawLayerZIndex() {
    var zIndexNum = layerIndex.baseVectorIndex;
    layerIndex.baseVectorIndex = layerIndex.baseVectorIndex + 1;
    return zIndexNum;
  }

  exports.getZIndexByType = getZIndexByType;
  exports.getDrawLayerZIndex = getDrawLayerZIndex;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/layergroup/getCloudLayer.js":
/*!************************************************!*\
  !*** ./src/Layers/layergroup/getCloudLayer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.showCloudHover = exports.getCloudLayer = undefined;

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COLORBAR = {
    '-2': 'rgba(245,183,0,255)',
    '-1': 'rgba(232,1,1,255)',
    1: 'rgba(184,254,155,255)',
    2: 'rgba(184,254,155,255)'
  };
  var CLOUDNAME = {
    '-2': '疑似初生对流',
    '-1': '初生对流',
    1: '成熟对流',
    2: '成熟对流'
  };

  var selected = null;
  var overlay = null;

  function getCloudLayer(params, map) {
    var dataList = params.data.list;

    // 创建 lineLayer 的 feature
    var geometryLineString = new ol.geom.LineString([]);
    var lineString = new ol.Feature({
      geometry: geometryLineString
    });

    var featuresPoint = [];
    var targetId = params.data.ID;

    var _loop = function _loop(_i) {
      // 创建 pointLayer 的 feature
      var point = new ol.Feature({
        geometry: new ol.geom.Point([Number(dataList[_i].CIX_CenterLon), Number(dataList[_i].CIX_CenterLat)])
      });
      point.set('type', 'cloudPoint');
      var object = {
        hover: params.data.hover,
        text: targetId === dataList[_i].ID ? dataList[_i].CurrentTime : ''
      };
      Object.keys(dataList[_i]).forEach(function (key) {
        object[key] = dataList[_i][key];
      });
      point.setProperties(object);
      featuresPoint.push(point);
    };

    for (var _i = 0; _i < dataList.length; _i++) {
      _loop(_i);
    }

    // 动画效果
    var i = 0;
    var interval = setInterval(function () {
      geometryLineString.appendCoordinate([Number(dataList[i].CIX_CenterLon), Number(dataList[i].CIX_CenterLat)]);
      pointLayer.getSource().addFeature(featuresPoint[i]);
      i++;
    }, 500);

    setTimeout(function () {
      clearInterval(interval);
    }, 500 * dataList.length);

    // 创建 lineLayer
    var lineLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: getLineStyle(params)
    });

    // 创建 pointLayer
    var pointLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: getPointStyle(params)
    });

    lineLayer.setZIndex(params.zIndex + 1);
    pointLayer.setZIndex(params.zIndex + 2);

    lineLayer.getSource().addFeature(lineString);

    // 创建图层组
    var layerGroup = new ol.layer.Group({
      layers: [lineLayer, pointLayer]
    });

    // 鼠标滑过展示弹出层
    addHoverOverLayer(map, params);

    return layerGroup;
  }

  var cloudHover = null;
  function addHoverOverLayer(map, params) {
    var hover = params.data.hover;
    var container = creatHoverElement(hover.title, [], {}, params.data);

    // 有且只有一个名为 cloudHover 的弹出层存在
    var _overlay = cloudHover;
    if (_overlay) {
      map.removeOverlay(_overlay.layer);
    }

    overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    map.addOverlay(overlay);
    cloudHover = {
      info: params,
      layer: overlay
    };

    map.on('pointermove', function (event) {
      if (selected !== null) {
        var _properties = selected.getProperties();
        selected.setStyle(getCircleStyle(params, _properties.CIX_RDC, params.pointRadius, _properties.text));
        selected = null;
      }

      var feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
      });

      overlay.setPosition(undefined);

      if (feature === undefined) {
        map.getTargetElement().style.cursor = 'auto';
      } else {
        if (feature.get('type') === 'cloudPoint') {
          map.getTargetElement().style.cursor = 'pointer';

          // 弹出框
          var properties = feature.getProperties();
          container = creatHoverElement(properties.hover.title, properties.hover.items, properties, params.data);
          overlay.setElement(container);
          overlay.setPosition(map.getCoordinateFromPixel(event.pixel));

          // point 样式
          selected = feature;
          feature.setStyle(getCircleStyle(params, properties.CIX_RDC, params.hoverPointRadius, properties.text));
        }
      }
    });
  }

  function getLineStyle(params) {
    return function (feature, res) {
      // const geometry = feature.getGeometry()
      var styles = [new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: params.lineColor || '#9a9898',
          width: params.lineWidth || 2
        })
      })];
      return styles;
    };
  }

  function getPointStyle(params) {
    return function (feature, res) {
      var attr = feature.getProperties();
      var style = getCircleStyle(params, attr.CIX_RDC, params.pointRadius, attr.text);
      return style;
    };
  }

  function getCircleStyle(params, CIX_RDC, radius, text) {
    var style = new ol.style.Style({
      image: new ol.style.Circle({
        radius: radius,
        fill: new ol.style.Fill({
          color: COLORBAR[CIX_RDC + '']
        }),
        stroke: new ol.style.Stroke({
          color: 'rgb(0, 0, 0)',
          width: 1
        })
      })
    });
    if (text) {
      style.setText(new ol.style.Text({
        text: text,
        font: params.textSize + 'px Times New Roman',
        offsetY: 20,
        fill: new ol.style.Fill({
          color: 'rgb(255, 255, 255)'
        })
      }));
    }

    return style;
  }

  function creatHoverElement(title, items, properties, data) {
    var container = document.createElement('div');
    container.id = 'hoverCloud';
    var _title = document.createElement('p');
    _title.innerHTML = title;
    _title.className = 'hoverCloud-title';
    var _items = document.createElement('ul');
    _items.className = 'hoverCloud-items';
    items.forEach(function (item) {
      var li = document.createElement('li');
      var label = document.createElement('span');
      label.className = 'hoverCloud-items__label';
      label.innerHTML = item.label + ': ';
      li.appendChild(label);

      var value = properties[item.value];
      switch (item.value) {
        case 'center':
          value = _index2.default.formatCoordinates([properties.CIX_CenterLon, properties.CIX_CenterLat]);
          break;
        case 'CIX_RDC':
          value = CLOUDNAME[properties[item.value]];
          break;
        default:
          value = properties[item.value];
          break;
      }

      var text = document.createElement('span');
      text.innerHTML = value + ' ' + item.unit;
      li.appendChild(text);
      if (!value) {
        text.innerHTML = '';
      }
      _items.appendChild(li);
    });
    container.appendChild(_title);
    container.appendChild(_items);
    return container;
  }

  function showCloudHover(coordinate, params, properties) {
    var container = creatHoverElement(params.data.hover.title, params.data.hover.items, properties, params.data);
    overlay.setElement(container);
    overlay.setPosition(coordinate);
  }

  exports.getCloudLayer = getCloudLayer;
  exports.showCloudHover = showCloudHover;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/layergroup/getDateChangeLayer.js":
/*!*****************************************************!*\
  !*** ./src/Layers/layergroup/getDateChangeLayer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../Map/Map */ "./src/Map/Map.js"), __webpack_require__(/*! ../Layer */ "./src/Layers/Layer.js"), __webpack_require__(/*! ../layerZIndex */ "./src/Layers/layerZIndex.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map, _Layer, _layerZIndex) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.removeDateChangeLayers = exports.getDateChangeLayers = undefined;


  // 添加 时间的OverLayer
  //  var timeCenter = '2020-03-09'
  // var timeLeft = '2020-03-10'
  // var timeRight = '2020-03-08'
  function addTimeOverLayer(map, timeLeft, timeCenter, timeRight) {
    var timeSpanOverLayer = null;
    var container = document.createElement('div');
    container.id = 'timeSpanContainer';
    // 后一天时次
    var timeAfter = document.createElement('div');
    timeAfter.id = 'timeSpanContainerAfter';
    timeAfter.className = 'timeSpanContainerLeft';
    var titleAfter = document.createElement('p');
    titleAfter.id = 'timeSpanContainerTitleAfter';

    titleAfter.className = 'hoverContainer-title';
    timeAfter.appendChild(titleAfter);
    // 前一天时次
    var timeBefore = document.createElement('div');
    timeBefore.id = 'timeSpanContainerBefore';
    timeBefore.className = 'timeSpanContainerRight';
    var titleBefore = document.createElement('p');
    titleBefore.id = 'timeSpanContainerTitleBefore';
    titleBefore.className = 'hoverContainer-title';
    timeBefore.appendChild(titleBefore);

    // 添加入 大div
    container.appendChild(timeAfter);
    container.appendChild(timeBefore);
    // 样式配置
    var timeSpanContainerStyle = 'width: 174px; margin-left: -87px;float: left;';
    container.setAttribute('style', timeSpanContainerStyle);
    var timeSpanBaseStyle = 'width: 80px; float: right;border-radius: 4px;background: rgba(102, 102, 102, 0.8);font-size: 12px; padding: 0px;';
    var timeSpanContainerLeftStyle = timeSpanBaseStyle + ' float: left;';
    timeAfter.setAttribute('style', timeSpanContainerLeftStyle);
    var timeSpanContainerRightStyle = timeSpanBaseStyle + ' float: right;';
    timeBefore.setAttribute('style', timeSpanContainerRightStyle);
    var hoverContainertitleStyle = 'color: white;padding: 0px; margin: 0px; text-align: center;';
    titleAfter.setAttribute('style', hoverContainertitleStyle);
    titleBefore.setAttribute('style', hoverContainertitleStyle);

    timeSpanOverLayer = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    map.addOverlay(timeSpanOverLayer);

    var baseLon = null;
    var selected = null;
    var selectFeatureInfo = null;

    var highlightStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255,255,255,0.7)'
      }),
      stroke: new ol.style.Stroke({
        lineDash: [5, 15],
        color: 'rgba(222,222,222,0.7)',
        width: 7
      })
    });

    map.on('pointermove', function (e) {
      if (selected !== null) {
        selected.setStyle(undefined);
        selected = null;
        // timeSpanOverLayer.setPosition(undefined)
      }
      selectFeatureInfo = null;
      timeSpanOverLayer.setPosition(undefined);
      map.forEachFeatureAtPixel(e.pixel, function (f) {
        selected = f;
        selectFeatureInfo = f.getProperties();
        if (selectFeatureInfo.name === 'dateChangeLine') {
          // 设置 日期 变更线 样式
          f.setStyle(highlightStyle);
          var position = e.coordinate;
          if (position[0] > 0) {
            position[0] = 180;
          } else {
            position[0] = -180;
          }
          if (baseLon !== position[0]) {
            baseLon = position[0];
            var time1 = timeCenter;
            var time2 = timeRight;
            if (baseLon === -180) {
              time1 = timeLeft;
              time2 = timeCenter;
            }
            var titleAfter = document.getElementById('timeSpanContainerTitleAfter');
            titleAfter.innerHTML = time1;
            var titleBefore = document.getElementById('timeSpanContainerTitleBefore');
            titleBefore.innerHTML = time2;
          }
          // 基于鼠标位置 重新设置
          timeSpanOverLayer.setPosition(position);
        }

        return true;
      });
    });
  }

  // function setTimeOverLayerStyle (container, timeAfter, timeBefore, titleAfter) { }

  // 获取 180 -180 位置的 日期变更线
  // 添加 带日期变更线的图层
  function getDateChangeLineLayer(zIndex) {
    var lineStringStyles = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(255,255,255,0.01)',
        width: 20
      })
    });
    var geojsonObject = {
      type: 'FeatureCollection',
      crs: {
        type: 'name',
        properties: {
          name: 'EPSG:4326'
        }
      },
      features: [{
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [[-180, 90], [-180, -90]]
        },
        properties: {
          name: 'dateChangeLine'
        }
      }, {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [[180, 90], [180, -90]]
        },
        properties: {
          name: 'dateChangeLine'
        }
      }]
    };

    var vectorSource = new ol.source.Vector({
      features: new ol.format.GeoJSON().readFeatures(geojsonObject)
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: lineStringStyles,
      extent: [-270, -90, 270, 90],
      zIndex: zIndex
    });
    return vectorLayer;
  }

  function getDateChangeLayers(layerInfo) {
    var _olMap = (0, _Map.getMap)();

    // 获取 group zindex
    var layerGroupZIndex = (0, _layerZIndex.getZIndexByType)(layerInfo);
    // 获取
    var layerLeftInfo = layerInfo.layerLeft;
    layerLeftInfo.extent = [-270, -90, -180, 90];
    var layerLeft = (0, _Layer.getLayerByParams)(layerLeftInfo, _olMap);
    layerLeft.setZIndex(layerGroupZIndex);

    var layerCenterInfo = layerInfo.layerCenter;
    layerCenterInfo.extent = [-180, -90, 180, 90];
    var layerCenter = (0, _Layer.getLayerByParams)(layerCenterInfo, _olMap);

    layerCenter.setZIndex(layerGroupZIndex);

    var layerRightInfo = layerInfo.layerRight;
    layerRightInfo.extent = [180, -90, 270, 90];
    var layerRight = (0, _Layer.getLayerByParams)(layerRightInfo, _olMap);

    layerRight.setZIndex(layerGroupZIndex);

    var dateChangeLineLayer = getDateChangeLineLayer(layerGroupZIndex);

    // 创建图层组
    var layerGroup = new ol.layer.Group({
      layers: [layerLeft, layerCenter, layerRight, dateChangeLineLayer]
    });
    // console.log([layerLeft, layerCenter, layerRight, dateChangeLineLayer])

    var leftTitle = layerInfo.leftTitle || '';
    var centerTitle = layerInfo.centerTitle || '';
    var rightTitle = layerInfo.rightTitle || '';
    addTimeOverLayer(_olMap, leftTitle, centerTitle, rightTitle);
    return layerGroup;
  }

  function removeDateChangeLayers(layerInfo) {}

  // let demoInfo = {
  //   id: '1asdhkasjd',
  //   mapType: 'mutiDateLayer',
  //   layerLeft: {},
  //   layerCenter: {},
  //   layerRight: {},
  //   leftTitle: '',
  //   centerTitle: '',
  //   rightTitle: ''
  // }


  // function setTimeSpanDiv (map) { }

  exports.getDateChangeLayers = getDateChangeLayers;
  exports.removeDateChangeLayers = removeDateChangeLayers;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/layergroup/getSailLayer.js":
/*!***********************************************!*\
  !*** ./src/Layers/layergroup/getSailLayer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSailLayer = undefined;

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var selected = null;
  var overlay = null;

  function getSailLayer(params, map) {
    var dataList = params.data.list;

    // 创建 pointLayer 的 feature
    var featuresPoint = [];
    var coordinate = [[]];
    var index = 0;

    var _loop = function _loop(i) {
      var Lon = Number(dataList[i].Lon);
      var Lat = Number(dataList[i].Lat);
      if (i > 0) {
        if (Lon > Number(dataList[i - 1].Lon) && Lat - Number(dataList[i - 1].Lon) >= 180) {
          index = index + 1;
          coordinate[index] = [];
        }
        if (Lon < Number(dataList[i - 1].Lon) && Number(dataList[i - 1].Lon) - Lon >= 180) {
          index = index + 1;
          coordinate[index] = [];
        }
      }
      coordinate[index].push([Lon, Lat]);
      var point = new ol.Feature({
        geometry: new ol.geom.Point([Lon, Lat])
      });
      point.set('type', 'sailPoint');
      point.set('id', params.id);
      var object = {
        hover: params.data.hover,
        start: dataList[i].Type === 'DP',
        end: dataList[i].Type === 'AP'
      };
      Object.keys(dataList[i]).forEach(function (key) {
        object[key] = dataList[i][key];
      });
      point.setProperties(object);
      featuresPoint.push(point);
    };

    for (var i = 0; i < dataList.length; i++) {
      _loop(i);
    }

    // 创建 pointLayer
    var pointLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: featuresPoint
      }),
      style: getPointStyle(params)
    });

    // 创建 lineLayer
    var lineLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: getLineStyle(params)
    });
    // 创建 lineLayer 的 feature
    var lineString1 = new ol.Feature({
      geometry: new ol.geom.LineString(coordinate[0])
    });
    lineLayer.getSource().addFeature(lineString1);
    // 最多只分为两段航线
    if (coordinate.length >= 2) {
      var lineString2 = new ol.Feature({
        geometry: new ol.geom.LineString(coordinate[1])
      });
      lineLayer.getSource().addFeature(lineString2);
    }

    lineLayer.setZIndex(params.zIndex + 1);
    pointLayer.setZIndex(params.zIndex + 2);

    // 创建图层组
    var layerGroup = new ol.layer.Group({
      layers: [lineLayer, pointLayer]
    });

    // 鼠标滑过展示弹出层
    addHoverOverLayer(map, params);

    return layerGroup;
  }

  var sailHover = null;
  function addHoverOverLayer(map, params) {
    var hover = params.data.hover;
    var container = creatHoverElement(hover.title, [], {}, params.data);

    // 有且只有一个名为 sailHover 的弹出层存在
    var _overlay = sailHover;
    if (_overlay) {
      map.removeOverlay(_overlay.layer);
    }

    overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    map.addOverlay(overlay);
    sailHover = {
      info: params,
      layer: overlay
    };

    map.on('pointermove', function (event) {
      if (selected !== null) {
        var _properties = selected.getProperties();
        if (_properties.id === params.id) {
          selected.setStyle(getCircleStyle(params, params.pointRadius, _properties));
        }
        selected = null;
      }

      var feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
      });

      overlay.setPosition(undefined);

      if (feature === undefined) {
        map.getTargetElement().style.cursor = 'auto';
      } else {
        if (feature.get('type') === 'sailPoint' && feature.get('id') === params.id) {
          map.getTargetElement().style.cursor = 'pointer';

          // 弹出框
          var properties = feature.getProperties();
          container = creatHoverElement(properties.hover.title, properties.hover.items, properties, params.data);
          overlay.setElement(container);
          overlay.setPosition(map.getCoordinateFromPixel(event.pixel));

          // point 样式
          selected = feature;
          feature.setStyle(getCircleStyle(params, params.hoverPointRadius, properties));
        }
      }
    });
  }

  function getLineStyle(params) {
    return function (feature, res) {
      //  const geometry = feature.getGeometry()
      var styles = [new ol.style.Style({
        stroke: new ol.style.Stroke({
          lineDash: [1, 2, 3, 4, 5, 6],
          color: params.lineColor || 'rgb(255, 0, 0)',
          width: params.lineWidth || 2
        })
      })];

      return styles;
    };
  }

  function getPointStyle(params) {
    return function (feature, res) {
      var attr = feature.getProperties();
      var style = getCircleStyle(params, params.pointRadius, attr);

      return style;
    };
  }

  function getCircleStyle(params, radius, attr) {
    var style = new ol.style.Style({
      image: new ol.style.Circle({
        radius: radius,
        fill: new ol.style.Fill({
          color: 'rgb(255, 255, 255)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgb(255, 0, 0)',
          width: 2
        })
      })
    });
    if (attr.start || attr.end) {
      var text = attr.start ? params.data.FromPort : attr.end ? params.data.ToPort : '';
      var url = attr.start ? params.startUrl : attr.end ? params.endUrl : '';
      style.setImage(new ol.style.Icon({
        src: url,
        anchor: [0.5, 1],
        size: [32, 32],
        opacity: 1
      }));
      style.setText(new ol.style.Text({
        text: text,
        font: params.textSize + 'px Times New Roman',
        offsetY: 20,
        fill: new ol.style.Fill({
          color: 'rgb(255, 255, 255)'
        }),
        backgroundFill: new ol.style.Fill({
          color: 'rgba(0, 0, 0, 0.7)'
        }),
        padding: [5, 5, 5, 5]
      }));
    }
    return style;
  }

  function creatHoverElement(title, items, properties, data) {
    var container = document.createElement('div');
    container.id = 'hoverSail';
    var _title = document.createElement('p');
    _title.innerHTML = title;
    _title.className = 'hoverSail-title';
    var _items = document.createElement('ul');
    _items.className = 'hoverSail-items';
    items.forEach(function (item) {
      var li = document.createElement('li');
      var label = document.createElement('span');
      label.className = 'hoverSail-items__label';
      label.innerHTML = item.label + ': ';
      li.appendChild(label);

      var value = properties[item.value];
      switch (item.value) {
        case 'center':
          value = _index2.default.formatCoordinates([properties.Lon, properties.Lat]);
          break;
        default:
          value = properties[item.value];
          break;
      }

      var text = document.createElement('span');
      text.innerHTML = value + ' ' + item.unit;
      li.appendChild(text);
      if (!value) {
        text.innerHTML = '';
      }
      _items.appendChild(li);
    });
    container.appendChild(_title);
    container.appendChild(_items);
    return container;
  }

  exports.getSailLayer = getSailLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/layergroup/getTyphoonLayer.js":
/*!**************************************************!*\
  !*** ./src/Layers/layergroup/getTyphoonLayer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.stopTyphoon = exports.showTyphoonHover = exports.getTyphoonLayer = undefined;

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COLORBAR = {
    TD: 'rgb(42, 246, 43)', // 蓝
    TS: 'rgb(48, 126, 250)', // 绿
    STS: 'rgb(250, 248, 47)', // 黄
    TY: 'rgb(250, 186, 49)', // 橙
    STY: 'rgb(233, 124, 288)', // 紫
    SuperTY: 'rgb(254, 3, 0)', // 红
    SUPERTY: 'rgb(254, 3, 0)' // 红
  };

  var WINDNAME = {
    TD: '热带低压',
    TS: '热带风暴',
    STS: '强热带风暴',
    TY: '台风',
    STY: '强台风',
    SuperTY: '超强台风',
    SUPERTY: '超强台风'
  };

  var WINDDIRECTION = {
    360: '北',
    45: '东北',
    90: '东',
    135: '东南',
    180: '南',
    225: '西南',
    270: '西',
    315: '西北',
    0: '准静止',
    22.5: '北东北',
    67.5: '东东北',
    112.5: '东东南',
    157.5: '南东南',
    202.5: '南西南',
    247.5: '西西南',
    292.5: '西西北',
    337.5: '北西北',
    1: '移动缓慢'
  };

  var WINDLEVEL = [[0.0, 0.2], [0.3, 1.5], [1.6, 3.3], [3.4, 5.4], [5.5, 7.9], [8.0, 10.7], [10.8, 13.8], [13.9, 17.1], [17.2, 20.7], [20.8, 24.4], [24.5, 28.4], [28.5, 32.6], [32.7, 36.9], [37.0, 41.4], [41.5, 46.1], [46.2, 50.9], [51.0, 56.0], [56.1, 1000]];

  var selected = null;
  var overlay = null;
  var clicked = null;

  function getTyphoonLayer(params, map) {
    var dataList = params.data.list;

    // 创建 lineLayer 的 feature
    var geometryLineString = new ol.geom.LineString([]);
    var lineString = new ol.Feature({
      geometry: geometryLineString
    });
    lineString.setStyle(new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: params.lineColor || '#9a9898',
        width: params.lineWidth || 2
      })
    }));

    var featuresPoint = [];
    var featuresWindCoil = [];
    var featureIcon = [];
    var featureForecast = [];
    var featureForecastPoint = [];

    var _loop = function _loop(_i) {
      // 创建 pointLayer 的 feature
      var point = new ol.Feature({
        geometry: new ol.geom.Point([Number(dataList[_i].Lon), Number(dataList[_i].Lat)])
      });
      point.set('type', 'typhoonPoint');
      point.set('id', params.id);
      var object = {
        hover: params.data.hover,
        text: !_i ? params.data.Num_INati + ' ' + params.data.TYPH_Name_cn + ' ' + params.data.TYPH_Name + ' ' : ''
      };
      Object.keys(dataList[_i]).forEach(function (key) {
        object[key] = dataList[_i][key];
      });
      point.setProperties(object);
      featuresPoint.push(point);

      // 创建 windCoilLayer 的 feature
      featuresWindCoil.push(getWindCoilFeatures(dataList[_i], params));
      // 创建 iconLayer 的 feature
      featureIcon.push(getIconFeatures(dataList[_i], params));
      // 创建 featureForecast 的 feature
      featureForecast.push(getForecastLineFeatures(dataList[_i].Forecast, params));
      // 创建 featureForecastPoint 的 feature
      featureForecastPoint.push(getForecastPointFeatures(dataList[_i].Forecast, params, dataList[_i].ForecastHover));
    };

    for (var _i = 0; _i < dataList.length; _i++) {
      _loop(_i);
    }

    // 创建 lineLayer
    var lineLayer = new ol.layer.Vector({
      source: new ol.source.Vector()
    });
    lineLayer.getSource().addFeature(lineString);
    // 创建 pointLayer
    var pointLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: getPointStyle(params)
    });
    // 创建 windCoilLayer
    var windCoilLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: getWindCoilStyle()
    });
    // 创建 iconLayer
    var iconLayer = new ol.layer.Vector({
      source: new ol.source.Vector()
    });
    // 创建 forecastLayer
    var forecastLayer = new ol.layer.Vector({
      source: new ol.source.Vector()
    });
    // 创建 forecastPointLayer
    var forecastPointLayer = new ol.layer.Vector({
      source: new ol.source.Vector()
    });

    windCoilLayer.setZIndex(params.zIndex);
    iconLayer.setZIndex(params.zIndex + 1);
    lineLayer.setZIndex(params.zIndex + 2);
    pointLayer.setZIndex(params.zIndex + 5);
    forecastLayer.setZIndex(params.zIndex + 3);
    forecastPointLayer.setZIndex(params.zIndex + 4);

    // 动画效果
    if (!params.final) {
      var i = params.index;
      var interval = setInterval(function () {
        geometryLineString.appendCoordinate([Number(dataList[i].Lon), Number(dataList[i].Lat)]);
        windCoilLayer.getSource().clear();
        windCoilLayer.getSource().addFeatures(featuresWindCoil[i]);
        pointLayer.getSource().addFeature(featuresPoint[i]);
        iconLayer.getSource().clear();
        iconLayer.getSource().addFeature(featureIcon[i]);
        forecastLayer.getSource().clear();
        forecastLayer.getSource().addFeatures([featureForecast[i]]);
        forecastPointLayer.getSource().clear();
        forecastPointLayer.getSource().addFeatures(featureForecastPoint[i]);
        window['typhoon-' + params.id].index = i;
        i++;
        if (i >= dataList.length) {
          clearInterval(interval);
        }
      }, 150);
      window['typhoon-' + params.id] = { interval: interval };
    } else {
      var length = dataList.length - 1;
      var coordinateArr = dataList.map(function (item) {
        return [Number(item.Lon), Number(item.Lat)];
      });
      var _lineString = new ol.Feature({
        geometry: new ol.geom.LineString(coordinateArr)
      });
      lineLayer.getSource().addFeature(_lineString);
      pointLayer.getSource().addFeatures(featuresPoint);
      windCoilLayer.getSource().addFeatures(featuresWindCoil[length]);
      iconLayer.getSource().addFeature(featureIcon[length]);
      forecastLayer.getSource().addFeatures([featureForecast[length]]);
      forecastPointLayer.getSource().addFeatures(featureForecastPoint[length]);
    }

    // 创建图层组
    var layerGroup = new ol.layer.Group({
      layers: [windCoilLayer, lineLayer, pointLayer, iconLayer, forecastLayer, forecastPointLayer]
    });

    // 鼠标滑过展示弹出层
    addHoverOverLayer(map, params, windCoilLayer, forecastLayer, forecastPointLayer, iconLayer);

    return layerGroup;
  }

  var typhoonHover = null;
  function addHoverOverLayer(map, params, windCoilLayer, forecastLayer, forecastPointLayer, iconLayer) {
    var hover = params.data.hover;
    var container = creatHoverElement(hover.title, [], {}, params.data);

    // 有且只有一个名为 typhoonHover 的弹出层存在
    var _overlay = typhoonHover;
    if (_overlay) {
      map.removeOverlay(_overlay.layer);
    }

    overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    map.addOverlay(overlay);
    typhoonHover = {
      info: params,
      layer: overlay
    };

    map.on('singleclick', function (event) {
      if (clicked !== null) {
        clicked = null;
      }

      var feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
      });

      overlay.setPosition(undefined);
      if (feature === undefined) {
        return;
      }

      if (feature.get('type') === 'typhoonPoint' && feature.get('id') === params.id) {
        clicked = feature;
        var properties = feature.getProperties();
        // 图标
        iconLayer.getSource().clear();
        iconLayer.getSource().addFeatures([getIconFeatures(properties, params)]);
        // 风圈
        windCoilLayer.getSource().clear();
        windCoilLayer.getSource().addFeatures(getWindCoilFeatures(properties, params));
        // 预报路径
        forecastLayer.getSource().clear();
        forecastLayer.getSource().addFeatures([getForecastLineFeatures(properties.Forecast, params)]);
        forecastPointLayer.getSource().clear();
        forecastPointLayer.getSource().addFeatures(getForecastPointFeatures(properties.Forecast, params, properties.ForecastHover));
      }
    });

    map.on('pointermove', function (event) {
      if (selected !== null) {
        var _properties = selected.getProperties();
        selected.setStyle(getCircleStyle(params, _properties.Typh_Grade, params.pointRadius, _properties.text));
        selected = null;
      }

      var feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
      });

      overlay.setPosition(undefined);

      if (feature === undefined) {
        map.getTargetElement().style.cursor = 'auto';
      } else {
        if (feature.get('type') === 'typhoonPoint' || feature.get('type') === 'typhoonForecastPoint') {
          map.getTargetElement().style.cursor = 'pointer';

          // 弹出框
          var properties = feature.getProperties();
          container = creatHoverElement(properties.hover.title, properties.hover.items, properties, params.data);
          overlay.setElement(container);
          overlay.setPosition(map.getCoordinateFromPixel([event.pixel[0] + 1, event.pixel[1] + 1]));

          // point 样式
          selected = feature;
          feature.setStyle(getCircleStyle(params, properties.Typh_Grade, params.hoverPointRadius, properties.text));
        }
      }
    });
  }

  function getIconFeatures(properties, params) {
    var pointIcon = new ol.Feature({
      geometry: new ol.geom.Point([Number(properties.Lon), Number(properties.Lat)])
    });
    pointIcon.setStyle(new ol.style.Style({
      image: new ol.style.Icon({
        src: params.iconUrl,
        imgSize: [54, 54],
        opacity: 0.9
      })
    }));

    return pointIcon;
  }

  function getForecastLineFeatures(forecast, params) {
    var LineStringCoordinate = forecast.map(function (item) {
      return [Number(item.Lon), Number(item.Lat)];
    });
    var forecastLine = new ol.Feature({
      geometry: new ol.geom.LineString(LineStringCoordinate)
    });
    forecastLine.setStyle(new ol.style.Style({
      stroke: new ol.style.Stroke({
        lineDash: [1, 2, 3, 4, 5, 6],
        color: 'rgb(255, 0, 0)',
        width: params.lineWidth || 2
      })
    }));
    return forecastLine;
  }

  function getForecastPointFeatures(forecast, params, hover) {
    var pointArray = [];
    forecast.forEach(function (item) {
      var forecastPoint = new ol.Feature({
        geometry: new ol.geom.Point([Number(item.Lon), Number(item.Lat)])
      });
      forecastPoint.set('type', 'typhoonForecastPoint');
      forecastPoint.set('id', params.id);
      var object = {
        hover: hover
      };
      Object.keys(item).forEach(function (key) {
        object[key] = item[key];
      });
      forecastPoint.setProperties(object);
      forecastPoint.setStyle(new ol.style.Style({
        image: new ol.style.Circle({
          radius: params.pointRadius,
          fill: new ol.style.Fill({
            color: COLORBAR[item.Typh_Grade]
          }),
          stroke: new ol.style.Stroke({
            color: 'rgb(0, 0, 0)',
            width: 1
          })
        })
      }));
      pointArray.push(forecastPoint);
    });
    return pointArray;
  }

  function getWindCoilFeatures(dataList, params) {
    var windCoil = [];

    var j = 7;
    for (var x = 0; x < 3; x++) {
      switch (x) {
        case 1:
          j = 10;break;
        case 2:
          j = 12;break;
      }
      if (Number(dataList['Radiu_Bear1_WING_A' + j]) > 900000) {
        continue;
      }
      var Configs = {
        CIRCLE_CENTER_X: Number(dataList.Lon),
        CIRCLE_CENTER_Y: Number(dataList.Lat),
        CIRCLE_R: {
          NE: Number(dataList['Radiu_Bear1_WING_A' + j]) / 40, // 东北
          SE: Number(dataList['Radiu_Bear2_WING_A' + j]) / 40, // 东南
          SW: Number(dataList['Radiu_Bear3_WING_A' + j]) / 40, // 西南
          NW: Number(dataList['Radiu_Bear4_WING_A' + j]) / 40 // 西北
        }
      };
      var _windCoilFeature = getWindCoilFeature(Configs);
      _windCoilFeature.set('index', j);
      windCoil.push(_windCoilFeature);
    }

    return windCoil;
  }

  function getWindCoilFeature(Configs) {
    var wktformat = new ol.format.WKT();
    var wkt = 'POLYGON((';
    var wkt0 = '';var _interval = 6;
    for (var i = 0; i < 360 / _interval; i++) {
      var _r = 0;
      var _ang = i * _interval;
      if (_ang > 0 && _ang <= 90) {
        _r = Configs.CIRCLE_R.NE;
      } else if (_ang > 90 && _ang <= 180) {
        _r = Configs.CIRCLE_R.NW;
      } else if (_ang > 180 && _ang <= 270) {
        _r = Configs.CIRCLE_R.SW;
      } else {
        _r = Configs.CIRCLE_R.SE;
      }
      var x = Configs.CIRCLE_CENTER_X + _r * Math.cos(_ang * 3.14 / 180);
      var y = Configs.CIRCLE_CENTER_Y + _r * Math.sin(_ang * 3.14 / 180);

      wkt = wkt + '' + x + ' ' + y + ', ';
      if (i === 0) {
        wkt0 = '' + x + ' ' + y + '';
      }
    }
    wkt = wkt + wkt0 + '))';

    return wktformat.readFeature(wkt);
  }

  function getPointStyle(params) {
    return function (feature, res) {
      var attr = feature.getProperties();
      var style = getCircleStyle(params, attr.Typh_Grade, params.pointRadius, attr.text);

      return style;
    };
  }

  function getWindCoilStyle() {
    return function (feature, res) {
      var index = feature.get('index');
      var color = {};
      switch (index) {
        case 10:
          color = { stroke: 'rgba(219, 236, 27, 0.8)', fill: 'rgba(231, 240, 132, 0.4)' };break; // 黄
        case 12:
          color = { stroke: 'rgba(244, 146, 15, 0.8)', fill: 'rgba(236, 165, 71, 0.4)' };break; // 橙
        default:
          color = { stroke: 'rgba(118, 213, 126, 0.8)', fill: 'rgba(149, 236, 156, 0.4)' };break; // 绿
      }
      return new ol.style.Style({
        fill: new ol.style.Fill({
          color: color.fill
        }),
        stroke: new ol.style.Stroke({
          color: color.stroke,
          width: 2
        })
      });
    };
  };

  function getCircleStyle(params, Typh_Grade, radius, text) {
    var style = new ol.style.Style({
      image: new ol.style.Circle({
        radius: radius,
        fill: new ol.style.Fill({
          color: COLORBAR[Typh_Grade]
        }),
        stroke: new ol.style.Stroke({
          color: 'rgb(0, 0, 0)',
          width: 1
        })
      })
    });
    if (text) {
      style.setText(new ol.style.Text({
        text: text,
        font: params.textSize + 'px Times New Roman',
        offsetY: 18,
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 1)'
        })
      }));
    }

    return style;
  }

  function creatHoverElement(title, items, properties, data) {
    var container = document.createElement('div');
    container.id = 'hoverContainer';
    var _title = document.createElement('p');
    _title.innerHTML = title;
    _title.className = 'hoverContainer-title';
    var _items = document.createElement('ul');
    _items.className = 'hoverContainer-items';
    items.forEach(function (item) {
      var li = document.createElement('li');
      var label = document.createElement('span');
      label.className = 'hoverContainer-items__label';
      label.innerHTML = item.label + ': ';
      li.appendChild(label);

      var value = properties[item.value];
      var max = void 0;
      var min = void 0;
      switch (item.value) {
        case '7_stage_wind_radius':
          value = '';
          if (Number(properties.Radiu_Bear1_WING_A7) <= 900000) {
            max = Math.max(properties.Radiu_Bear1_WING_A7, properties.Radiu_Bear2_WING_A7, properties.Radiu_Bear3_WING_A7, properties.Radiu_Bear4_WING_A7);
            min = Math.min(properties.Radiu_Bear1_WING_A7, properties.Radiu_Bear2_WING_A7, properties.Radiu_Bear3_WING_A7, properties.Radiu_Bear4_WING_A7);
            value = min + '-' + max;
          }
          break;
        case '10_stage_wind_radius':
          value = '';
          if (Number(properties.Radiu_Bear1_WING_A10) <= 900000) {
            max = Math.max(properties.Radiu_Bear1_WING_A10, properties.Radiu_Bear2_WING_A10, properties.Radiu_Bear3_WING_A10, properties.Radiu_Bear4_WING_A10);
            min = Math.min(properties.Radiu_Bear1_WING_A10, properties.Radiu_Bear2_WING_A10, properties.Radiu_Bear3_WING_A10, properties.Radiu_Bear4_WING_A10);
            value = min + '-' + max;
          }
          break;
        case '12_stage_wind_radius':
          value = '';
          if (Number(properties.Radiu_Bear1_WING_A12) <= 900000) {
            max = Math.max(properties.Radiu_Bear1_WING_A12, properties.Radiu_Bear2_WING_A12, properties.Radiu_Bear3_WING_A12, properties.Radiu_Bear4_WING_A12);
            min = Math.min(properties.Radiu_Bear1_WING_A12, properties.Radiu_Bear2_WING_A12, properties.Radiu_Bear3_WING_A12, properties.Radiu_Bear4_WING_A12);
            value = min + '-' + max;
          }
          break;
        case 'MoDir_Future':
          value = WINDDIRECTION[properties[item.value]];
          break;
        case 'center':
          value = _index2.default.formatCoordinates([properties.Lon, properties.Lat]);
          break;
        case 'MoSpeed_Futrue':
          value = (3.6 * value).toFixed(2);
          break;
        case 'Typh_Grade':
          value = WINDNAME[properties[item.value]];
          break;
        case 'WIN_S_Conti_Max':
          if (item.label === '最大风力') {
            WINDLEVEL.forEach(function (level, index) {
              if (properties[item.value] >= level[0] && properties[item.value] <= level[1]) {
                value = index;
              }
            });
          }
          break;
        default:
          value = properties[item.value];
          break;
      }

      var text = document.createElement('span');
      text.innerHTML = value + ' ' + item.unit;
      li.appendChild(text);
      if (!value) {
        text.innerHTML = '' + value;
      }
      _items.appendChild(li);
    });
    container.appendChild(_title);
    container.appendChild(_items);
    return container;
  }

  function showTyphoonHover(coordinate, params, properties) {
    var container = creatHoverElement(params.data.hover.title, params.data.hover.items, properties, params.data);
    overlay.setElement(container);
    overlay.setPosition(coordinate);

    // if(this.addLayerParams[params.id]) {
    //   const _layergroup = this.addLayerParams[params.id].layer;
    //   const layers = _layergroup.getLayersArray();
    //   layers[0].getSource().clear();
    //   layers[0].getSource().addFeatures(getWindCoilFeatures(properties, params));
    // }
  }

  function stopTyphoon(params) {
    var _window$ = window['typhoon-' + params.id],
        interval = _window$.interval,
        index = _window$.index;

    clearInterval(interval);

    return index;
  }

  exports.getTyphoonLayer = getTyphoonLayer;
  exports.showTyphoonHover = showTyphoonHover;
  exports.stopTyphoon = stopTyphoon;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/loadLayer.js":
/*!*********************************!*\
  !*** ./src/Layers/loadLayer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Layer */ "./src/Layers/Layer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Layer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.checkLoadingStatus = exports.clearLoadStatus = exports.checkLoadStatus = exports.countUrl = exports.endLoad = exports.addLoad = undefined;

  /**
   * @description 用于判断TMS IMAGE模式下 图像加载状态 触发 PubSub
   * @param {*} id  图层id
   * @param {*} url 添加url
   */
  function addLoad(id, url) {
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    // 修改使用数组形式
    if (!_addLayerParams[id]) {
      return false;
    }
    _addLayerParams[id].isLoaded = false;
    if (_addLayerParams[id]) {
      if (!_addLayerParams[id].loadingNum) {
        _addLayerParams[id].loadingNum = 0;
      }
      _addLayerParams[id].loadingNum++;
    }
  }
  /* global PubSub */
  /** @module Layer/LayerStatus */


  function countUrl(id, url) {
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    if (_addLayerParams[id]) {
      if (!_addLayerParams[id].countNum) {
        _addLayerParams[id].countNum = 0;
      }
      _addLayerParams[id].countNum.push++;
    }
  }

  function endLoad(id, url, isErr) {
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    if (_addLayerParams[id]) {
      // 补位 0
      if (!_addLayerParams[id].loadedNum) {
        _addLayerParams[id].loadedNum = 0;
      }
      _addLayerParams[id].loadedNum++;
      if (isErr) {
        if (!_addLayerParams[id].loadErrNum) {
          _addLayerParams[id].loadErrNum = 0;
        }
        _addLayerParams[id].loadErrNum++;
      }
      return true;
    }
    return false;
  }

  /**
   * @description 监测图层加载状态
   * @function
   * @param {*} id  图层id
   */
  function checkLoadStatus(id) {
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    if (!_addLayerParams[id]) {
      return false;
    }
    if (_addLayerParams[id].loadedNum === _addLayerParams[id].loadingNum) {
      _addLayerParams[id].isLoaded = true;
      if (PubSub) {
        var info = {
          id: id,
          onLayerLoaded: true,
          loadedNum: _addLayerParams[id].loadedNum,
          errNum: _addLayerParams[id].loadErrNum
        };
        PubSub.publish('onLayerLoaded', info);
      }
      return true;
    } else {
      return false;
    }
  }

  function checkLoadingStatus() {
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    if (!_addLayerParams) {
      return false;
    }
    var layerList = _addLayerParams;
    var isLoad = true;
    for (var key in layerList) {
      // 只判断显示图层
      var item = layerList[key];
      if (item.loadedNum !== item.loadingNum) {
        isLoad = false;
      }
    }
    return isLoad;
  }

  /**
   * @description 清除图层加载状态
   */
  function clearLoadStatus() {
    // todo
    // tileAllNum = 0
    // tileLoadEnd = 0
  }

  exports.addLoad = addLoad;
  exports.endLoad = endLoad;
  exports.countUrl = countUrl;
  exports.checkLoadStatus = checkLoadStatus;
  exports.clearLoadStatus = clearLoadStatus;
  exports.checkLoadingStatus = checkLoadingStatus;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/overlayer/addTwinkle.js":
/*!********************************************!*\
  !*** ./src/Layers/overlayer/addTwinkle.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../Map/Map */ "./src/Map/Map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.removeTwinkle = exports.addTwinkle = undefined;


  var twinklePoint = null;
  /** @module Layer */
  /**
   * @method addTwinkle
   * @description 添加火点闪烁
   * @function
   * @param {element} twnDiv 闪烁div
   * @param {Float} lon 经度
   * @param {Float} lat 纬度
   */
  function addTwinkle(twnDiv, lon, lat) {
    var _olMap = (0, _Map.getMap)();
    twinklePoint = new ol.Overlay({
      element: twnDiv,
      positioning: 'center-center'
    });
    _olMap.addOverlay(twinklePoint);
    twinklePoint.setPosition([lon, lat]);
  }

  function removeTwinkle() {
    var _olMap = (0, _Map.getMap)();
    _olMap.removeOverlay(twinklePoint);
    twinklePoint = null;
  }

  exports.addTwinkle = addTwinkle;
  exports.removeTwinkle = removeTwinkle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/overlayer/valuePopupLayer.js":
/*!*************************************************!*\
  !*** ./src/Layers/overlayer/valuePopupLayer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../Map/Map */ "./src/Map/Map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.removeValuePopup = exports.hideValuePopup = exports.addValuePopup = undefined;


  var _overlay = null;
  /**
   * 添加气泡框
   * ①：实例一个 new ol.Overlay()，设置相关的属性，element 是和页面的 最外层弹窗的dom进行绑定
     ②：通过 map.addOverlay(this.overlay) 把 overlay弹窗添加到页面
     ③：closer.onclick 添加一个 x 关闭弹窗事件
     ④：通过 this.map.on("singleclick", function(evt) 事件点击地图触发弹窗效果
   * @param {element} popupDiv
   * @param {Float} lon 经度
   * @param {Float} lat 纬度
   */
  function addValuePopup(popupDiv, lon, lat) {
    var map = (0, _Map.getMap)();
    // 创建一个弹窗 ol.Overlay 对象
    _overlay = new ol.Overlay({
      element: popupDiv, // 绑定 ol.Overlay 对象和 DOM 对象的
      autoPan: true, // 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果
      autoPanAnimation: {
        duration: 250 // 自动平移效果的动画时间 9毫秒）
      }
    });
    // 将弹窗添加到 map 地图中
    map.addOverlay(_overlay);
    _overlay.setPosition([lon, lat]);
  }

  function hideValuePopup() {
    _overlay.setPosition(undefined);
    return false;
  }

  function removeValuePopup() {
    var _map = (0, _Map.getMap)();
    _map.removeOverlay(_overlay);
    return false;
  }

  exports.addValuePopup = addValuePopup;
  exports.hideValuePopup = hideValuePopup;
  exports.removeValuePopup = removeValuePopup;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/setLayerParams/setLayerParams.js":
/*!*****************************************************!*\
  !*** ./src/Layers/setLayerParams/setLayerParams.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./setLayerVisibility */ "./src/Layers/setLayerParams/setLayerVisibility.js"), __webpack_require__(/*! ./setLayerZIndex */ "./src/Layers/setLayerParams/setLayerZIndex.js"), __webpack_require__(/*! ./setlayerOpacity */ "./src/Layers/setLayerParams/setlayerOpacity.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _setLayerVisibility, _setLayerZIndex, _setlayerOpacity) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLayerOpacity = exports.setLayerOpacity = exports.getLayerZIndex = exports.setLayerZIndex = exports.setLayerVisibility = exports.setLayerParams = undefined;


  /**
   * @description 设置图层参数
   * @function
   * @param {JSON} layerinfo 图层信息 {id}
   * @param {JSON} params 设置的参数信息 {zIndex,visible,opacity}
   */
  function setLayerParams(layerinfo, params) {
    // 设置 zIndex
    if (params.zIndex) {
      (0, _setLayerZIndex.setLayerZIndex)(layerinfo, params.zIndex);
    }
    // 设置 可视化情况
    if (params.visible || params.visible === false) {
      (0, _setLayerVisibility.setLayerVisibility)(layerinfo, params.visible);
    }
    // 设置 透明度
    if (params.opacity !== null) {
      (0, _setlayerOpacity.setLayerOpacity)(layerinfo, params.opacity);
    }
  }
  /** @module Layer/LayerStatus */

  exports.setLayerParams = setLayerParams;
  exports.setLayerVisibility = _setLayerVisibility.setLayerVisibility;
  exports.setLayerZIndex = _setLayerZIndex.setLayerZIndex;
  exports.getLayerZIndex = _setLayerZIndex.getLayerZIndex;
  exports.setLayerOpacity = _setlayerOpacity.setLayerOpacity;
  exports.getLayerOpacity = _setlayerOpacity.getLayerOpacity;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/setLayerParams/setLayerVisibility.js":
/*!*********************************************************!*\
  !*** ./src/Layers/setLayerParams/setLayerVisibility.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Layer */ "./src/Layers/Layer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Layer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setLayerVisibility = undefined;

  /**
   * @description 基于图层名称 对 可见度进行设置
   * @function
   * @param {String} layerName 图像名称
   * @param {Boolean} isVisible 显示或隐藏
   */
  function setLayerVisibility(layerinfo, isVisible) {
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    if (_addLayerParams[layerinfo.id]) {
      var info = _addLayerParams[layerinfo.id];
      var layer = _addLayerParams[layerinfo.id].layer;
      // var layer = this.layerList[layerinfo.id]
      if (layer) {
        // 当前设置不一致
        if (info.isVisible !== isVisible) {
          // 设置可视化
          info.isVisible = isVisible;
          //  若为设置为隐藏 重置loading
          if (!isVisible) {
            info.loadedNum = 0;
            info.loadingNum = 0;
          }
          layer.setVisible(isVisible);
          return true;
        }
      }
    }
    return false;
  } /**
     * @module Layer/LayerStatus
     */

  exports.setLayerVisibility = setLayerVisibility;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/setLayerParams/setLayerZIndex.js":
/*!*****************************************************!*\
  !*** ./src/Layers/setLayerParams/setLayerZIndex.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Layer */ "./src/Layers/Layer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Layer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLayerZIndex = exports.setLayerZIndex = undefined;


  /**
   * @description 基于图层信息 设置当前图层的ZIndex
   * @function
   * @param {String} layerName
   */
  function setLayerZIndex(layerinfo, zIndex) {
    // 获取当前layer
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    var _layerInfo = _addLayerParams[layerinfo.id];
    if (_layerInfo) {
      var layer = _layerInfo.layer;
      if (layer) {
        layer.setZIndex(zIndex);
        return true;
      }
    }
    return false;
  }
  /** @module Layer/LayerStatus */


  function getLayerZIndex(layerinfo) {
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    if (_addLayerParams[layerinfo.id]) {
      var layer = _addLayerParams[layerinfo.id].layer;
      if (layer) {
        return layer.getZIndex();
      }
    }
    return null;
  }

  exports.setLayerZIndex = setLayerZIndex;
  exports.getLayerZIndex = getLayerZIndex;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/setLayerParams/setSpyLayer.js":
/*!**************************************************!*\
  !*** ./src/Layers/setLayerParams/setSpyLayer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../Map/Map */ "./src/Map/Map.js"), __webpack_require__(/*! ../Layer */ "./src/Layers/Layer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map, _Layer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.removeSpyLayer = exports.setSpyLayer = undefined;

  /** @module Layer */
  // todo 待测试
  var spyLayer = null;

  /**
   *
   * @param {*} layerA  配置 被监视的layer
   * @param {*} params  监视配置
   */
  function setSpyLayer(layerA, params) {
    if (!layerA) {
      return false;
    }
    // 参数补足
    params = params || {};
    // 圆参数获取
    var visible = params.visible ? params.visible : 0.5;
    // 圈大小
    var radius = params.radius ? params.radius : 75;
    var _map = (0, _Map.getMap)();
    // 基于图层 名字 获取 被透明化的图层列表
    // 对两个图层进行设置

    // 获取图层 此图层需要在可视区顶层
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    var spyLayerInfo = _addLayerParams[layerA.id];
    spyLayer = spyLayerInfo.layer;
    var mousePosition = null;
    // before rendering the layer, do some clipping
    spyLayer.on('prerender', function (event) {
      // console.log(event)
      var ctx = event.context;
      var pixelRatio = event.frameState.pixelRatio;
      ctx.save();
      ctx.beginPath();
      if (mousePosition) {
        // only show a circle around the mouse
        ctx.arc(mousePosition[0] * pixelRatio, mousePosition[1] * pixelRatio, radius * pixelRatio, 0, 2 * Math.PI);
        ctx.lineWidth = 5 * pixelRatio;
        ctx.strokeStyle = 'rgba(0,0,0,' + visible + ')';
        ctx.stroke();
      }
      ctx.clip();
    });

    // after rendering the layer, restore the canvas context
    spyLayer.on('postrender', function (event) {
      var ctx = event.context;
      ctx.restore();
    });

    var container = document.getElementById(this.mapParams.divID);

    // 鼠标事件
    container.addEventListener('mousemove', function (event) {
      mousePosition = _map.getEventPixel(event);
      _map.render();
    });
    container.addEventListener('mouseout', function (event) {
      mousePosition = null;
      _map.render();
    });
    return true;
  }
  function removeSpyLayer(layerA) {
    console.log('removeSpyLayer begin');
    if (!spyLayer) {
      return false;
    }

    // before rendering the layer, do some clipping
    spyLayer.on('prerender', function (event) {});
    spyLayer.on('postrender', function (event) {});
    var container = document.getElementById(this.mapParams.divID);
    // 鼠标事件 移除
    container.removeEventListener('mousemove', function () {});
    container.removeEventListener('mouseout', function () {});
    console.log('removeSpyLayer ok');
  }

  exports.setSpyLayer = setSpyLayer;
  exports.removeSpyLayer = removeSpyLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Layers/setLayerParams/setlayerOpacity.js":
/*!******************************************************!*\
  !*** ./src/Layers/setLayerParams/setlayerOpacity.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Layer */ "./src/Layers/Layer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Layer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLayerOpacity = exports.setLayerOpacity = undefined;

  /**
   * 增加 对图层 透明度的配置
   * 2019-09-17
   * @author liuyp
   */

  function setLayerOpacity(layerInfo, opacity) {
    var id = layerInfo.id;
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    if (_addLayerParams[id]) {
      var layer = _addLayerParams[id].layer;
      // var layer = this.layerList[layerinfo.id]
      if (layer) {
        layer.setOpacity(parseFloat(opacity));
        return true;
      }
    }
    return false;
  }
  /** @module Layer/LayerStatus */


  function getLayerOpacity(layerInfo) {
    var id = layerInfo.id;
    var _addLayerParams = (0, _Layer.getAddLayerParams)();
    if (_addLayerParams) {
      var layer = _addLayerParams[id].layer;
      if (layer) {
        return layer.getOpacity();
      }
    }
    return null;
  }

  exports.setLayerOpacity = setLayerOpacity;
  exports.getLayerOpacity = getLayerOpacity;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/Map.js":
/*!************************!*\
  !*** ./src/Map/Map.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./View */ "./src/Map/View.js"), __webpack_require__(/*! ./setGraticule */ "./src/Map/setGraticule.js"), __webpack_require__(/*! ./Map/controls */ "./src/Map/Map/controls.js"), __webpack_require__(/*! ./Map/interactions */ "./src/Map/Map/interactions.js"), __webpack_require__(/*! ./proj/getDefaultView */ "./src/Map/proj/getDefaultView.js"), __webpack_require__(/*! ../Layers/Layer */ "./src/Layers/Layer.js"), __webpack_require__(/*! ./Map/setOnParams */ "./src/Map/Map/setOnParams.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _View, _setGraticule, _controls, _interactions, _getDefaultView, _Layer, _setOnParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getMapTargetID = exports.removeGraticule = exports.addGraticule = exports.setMapView = exports.destoryMap = exports.getMap = exports.setMap = exports.initMap = undefined;


  // 用于存储当前初始化的配置
  /**
   * 当前Map类
   * @type {Map}
   */

  // import { pointerMoveDefault } from '../Action/mouseMove'
  // import { setMapMoveDefault } from '../Action/mapMove'
  // import { setMapDoubleClickDefault } from '../Action/mapDoubleClick'

  var mapNow = null;

  /**
   * 当前Map实例化对应ID 唯一
   * @type {String}
   */
  /**
   * @file map.js
   * @description 主要实现基于ol Map 中 实例初始化及相关信息处理
   * @module Map
   */

  // Map 相关操作
  var mapTargetID = null;

  /**
   * @description 初始化地图 initMap
   * @param {JSON} mapParams 初始化参数
   * @returns 返回ol map
   * @example
   *   // EPSG:4326 精简
   *   const mapParamsMin = {
   *         divID: 'main'
   *   }
   *   // EPSG:4326 配置
   *   const mapParamsLonlat = {
   *       divID: 'main',
   *       viewParam: {
   *           projection: 'EPSG:4326',
   *           extent: [-180, -90, 180, 90],
   *           // 中心为center
   *           center: [116.3, 39.5],
   *           zoom: 3,
   *           minZoom: 0,
   *           maxZoom: 8,
   *           multiWorld: true,
   *           // 以下参数实例化 ol6 新特性
   *           showFullExtent: true,
   *           smoothResolutionConstraint: false,
   *           constrainResolution: true,
   *           constrainOnlyCenter: false,
   *       },
   *       extendParam: {
   *           // +- 层级按钮
   *           isZoom: true,
   *           // 全屏按钮
   *           isFullScreen: true,
   *           // 显示鼠标位置
   *           isMousePosition: true,
   *           // 是否显示比例尺
   *           isScaleLine: true,
   *           // 是否显示 放大缩小滑动控制块
   *           isZoomSlider: true,
   *       },
   *       onParam: {
   *           mapMove: true,
   *           mouseMove: true,
   *           dbClick: true
   *       }
   *   }
   *   // FY4A 配置
   *   const mapParamsFY4A = {
   *       divID: 'main',
   *       viewParam: {
   *           projection: 'NOM:FY4A',
   *           proj4: '+proj=geos +h=35785863 +a=6378137.0 +k=1 +x_0=0 +y_0=0 +b=6356752.3 +lon_0=104.7 +no_defs +units=m ',
   *           extent: [-5495000, -5495000, 5495000, 5495000],
   *           // 中心为center
   *           center: [116.3, 39.5],
   *           zoom: 3,
   *           minZoom: 0,
   *           maxZoom: 8,
   *       }
   *   }
   *   // 北极配置
   *   const mapParamsEPSG3995 = {
   *       divID: 'main',
   *       viewParam: {
   *       projection: 'EPSG:3995',
   *       proj4: '+proj=stere +lat_0=90 +lat_ts=71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
   *       extent: [-3921568, -3921568, 3921568, 3921568],
   *       // 中心为center
   *       center: [116.3, 39.5],
   *       zoom: 3,
   *       minZoom: 0,
   *       maxZoom: 8,
   *       multiWorld: true,
   *    },
   *   }
   *   // 南极配置
   *   const mapParamsEPSG3031 = {
   *       divID: 'main',
   *       viewParam: {
   *           projection: 'EPSG:3031',
   *           proj4: '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
   *           extent: [-3920899, -3920899, 3920899, 3920899],
   *           // 中心为center
   *           center: [0, 0],
   *           zoom: 2,
   *           minZoom: 0,
   *           maxZoom: 8,
   *       }
   */
  function initMap(mapParams) {
    // 参数进行保存
    // 校验 参数ID
    if (!checkMapDiv(mapParams)) {
      return false;
    }
    // 初始化参数
    mapTargetID = mapParams.divID;

    // 若参数非法 返回空
    if (!_checkMapParams(mapParams)) {
      return false;
    }

    // 获取交互列表
    var interactionList = (0, _interactions.getInteraction)(mapParams);
    // 获取 view 信息
    var _view = (0, _View.getViewByParams)(mapParams.viewParam);

    // 设置默认 view
    (0, _getDefaultView.setDefaultView)(_view);
    var controlsByParam = (0, _controls.getControlByParam)(mapParams.extendParam);
    var map = new ol.Map({
      target: mapParams.divID,
      interactions: ol.interaction.defaults(interactionList),
      controls: controlsByParam,
      view: _view
    });
    mapNow = map;
    // 基于当前View 设置触发属性
    (0, _setOnParams.setOnParams)(mapParams.onParam);
    _initViewChange(mapParams.viewParam);
    // setViewByName(mapParams.viewParam)
    return map;
  }

  function _initViewChange(viewParam) {
    // console.log('_initViewChange', viewParam)
    if (!viewParam) {
      return false;
    }
    var _projection = viewParam.projection;
    if (!_projection || _projection === 'EPSG:4326') {
      return false;
    }
    // const FY4AParams = {
    //   center: [120, 39],
    //   zoom: 2
    // }
    //  setViewByName('FY4A', FY4AParams)
    var _view = (0, _View.setViewByName)(_projection, viewParam);
    // console.log('_initViewChange', _view)
    return _view;
  }

  // 返回 mapTargetID
  function getMapTargetID() {
    return mapTargetID;
  }

  function checkMapDiv(mapParams) {
    var mapDiv = document.getElementById(mapParams.divID);
    // 此DIV是否存在
    if (!mapDiv) {
      return false;
    }
    // 重复div 清空内容
    if (mapDiv.innerHTML !== '') {
      destoryMap();
      return true;
    }
    return true;
  }

  // 设置 Map
  function setMap(map) {
    if (map) {
      mapNow = map;
      return true;
    }
    return false;
  }

  /**
   * @description 返回当前的Map
   * @function
   * @returns {Map} 返回当前控件内 map
   * @api
   */
  function getMap() {
    if (mapNow) {
      return mapNow;
    }
    return null;
  }

  /**
   * @description 校验map 初始化参数
   * @private
   * @param {Json} params Map相关参数
   * @return {Boolean} 参数正确性 true
   */
  function _checkMapParams(params) {
    // TODO 添加参数校验
    return true;
    // 参数存在
    // if (!params.divID) {
    //   return false
    // }
    // // 对应DIV存在
    // const divID = document.getElementById(params.divID)
    // if (!divID) {
    //   return false
    // }
    // return true
  }

  /**
   * @description 移除地图 destoryMap
   * @function
   * @returns {boolen} 是否成功移除控件
   */
  function destoryMap() {
    var map = document.getElementById(mapTargetID);
    if (map) {
      map.innerHTML = '';
      mapTargetID = null;
      (0, _Layer.setAddLayerParams)({});
      return true;
    }
    return false;
  }

  // 设置当前的 View 模式 通过添加 proj模式的字符串进行设置
  function setMapView(newViewparam) {}
  // 重设 当前View


  // 当前地图显示Graticule
  var _graticuleNow = null;
  // 添加经纬度图层
  function addGraticule(params) {
    // todo 移植为6版本
    var graticule = (0, _setGraticule.getGraticule)(params);
    _graticuleNow = graticule;
    graticule.setMap(mapNow);
  }

  // 移除经纬度图层
  function removeGraticule() {
    var graticule = _graticuleNow;
    if (graticule) {
      graticule.setMap();
    }
  }

  exports.initMap = initMap;
  exports.setMap = setMap;
  exports.getMap = getMap;
  exports.destoryMap = destoryMap;
  exports.setMapView = setMapView;
  exports.addGraticule = addGraticule;
  exports.removeGraticule = removeGraticule;
  exports.getMapTargetID = getMapTargetID;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/Map/controls.js":
/*!*********************************!*\
  !*** ./src/Map/Map/controls.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../Format/lonlatFormat */ "./src/Format/lonlatFormat.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _lonlatFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defaultExtentParams = exports.getControlByParam = undefined;


  /**
   * @description 基于配置参数配置扩展功能初始化
   * @function
   * @param {Object} extendParam 扩展配置
   * @param {Boolean} [extendParam.isZoom = true] 扩展配置 是否显示 +- 层级按钮
   * @param {Boolean} [extendParam.isFullScreen = false] 扩展配置 是否显示 全屏按钮
   * @param {Boolean} [extendParam.isMousePosition = false] 扩展配置 是否显示 鼠标实时位置DIV
   * @param {Boolean} [extendParam.isScaleLine = false] 扩展配置 是否显示 比例尺DIV
   * @param {Boolean} [extendParam.isZoomSlider = false] 扩展配置 是否显示 层级slider
   * @returns ol.control
   */
  function getControlByParam(extendParam) {
    // 传入参数补全
    extendParam = extendParam || {};
    extendParam = defaultExtentParams(extendParam);
    var extendList = getExtendList(extendParam);
    var isZoom = true;
    if (extendParam.isZoom !== null) {
      isZoom = extendParam.isZoom;
    }

    var controlInfo = ol.control.defaults({
      // attribution 默认为 true
      attribution: true,
      // 是否可以zoom
      zoom: isZoom,
      // 是否可以旋转
      rotate: false
    }).extend(extendList);
    return controlInfo;
  }
  // 通过参数获取extend 列表
  /** @module Controls */

  function getExtendList(mapParams) {
    var extendList = [];
    // 20200515 添加 加减图层icon

    // 全屏按钮
    if (mapParams.isFullScreen) {
      var fullScreen = new ol.control.FullScreen({
        tipLabel: '全屏'
      });
      extendList.push(fullScreen);
    }

    // 显示鼠标位置
    // console.log(mapParams.isMousePosition, extendList)
    if (mapParams.isMousePosition) {
      // 参数空值校验
      var mousePositionParam = mapParams.MousePositionParam || {};

      var configDefault = {
        undefinedHTML: '-,-',
        projection: 'EPSG:4326',
        coordinateFormat: function coordinateFormat(coordinate) {
          return (0, _lonlatFormat.formatDegree)(coordinate);
        }
        // div 或 类名
      };var isMousePositionDiv = mousePositionParam.MousePositionDiv;
      var className = mousePositionParam.className;
      if (isMousePositionDiv && className) {
        // 鼠标位置
        configDefault.target = isMousePositionDiv;
        configDefault.className = className;
      }
      var mousePosition = new ol.control.MousePosition(configDefault);
      extendList.push(mousePosition);
    }

    // 是否显示比例尺
    if (mapParams.isScaleLine) {
      var scaleLine = new ol.control.ScaleLine();
      extendList.push(scaleLine);
    }

    // 是否显示 放大缩小滑动控制块
    if (mapParams.isZoomSlider) {
      // 新增 放大缩小 控制缩放级别
      var zoomSliderParams = mapParams.zoomSliderParams || 1.0;
      var zoomSlider = new ol.control.ZoomSlider({
        delte: zoomSliderParams
      });
      extendList.push(zoomSlider);
    }
    return extendList;
  }

  // 基于当前Map数据进行设置扩展信息
  function defaultExtentParams(params) {
    // 全屏按钮
    params.isFullScreen = params.isFullScreen !== null ? params.isFullScreen : false;

    // 显示鼠标位置
    params.isMousePosition = params.isMousePosition !== null ? params.isMousePosition : false;
    //  params.isMousePosition!== null = true
    // 是否显示比例尺
    params.isScaleLine = params.isScaleLine !== null ? params.isScaleLine : false;

    // 是否显示 放大缩小滑动控制块
    params.isZoomSlider = params.isZoomSlider !== null ? params.isZoomSlider : false;

    // https://openlayers.org/en/latest/apidoc/module-ol_interaction.html
    // altShiftDragRotate boolean (defaults to true)
    // Whether Alt-Shift-drag rotate is desired.

    // onFocusOnly boolean (defaults to false)
    // Interact only when the map has the focus. This affects the MouseWheelZoom and DragPan interactions and is useful when page scroll is desired for maps that do not have the browser's focus.

    // doubleClickZoom boolean (defaults to true)
    // Whether double click zoom is desired.

    // keyboard boolean (defaults to true)
    // Whether keyboard interaction is desired.

    // mouseWheelZoom boolean (defaults to true)
    // Whether mousewheel zoom is desired.

    // shiftDragZoom boolean (defaults to true)
    // Whether Shift-drag zoom is desired.

    // dragPan boolean (defaults to true)
    // Whether drag pan is desired.

    // pinchRotate boolean (defaults to true)
    // Whether pinch rotate is desired.

    // pinchZoom boolean (defaults to true)
    // Whether pinch zoom is desired.

    return params;
  }

  exports.getControlByParam = getControlByParam;
  exports.defaultExtentParams = defaultExtentParams;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/Map/interactions.js":
/*!*************************************!*\
  !*** ./src/Map/Map/interactions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /**
   * @description 基于参数获取交互初始化内容
   * @function
   * @param {*} mapParams
   */
  function getInteraction(mapParams) {
    var interactionParams = mapParams.interactionParams || {};
    // 默认 参数选项
    var defaultParam = {
      altShiftDragRotate: true,
      onFocusOnly: false,
      constrainResolution: false,
      // constrainResolution: false,
      doubleClickZoom: true,
      keyboard: true,
      mouseWheelZoom: true,
      shiftDragZoom: true,
      dragPan: true,
      pinchRotate: true,
      pinchZoom: true
    };

    var defaultInteraction = defaultParam;
    for (var key in interactionParams) {
      defaultInteraction[key] = interactionParams[key];
    }
    // let defaultInteraction = {
    //   altShiftDragRotate: interactionParams.altShiftDragRotate ? interactionParams.altShiftDragRotate : true,
    //   onFocusOnly: interactionParams.onFocusOnly ? interactionParams.onFocusOnly : false,
    //   constrainResolution: interactionParams.constrainResolution ? interactionParams.constrainResolution : false,

    //   // constrainResolution: false,

    //   doubleClickZoom: interactionParams.doubleClickZoom ? interactionParams.doubleClickZoom : true,
    //   keyboard: interactionParams.keyboard ? interactionParams.keyboard : true,
    //   mouseWheelZoom: interactionParams.mouseWheelZoom ? interactionParams.mouseWheelZoom : true,
    //   shiftDragZoom: interactionParams.shiftDragZoom ? interactionParams.shiftDragZoom : true,
    //   dragPan: interactionParams.dragPan ? interactionParams.dragPan : true,
    //   pinchRotate: interactionParams.pinchRotate ? interactionParams.pinchRotate : true,
    //   pinchZoom: interactionParams.pinchZoom ? interactionParams.pinchZoom : true
    //   // zoom 比例可调节 todo 是否配置
    //   // zoomDelta: interactionParams.zoomDelta || 1,
    //   // zoomDuration: interactionParams.zoomDelta || 1
    //   // mouseWheelZoom: false
    //   // onFocusOnly: true

    // }
    return defaultInteraction;
  }

  exports.getInteraction = getInteraction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/Map/setOnParams.js":
/*!************************************!*\
  !*** ./src/Map/Map/setOnParams.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../Map */ "./src/Map/Map.js"), __webpack_require__(/*! ../../Action/mouseMove */ "./src/Action/mouseMove.js"), __webpack_require__(/*! ../../Action/mapMove */ "./src/Action/mapMove.js"), __webpack_require__(/*! ../../Action/mapDoubleClick */ "./src/Action/mapDoubleClick.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map, _mouseMove, _mapMove, _mapDoubleClick) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setOnParams = undefined;


  /**
   * 设置Map相关PubSub事件属性
   * @param {Object} onParams Pubsub属性
   * @param {Boolean} [onParams.mapMove =false] Pubsub 触发 mapMove
   * @param {Boolean} [onParams.mouseMove =false]  Pubsub 触发 mouseMove
   * @param {Boolean} [onParams.dbClick =false]  Pubsub 触发 dbClick
   */
  /** @module Map */
  function setOnParams(onParams) {
    var _mapNow = (0, _Map.getMap)();
    if (onParams) {
      // 地图移动事件
      if (onParams.mapMove) {
        (0, _mapMove.setMapMoveDefault)(_mapNow);
      }
      // 鼠标移动事件
      if (onParams.mouseMove) {
        (0, _mouseMove.pointerMoveDefault)(_mapNow);
      }
      // 鼠标双击事件
      if (onParams.dbClick) {
        (0, _mapDoubleClick.setMapDoubleClickDefault)(_mapNow);
      }
    }
  }

  exports.setOnParams = setOnParams;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/View.js":
/*!*************************!*\
  !*** ./src/Map/View.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Map */ "./src/Map/Map.js"), __webpack_require__(/*! ./getViewByParams */ "./src/Map/getViewByParams.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map2, _getViewByParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getViewNow = exports.setZoomResolutionMode = exports.setViewByName = exports.getViewZoomNum = exports.setViewZoomNum = exports.getViewByParams = exports.getViewCenter = exports.setCenter = undefined;

  // 未被调用
  // import { getSHKTileSource } from '../Layers/getUTTSLayer'

  /** @module View */

  // import { getDefaultView } from './proj/getDefaultView'
  // import { getArcticView } from './proj/setArctic'
  // import { getAntarcticView } from './proj/setAntarctic'
  // import { getMercatorView } from './proj/setMercator'
  // import { getMollweideView } from './proj/setMollweide'
  // import { getLatlonView } from './proj/setLatlon'
  // import { getLambertView } from './proj/setLambert'
  // import { getWMSSource } from '../Layers/getWMSLayer'

  var viewNow = null;
  // import { getAddLayerParams } from '../Layers/Layer'

  // import { getFY4GeosView } from './proj/setFY4AGeosView'
  // import { getH8GeosView } from './proj/setH8GeosView'

  function getViewNow() {
    return viewNow;
  }

  /**
   * @description 基于参数 初始化View
   * @function
   * @param {Object} viewParams  view参数
   * @param {Number[]} [viewParams.center=[116.3, 39.9]] 默认中心点
   * @param {String} [viewParams.projection='EPSG:4326'] 默认投影方式
   * @param {String} [viewParams.proj4] 投影方式 基于 proj4 的 字符串
   * @param {Number} [viewParams.zoom=4] 默认缩放层级
   * @param {Number} [viewParams.minZoom=0] 默认最小缩放层级
   * @param {Number} [viewParams.maxZoom=10] 默认最大缩放层级
   * @param {Number} [viewParams.extent=[-180, -90, 180, 90]] 默认显示范围
   * @param {Boolean} [viewParams.multiWorld=false] 默认是否显示多个世界地图
   * @return view
   * @see _defaultParam
   */
  function getViewByParams(viewParams) {
    // 校验参数正确性 -- 必须要有 不能被补足的几个参数 （例如 ）
    var isVaild = _checkViewParam(viewParams);
    if (!isVaild) {
      return null;
    }
    // 补足参数
    viewParams = _defaultParam(viewParams);

    var viewInfo = new ol.View({
      // 中心
      center: viewParams.center,
      // 投影方式
      // projection: viewParams.projection,
      projection: 'EPSG:4326',
      // 当前层级
      zoom: viewParams.zoom,
      // 最小 zoom
      minZoom: viewParams.minZoom,
      // 最大 zoom
      maxZoom: viewParams.maxZoom,
      // 设置地图的显示范围。
      extent: viewParams.extent,
      // 如果设置为false，视图将受到约束。
      multiWorld: viewParams.multiWorld
      // 如果showFullExtent为true，
      // 则用户将能够缩小视图，使视口超过配置范围的高度或宽度，但不能同时超出这两个范围，从而允许显示完整范围。
      // showFullExtent: viewParams.showFullExtent,
      // 如果设置为true,允许视图稍微超出范围。
      // smoothResolutionConstraint: viewParams.smoothResolutionConstraint,
      // 如果为true，则视图在交互后将始终设置为最接近的缩放级别；false表示允许中间缩放级别。
      // constrainResolution: viewParams.constrainResolution,
      // 如果设置为true，范围约束将仅用于中心点，而不是整个范围。
      // constrainOnlyCenter: viewParams.constrainOnlyCenter,
      // 用于计算分辨率的缩放因子。
      // zoomFactor: viewParams.zoomFactor || 1,
      // center: [0, 0],
      // zoom: 2,
      // constrainResolution: true
      // 初始化 分辨率数组
      //  resolutions: viewParams.resolutions
    });
    viewNow = viewInfo;
    return viewInfo;
  }

  // 校验 View 参数配置
  function _checkViewParam(viewParams) {
    // todo  校验补足后的配置
    return true;
  }

  function _defaultParam(viewParams) {
    // 默认配置补全
    viewParams = viewParams || {};
    // 参数配置
    viewParams.projection = viewParams.projection || 'EPSG:4326';
    viewParams.center = viewParams.center || [116.3, 39.5];
    viewParams.zoom = viewParams.zoom || 4;
    viewParams.minZoom = viewParams.minZoom || 0;
    viewParams.maxZoom = viewParams.maxZoom || 10;
    viewParams.extent = viewParams.extent || [-180, -90, 180, 90];
    viewParams.multiWorld = viewParams.multiWorld !== null || false;
    viewParams.showFullExtent = viewParams.showFullExtent !== null || true;
    viewParams.smoothResolutionConstraint = viewParams.smoothResolutionConstraint !== null || false;
    viewParams.constrainResolution = viewParams.constrainResolution !== null || true;
    viewParams.constrainOnlyCenter = viewParams.constrainOnlyCenter !== null || true;

    return viewParams;
  }

  /**
   * @description 设置当前 view 中心
   * @param {*} lon  经度 -180~180
   * @param {*} lat  纬度 -90 ~ 90
   */
  function setCenter(lon, lat) {
    // if (!isNaN(lon) || !isNaN(lat)) {
    //   return false
    // }
    var _lon = Number(lon);
    var _lat = Number(lat);

    var _Map = (0, _Map2.getMap)();
    var center = [_lon, _lat];
    // todo 当前选择 中心转化 需要基于当前投影方式对经纬度进行处理
    // if (this.selectedProj) {
    //   const newProj = this.selectedProj.value
    //   if (newProj) {
    //     // 无论什么都使用proj 进行转化
    //     center = proj4(newProj).forward([lon, lat])
    //   }
    // }
    // 设置地图中心为成都的坐标，即可让地图移动到成都
    viewNow.setCenter(center);
    // 地图显示重置
    _Map.render();
    // 基于当前View
    return true;
  }

  /**
   * @description  获取当前 View的中心
   * @function
   * @returns [lon,lat]
   */
  function getViewCenter() {
    var _Map = (0, _Map2.getMap)();
    // 此处返回的中心 为当前偷偷有模式下的中心
    return _Map.getView().getCenter();
  }

  /**
   * @description 设置当前缩放 成绩
   * @function
   * @param {Double} value 当前需要设置的缩放层级 ，例如：6 7
   */
  function setViewZoomNum(value) {
    if (viewNow) {
      return viewNow.setZoom(value);
    }
  }

  /**
   * @description 获取当前的缩放层级
   * @function
   * @return {double} 当前地图缩放层级
   */
  function getViewZoomNum() {
    return viewNow.getZoom();
  }

  /**
   * @description 基于参数 设置当前view 投影方式
   * @function
   * @param {String} name 投影方式名称 arctic antarctic mercator mollweide latlon lambert
   */
  function setViewByName(name, params) {
    var changeView = (0, _getViewByParams.getViewByName)(name, params);
    if (changeView) {
      var map = (0, _Map2.getMap)();
      map.setView(changeView);
      viewNow = changeView;
      return true;
      // 投影转换时 WMS 图层需要设置 projection
      // let layerList = getAddLayerParams()
      // layerList = Object.keys(layerList).map(key => {
      //   return layerList[key]
      // })
      // layerList.forEach(_layer => {
      //   const layerinfo = _layer.info
      //   // WMS 图层数据 重新获取
      //   if (layerinfo.mapType === 'WMS') {
      //     // ol6 不需要再次加载 source
      //     // const _source = getWMSSource(layerinfo)
      //     // _layer.layer.setSource(_source)
      //   }
      // })
    }
    return false;
  }

  function setZoomResolutionMode(isConstrain) {
    // true 为不允许缩放到中间等级
    // false 为允许缩放到中间等级
    viewNow.setConstrainResolution(isConstrain);
    return true;
  }
  exports.setCenter = setCenter;
  exports.getViewCenter = getViewCenter;
  exports.getViewByParams = getViewByParams;
  exports.setViewZoomNum = setViewZoomNum;
  exports.getViewZoomNum = getViewZoomNum;
  exports.setViewByName = setViewByName;
  exports.setZoomResolutionMode = setZoomResolutionMode;
  exports.getViewNow = getViewNow;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/getViewByParams.js":
/*!************************************!*\
  !*** ./src/Map/getViewByParams.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./proj/getDefaultView */ "./src/Map/proj/getDefaultView.js"), __webpack_require__(/*! ./proj/setArctic */ "./src/Map/proj/setArctic.js"), __webpack_require__(/*! ./proj/setAntarctic */ "./src/Map/proj/setAntarctic.js"), __webpack_require__(/*! ./proj/setMercator */ "./src/Map/proj/setMercator.js"), __webpack_require__(/*! ./proj/setMollweide */ "./src/Map/proj/setMollweide.js"), __webpack_require__(/*! ./proj/setLatlon */ "./src/Map/proj/setLatlon.js"), __webpack_require__(/*! ./proj/setLambert */ "./src/Map/proj/setLambert.js"), __webpack_require__(/*! ./proj/setFY4AGeosView */ "./src/Map/proj/setFY4AGeosView.js"), __webpack_require__(/*! ./proj/setFY4BGeosView */ "./src/Map/proj/setFY4BGeosView.js"), __webpack_require__(/*! ./proj/setH8GeosView */ "./src/Map/proj/setH8GeosView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _getDefaultView, _setArctic, _setAntarctic, _setMercator, _setMollweide, _setLatlon, _setLambert, _setFY4AGeosView, _setFY4BGeosView, _setH8GeosView) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getViewByName = undefined;


  /**
   * @description 基于参数 设置当前view 投影方式
   * @function
   * @param {String} name 投影方式名称 arctic antarctic mercator mollweide latlon lambert
   * @param {Object} params 投影参数
   * @example
   * // 以下参数 投影方式修改 需要其他参数
   * const projList= ['arctic','antarctic','mercator','mollweide','latlon','lambert']
   * // FY4A H8 标称投影修改 需要加入其他参数
   * const projList1= ['NOM:FY4A','NOM:H8']
   */
  function getViewByName(name, params) {
    var changeView = null;
    switch (name) {
      case 'arctic':
      case 'EPSG:3995':
        {
          // 北极视角
          changeView = (0, _setArctic.getArcticView)('EPSG:3995', params);
          break;
        }
      case 'antarctic':
      case 'EPSG:3031':
        {
          // 南极 视角
          changeView = (0, _setAntarctic.getAntarcticView)('EPSG:3031', params);
          break;
        }
      case 'mercator':
        {
          // 墨卡托
          changeView = (0, _setMercator.getMercatorView)();
          break;
        }
      case 'mollweide':
        {
          changeView = (0, _setMollweide.getMollweideView)();
          break;
        }
      case 'latlon':
        {
          // 等经纬度
          changeView = (0, _setLatlon.getLatlonView)();
          break;
        }
      case 'lambert':
        {
          changeView = (0, _setLambert.getLambertView)();
          break;
        }
      case 'NOM:FY4A':
        {
          changeView = (0, _setFY4AGeosView.getFY4AGeosView)(name, params);
          break;
        }
      case 'NOM:FY4B':
        {
          changeView = (0, _setFY4BGeosView.getFY4BGeosView)(name, params);
          break;
        }

      case 'NOM:H8':
        {
          changeView = (0, _setH8GeosView.getH8GeosView)(name, params);
          break;
        }
      default:
        {
          changeView = (0, _getDefaultView.getDefaultView)();
          break;
        }
    }
    return changeView;
  }

  exports.getViewByName = getViewByName;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/getDefaultView.js":
/*!****************************************!*\
  !*** ./src/Map/proj/getDefaultView.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var defaultView = null;
  function setDefaultView(view) {
    defaultView = view;
  }

  function getDefaultView() {
    return defaultView;
  }

  exports.setDefaultView = setDefaultView;
  exports.getDefaultView = getDefaultView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/setAntarctic.js":
/*!**************************************!*\
  !*** ./src/Map/proj/setAntarctic.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @module View/Proj
   * @description 设置极射赤面投影-南极
   */

  // import proj4 from 'proj4'

  var defaultProj4Key = 'EPSG:3031';
  var defaultProj4Str = '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs';

  /* 设置极射赤面投影 */
  /**
   * @description 设置极射赤面投影-南极
   * @param {String} [name='EPSG:3031'] 投影名称
   * @param {Object} params 图层参数
   * @param {String} [params.proj4] 图层参数
   * @param {String} [params.extent] 图层参数
   * @param {String} [params.center] 图层参数
   * @param {String} [params.zoom] 图层参数
   * @param {String} [params.zoomMin] 图层参数
   * @param {String} [params.zoomMax] 图层参数
   * @returns ol.View
   */
  function getAntarcticView(name, params) {
    if (!params) {
      params = {};
    }
    var projName = name || defaultProj4Key;
    var projStr = params.proj4 || defaultProj4Str;
    // 设置投影
    proj4.defs(projName, projStr);

    // ol 注册投影 register
    ol.proj.proj4.register(proj4);
    var projAntarctic = ol.proj.get(projName);

    var extent = params.extent || [-3920899, -3920899, 3920899, 3920899];
    // 投影设置 proj
    projAntarctic.setExtent(extent);

    var _center = [0, 0];
    if (params.center) {
      var AntarcticProjection = new ol.proj.Projection({
        code: projName,
        extent: extent
      });
      _center = ol.proj.fromLonLat(params.center, AntarcticProjection);
    }

    var viewAntarctic = new ol.View({
      center: _center,
      projection: projAntarctic,
      zoom: params.zoom || 2,
      minZoom: params.minZoom || 0,
      maxZoom: params.maxZoom || 5
    });
    return viewAntarctic;
  }

  exports.getAntarcticView = getAntarcticView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/setArctic.js":
/*!***********************************!*\
  !*** ./src/Map/proj/setArctic.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @module View/Proj
   * @description 设置极射赤面投影- 北极
   */

  // import proj4 from 'proj4'

  var defaultProjName = 'EPSG:3995';
  var defaultProjStr = '+proj=stere +lat_0=90 +lat_ts=71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs';

  /* 设置极射赤面投影 */
  /**
   * @description 设置极射赤面投影  北极
   * @param {String} [name='EPSG:3995'] 投影名称
   * @param {Object} params 图层参数
   * @returns ol.View
   * @example
   * const name= 'EPSG:3995'
   * const viewParams= {}
   * mOlClass.getViewByName(name,viewParams)
   */
  function getArcticView(name, params) {
    if (!params) {
      params = {};
    }
    var newProjCode = name || defaultProjName;
    var proj4def = params.proj4 || defaultProjStr;
    var extent = params.extent || [-3921568, -3921568, 3921568, 3921568];

    // 设置投影
    proj4.defs(newProjCode, proj4def);
    // ol 注册投影 register
    ol.proj.proj4.register(proj4);

    var proj3995 = ol.proj.get(newProjCode);

    // 投影设置 proj
    proj3995.setExtent(extent);
    // 基于参数设置参数
    var _center = [0, 0];
    if (params.center) {
      var ArcticProjection = new ol.proj.Projection({
        code: newProjCode,
        extent: extent
      });
      _center = ol.proj.fromLonLat(params.center, ArcticProjection);
    }
    var view3995 = new ol.View({
      center: _center,
      projection: proj3995,
      zoom: params.zoom || 2,
      minZoom: params.minZoom || 0,
      maxZoom: params.maxZoom || 5
    });
    return view3995;
  }

  exports.getArcticView = getArcticView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/setFY4AGeosView.js":
/*!*****************************************!*\
  !*** ./src/Map/proj/setFY4AGeosView.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  // geos
  // https://github.com/mbloch/mapshaper-proj/blob/master/src/projections/tmerc.js
  Math.hypot = function (a, b) {
    return Math.pow(Math.pow(a, 2) + Math.pow(b, 2), 0.5);
  };

  function init_geos() {
    this.h = this.h !== undefined ? parseFloat(this.h) : 0;
    this.a = this.a !== undefined ? parseFloat(this.a) : 0;
    this.b = this.b !== undefined ? parseFloat(this.b) : 0;
    this.long0 = this.long0 !== undefined ? this.long0 : 0;
    this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;
    this.k = this.k !== undefined ? parseFloat(this.k) : 1;
    this.x0 = this.x0 !== undefined ? this.x0 : 0;
    this.y0 = this.y0 !== undefined ? this.y0 : 0;

    //h 已经存在
    this.radius_g_1 = this.h / this.a;
    this.radius_g = 1.0 + this.radius_g_1;
    this.C = this.radius_g * this.radius_g - 1.0;
    this.globalScale = this.k * this.a;

    var es = 1.0 - this.b * this.b / (this.a * this.a);
    var one_es = 1.0 - es;
    var rone_es = 1.0 / one_es;

    this.radius_p = Math.sqrt(one_es);
    this.radius_p2 = one_es;
    this.radius_p_inv2 = rone_es;
  }

  function forward_geos(p) {
    var x0 = p.x;
    var y0 = p.y;

    var lon = this.long0 != 0 ? rollLongitude(p.x - this.long0) : p.x;
    var lat = p.y;
    /**地心纬度的计算*/
    lat = Math.atan(this.radius_p2 * Math.tan(lat));
    /* 计算从卫星到地球表面位置（lon，lat）的矢量的三个分量。*/
    var r = this.radius_p / Math.hypot(this.radius_p * Math.cos(lat), Math.sin(lat));
    var Vx = r * Math.cos(lon) * Math.cos(lat);
    var Vy = r * Math.sin(lon) * Math.cos(lat);
    var Vz = r * Math.sin(lat);

    /***检查可见性。*/
    if ((this.radius_g - Vx) * Vx - Vy * Vy - Vz * Vz * this.radius_p_inv2 < 0) {
      // debugger;
      p.x = 0;
      p.y = 0;
      return p;
      //throw new Error('geos error');
    } else {
      /**基于卫星视角的计算*/
      var tmp = this.radius_g - Vx;
      var x = this.radius_g_1 * Math.atan(Vy / tmp);
      var y = this.radius_g_1 * Math.atan(Vz / Math.hypot(Vy, tmp));
      p.x = this.globalScale * x + this.x0;
      p.y = this.globalScale * y + this.y0;
    }
    var xx = p.x;
    var yy = p.y;
    return p;
  }

  /**
        Transverse Mercator Inverse  -  x/y to long/lat
      */
  function inverse_geos(p) {
    var x = (p.x - this.x0) / this.globalScale;
    var y = (p.y - this.y0) / this.globalScale;

    /***设置矢量从卫星到位置的三个分量**/
    var Vx = -1.0;
    var Vy = Math.tan(x / this.radius_g_1);
    var Vz = Math.tan(y / this.radius_g_1) * Math.hypot(1.0, Vy);

    /***三次方程和行列式中项的计算***/
    var a = Vz / this.radius_p;
    a = Vy * Vy + a * a + Vx * Vx;
    var b = 2 * this.radius_g * Vx;
    var det = b * b - 4.0 * a * this.C;
    if (det < 0) {
      p.x = NaN;
      p.y = NaN;
      return p;
    }

    /***从卫星到位置的矢量三个分量的计算***/
    var k = (-b - Math.sqrt(det)) / (2.0 * a);
    Vx = this.radius_g + k * Vx;
    Vy = Vy * k;
    Vz = Vz * k;

    /***经度和纬度的计算***/
    var lambda = Math.atan2(Vy, Vx);
    var phi = Math.atan(Vz * Math.cos(lambda) / Vx);
    phi = Math.atan(this.radius_p_inv2 * Math.tan(phi));

    p.x = this.long0 != 0 ? rollLongitude(lambda + this.long0) : lambda;
    p.y = phi;
    return p;
  }

  function rollLongitude(x) {
    return x - 6.283185307179586 * Math.floor(x / 6.283185307179586 + 0.5);
  }

  function toDegrees(angrad) {
    return angrad * 180.0 / Math.PI;
  }

  function toRadians(angdeg) {
    return angdeg / 180.0 * Math.PI;
  }

  var names_geos = ["geos"];
  var geos = {
    init: init_geos,
    forward: forward_geos,
    inverse: inverse_geos,
    names: names_geos
  };

  proj4.Proj.projections.add(geos);

  var defaultProjKey = 'NOM:FY4A';
  var defaultProjStr = '+proj=geos +h=35785863 +a=6378137.0 +k=1 +x_0=0 +y_0=0 +b=6356752.3 +lon_0=104.7 +no_defs +units=m ';
  /**
   * @description FY4A默认参数配置
   * @param {Strig} projkey 投影名称默认  'NOM:FY4A'
   * @param {Object} params 参数
   * @returns ol.View
   * @example
   * function
   */
  function getFY4AGeosView(projkey, params) {
    var projKey = projkey || defaultProjKey;
    var projStr = params.proj4 || defaultProjStr;
    proj4.defs(projKey, projStr);

    ol.proj.proj4.register(proj4);
    var sphereGeos = ol.proj.get(projKey);

    // const border = 3921568
    //  const border = 5495000
    var _extent = params.extent || [-5495000, -5495000, 5495000, 5495000];
    sphereGeos.setExtent(_extent);
    // const fromLonLat = ol.proj.getTransform('EPSG:4326', sphereGeos)
    // const lambertExtent = ol.extent.applyTransform([14.7, -70, -14.7, 70], fromLonLat)
    // console.log(lambertExtent)

    var FY4AProjection = new ol.proj.Projection({
      code: projKey,
      extent: _extent
    });

    var _center = [0, 0];
    if (params.center) {
      _center = ol.proj.fromLonLat(params.center, FY4AProjection);
    }
    var _view = new ol.View({
      center: _center,
      projection: FY4AProjection,
      //  extent: _extent,
      // resolutions: [65536, 32768, 16384, 8192, 4096, 2048],
      zoom: params.zoom || 3,
      minZoom: params.minZoom || 0,
      maxZoom: params.maxZoom || 7
    });
    return _view;
  }

  exports.getFY4AGeosView = getFY4AGeosView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/setFY4BGeosView.js":
/*!*****************************************!*\
  !*** ./src/Map/proj/setFY4BGeosView.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var defaultProjKey = 'NOM:FY4B';
  var defaultProjStr = '+proj=geos +h=35785863 +a=6378137.0 +k=1 +x_0=0 +y_0=0 +b=6356752.3 +lon_0=104.7 +no_defs +units=m ';
  /**
   * @description FY4B 标称投影默认配置
   * @param {String} projkey 名称
   * @param {Object} params 配置
   * @returns ol.View
   * @example
   * function changeFY4B() {
   *     const projFY4BName = 'NOM:FY4B'
   *     const projFY4BParams = {
   *       projection: 'NOM:FY4B',
   *       proj4: '+proj=geos +h=35785863 +a=6378137.0 +k=1 +x_0=0 +y_0=0 +b=6356752.3 +lon_0=104.7 +no_defs +units=m ',
   *       extent: [-5495000, -5495000, 5495000, 5495000],
   *       // 中心为center
   *       center: [116.3, 39.5],
   *       zoom: 1,
   *       minZoom: 0,
   *       maxZoom: 4,
   *     }
   *     mOlClass.setViewByName(projFY4BName, projFY4BParams)
   *   }
   */
  function getFY4BGeosView(projkey, params) {
    var projKey = projkey || defaultProjKey;
    var projStr = params.proj4 || defaultProjStr;
    proj4.defs(projKey, projStr);

    ol.proj.proj4.register(proj4);
    var sphereGeos = ol.proj.get(projKey);

    // const border = 3921568
    //  const border = 5495000
    var _extent = params.extent || [-5495000, -5495000, 5495000, 5495000];
    sphereGeos.setExtent(_extent);

    var FY4AProjection = new ol.proj.Projection({
      code: projKey,
      extent: _extent
    });

    var _center = [0, 0];
    if (params.center) {
      _center = ol.proj.fromLonLat(params.center, FY4AProjection);
    }
    var _view = new ol.View({
      center: _center,
      projection: FY4AProjection,
      //  extent: _extent,
      // resolutions: [65536, 32768, 16384, 8192, 4096, 2048],
      zoom: params.zoom || 3,
      minZoom: params.minZoom || 0,
      maxZoom: params.maxZoom || 7
    });
    return _view;
  }

  exports.getFY4BGeosView = getFY4BGeosView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/setH8GeosView.js":
/*!***************************************!*\
  !*** ./src/Map/proj/setH8GeosView.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /** @module View/Proj */

  // import proj4 from 'proj4'
  // import './initProjGeos'

  /**
   * @description H8 全员盘投影
   * @param {Object} params 投影参数
   * @returns {ol.View} H8 全员盘投影 View
   * @example
   *  function changeH8() {
   *    const projH8Name = 'NOM:H8'
   *    const projH8Params = {
   *      projection: 'NOM:H8',
   *      proj4: '+proj=geos +h=35785863 +a=6378137.0 +k=1 +x_0=0 +y_0=0 +b=6356752.3 +lon_0=104.7 +no_defs +units=m ',
   *      extent: [-5495000, -5495000, 5495000, 5495000],
   *      // 中心为center
   *      center: [116.3, 39.5],
   *      zoom: 1,
   *      minZoom: 0,
   *      maxZoom: 4,
   *    }
   *    mOlClass.setViewByName(projH8Name, projH8Params)
   *  }
   */
  function getH8GeosView(name, params) {
    // TODO 需要和 H8 实际数据
    if (!params) {
      params = {};
    }
    var H8ProjKey = name || 'NOM:H8';
    var H8Proj = params.proj4 || '+proj=geos +h=35785863 +a=6378137.0 +k=1 +x_0=0 +y_0=0 +b=6356752.3 +lon_0=140.7 +no_defs +units=m';
    proj4.defs(H8ProjKey, H8Proj);
    ol.proj.proj4.register(proj4);

    var H8Geos = ol.proj.get(H8ProjKey);
    var defaultExtent = params.extent || [-5495000, -5495000, 5495000, 5495000];
    H8Geos.setExtent(defaultExtent);

    var H8Projection = new ol.proj.Projection({
      code: H8ProjKey,
      extent: defaultExtent
    });

    var _center = [0, 0];
    if (params.center) {
      _center = ol.proj.fromLonLat(params.center, H8Projection);
    }

    var viewH8Geos = new ol.View({
      center: _center,
      projection: H8Projection,
      zoom: params.zoom || 4,
      minZoom: params.minZoom || 0,
      maxZoom: params.maxZoom || 7
    });

    return viewH8Geos;
  }

  exports.getH8GeosView = getH8GeosView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/setLambert.js":
/*!************************************!*\
  !*** ./src/Map/proj/setLambert.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @module View/Proj
   * @description 设置兰伯特投影
   */
  // import proj4 from 'proj4'

  /**
   * @description 兰伯特投影
   * @param {*} name 投影名称
   * @param {*} params 投影参数
   * @returns ol.View
   */
  function getLambertView(name, params) {
    if (!params) {
      params = {};
    }
    // lambertProjCode lambertProjCode lambertProj

    var lambertProjCode = name || 'EPSG:102012';
    var proj4def = params.proj4 || '+proj=lcc +lat_1=30 +lat_2=62 +lat_0=0 +lon_0=105 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs';

    // const extent = [-1274211.3210544332 * 14.2, -8897266.899153264, 1274211.3210544332 * 14.2, 8897266.899153264]
    // const worldExtent = [-179.99, -89.99, 179.99, 89.99]

    var extent = params.extent || [-180, -90, 180, 90];

    proj4.defs(lambertProjCode, proj4def);
    ol.proj.proj4.register(proj4);

    // 从 extent 获取 新 lambertExtent
    var lambertProj = ol.proj.get(lambertProjCode);
    var fromLonLat = ol.proj.getTransform('EPSG:4326', lambertProj);
    var lambertExtent = ol.extent.applyTransform(extent, fromLonLat);
    // console.log(lambertExtent);
    lambertProj.setExtent(lambertExtent);

    var newView = new ol.View({
      projection: lambertProj,
      zoom: params.zoom || 4
    });
    // 为何进行单独设置？
    newView.fit(lambertExtent);
    newView.setZoom(4);
    return newView;
  }

  exports.getLambertView = getLambertView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/setLatlon.js":
/*!***********************************!*\
  !*** ./src/Map/proj/setLatlon.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @module View/Proj
   * @description 等经纬度投影
   */

  // import proj4 from 'proj4'

  function getLatlonView() {
    // TODO 恢复切换前样式
    var proj4def = '+proj=longlat +datum=WGS84 +no_defs';
    var newProjCode = 'EPSG:4326';
    var extent = [-180, -90, 180, 90];

    proj4.defs(newProjCode, proj4def);
    ol.proj.proj4.register(proj4);
    var newProj = ol.proj.get(newProjCode);
    newProj.setExtent(extent);
    var newView = new ol.View({
      projection: newProj
    });
    newView.fit(extent);
    newView.setZoom(4);

    return newView;
  }

  exports.getLatlonView = getLatlonView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/setMercator.js":
/*!*************************************!*\
  !*** ./src/Map/proj/setMercator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /**
   * @module View/Proj
   * @description 墨卡托投影
   */

  /* 墨卡托投影 */
  // import proj4 from 'proj4'

  function getMercatorView() {
    var proj4def = '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs';
    var newProjCode = 'EPSG:3395';
    var extent = [-180, -80, 180, 84];

    proj4.defs(newProjCode, proj4def);
    ol.proj.proj4.register(proj4);

    var newProj = ol.proj.get(newProjCode);
    var fromLonLat = ol.proj.getTransform('EPSG:4326', newProj);
    var newExtent = ol.extent.applyTransform(extent, fromLonLat);
    newProj.setExtent(newExtent);

    var newView = new ol.View({
      projection: newProj
    });
    newView.fit(newExtent);
    newView.setZoom(4);

    return newView;
  }

  exports.getMercatorView = getMercatorView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/proj/setMollweide.js":
/*!**************************************!*\
  !*** ./src/Map/proj/setMollweide.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* 莫尔韦德投影 */

  // import proj4 from 'proj4'

  function getMollweideView() {
    var proj4def = '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs';
    var newProjCode = 'EPSG:54009';
    var extent = [-18e6, -9e6, 18e6, 9e6];
    var worldExtent = [-179.99, -89.99, 179.99, 89.99];

    proj4.defs(newProjCode, proj4def);
    ol.proj.proj4.register(proj4);

    var newProj = ol.proj.get(newProjCode);
    newProj.setExtent(extent);
    newProj.setWorldExtent(worldExtent);

    var newView = new ol.View({
      projection: newProj
    });
    newView.fit(extent);
    newView.setZoom(4);

    return newView;
  }

  exports.getMollweideView = getMollweideView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/Map/setGraticule.js":
/*!*********************************!*\
  !*** ./src/Map/setGraticule.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // 单图产品
  function getGraticule(params) {
    // TODO 使用参数传递样式
    if (!params) {
      params = {};
    }
    var offsetY = params.offsetY || -50;
    var graticule = new ol.layer.Graticule({
      // the style to use for the lines, optional.
      strokeStyle: new ol.style.Stroke({
        // color: 'rgba(150,150,150,0.9)',
        color: '#eeeeee',
        width: 1.5,
        lineDash: [0.4, 4]
      }),
      showLabels: true,
      targetSize: 400,
      lonLabelFormatter: function lonLabelFormatter(e) {
        return e + '°';
      },
      latLabelFormatter: function latLabelFormatter(e) {
        return e + '°';
      },
      lonLabelStyle: new ol.style.Text({
        font: '22px Calibri,sans-serif',
        textBaseline: 'bottom',
        offsetY: offsetY,
        fill: new ol.style.Fill({
          color: 'rgba(0,0,0,1)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(255,255,255,1)',
          width: 3
        })
      }),
      latLabelStyle: new ol.style.Text({
        font: '22px Calibri,sans-serif',
        textAlign: 'end',
        // offsetY: offsetY,
        fill: new ol.style.Fill({
          color: 'rgba(0,0,0,1)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(255,255,255,1)',
          width: 3
        })
      })
    });
    return graticule;
  }

  exports.getGraticule = getGraticule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/overLayer/addOverlayer.js":
/*!***************************************!*\
  !*** ./src/overLayer/addOverlayer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./getPopupOverLayer.js */ "./src/overLayer/getPopupOverLayer.js"), __webpack_require__(/*! ../Map/Map */ "./src/Map/Map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _getPopupOverLayer, _Map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getOverLayerListInfo = exports.setOverLayerListInfo = exports.addOverLayer = undefined;
  // 弹出层
  var overLayerList = {};

  function addOverLayer(layerinfo) {
    var layerInfo = JSON.parse(JSON.stringify(layerinfo));
    var map = (0, _Map.getMap)();

    if (!layerInfoCheck(layerInfo)) {
      console.log('图层参数校验异常，请传入正确参数', layerinfo);
      return;
    }
    if (overLayerList[layerinfo.id]) {
      console.log('此ID已经添加过，请勿重复添加图层', layerinfo._id);
      return;
    }

    var _addOverLayer = null;
    switch (layerInfo.mapType) {
      case 'Popup':
        {
          _addOverLayer = (0, _getPopupOverLayer.getPopupOverLayer)(layerinfo, map);
          break;
        }
      default:
        {
          break;
        }
    }

    if (_addOverLayer) {
      map.addOverlay(_addOverLayer);
      overLayerList[layerinfo.id] = {
        info: layerinfo,
        layer: _addOverLayer
      };
    }
  }

  function layerInfoCheck(layerinfo) {
    if (!layerinfo.id) {
      return false;
    }
    return true;
  }

  function setOverLayerListInfo(key, value) {
    overLayerList[key] = value;
    return true;
  }

  function getOverLayerListInfo(key, value) {
    return overLayerList[key];
  }

  exports.addOverLayer = addOverLayer;
  exports.setOverLayerListInfo = setOverLayerListInfo;
  exports.getOverLayerListInfo = getOverLayerListInfo;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/overLayer/getPopupOverLayer.js":
/*!********************************************!*\
  !*** ./src/overLayer/getPopupOverLayer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /**
   * @method  getPopupOverLayer
   * @description 基于参数 生成弹出图层
   * @param {JSON} params  图层内容参数
   * @param {Object} map ol地图
   */
  function getPopupOverLayer(params, map) {
    var popup = params.popup;
    var container = document.getElementById(popup.popupId);
    var content = document.getElementById(popup.popupContentId);
    var closer = document.getElementById(popup.popupCloserId);

    var overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
    };

    map.addEventListener('singleclick', function (evt) {
      var coordinate = evt.coordinate;
      var hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate, 'EPSG:4326'));
      content.innerHTML = '<p>\u5750\u6807:</p><code>' + hdms + '</code>';
      overlay.setPosition(coordinate);
    });

    return overlay;
  }

  exports.getPopupOverLayer = getPopupOverLayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/shinetekview.js":
/*!*****************************!*\
  !*** ./src/shinetekview.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Map/Map */ "./src/Map/Map.js"), __webpack_require__(/*! ./Map/View */ "./src/Map/View.js"), __webpack_require__(/*! ./Layers/setLayerParams/setLayerParams */ "./src/Layers/setLayerParams/setLayerParams.js"), __webpack_require__(/*! ./Layers/Layer */ "./src/Layers/Layer.js"), __webpack_require__(/*! ./overLayer/addOverlayer */ "./src/overLayer/addOverlayer.js"), __webpack_require__(/*! ./Layers/layergroup/getTyphoonLayer.js */ "./src/Layers/layergroup/getTyphoonLayer.js"), __webpack_require__(/*! ./Layers/layergroup/getCloudLayer.js */ "./src/Layers/layergroup/getCloudLayer.js"), __webpack_require__(/*! ./Layers/getPointClusterLayer.js */ "./src/Layers/getPointClusterLayer.js"), __webpack_require__(/*! ./Layers/setLayerParams/setlayerOpacity */ "./src/Layers/setLayerParams/setlayerOpacity.js"), __webpack_require__(/*! ./Layers/getGeoTiffLayer */ "./src/Layers/getGeoTiffLayer.js"), __webpack_require__(/*! ./Layers/loadLayer */ "./src/Layers/loadLayer.js"), __webpack_require__(/*! ./Layers/setLayerParams/setSpyLayer */ "./src/Layers/setLayerParams/setSpyLayer.js"), __webpack_require__(/*! ./Action/Draw */ "./src/Action/Draw.js"), __webpack_require__(/*! ./Action/measure */ "./src/Action/measure.js"), __webpack_require__(/*! ./Action/singleClick */ "./src/Action/singleClick.js"), __webpack_require__(/*! ./Layers/getGraticuleLayer */ "./src/Layers/getGraticuleLayer.js"), __webpack_require__(/*! ./Interface/map */ "./src/Interface/map.js"), __webpack_require__(/*! ./Layers/overlayer/addTwinkle */ "./src/Layers/overlayer/addTwinkle.js"), __webpack_require__(/*! ./Layers/overlayer/valuePopupLayer */ "./src/Layers/overlayer/valuePopupLayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports, _Map, _View, _setLayerParams2, _Layer, _addOverlayer, _getTyphoonLayer, _getCloudLayer, _getPointClusterLayer, _setlayerOpacity, _getGeoTiffLayer, _loadLayer, _setSpyLayer2, _Draw, _measure, _singleClick, _getGraticuleLayer, _map, _addTwinkle2, _valuePopupLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var ShinetekView = function () {
    function ShinetekView() {
      _classCallCheck(this, ShinetekView);
    }

    _createClass(ShinetekView, [{
      key: 'initMap',
      value: function initMap(config) {
        this.initParams = config;
        (0, _Map.initMap)(config);
      }
    }, {
      key: 'destoryMap',
      value: function destoryMap() {
        return (0, _Map.destoryMap)();
      }
    }, {
      key: 'getMap',
      value: function getMap() {
        return (0, _Map.getMap)();
      }
    }, {
      key: 'addSingleClickEvent',
      value: function addSingleClickEvent(params) {
        // 添加单击事件
        (0, _singleClick.addSingleClickEvent)(params);
      }
    }, {
      key: 'addLayer',
      value: function addLayer(layerinfo) {
        return (0, _Layer.addOlLayer)(layerinfo);
      }
    }, {
      key: 'removeLayer',
      value: function removeLayer(layerinfo) {
        return (0, _Layer.removeLayer)(layerinfo);
      }
    }, {
      key: 'checkLoadStatus',
      value: function checkLoadStatus(id) {
        return (0, _loadLayer.checkLoadStatus)(id);
      }
    }, {
      key: 'checkAllLoadStatus',
      value: function checkAllLoadStatus() {
        return (0, _loadLayer.checkLoadingStatus)();
      }
    }, {
      key: 'setLayerZIndex',
      value: function setLayerZIndex(layerinfo, zIndex) {
        return (0, _setLayerParams2.setLayerZIndex)(layerinfo, zIndex);
      }
    }, {
      key: 'getLayerZIndex',
      value: function getLayerZIndex(layerinfo) {
        return (0, _setLayerParams2.getLayerZIndex)(layerinfo);
      }
    }, {
      key: 'setLayerVisibility',
      value: function setLayerVisibility(layerinfo, isVisible) {
        return (0, _setLayerParams2.setLayerVisibility)(layerinfo, isVisible, this);
      }
    }, {
      key: 'setLayerParams',
      value: function setLayerParams(layerinfo, params) {
        return (0, _setLayerParams2.setLayerParams)(layerinfo, params);
      }
    }, {
      key: 'setCenter',
      value: function setCenter(lon, lat) {
        return (0, _View.setCenter)(lon, lat);
      }
    }, {
      key: 'setViewByName',
      value: function setViewByName(name, params) {
        return (0, _View.setViewByName)(name, params);
      }
    }, {
      key: 'setLayerFeaturtSelect',
      value: function setLayerFeaturtSelect(layerinfo, selectInfo) {
        return (0, _Layer.setLayerFeaturtSelect)(layerinfo, selectInfo);
      }
    }, {
      key: 'addDrawVector',
      value: function addDrawVector(drawType, style) {
        return (0, _Draw.addDrawVector)(drawType, style);
      }
    }, {
      key: 'endDrawVector',
      value: function endDrawVector() {
        return (0, _Draw.endDrawVector)();
      }
    }, {
      key: 'removeDrawVector',
      value: function removeDrawVector() {
        return (0, _Draw.removeDrawVector)();
      }
    }, {
      key: 'editDrawVector',
      value: function editDrawVector(_hasArea) {
        return (0, _Draw.editDrawVector)(_hasArea);
      }
    }, {
      key: 'endEditDrawVector',
      value: function endEditDrawVector() {
        return (0, _Draw.endEditDrawVector)();
      }
    }, {
      key: 'startMeasure',
      value: function startMeasure(zIndex) {
        return (0, _measure.startMeasure)(zIndex);
      }
    }, {
      key: 'endMeasure',
      value: function endMeasure() {
        return (0, _measure.endMeasure)();
      }
    }, {
      key: 'stopMeasure',
      value: function stopMeasure() {
        return (0, _measure.stopMeasure)();
      }
    }, {
      key: 'setViewZoomNum',
      value: function setViewZoomNum(value) {
        return (0, _View.setViewZoomNum)(value);
      }
    }, {
      key: 'getViewZoomNum',
      value: function getViewZoomNum() {
        return (0, _View.getViewZoomNum)();
      }
    }, {
      key: 'setLayerOpacity',
      value: function setLayerOpacity(layerInfo, opacity) {
        return (0, _setlayerOpacity.setLayerOpacity)(layerInfo, opacity);
      }
    }, {
      key: 'getLayerOpacity',
      value: function getLayerOpacity(layerInfo) {
        return (0, _setlayerOpacity.getLayerOpacity)(layerInfo);
      }
    }, {
      key: 'resetGeoTiffColorBar',
      value: function resetGeoTiffColorBar(layerInfo, newColorBar) {
        return (0, _getGeoTiffLayer.resetGeoTiffColorBar)(layerInfo, newColorBar);
      }
    }, {
      key: 'addGraticule',
      value: function addGraticule(params) {
        return (0, _getGraticuleLayer.addGraticuleLayer)(params);
        // return addGraticule(params)
      }
    }, {
      key: 'removeGraticule',
      value: function removeGraticule() {
        return (0, _getGraticuleLayer.removeGraticuleLayer)();
        // return removeGraticule()
      }
    }, {
      key: 'addOverLayer',
      value: function addOverLayer(layerinfo) {
        return (0, _addOverlayer.addOverLayer)(layerinfo);
      }
    }, {
      key: 'getCoordinateByPixel',
      value: function getCoordinateByPixel(pixel) {
        return (0, _map.getCoordinateByPixel)(pixel);
      }
    }, {
      key: 'getHdmsByCoordinates',
      value: function getHdmsByCoordinates(coordinate) {
        return (0, _map.getHdmsByCoordinates)(coordinate);
      }
    }, {
      key: 'getPixelByCoordinate',
      value: function getPixelByCoordinate(coordinate) {
        return (0, _map.getPixelByCoordinate)(coordinate);
      }
    }, {
      key: 'getDistance',
      value: function getDistance(start, end) {
        return (0, _map.getDistance)(start, end);
      }
    }, {
      key: 'showTyphoonHover',
      value: function showTyphoonHover(coordinate, params, properties) {
        return (0, _getTyphoonLayer.showTyphoonHover)(coordinate, params, properties);
      }
    }, {
      key: 'stopTyphoon',
      value: function stopTyphoon(params) {
        return (0, _getTyphoonLayer.stopTyphoon)(params);
      }
    }, {
      key: 'showCloudHover',
      value: function showCloudHover(coordinate, params, properties) {
        return (0, _getCloudLayer.showCloudHover)(coordinate, params, properties);
      }
    }, {
      key: 'setZoomResolutionMode',
      value: function setZoomResolutionMode(isConstrain) {
        return (0, _View.setZoomResolutionMode)(isConstrain);
      }
    }, {
      key: 'pointClusterColorChange',
      value: function pointClusterColorChange(layer, range) {
        return (0, _getPointClusterLayer.pointClusterColorChange)(layer, range);
      }
    }, {
      key: 'setSpyLayer',
      value: function setSpyLayer(layerA, params) {
        (0, _setSpyLayer2.setSpyLayer)(layerA, params);
      }
    }, {
      key: 'removeSpyLayer',
      value: function removeSpyLayer(layerA) {
        return (0, _setSpyLayer2.removeSpyLayer)(layerA);
      }
    }, {
      key: 'addTwinkle',
      value: function addTwinkle(twnDiv, lon, lat) {
        return (0, _addTwinkle2.addTwinkle)(twnDiv, lon, lat);
      }
    }, {
      key: 'addValuePopup',
      value: function addValuePopup(popupDiv, lon, lat) {
        (0, _valuePopupLayer.addValuePopup)(popupDiv, lon, lat);
      }
    }, {
      key: 'hideValuePopup',
      value: function hideValuePopup() {
        (0, _valuePopupLayer.hideValuePopup)();
      }
    }, {
      key: 'removeValuePopup',
      value: function removeValuePopup() {
        (0, _valuePopupLayer.removeValuePopup)();
      }
    }]);

    return ShinetekView;
  }();

  window.ShinetekView = ShinetekView;
  exports.default = ShinetekView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var utils = {
    /**
     * 根据数值 对经纬度进行处理
     * @param {*} coordinates
     */
    formatCoordinates: function formatCoordinates(value) {
      var x = value[0];
      var y = value[1];

      // 将经纬度 范围 归于 180 90
      while (x > 180) {
        x = x - 360;
      }
      while (x < -180) {
        x = x + 360;
      }

      // 东西经 南北纬 判识
      var lonUnit = '';
      var latUnit = '';
      if (x > 0) {
        lonUnit = 'E';
      } else if (x < 0) {
        lonUnit = 'W';
        x = -x;
      }
      if (y > 0) {
        latUnit = 'N';
      } else if (y < 0) {
        latUnit = 'S';
        y = -y;
      }
      // 默认为 有效值
      var isYvaild = true;
      if (y > 90 || y < -90) {
        isYvaild = false;
      }
      // 附: 29.73784595,103.5863933 转化为度分秒就是: 北纬N29°44′16.25″ 东经E103°35′11.02″

      var lonAbs = Math.abs(x);
      var lonDu = Math.floor(lonAbs); // 度
      var lonFen = Math.floor((lonAbs - lonDu) * 60); // 分 度分秒转化 单位 应是 60

      var latAbs = Math.abs(y);
      var latDu = Math.floor(latAbs); // 度
      var latFen = Math.floor((latAbs - latDu) * 60); // 分 度分秒转化 单位 应是 60
      // 拼接 度分秒
      var newValue = lonDu + '\xB0' + lonFen + '\'' + lonUnit + ',' + latDu + '\xB0' + latFen + '\'' + latUnit;
      // 修复 纵向重复计算经纬度 显示bug
      if (!isYvaild) {
        newValue = '--,--';
      }

      return newValue;
    },
    dufen2Coordinates: function dufen2Coordinates(value) {
      // 由度分 反算回 小数点形式
      // var newValue = `${lonDu}°${lonFen}'${lonUnit},${v1lat}°${v2lat}'${latUnit}`
      var lonlat = value.split(',');
      var lon = lonlat[0];
      var lat = lonlat[1];

      function countCoordinates(value) {
        // 计算 度 分 及单位
        var du = value.split('°')[0];
        var fenAll = value.split('°')[1];
        var fen = fenAll.split('\'')[0];
        var unit = fenAll.split('\'')[1];

        // 基于 度 分 单位 计算 实际经纬度
        var lonCoordinates = du + fen / 60;
        if (unit === 'S' || unit === 'W') {
          lonCoordinates = -lonCoordinates;
        }
        return lonCoordinates;
      }

      var lonCoord = countCoordinates(lon);
      var latCoord = countCoordinates(lat);
      return [lonCoord, latCoord];
    }
  };

  exports.default = utils;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ });
});
//# sourceMappingURL=shinetekview.js.map