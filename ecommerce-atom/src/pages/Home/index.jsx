import React,{Suspense} from "react";
import Layout from "../../layout";
import Hero from "../../components/Home/Hero";
import Products from "../../components/Home/Products";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<div>loading...</div>}>

        <Products />
      </Suspense>
    </Layout>
  );
};

export default Home;
