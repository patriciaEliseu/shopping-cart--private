const saveCartItems = (valor) => {
 localStorage.setItem('cartItems', valor);
  // console.log('verdade', 'cartItems', valor);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
} 