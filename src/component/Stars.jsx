import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Box, Typography } from "@mui/material";

export const Stars = ({ stars, reviews }) => {
  const starLength = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <Typography sx={{color:"orange", fontSize:"1.5rem",marginRight:"0.2rem"}} variant="span" key={index}>
        {stars > number ? (<BsStarFill/>) : stars > index ? (<BsStarHalf/>) :( <BsStar/>)}
      </Typography>
    );
  });

  return (
    <Box sx={{display:"flex", marginBottom:"1rem"}}>
      <Box>{starLength}</Box>
      <Typography variant="p" sx={{marginLeft:"0.7rem", fontSize:"1.3rem"}}>({reviews} customer reviews)</Typography>
    </Box>
  );
};
