import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Model extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.node,
    hasFooter: PropTypes.bool,
    modelShow: PropTypes.bool,
    btnDisabled: PropTypes.bool,
    onCancel: PropTypes.func,
    onSave: PropTypes.func
  }

  onDragStart = (e) => {
    const model = document.getElementById(this.props.id);
    this.width = e.pageX - model.offsetLeft;
    this.height = e.pageY - model.offsetTop;
  }

  onDrag = (e) => {
    const model = document.getElementById(this.props.id);
    model.style.left = e.pageX - this.width + 'px';
    model.style.top = e.pageY - this.height + 'px';
  }

  onDragEnd = (e) => {
    const model = document.getElementById(this.props.id);
    model.style.left = e.pageX - this.width + 'px';
    model.style.top = e.pageY - this.height + 'px';
  }

  render() {
    const { className, id, title, content, hasFooter, onCancel, onSave, modelShow, btnDisabled } = this.props;

    return (
      <div className={classnames('model', className, {'show': modelShow, 'hide': !modelShow})} id={id}>
        <div
          className="model-title"
          draggable="true"
          onDragStart={this.onDragStart}
          onDrag={this.onDrag}
          onDragEnd={this.onDragEnd}
        >
          {title}
          <img src="/img/close.svg" alt="" onClick={onCancel}/>
        </div>
        <div className="model-content">
          {content}
        </div>
        {
          hasFooter ? (
            <div className="model-footer">
              <div className={classnames('model-footer__btn model-footer__save', {'disabled': btnDisabled})} onClick={onSave}>保存</div>
              <div className="model-footer__btn model-footer__cancel" onClick={onCancel}>取消</div>
            </div>
          ) : null
        }
      </div>
    )
  }
}
