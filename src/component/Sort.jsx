import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { Box, Typography, FormControl, NativeSelect } from "@mui/material";
// import { useGlobalContext } from "../context/ProductProvider";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  // const Sort = ({ setGridView, setListView, handleChange, sortBy }) => {
  // const { products } = useGlobalContext();

  const { setGrid, setList, sortBy, updateSortedItem, filterProduct,products } =
    useFilterContext();
  // console.log(filterProduct);
  // console.log(filterItems);
  return (
    <Box
      sx={{
        margin: "1rem 0",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        rowGap: { xs: "1rem", md: "0" },
        alignItems: { sm: "center" },
        justifyContent: { sm: "space-between" },
      }}
    >
      <Box>
        <BsFillGridFill
          onClick={setGrid}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "0.2rem",
            fontSize: "1.5rem",
            borderRadius: "4px",
            marginRight: "0.5rem",
          }}
        />

        <BsList
          onClick={setList}
          style={{
            backgroundColor: "transparent",
            color: "#000",
            padding: "0.2rem",
            fontSize: "1.5rem",
            borderRadius: "3px",
            border: "1px solid black",
          }}
        />
      </Box>
      <Typography>{filterProduct.length} products found</Typography>
      <Box
        sx={{ width: "200px", borderBottom: "2px solid grey", height: "0.5px" }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ marginRight: "0.5rem" }}>Sort By</Typography>
        <Box component="">
          <FormControl
            fullWidth
            sx={{
              width: "150px",
              borderRadius: "5px",
              paddingLeft: "0.5rem",
            }}
          >
            <NativeSelect
              disableUnderline
              value={sortBy}
              onChange={updateSortedItem}
              sx={{ fontSize: "0.9rem" }}
            >
              <option value="lowest-price">Price (Lowest)</option>
              <option value="highest-price">Price (Highest)</option>
              <option value="name-a">Name (A-Z)</option>
              <option value="name-z">Name (Z-A)</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Sort;
