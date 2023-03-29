import React from "react";
import { useFilterContext } from "../context/FilterContext";
import { useGlobalContext } from "../context/ProductProvider";
import ListView from "./ListView";
import { GridView } from "./GridView";
import { Typography } from "@mui/material";

const ProductComponent = () => {
  const { gridView, filterProduct, products } = useFilterContext();
//   console.log("filter product", filterProduct);
//   console.log("products", products);
  if (filterProduct.length < 1) {
    return <Typography>Sorry, no products matched your search.</Typography>;
  }
  if (gridView === false) {
    return (
      <ListView
        // filterProduct={filterProduct}
        products={filterProduct}
      />
    );
  }
  return (
    <GridView
      //   filterProduct={filterProduct}
      products={filterProduct}
    />
  );
  //   return (
  //     <Box>
  //       {gridView === false ? (
  //         <ListView products={filterProduct} />
  //       ) : (
  //         <GridView products={filterProduct} />
  //       )}
  //     </Box>
  //   );
};

export default ProductComponent;
