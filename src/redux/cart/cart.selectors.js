import { createSelector } from "reselect";

// Input Selector: Doesn't use createSelector.
// Grabs a single slice of state
const selectCart = (state) => state.cart;

//
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
