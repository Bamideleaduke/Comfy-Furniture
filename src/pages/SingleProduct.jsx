import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { PageHero } from "../component/PageHero";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/ProductProvider";
import { single_product_url as url } from "../plugin/Plugin";
import { ProductImages } from "../component/ProductImages";
import { formatPrice } from "../helper/Helper";
import { Stars } from "../component/Stars";

export const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleProduct, fetchSingleProduct, loading, error } =
    useGlobalContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  if (loading) {
    return <Box sx={{ paddingTop: "5rem" }}>Loading...</Box>;
  }
  if (error) {
    return <Box>Error</Box>;
  }
  //   console.log(singleProduct);
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = singleProduct;
  //   console.log(name);
  return (
    <>
      <Box>
        <PageHero title={name} product />

        <Box sx={{ padding: { xs: "1rem", sm: "3rem", lg: "3rem 6rem" } }}>
          <Link
            to="/products"
            className="btn"
            style={{
              textDecoration: "none",
              backgroundColor: "#ab7a5f",
              color: "#eaded7",
              padding: "0.5rem 1rem",
              borderRadius: "3px",
            }}
          >
            back to products
          </Link>
          <Grid container sx={{ marginTop: "3rem" }}>
            <Grid item md={6}>
              <ProductImages images={images} />
            </Grid>
            <Grid item md={6}>
              <Box sx={{ padding: "0 0 0 2rem" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    marginBottom: "1rem",
                  }}
                >
                  {name}
                </Typography>
                <Stars stars={stars} reviews={reviews} />
                <Typography
                  variant="h5"
                  sx={{ color: "#ab7a54", marginBottom: "1rem" }}
                >
                  {formatPrice(price)}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: { md: "1rem", lg: "1.2rem" },
                    lineHeight: "35px",
                    color: "#324d67",
                  }}
                >
                  {description}
                </Typography>
                <Box
                  sx={{
                    margin: "1rem 0",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1rem",
                  }}
                >
                  <Typography variant="p" sx={{ textTransform: "capitalize" }}>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      Available :{" "}
                    </Typography>
                    {stock > 0 ? "In stock" : "out of stock"}
                  </Typography>
                  <Typography variant="p" sx={{ textTransform: "capitalize" }}>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      SKU :{" "}
                    </Typography>
                    {sku}
                  </Typography>
                  <Typography variant="p" sx={{ textTransform: "capitalize" }}>
                    <Typography variant="span" sx={{ fontWeight: "bold" }}>
                      Brand :
                    </Typography>
                    {company}
                  </Typography>
                </Box>
                <hr />
                {/* {stock > 0 && <AddToCart product={product} />} */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
