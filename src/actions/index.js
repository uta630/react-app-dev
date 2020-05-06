import axios from 'axios'; // 外部のhttpサーバーにリクエストを投げるhttpクライアント

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL    = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// action内ではピュアなオブジェクトを返さないといけないが、
// indexでthunkを使ってreadEventsを組み込んでいるので、関数として適用できる
// この関数は、パラメータとして、storeのメソッドである[dispatch]と[getState]を受け取れる
export const readEvents = () => async dispatch => { // 非同期処理で返り値がpromiseになってしまうので、async/awaitする
    // 非同期処理
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)

    // console.log(response)

    // responseを含めたアクションをdispatchでreducerに渡す
    dispatch({ type: READ_EVENTS, response })
}
