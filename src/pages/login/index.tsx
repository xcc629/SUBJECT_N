import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const theme = createTheme({
  palette: {
    background: {
      default: '#363740',
    },
    primary: {
      main: '#3751FF',
    },
  },
});

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
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
            background: 'white',
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
            fontWeight="700"
            component="h1"
            variant="h5"
            marginBottom="40px"
          >
            로그인
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="EMAIL"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="PASSWORD"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
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
