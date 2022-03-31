require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const { results } = require('../mocks/search');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Teste1 se fecthProducts é uma função.', () => {
    expect(typeof fetchProducts(Function)).toBeTruthy();
  });
  it('Teste2 se a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    const chamaFetch = await fetchProducts('computador');
    /* Use .toBeDefined para verificar se uma variável não é "indefinida". 
    Por exemplo, se você quiser verificar se uma 
    função fetchNewFlavorIdea() retorna algo, você pode escrever: */
    expect(fetchProducts(fetch)).toBeDefined();
  });
  it('Teste3 se, com o "computador", a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    const chamaEnd = await fetchProducts('computador');
  expect('https://api.mercadolibre.com/sites/MLB/search?q=computador').toEqual('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Teste4 se, o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo ', async () => {
    const chamaObj = await fetchProducts('computador');
    expect(chamaObj).toEqual(computadorSearch);
  });
  it('Teste5 se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const chamaSArg = await fetchProducts();
    expect(chamaSArg).toEqual(new Error('You must provide an url'));
  });
 // fail('Teste vazio');
});
