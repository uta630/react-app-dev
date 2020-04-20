// actionのtypeをimport
import { INCREMENT, DECREMENT } from '../actions'

// stateの初期値を定義
// オブジェクトで指定
const initialState = { value: 0 }

// reducerのindex.jsに渡すようexportする
// reducerは関数で返し、引数を２つ持つ（state/action）
// stateに初期値を設定
// 関数の中ではactionの値に合わせて処理を記述する
export default (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}
