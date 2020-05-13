import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { getEvent, deleteEvent, putEvent } from '../actions';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class EventsShow extends Component {
  constructor(props) {
    super(props)

    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if(id) this.props.getEvent(id)
  }

  renderField(field){
    const {input, label, type, meta: { touched, error } } = field

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values){
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const RaisedButtonStyle = { margin: 12 }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <RaisedButton label="Submit" type="submit" style={RaisedButtonStyle} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={RaisedButtonStyle} containerElement={<Link to="/" />} />
        <RaisedButton label="Delete" style={RaisedButtonStyle} onClick={this.onDeleteClick} />
      </form>
    );
  }
}

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = "Enter a title, please."
  if(!values.body) errors.body = "Enter a body, please."

  return errors
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
  // enableReinitialize: trueにすると、initialValuesの値が変わるたびにフォームが初期化される
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)
