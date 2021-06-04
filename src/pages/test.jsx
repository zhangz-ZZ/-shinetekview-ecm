import React from 'react';
import PropTypes from 'prop-types';

export default class Test extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  componentDidMount() {
    window.addEventListener('message', (e) => {
      this.setState({ username: username });
    });
  }

  render() {
    const { username } = this.state;

    return (
      <div className="Test">

      </div>
    )
  }
}
