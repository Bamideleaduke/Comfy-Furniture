import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PageHero = ({ title, product }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#eaded7",
        padding: { xs: "1rem 1rem", sm: "1.5rem 3rem", md: "2rem 3rem" },
        margin: { xs: "1rem 0 2rem 0", sm: "1rem 0 0 0" },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.3rem", md: "2rem" },
            fontWeight: "600",
            textTransform: "capitalize",
          }}
        >
          <Link to="/" style={{ color: "#795744", textDecoration: "none" }}>
            Home{" "}
          </Link>
          {product && (
            <Link
              to="/products"
              style={{ color: "#453227", textDecoration: "none" }}
            >
              / Products
            </Link>
          )}
          / {title}
        </Typography>
      </Box>
    </Box>
  );
};
