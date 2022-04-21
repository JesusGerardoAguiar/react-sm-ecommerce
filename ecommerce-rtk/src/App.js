import React from "react";
import Home from "./pages/Home";
import { ToastProvider } from "react-toast-notifications";
function App() {
  return (
    <ToastProvider placement="bottom-left">
      <div className="App">
        <Home />
      </div>
    </ToastProvider>
  );
}

export default App;
