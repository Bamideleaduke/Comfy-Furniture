import { Box, Typography, Grid, Button } from "@mui/material";
import heroImg1 from "../assets/hero-bcg.jpeg";
import heroImg2 from "../assets/hero-bcg-2.jpeg";

export const Hero = () => {
  return (
    <Box
      sx={{
        // marginTop: { sm: "7rem", xs: "5rem",lg:"6rem" },
        padding: {
          xs: "0.5rem 1rem 0",
          sm: " 0.5rem 3rem 0",
          md: "0.5rem 2rem 0",
          lg: "0.5rem 6rem 0",
        },
        fontFamily: "Poppins",
        // border: "2px solid red",
      }}
    >
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              textAlign: { xs: "left" },
              paddingTop: { xs: "3rem", lg: "5rem" },
              paddingRight: { lg: "3rem" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem" },
                fontWeight: "bold",
                marginBottom: "1.5rem",
                paddingRight: { xs: "2rem", lg: "3rem" },
                color: "#102a42",
                width: { sm: "400px" },
              }}
            >
              Design Your Comfort Zone
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
                lineHeight: "2",
                wordSpacing: { lg: "1px" },
                textAlign: { lg: "justify" },
                // color:"#324d67"
                color: "#617D98",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </Typography>
            <Button
              sx={{
                display: "block",
                backgroundColor: "#ab7a5f",
                color: "white",
                // padding: "0.5rem 1.5rem",
                padding: "12px 24px",
                fontSize: "1rem",
                marginTop: "2rem",
                marginBottom: "2rem",
                "&:hover": { color: "#ab7a5f", border: "2px solid #ab7a5f" },
                letterSpacing: "3px",
                fontWeight: "300",
              }}
            >
              SHOP NOW
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            width: "100%",
            // height: "500px",
            display: { xs: "none", sm: "none", md: "initial" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: { md: "absolute", lg: "relative" },
            }}
          >
            <Box
              sx={{
                // position: "absolute",
                paddingLeft: "6rem",
                // marginLeft:"3.5rem"
              }}
            >
              <img
                src={heroImg1}
                alt="heroImg1"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box sx={{ position: "absolute", bottom: "0" }}>
              <img
                src={heroImg2}
                alt="heroImg1"
                style={{
                  width: "230px",
                  height: "130px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
