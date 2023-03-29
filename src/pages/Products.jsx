import React from "react";
import { Box, Grid } from "@mui/material";
// import { useGlobalContext } from "../context/ProductProvider";
// import { PageHero } from "../component/Pagehero";
import { PageHero } from "../component/PageHero";
import Sort from "../component/Sort";
import Filter from "../component/Filter";
import ProductComponent from "../component/ProductComponent";

export const Products = () => {
  return (
    <>
      <PageHero title={"Products"} />
      <Box
        sx={{
          padding: { xs: "1rem", md: "3rem" },
          marginInline: "auto",
        }}
      >
        <Grid container sx={{ position: "relative" }}>
          <Grid item xs={12} sm={3}>
            <Filter />
          </Grid>
          <Grid item xs={12} sm={9} sx={{ position: "relative" }}>
            <Sort />

            <ProductComponent />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
