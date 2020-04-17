export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// actionクリエイター：increment
export const increment = () => ({
    type: INCREMENT
})
        
// actionクリエイター：decrement
export const decrement = () => ({
    type: DECREMENT
})

