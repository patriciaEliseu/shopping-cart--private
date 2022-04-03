 const space = document.querySelector('.cart__items');
console.log('judas2222', space);
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
} 

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}
// requisito 03
function cartItemClickListener(event) {
 const tomar = document.querySelectorAll('.cart__items');
 const pegEsv = document.querySelector('.empty-cart');
//  console.log('judas', cartItemClickListener);
 event.target.remove(tomar);
 event.target.remove(pegEsv);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  
  return li;
}

// requisito 02
async function buscarItem(elemento) {
  console.log('judas3', elemento);
  const retSku = getSkuFromProductItem(elemento.target.parentNode);
  console.log('judas', retSku);
  // const space = document.querySelector('.cart__items');
  const buscaItem = await fetchItem(retSku);
       const retornoItem = {
      sku: buscaItem.id, 
      name: buscaItem.title,
      salePrice: buscaItem.price,      
    };    
    space.appendChild(createCartItemElement(retornoItem));
    // requisito 4
  saveCartItems(space.innerHTML); 
  
  return buscaItem;
}

// requisito 01
async function buscarProdutos(produto) {
  const espace = document.querySelector('.items'); 
  // salva o valor de procurar o computador
  const buscaProdut = await fetchProducts(produto); 
   // salvando o valor de results
  buscaProdut.results.forEach((element) => {
    const retornoValor = {
      sku: element.id, 
      name: element.title,
      image: element.thumbnail,
    };
    espace.appendChild(createProductItemElement(retornoValor));
  });
  const buscaBotao = document.querySelectorAll('.item__add');
  buscaBotao.forEach((element) => element.addEventListener('click', buscarItem));
  // console.log('judas', buscaBotao);
  /* console.log(espace);
  console.log(buscaProdut); */
    return buscaProdut;
}

window.onload = async () => {  
  await buscarProdutos('computador');  
  await buscarItem('MLB1615760527');
  // requisito 04;
  const trazer = getSavedCartItems('cartItems');
  // const space = document.querySelector('.cart__items');
  space.innerHTML = trazer;
  console.log('teste1 ', trazer);
  };
