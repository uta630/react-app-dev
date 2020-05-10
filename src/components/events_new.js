import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form' // 入力フォームのパッケージ
import { Link } from 'react-router-dom'
import { postEvents } from '../actions';

class EventsNew extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field){ // fieldには入力された値が入ってくる
    const {input, label, type, meta: { touched, error } } = field // 引数を定数としてそれぞれ宣言して使う

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  // 非同期処理
  async onSubmit(values){
    await this.props.postEvents(values)
    this.props.history.push('/') // postEvents実行したらページを遷移
  }

  render() {
    // pristine   : formのsubmitに対し、disabledの状態を操作してくれる(元から提供されている)
    // submitting : submitされている状態を取得できる, 通常はfalseで一度押すとtrueを返すため、連打を防げる
    const { handleSubmit, pristine, submitting } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        {/* Fieldコンポーネントで入力フォームの実装ができる */}
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          {/* submitはinputで作成する */}
          <input type="submit" value="Submit" disabled={pristine || submitting} />

          {/* キャンセルボタンで一覧に戻す */}
          <Link to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}

// reduxFormのvalidation
const validate = values => {
  // エラーを設定し
  const errors = {}

  if(!values.title) errors.title = "Enter a title, please."
  if(!values.body) errors.body = "Enter a body, please."

  // エラーを返す
  return errors
}

const mapDispatchToProps = ({ postEvents })

export default connect(null, mapDispatchToProps)( // eventのstateは扱わないのでnull, postEventsはあとで実装するので一旦null
  // コンポーネントに対してreduxFormを設定しないとFieldコンポーネントは使えない
  // なので、ここでコンポーネントに対して、reduxForm関数を設定する(デコレート)
  // reduxFormの引数にはフォームで使用する設定をオブジェクトの形で入れられる
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
  
  // func()()
  //   前の() : func関数内で使用する値を入れられる(つまり普通の引数)
  //   後の() : func関数で返ってくる関数に入れる引数を入れられる(ここではreduxForm()実行後に返ってくる関数に対しての引数となる)
)
