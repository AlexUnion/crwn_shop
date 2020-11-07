const INITIAL_STATE = {
    cartItems: {},
};

const addItemToCart = (cartItems, item) => {
    const existingCartItem = cartItems[item.id];

    return {
        ...cartItems,
        [item.id]: {
            ...item,
            quantity: existingCartItem ? existingCartItem.quantity + 1 : 1,
        }
    }
}

const removeItem = (cartItems, id) => {
    const array = Object.values(cartItems);
    return {
        ...array.filter((item) => item.id !== id),
    }
}

const incrementItem = (cartItems, id) => {
    const array = Object.values(cartItems);
    const index = array.findIndex((item) => item.id === id);
    array[index].quantity += 1;
    return {
        ...array,
    }
}

const decrementItem = (cartItems, id) => {
    const array = Object.values(cartItems);
    const index = array.findIndex((item) => item.id === id);
    if (array[index].quantity <= 1) {
        return {
            ...array.slice(0, index),
            ...array.slice(index + 1),
        }
    }
    array[index].quantity -= 1;
    return {
        ...array,
    }
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
            };

        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload),
            }

        case 'INCREMENT_ITEM':
            return {
                ...state,
                cartItems: incrementItem(state.cartItems, action.payload),
            }

        case 'DECREMENT_ITEM':
            return {
                ...state,
                cartItems: decrementItem(state.cartItems, action.payload),
            }

        default:
            return state;
    }
};

export default cartReducer;
