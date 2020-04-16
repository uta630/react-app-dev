import React, { Component } from 'react';

// propsは変更できない値（immutable）
// steteは変更できる値（mutable）
// propsは親から子のコンポーネントに渡される
// stateはコンポーネントの内部でのみ使用される

// stateはclassコンポーネントで使用できる
// [this.state = {...}}] として直接変更することはできない
// 変更時にはsetState({})で対象のstateを変更する
// stateを変更するとrenderが実行される（ここでは+/-のクリックイベントで発生）
// この時、変更された値（count）だけ書き換えられる（jsx）

const App = () => (<Counter></Counter>);

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusBtn = () => {
    this.setState({count: this.state.count+1})
  }

  handleMinusBtn = () => {
    this.setState({count: this.state.count-1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusBtn}>+1</button>
        <button onClick={this.handleMinusBtn}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
