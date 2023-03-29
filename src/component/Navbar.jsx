import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  useScrollTrigger,
  Slide,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

// interface Props {
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
//   window?: () => Window;
// }

const drawerWidth = "100%";
const navData = [
  { id: 1, link: "Home", path: "/" },
  { id: 2, link: "About", path: "/about" },
  { id: 3, link: "Products", path: "/products" },
  // { id: 4, link: "Login", path: "/login" },
];
// const navItems = ["Home", "About", "Contact", "Sign in"];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          flexGrow={1}
          sx={{ display: "flex", alignItems: "center" }}
        >
          Comfy
        </Typography>

        <IconButton>
          <CloseIcon
            sx={{ color: "red", fontSize: "1.5rem", marginRight: "1rem" }}
          />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ marginTop: "2rem", textAlign: "center" }}>
        {navData.map((nav) => (
          <ListItem
            key={nav.id}
            disablePadding
            sx={{
              textAlign: "center",
              display: "block",
            }}
          >
            <Box
              to={nav.path}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <ListItemButton
              // sx={{ textAlign: "center" }}
              >
                <Link to={nav.path} style={{ textDecoration: "none" }}>
                  <ListItemText
                    primary={nav.link}
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "1rem",
                        color: "black",
                        "& .hover": { color: "red" },
                      },
                    }}
                  />
                </Link>
              </ListItemButton>
            </Box>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          // display: { xs: "none", sm: "flex" },
          flexDirection: "row",
          marginTop: "2rem",
        }}
      >
        <Typography variant="p" sx={{ marginRight: "1.5rem" }}>
          Cart
          <IconButton>
            <ShoppingCartIcon />
            <Box
              variant="span"
              sx={{
                backgroundColor: "#ab7a5f",
                color: "#fff",
                width: "20px",
                height: "20px",
                fontSize: "0.8rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                position: "absolute",
                top: "-1px",
                right: "-1px",
              }}
            >
              0
            </Box>
          </IconButton>
        </Typography>

        <Typography variant="p">
          Login
          <IconButton>
            <PersonAddAlt1Icon />
          </IconButton>
        </Typography>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "white",
            boxShadow: "none",
            color: "black",
            padding: { sm: " 0.2rem 3rem ", xs: "0.5rem 0", lg: "0.5rem 5rem" },
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: { sm: "flex", justifyContent: "space-between" },
                width: "100%",
              }}
            >
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  // display: { xs: "initial", sm: "initial" },
                  fontSize: "2rem",
                  color: "#ab7a5f",
                  fontWeight: "700",
                  textAlign: "left",
                  textDecoration: "none",
                }}
              >
                Comfy
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexDirection: "row",
                }}
              >
                {navData.map((nav) => (
                  // desktop navlinks
                  <Link
                    to={nav.path}
                    key={nav.id}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        color: "#324d67",
                        margin: { md: "0 1rem ", sm: "0 0.3rem", xs: "0" },
                        fontSize: "1rem",
                        textTransform: "capitalize",
                        fontWeight:"300"
                      }}
                    >
                      {nav.link}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexDirection: "row",
                  fontSize: { sm: "1rem", md: "1.5rem" },
                  fontFamily:"Poppins"
                }}
              >
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="p"
                    sx={{ marginRight: "1rem", color: "black", }}
                  >
                    Cart
                    <IconButton>
                      <ShoppingCartIcon sx={{ color: "black" }} />
                      <Box
                        variant="span"
                        sx={{
                          backgroundColor: "#ab7a5f",
                          color: "#fff",
                          width: "20px",
                          height: "20px",
                          fontSize: "0.8rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50%",
                          position: "absolute",
                          top: "-1px",
                          right: "-1px",
                        }}
                      >
                        0
                      </Box>
                    </IconButton>
                  </Typography>
                </Link>

                <Link to="login" style={{ textDecoration: "none" }}>
                  <Typography variant="p" sx={{ color: "black" }}>
                    Login
                    <IconButton>
                      <PersonAddAlt1Icon sx={{ color: "black" }} />
                    </IconButton>
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                justifyContent: { xs: "space-between" },
                alignItems: { xs: "center" },
              }}
            >
              <IconButton
                // color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                  // backgroundColor: "black",
                  color: "#ab7a5f",
                  borderRadius: "7px",
                  padding: "4px 8px",
                }}
              >
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
