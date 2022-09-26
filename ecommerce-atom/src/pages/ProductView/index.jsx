import React, { Suspense } from "react";
import Layout from "../../layout";
import Hero from "../../components/Home/Hero";
import ProductDescription from "../../components/ProductView/ProductDescription";
import { useRecoilValue } from "recoil";
import { getProductByIdQuery } from "../../atoms/products";
import { useParams } from "react-router-dom";

const ProductView = () => {
  let { id } = useParams();
  const productById = useRecoilValue(getProductByIdQuery(id));
  console.log(productById);
  return (
    <Layout>
      <Suspense fallback={<div>loading...</div>}>
        <ProductDescription />
      </Suspense>
    </Layout>
  );
};

export default ProductView;
