import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

export const ProductImages = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Box>
      <Box
        component="img"
        src={main.url}
        alt=""
        sx={{
          width: { xs: "345px", sm: "672px", md: "100%" },
          height: { xs: "300px", sm: "500px" },
          objectFit: "cover",
          borderRadius: "7px",
        }}
      />
      <Grid container spacing={1} sx={{ marginTop: "0.7rem" }}>
        {images.map((image, index) => {
          return (
            <Grid item xs={2.4} md={2.4} key={index}>
              <Box
                component="img"
                src={image.url}
                alt=""
                onClick={() => setMain(images[index])}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: { xs: "60px", sm: "80px", md: "100px" },
                  cursor: " pointer",
                  borderRadius: "7px",
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
