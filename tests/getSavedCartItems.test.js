const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste1 se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () => {
    getSavedCartItems();
    //ele espera que o localStoragegetItem seja chamado;
    //  it waits for the localStorageSetItem to be called;
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
  // fail('Teste vazio');
});
