// action「活動」:アプリケーション内のデータで何が起きたかを示すデータのこと
// actionとはjavascriptのオブジェクトのこと
// typeとtypeの値を設定し、値はユニークでないといけない
// カウンターには「+」「-」のアクションがある

// actionを定義し、返す関数をactionクリエイターと呼ぶ
// exportすることでViewで利用できる

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// actionクリエイター：increment
export const increment = () => ({
    type: INCREMENT
})
// 上記と同様
// export const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
        
// actionクリエイター：decrement
export const decrement = () => ({
    type: DECREMENT
})
// 上記と同様
// export const increment = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

