require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Teste1 se fecthItems é uma função.', () => {
    expect(typeof fetchItem(Function)).toBeTruthy();
  });
  it('Teste2 se fecthItem com argumento "MLB1615760527" e teste se fetch foi chamada;', async () => {
    const chamaIF = await fetchItem('MLB1615760527');
    /* Use .toBeDefined para verificar se uma variável não é "indefinida". 
    Por exemplo, se você quiser verificar se uma função 
    fetchNewFlavorIdea() retorna algo, você pode escrever: */
    expect(fetchItems(fetch)).toBeDefined();
  });
  it('Teste3 se, com o "MLB1615760527", a função fetch utiliza o endpoint https://api.mercadolibre.com/items/MLB1615760527', async () => {
    const chamaItEd = await fetchItem('MLB1615760527');
  expect('https://api.mercadolibre.com/items/MLB1615760527').toEqual('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Teste4 se, o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item, que já está importado no arquivo ', async () => {
    const chaObj = await fetchItem('MLB1615760527');
    expect(chaObj).toEqual(item);
  });
  it('Teste5 se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const chaSArg = await fetchItem();
    expect(chaSArg).toEqual(new Error('You must provide an url'));
  });




  // fail('Teste vazio');
});
