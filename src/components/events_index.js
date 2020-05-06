import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>readEvents</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = ({ readEvents }) // dispatchのショートハンド（上記と同様の動作）

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
