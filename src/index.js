import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'; // storeを作成する関数
import { Provider } from 'react-redux'; // 作成したstoreを全コンポーネントに渡すためのコンポーネント
import reducer from './reducers'; // 作成したreducer
import App from './components/App'; // コンポーネント用のディレクトリを作成し、Appを移動して使用

// storeの作成
// ここで作成されるstoreはアプリケーション内で唯一
// アプリケーションのstateはこのstoreに集約されている
const store = createStore(reducer);

ReactDOM.render(
  // Providerで全体を囲み、store属性に上記のstoreを渡すことで利用できる
  // これで全階層のコンポーネントでstoreが利用できるようになる
  // propsを親から孫まで引き継がなくていい
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
