// 演算
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: INCREMENT
})
        
export const decrement = () => ({
    type: DECREMENT
})

// 通信
export const READ_EVENTS = 'READ_EVENTS'

export const readEvents = () => ({
    type: READ_EVENTS
})
