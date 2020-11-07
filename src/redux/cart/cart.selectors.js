import { createSelector } from 'reselect';

const getCart = ({ cart }) => {
    return cart;
}

const getCartItems = createSelector(
    getCart,
    ({ cartItems }) => cartItems
);

export const selectCartItems = createSelector(
    [getCartItems],
    (cartItems) => Object.values(cartItems),
);

export const selectCartItemsQuantity = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }
);

export const selectTotalSum = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((total, { price, quantity }) => total + price*quantity, 0)
    }
)
