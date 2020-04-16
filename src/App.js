import React from 'react';

// class App extends Component {
//   // クラスコンポーネント
//   render() {
//     // 出力内容
//     return <div></div> ;
//   }
// }

// 関数コンポーネント
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <p>みゃー</p>
}



export default App;
