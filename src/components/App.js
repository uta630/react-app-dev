import React, { Component } from 'react';
// reacr-reduxのconnect関数を使って、state/actionとコンポーネントの関連付けを行う
import { connect } from 'react-redux';

// actionクリエイターをimport
import { increment, decrement } from '../actions'

// viewのイベントで状態を遷移させて遷移後の状態を画面に描画する
class App extends Component {
  // comstructorで状態の初期化が必要ないので削除
  
  // コンポーネントで設定していた関数はactionクリエイターで実現しているので不要

  render() {
    // propsに状態が入っているので宣言して使用する
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

//
// stateとコンポーネントをconnectで関連付ける
//

// 「mapStateToProps」
// stateの情報からコンポーネントに必要なものを取り出してコンポーネント内のpropsとしてマッピングする機能を持つ関数
// 引数には状態のトップレベルを示すstateを記述
// どういった状態をpropsとして対応させるかを関数の戻りとして記述する
const mapStateToProps = state => ({ value: state.count.value })

// 「mapDispatchToProps」
// あるアクションが発生した時に、reducerにtypeに応じた状態変化を実行させる関数が[dispatch]という
// このdispatch関数を引数にして、このコンポーネントに必要になるdispatch関数を宣言する
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ increment, decrement }) // dispatchのショートハンド（上記と同様の動作）

// 関連付けてexport
export default connect(mapStateToProps, mapDispatchToProps)(App)
