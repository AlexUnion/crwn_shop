export const addItemToCart = (cartItem) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem,

});
export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id,
});
export const incrementItem = (id) => ({
    type: 'INCREMENT_ITEM',
    payload: id,
})
export const decrementItem = (id) => ({
    type: 'DECREMENT_ITEM',
    payload: id,
})
