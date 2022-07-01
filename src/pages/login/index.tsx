import * as React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LogoImageText from '../../components/atoms/LogoImageText';

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
        <Box m={4}>
          <LogoImageText withText={false} />
        </Box>

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
              bgcolor: 'primary.main',
              color: 'white',
            }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
