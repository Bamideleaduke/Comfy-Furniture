import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import AppRoutes from "./Route/AppRoutes";
import { theme } from "./Theme/Theme";

const App = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Box>
  );
};

export default App;
