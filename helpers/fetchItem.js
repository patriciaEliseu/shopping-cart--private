const fetchItem = async (itemID) => {
  const endpoint = `https://api.mercadolibre.com/items/${itemID}`;
  console.log(endpoint);
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
    fetchItem,
  };
}
