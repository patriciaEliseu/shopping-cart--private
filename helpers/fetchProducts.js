const fetchProducts = async (item) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  try {    
    const response = await fetch(endpoint);
    const query = await response.json();
     return query;
    } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
