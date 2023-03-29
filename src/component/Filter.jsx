import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  NativeSelect,
  FormControl,
} from "@mui/material";
import { getUniqueValues } from "../helper/Helper";
// import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../context/FilterContext";

const Filter = () => {
  const { filterItems, products, company, selectedColor, filterProduct } =
    useFilterContext();
  //   console.log(products);
  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          // width: "25ch"
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        InputProps={{
          disableUnderline: true,
          style: { height: "50px", fontSize: "1rem", padding: "0" },
        }}
      />

      <Box>
        {/* categories */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "600", marginBottom: "0.5rem" }}
          >
            Category
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            {categories.map((category, index) => {
              return (
                <Button
                  key={index}
                  type="button"
                  name="category"
                  onClick={filterItems}
                  sx={{
                    display: "inline",
                    textAlign: "left",
                    color: "#617d98",
                    fontWeight: "200",
                    padding: "0",
                    "&:active": {
                      color: "red",
                    },
                  }}
                >
                  {category}
                </Button>
              );
            })}
          </Box>
        </Box>
        {/* comopany */}
        <Box sx={{ margin: "1rem 0" }}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "0.5rem", fontWeight: "600" }}
          >
            Company
          </Typography>
          <FormControl
            fullWidth
            sx={{
              width: "90px",
              borderRadius: "5px",
            }}
          >
            <NativeSelect
              disableUnderline
              name="company"
              value={company}
              onChange={filterItems}
              sx={{ fontSize: "0.9rem", backgroundColor: "#f1f5f8" }}
              inputProps={{ "aria-label": "Without label" }}
            >
              {companies.map((company, index) => {
                return (
                  <option key={index} value={company}>
                    {company}
                  </option>
                );
              })}
              {/* <option value="lowest-price">Price (Lowest)</option>
              <option value="highest-price">Price (Highest)</option>
              <option value="name-a">Name (A-Z)</option>
              <option value="name-z">Name (Z-A)</option> */}
            </NativeSelect>
          </FormControl>
        </Box>
        {/* colors */}
        <Box>
          <Typography
            variant="h6"
            sx={{ marginBottom: "0.5rem", fontWeight: "600" }}
          >
            Colors
          </Typography>
          <Box>
            {colors.map((itemColor, index) => {
              // console.log(itemColor)
              if (itemColor === "all") {
                return (
                  <Button
                    key={index}
                    type="button"
                    name="colors"
                    // onClick={filterItems}
                    sx={{
                      minWidth: "20px",
                      padding: "0 0.3rem 0 0",
                      color: "#617d98",
                      fontSize: "1rem",
                    }}
                    // data-color="all"
                    // className={`${
                    //   itemColor === "all" ? "all-btn active" : "all-btn"
                    // }`}
                  >
                    all
                  </Button>
                );
              }
              return (
                <Button
                  key={index}
                  name="color"
                  onClick={filterItems}
                  // onMouseEnter={() => setShow(index)}
                  // style={{ backgroundColor: itemColor }}
                  sx={{
                    minWidth: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: itemColor,
                    margin: "0 0.3rem",
                    "&:hover": {
                      backgroundColor: itemColor,
                    },
                  }}

                  // data-color={itemColor}
                  // className={`${
                  //   color === 'all' ? 'all-btn active' : 'all-btn'
                  // }`}
                >
                  {/* {selectedColor === itemColor ? <FaCheck /> : null} */}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
