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
        console.log('radi');
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })
    }
}