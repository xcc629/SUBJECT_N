import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  ThemeProvider,
} from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

import loginTheme from '../../styles/theme';

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={loginTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8,
            width: '380px',
            height: '523px',
            background: 'background',
            borderRadius: '8px',
          }}
        >
          <Avatar
            sx={{
              m: 4,
              width: '48px',
              height: '48px',
              bgcolor: 'primary.main',
              color: 'white',
            }}
          >
            <LocalMoviesIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ marginBottom: '42px', fontWeight: 700 }}
          >
            로그인
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box component="div">
              <Typography sx={{ fontSize: '12px', color: 'primary.100' }}>
                EMAIL
              </Typography>
              <TextField
                margin="none"
                required
                id="email"
                label="Email address"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
                sx={{
                  width: '316px',
                  hegiht: '42px',
                }}
              />
            </Box>
            <Box pt={3}>
              <Typography sx={{ fontSize: '12px', color: 'primary.100' }}>
                PASSWORD
              </Typography>
              <TextField
                margin="none"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
                helperText=""
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                width: '316px',
                height: '48px',
                mt: 5,
                mb: 2,
              }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
