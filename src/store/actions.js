export const addToCart = (item) => {
    return async (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        })
    }
}
export const removeItemFromCart = (id) => {
    return async (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })
    }
}
export const incrementTotal = (amount) => {
    return async (dispatch) => {
        dispatch({
            type: 'ADD_TO_TOTAL',
            payload: amount
        })
    }
}
export const decrementTotal = (amount) => {
    return async (dispatch) => {
        dispatch({
            type: 'TAKE_FROM_TOTAL',
            payload: amount
        })
    }
}