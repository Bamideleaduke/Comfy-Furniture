import { Typography, Box, TextField, Button } from "@mui/material";
import React from "react";

export const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: { xs: "4rem 1rem", sm: "4rem 3rem", lg: "12rem 4rem 12rem" },
        fontFamily:"Poppins"
      }}
    >
      <Typography variant="h5" sx={{margin:"1rem 0 2rem", fontSize:{md:"2rem", },fontWeight:"600", color:"#102A42"}}>Join our newsletter and get 20% off</Typography>
      <Box
        sx={{
          display: { md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        
        }}
      >
        <Box sx={{ flexBasis: "50%" }}>
        <Typography variant="p" component="p" sx={{ width:"70%", lineHeight:"1.8", fontSize:"1rem",color:"#617D98"}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
          asperiores cupiditate fuga necessitatibus enim. Dolorem quos fugit
          consequuntur nisi quasi.
        </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            flexBasis: "50%",
            "& .MuiOutlinedInput-input": {
              height: "0.5rem",
            //   borderTopRightRadius:"0",
              borderRadius:"0"
            },
            display:"flex",
            justifyContent:{sm:"right"},
            marginTop:{xs:"2rem", md:"0"}
            // alignItems:"right"
            // "& .MuiInputBase-root-MuiOutlinedInput-root":{
            //     borderRadius:"0"
            // },
            // "& .MuiInputBase-input":{
            //     borderRadius:"0"
            // },
            // "& .MuiInputBase-input-MuiOutlinedInput-input":{
            //     borderRadius:"0"
            // },
        //   "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
        //     borderRadius:"0"
        //   }

         
          }}
        >
          <TextField
            id="outlined-helperText"
            label=""
            sx={{ height: "0.3rem", 
            width: {xs:"100%", md: "80%", lg: "80%" }, 
            borderRadius:"0",
          }}
            //   defaultValue="Default Value"
            //   helperText="Some important text"
          />
          <Button
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#ab7a5f",
              color: "black",
              border: "1px solid black",
              borderTopLeftRadius:"0",
              borderBottomLeftRadius:"0",
              "&:hover":{
                backgroundColor: "#ab7a5f",
                color: "black",
              }
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
