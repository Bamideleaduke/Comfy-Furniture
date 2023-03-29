import { useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/ProductProvider";
import { formatPrice } from "../helper/Helper";

export const Featuredproduct = () => {
  const { products } = useGlobalContext();
  const [show, setShow] = useState("");
  //   console.log(products);
  //   console.log(featuredProduct);
  return (
    <Box
      sx={{
        backgroundColor: "#f1f5f8",
        padding: {
          xs: "1rem",
          sm: "2rem 3rem",
          md: "3rem 2rem",
          lg: "3rem 4rem",
        },
        fontFamily: "Poppins",
      }}
    >
      <Typography
        sx={{
          margin: "2rem 0",
          fontSize: { xs: "1.7rem", sm: "2.5rem" },
          textAlign: "center",
          color: "#102A42",
          fontWeight: "500",
          //   position: "relative",
          //   " &:after": {
          //     content: "''",
          //     position: "absolute",
          //     width: "10%",
          //     height: "5px",
          //     backgroundColor: "hsl(22, 31%, 52%)",
          //     bottom: "-3px", //to place it in bottom
          //     left: "47%",
          //     right: "50%",
          //   },
        }}
      >
        Featured Product
      </Typography>
      <Grid container spacing={4}>
        {products.slice(6, 9).map((feature) => {
          const { id, image, name, price } = feature;
          return (
            <Grid key={feature.id} item xs={12} sm={6} lg={4}>
              {/* <Box>
                <Box position="relative">
                  <img
                    src={feature.image}
                    alt="product"
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "5px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      // display: "none",
                      // visibility:"hidden",
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
                      "&:hover": {
                        // display: "initial",
                        // visibility:"initial"
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        position: "absolute",
                        top: " 50%",
                        left: "50%",
                        fontSize: "50px",
                        color: "white",
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      <FaSearch
                        style={{
                          backgroundColor: "#ab7a5f",
                          fontSize: "2rem",
                          borderRadius: "50%",
                          padding: "0.5rem",
                        }}
                      />
                    </Typography>
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
                  <Typography variant="h5">{feature.name}</Typography>
                  <Typography variant="p" sx={{ color: "#ab7a5f" }}>
                    {formatPrice(feature.price)}
                  </Typography>
                </Box>
              </Box> */}
              <Box position="relative">
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
        {/* <Grid item xs={12} sm={6} lg={4}>
          <Box>
            <Box position="relative">
              <img
                src={Furniture3}
                alt="product"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "5px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  // display: "none",
                  // visibility:"hidden",
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
                  "&:hover": {
                    // display: "initial",
                    // visibility:"initial"
                  },
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    top: " 50%",
                    left: "50%",
                    fontSize: "50px",
                    color: "white",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <FaSearch
                    style={{
                      backgroundColor: "#ab7a5f",
                      fontSize: "2rem",
                      borderRadius: "50%",
                      padding: "0.5rem",
                    }}
                  />
                </Typography>
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
              <Typography variant="h5">Entertainment Center</Typography>
              <Typography variant="p" sx={{ color: "#ab7a5f" }}>
                $599.99
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box>
            <Box position="relative">
              <img
                src={Furniture2}
                alt="product"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "5px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  display: "none",
                  // visibility:"hidden",
                  width: "100%",
                  height: "100%",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  zIndex: "1",
                  cursor: "pointer",
                  "&:hover": {
                    // display: "initial",
                    // visibility:"initial"
                  },
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    top: " 50%",
                    left: "50%",
                    fontSize: "50px",
                    color: "white",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <FaSearch
                    style={{
                      backgroundColor: "#ab7a5f",
                      fontSize: "2rem",
                      borderRadius: "50%",
                      padding: "0.5rem",
                    }}
                  />
                </Typography>
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
              <Typography variant="h5">High-Back Bench</Typography>
              <Typography variant="p" sx={{ color: "#ab7a5f" }}>
                $399.99
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box>
            <Box position="relative">
              <img
                src={Furniture1}
                alt="product"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "5px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  display: "none",
                  // visibility:"hidden",
                  width: "100%",
                  height: "100%",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  zIndex: "1",
                  cursor: "pointer",
                  "&:hover": {
                    // display: "initial",
                    // visibility:"initial"
                  },
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    top: " 50%",
                    left: "50%",
                    fontSize: "50px",
                    color: "white",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <FaSearch
                    style={{
                      backgroundColor: "#ab7a5f",
                      fontSize: "2rem",
                      borderRadius: "50%",
                      padding: "0.5rem",
                    }}
                  />
                </Typography>
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
              <Typography variant="h5">Modern Bookshelf</Typography>
              <Typography variant="p" sx={{ color: "#ab7a5f" }}>
                $319.99
              </Typography>
            </Box>
          </Box>
        </Grid> */}
      </Grid>
      <Box
        component={Link}
        to="/products"
        sx={{
          backgroundColor: "#ab7a5f",
          color: "#fff",
          textDecoration: "none",
          padding: "0.7rem 1rem",
          display: "block",
          textAlign: "center",
          maxWidth: "160px",
          fontSize: "0.9rem",
          borderRadius: "5px",
          margin: "3rem auto",
          letterSpacing: "1px",
        }}
      >
        ALL PRODUCTS
      </Box>
    </Box>
  );
};
