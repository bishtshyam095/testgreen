import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    windows.alert("User Logged in");
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', marginTop: '20vh', padding: 2 }}>
      <CardContent>
        <Typography variant='h4'>Login Page</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" mt={2}>
          Need an account? <Link href="/">Register</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
