import {selector, selectorFamily} from "recoil";
import client from '../app/clientConfig';


export const getProductsQuery = selector({
    key: 'GetProducts',
    get: async () => {
      const response = await client.get('/product');
      return response.data.products;
    },
  });

  export const getProductByIdQuery = selectorFamily({
    key: 'GetProductById',
    get: productId => async () => {
      const response = await client.get(`/product/${productId}`);
      return response.data;
    },
  });