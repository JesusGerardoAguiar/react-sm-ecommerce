import React from "react";
import Layout from "../../layout";
import Hero from "../../components/Home/Hero";
import Products from "../../components/Home/Products";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Products />
    </Layout>
  );
};

export default Home;
