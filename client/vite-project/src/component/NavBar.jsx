import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import { Link } from 'react-router-dom'; // Import Link for routing

const theme = createTheme({
    palette: {
      primary: {
        light: lightGreen[300],
        main: lightGreen[500],
        dark: lightGreen[700],
        darker: lightGreen[900],
      },
    },
  });

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nausica's
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
