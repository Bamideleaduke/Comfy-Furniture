import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../helper/Helper";

export const GridView = ({ products }) => {
  const [show, setShow] = useState("");
  // console.log(products)
  return (
    <Box>
      <Grid container spacing={3}>
        {products?.map((product) => {
          const { id, image, name, price } = product;
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={id}>
              <Box position="relative">
                <Box
                  component="img"
                  src={image}
                  alt="product"
                  sx={{
                    width: "100%",
                    display: "block",
                    borderRadius: "5px",
                    height: "175px",
                    objectFit: "cover",
                    "&:hover": {
                      width: "100%",
                      height: "100%",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      zIndex: "1",
                      cursor: "pointer",
                      borderRadius: "5px",
                    },
                  }}
                />
                <Box
                  onMouseEnter={() => setShow(id)}
                  onMouseLeave={() => setShow("")}
                  sx={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.5)",
                    },
                  }}
                >
                  {show === id && (
                    <Typography
                      variant="span"
                      sx={{
                        position: "absolute",
                        top: " 50%",
                        left: "50%",
                        fontSize: "50px",
                        color: "white",
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      <Link
                        to={`/products/${id}`}
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        <FaSearch
                          style={{
                            backgroundColor: "#ab7a5f",
                            fontSize: "2.5rem",
                            borderRadius: "50%",
                            padding: "0.5rem",
                          }}
                        />
                      </Link>
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box
                variant="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1rem",
                  "& .MuiTypography-root": {
                    fontSize: "1.1rem",
                    fontWeight: "300",
                  },
                }}
              >
                <Typography variant="h5">{name}</Typography>
                <Typography variant="p" sx={{ color: "#ab7a5f" }}>
                  {formatPrice(price)}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
