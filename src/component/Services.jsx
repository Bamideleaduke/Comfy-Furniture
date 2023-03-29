import { Box, Grid, Typography } from "@mui/material";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#eaded7",
        padding: { xs: "4rem 1rem",sm: "5rem 2rem", lg: "4rem 4rem 12rem" },
        position:"relative",
        fontFamily:"Poppins"
      }}
    >
      <Box
        sx={{
          display: { sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5rem",
        }}
      >
        <Box sx={{ flexBasis: "50%" }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem" },
              width: { xs: "250px", md: "300px" },
              fontWeight: "bold",
              color: "#453227",
              marginBottom: "1.5rem",
              lineHeight:"1"
            }}
          >
            Custom Furniture Built Only For You
          </Typography>
        </Box>
        <Typography
          variant="p"
          sx={{
            color: "#795744",
            flexBasis: "50%",
            lineHeight: "1.7",
            fontSize: { xs: "1rem", sm: "0.95rem" },
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A saepe
          minus odit perspiciatis culpa possimus doloremque aspernatur voluptas
          omnis pariatur? Lorem ipsum dolor sit amet.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{position:{lg:"absolute"}, left:"0", right:"0", padding:{lg:"0 4rem"} }}>
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            sx={{
              backgroundColor: "#c5a491",
              padding: "2.5rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <Box
              variant="span"
              component="span"
              sx={{
                backgroundColor: "#eaded7",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              <GiCompass />
            </Box>
            <Typography
              variant="h5"
              sx={{ margin: "1rem 0", fontSize: "1.3rem", fontWeight: "500" }}
            >
              Mission
            </Typography>
            <Typography
              variant="p"
              sx={{ lineHeight: "1.8", color: "#795744" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem non eligendi tempora sunt dolores rem ea enim unde
              molestiae iusto!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            sx={{
              backgroundColor: "#c5a491",
              padding: "2.5rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <Box
              variant="span"
              component="span"
              sx={{
                backgroundColor: "#eaded7",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              <GiDiamondHard />
            </Box>

            <Typography
              variant="h5"
              sx={{ margin: "1rem 0", fontSize: "1.3rem", fontWeight: "500" }}
            >
              Vission
            </Typography>
            <Typography
              variant="p"
              sx={{ lineHeight: "1.8", color: "#795744" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem non eligendi tempora sunt dolores rem ea enim unde
              molestiae iusto!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            sx={{
              backgroundColor: "#c5a491",
              padding: "2.5rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <Box
              variant="span"
              component="span"
              sx={{
                backgroundColor: "#eaded7",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              <GiStabbedNote />
            </Box>
            <Typography
              variant="h5"
              sx={{ margin: "1rem 0", fontSize: "1.3rem", fontWeight: "500" }}
            >
              History
            </Typography>
            <Typography
              variant="p"
              sx={{ lineHeight: "1.8", color: "#795744" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem non eligendi tempora sunt dolores rem ea enim unde
              molestiae iusto!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
