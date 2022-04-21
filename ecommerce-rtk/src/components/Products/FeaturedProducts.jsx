import React from "react";
import useFetchProducts from "../../hooks/useFetchProducts";
import BeatLoader from "react-spinners/BeatLoader";

const FeaturedProducts = () => {
  const { products, loading } = useFetchProducts();

  if (loading) {
    return <BeatLoader size={20} color="#93D4D3" loading={loading} />;
  }
  return <></>;
};

export default FeaturedProducts;
