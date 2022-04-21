// A mock function to mimic making an async request for data
import client from '../../app/clientConfig';
export const fetchProductsService = async() => {
    return await client.get('/product');
  }