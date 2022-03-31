const saveCartItems = (valor) => {
 localStorage.setItem('cartItems', valor);
  // console.log(saveCartItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
