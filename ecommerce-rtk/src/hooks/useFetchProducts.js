import { useEffect } from "react";
import { fetchProducts } from "../features/products/slices";
import { useToasts } from "react-toast-notifications";
import { useSelector, useDispatch } from "react-redux";
const useFetchProducts = () => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productsData
  );
  const shouldFetchproducts =
    products.length === 0 && !loading && error === null;
  useEffect(() => {
    if (shouldFetchproducts) {
      dispatch(fetchProducts());
    }
  }, [shouldFetchproducts]);
  useEffect(() => {
    if (error !== null) {
      console.log(error);
      addToast("Lo sentimos", { appearance: "error", autoDismiss: true });
    }
  }, [error !== null]);
  return { products, loading };
};

export default useFetchProducts;
