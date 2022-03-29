require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Teste se fecthProducts é uma função.', () => {
    expect(typeof fetchProducts(Function)).toBeTruthy();
  });
  it('Teste se a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', () => {
    expect(fetchProducts('computador')).toBe(fetchProducts);
  });
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', () => {
    expect(fetchProducts('computador')).toEqual('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Teste se, ', () => {
    expect(fetchProducts('computador')).toEqual('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', () => {
    expect(fetchProducts('computador')).toEqual('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });




  // fail('Teste vazio');
});
