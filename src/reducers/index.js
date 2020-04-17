// reducer
// actionが発生した時にそのactionのtypeに応じて
// 状態をどう変化させるのかというものを定義するもの
// 状態 = state

// index.jsでアプリ内の全てのreducerを総括
// 全部のreducerを一つに結合する役割を担う

import { combineReducers } from 'redux'
import count from './count'

// combineReducers：reducersを結合するための関数
// 結合したものをimportしてstore作成に利用するのでexportする
// 結合するもの（reducer）をcombineReducersに渡す
export default combineReducers({ count })

// 通常は複数のreducerがある
// 複数記述は以下の形になる
// export default combineReducers({ foo, bar, hoge ,fuga })