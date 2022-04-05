const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Teste1 se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado.', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    //ele espera que o localStorageSetItem seja chamado;
    //  it waits for the localStorageSetItem to be called;
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Teste2 se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâm, sendo o 1º "cartItems" e o 2º sendo o valor passado como argumento para saveCartItems.', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
  // fail('Teste vazio');
});
