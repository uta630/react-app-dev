import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event =>  (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    // addボタン用スタイル
    const FloatingActionButtonStyle = {
      position: 'fixed',
      right: 12,
      bottom: 12
    }

    return (
      <React.Fragment>
        {/* containerElement: タグを構成する要素を入れる, ここではLinkタグ */}
        <FloatingActionButton
          style={FloatingActionButtonStyle}
          containerElement={
            <Link to="/events/new" />
          }
        >
          <ContentAdd />
        </FloatingActionButton>

        <table>
          {/* displaySelectAll : tableの全選択ボタンの表示可否 */}
          {/* adjustForCheckbox: 全選択ボタン非表示分のレイアウトのズレを調整 */}
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          {/* displayRowCheckbox: チェックボックスの表示可否 */}
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </table>
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
