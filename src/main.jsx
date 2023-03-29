import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FilterContext } from "./context/FilterContext";
import { ProductProvider } from "./context/ProductProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <FilterContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterContext>
    </ProductProvider>
  </React.StrictMode>
);
