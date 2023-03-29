import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { formatPrice } from "../helper/Helper";
import { useGlobalContext } from "../context/ProductProvider";

const ListView = ({products,filterProduct}) => {
  // const { products } = useGlobalContext();
  return (
    <Box>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        console.log(id)
        return (
          <Box key={id}>
            <Grid container sx={{ marginBottom: { xs: "4rem", sm: "2.5rem" } }}>
              <Grid item sm={6}>
                <Box
                  component="img"
                  src={image}
                  alt="product"
                  sx={{
                    width: "100%",
                    display: "block",
                    borderRadius: "5px",
                    height: "250px",
                    objectFit: "cover",
                    // "&:hover": {
                    //   width: "100%",
                    //   height: "100%",
                    //   top: "0",
                    //   left: "0",
                    //   right: "0",
                    //   bottom: "0",
                    //   backgroundColor: "rgba(0,0,0,0.5)",
                    //   zIndex: "1",
                    //   cursor: "pointer",
                    //   borderRadius: "5px",
                    // },
                  }}
                />
              </Grid>
              <Grid item sm={6}>
                <Box
                  variant="div"
                  sx={{
                    marginTop: "1rem",
                    paddingLeft: { sm: "2rem", md: "2.5rem" },
                    // "& .MuiTypography-root": {
                    //   fontSize: "1.1rem",
                    //   fontWeight: "300",
                    // },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      textTransform: "capitalize",
                      marginBottom: "0.2rem 0 0.5rem 0",
                      fontSize: "2rem",
                      fontWeight: "600",
                      color: "#102a42",
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#ab7a5f" }}>
                    {formatPrice(price)}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      margin: "1rem 0",
                      display: "inline-block",
                      fontSize: { md: "1.2rem" },
                      lineHeight: "35px",
                      color: "#324d67",
                    }}
                  >
                    {description.substring(0, 150)}...
                  </Typography>
                  <Link
                    style={{
                      backgroundColor: "#ab7a5f",
                      color: "#eaded7",
                      padding: "0.3rem 1rem",
                      textDecoration: "none",
                      letterSpacing: "2px",
                      borderRadius: "5px",
                    }}
                    to={`/products/${id}`}
                  >
                    Details
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default ListView;
