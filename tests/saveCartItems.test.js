const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Teste1 se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado.', () => {
    const traz1 = saveCartItems(<ol><li>Item</li></ol>);
    /* Use .toBeDefined para verificar se uma variável não é "indefinida". 
    Por exemplo, se você quiser verificar se uma 
    função fetchNewFlavorIdea() retorna algo, você pode escrever: */
    expect(saveCartItems(localStorage.setItem(traz1))).toBeDefined();
   });
   it('Teste2 se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâm, sendo o 1º "cartItems" e o 2º sendo o valor passado como argumento para saveCartItems.', () => {
    // const traz2 = saveCartItems(<ol><li>Item</li></ol>);
    /* Use .toBeDefined para verificar se uma variável não é "indefinida". 
    Por exemplo, se você quiser verificar se uma 
    função fetchNewFlavorIdea() retorna algo, você pode escrever: */
    expect(saveCartItems(<ol><li>Item</li></ol>)).toBeDefined(localStorage.setItem);
   });
  // fail('Teste vazio');
});
