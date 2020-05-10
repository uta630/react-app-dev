import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';
import _ from 'lodash'

import { Link } from 'react-router-dom' // リンク(画面遷移のアンカータグ)はLinkをimportする

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event =>  (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>

      <Link to="/events/new">New Event</Link>{/* <Link />は<Router>の中にいないといけないので、親で設定してあげる */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents }) // dispatchのショートハンド（上記と同様の動作）

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
