import {useRecoilValue} from "recoil";
import { productsQuery } from "../atoms/products";
const useFetchProducts = () => {
  const products = useRecoilValue(productsQuery);
  return products;
};

export default useFetchProducts;
