// This utility function will check to see if cartItem already
// exists. If so, increase its quantity value. If not, adding it to cart like normal.

export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Check to see if cartItem matches
    const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  // If existingCartItem exists, return a new object with cartItem with quantity + 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // If cartItem does not exist, create a new one with a quantity prop 
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
