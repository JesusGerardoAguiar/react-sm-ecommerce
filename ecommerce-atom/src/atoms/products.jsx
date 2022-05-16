import {selector} from "recoil";
import client from '../app/clientConfig';


export const productsQuery = selector({
    key: 'GetProducts',
    get: async () => {
      const response = await client.get('/product');
      return response.data.products;
    },
  });