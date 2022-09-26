import React, { Suspense } from "react";
import Home from "./pages/Home";
import Product from "./pages/ProductView";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <ToastProvider placement="bottom-left">
          <RecoilRoot>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  element={<Product />}
                />
              </Routes>
            </BrowserRouter>
          </RecoilRoot>
        </ToastProvider>
      </Suspense>
    </div>
  );
}

export default App;
