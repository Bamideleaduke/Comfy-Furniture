import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { PageHero } from "../component/PageHero";
import Image from "../assets/hero-bcg.jpeg";
// import heroImg1 from "../assets/hero-bcg.jpeg";

export const About = () => {
  return (
    <>
      <PageHero title={"About"} />
      <Box sx={{ padding: "3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={Image}
              alt="Product Image"
              sx={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ paddingLeft: "2rem" }}>
              <Typography
                sx={{
                  margin: "0 0 2rem 0",
                  fontSize: { xs: "1.7rem", sm: "2.5rem" },
                  textAlign: "left",
                  color: "#102A42",
                  fontWeight: "500",
                  position: "relative",
                  " &:after": {
                    content: "''",
                    position: "absolute",
                    width: "20%",
                    height: "4px",
                    backgroundColor: "hsl(22, 31%, 52%)",
                    bottom: "-3px", //to place it in bottom
                    left: "0",
                  },
                }}
              >
                Our Story
              </Typography>
              <Typography
                sx={{
                  color: "hsl(210,22%,49%)",
                  lineHeight: "30px",
                  textAlign: "left",
                  fontSize: "0.9rem",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                accusantium sapiente tempora sed dolore esse deserunt eaque
                excepturi, delectus error accusamus vel eligendi, omnis beatae.
                Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                dolore, obcaecati incidunt sequi blanditiis est exercitationem
                molestiae delectus saepe odio eligendi modi porro eaque in
                libero minus unde sapiente consectetur architecto. Ullam rerum,
                nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed
                quos similique amet. Ex, voluptate accusamus nesciunt totam
                vitae esse iste.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
