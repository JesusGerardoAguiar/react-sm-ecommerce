import React,{Suspense} from "react";
import Layout from "../../layout";
import Hero from "../../components/Home/Hero";
import Products from "../../components/Home/Products";
import { RecoilRoot } from "recoil";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<div>loading...</div>}>

      <RecoilRoot>
        <Products />
      </RecoilRoot>
      </Suspense>
    </Layout>
  );
};

export default Home;
