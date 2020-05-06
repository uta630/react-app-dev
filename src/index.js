import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'; // apply = 適用
import { Provider } from 'react-redux';
import reducer from './reducers';
import EventsIndex from './components/events_index';

// action内でactionクリエイターの代わりに、関数を返すことを可能にする(middleware)
import thunk from 'redux-thunk';

// applyMiddlewareを使ってthunkを第二引数に入れることで、actionの関数をstoreに適用できる
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <EventsIndex />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
