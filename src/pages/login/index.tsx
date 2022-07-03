/* eslint-disable operator-linebreak */
import * as React from 'react';
import { useCallback, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../redux/login/slice';

import LogoImageText from '../../components/atoms/LogoImageText';
import { AppDispatch } from '../../redux/store';

export default function Login() {
  // loginReducer
  const dispatch = useDispatch<AppDispatch>();
  //
  const navigate = useNavigate();
  //
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailVaild, setEmailVaild] = useState<Boolean | null>(null);
  const [pwVaild, setPwVaild] = useState<Boolean | null>(null);
  // RegExp
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const pwRegExp1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{10,}$/;
  const pwRegExp2 = /^(?=.*[A-Za-z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
  const pwRegExp3 = /^(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
  const pwRegExp4 =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  //

  const emailVaildFc = useCallback(() => {
    if (email) {
      setEmailVaild(emailRegExp.test(email));
    }
  }, [email]);

  const pwVaildFc = useCallback(() => {
    if (pw) {
      const pwVaildResult =
        pwRegExp1.test(pw) ||
        pwRegExp2.test(pw) ||
        pwRegExp3.test(pw) ||
        pwRegExp4.test(pw);

      setPwVaild(pwVaildResult);
    }
  }, [pw]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLFormElement>) => {
      const data = new FormData(event.currentTarget);

      const user = {
        email: data.get('email'),
        password: data.get('password'),
      };

      setEmail(user.email as string);
      setPw(user.password as string);
      emailVaildFc();
      pwVaildFc();
    },
    [email, pw],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailVaild && pwVaild) {
      dispatch(postLogin(email)).then((result) => {
        navigate('/movie/list');
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10vh',
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
          onChange={handleChange}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 2,
          }}
        >
          <TextField
            error={emailVaild !== null && !emailVaild}
            helperText={
              emailVaild !== null &&
              !emailVaild &&
              '이메일 형식이 맞지 않습니다.'
            }
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
          <TextField
            error={pwVaild !== null && !pwVaild}
            helperText={
              pwVaild !== null && !pwVaild && '비밀번호 형식이 맞지 않습니다.'
            }
            margin="dense"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            size="small"
          />
          <Typography
            sx={{
              width: '300px',
              fontSize: '12px',
              pt: 4,
            }}
          >
            {`연속적인 숫자나 생일, 전화번호 등 
            추측하기 쉬운 개인정보 및
            아이디와 비슷한 비밀번호는 
            사용하지 않기를 권고합니다.`}
          </Typography>
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
