// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright';

import {useDispatch, useSelector} from 'react-redux';
import {changeEmail, changePassword }from '../store';

import {requestLogin} from '../api/loginAPI';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

import { toast } from 'react-toastify';

const defaultTheme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch();
    const {email, password} = useSelector(state => state.login);

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleChangeEmail = (e) => {
        dispatch(changeEmail(e.target.value));
    }

    const handleChangePassword = (e) => {
        dispatch(changePassword(e.target.value));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //use login function here
        try{
            const response = await requestLogin(email, password);

            if(response.success){
                login(response.user);
                toast.success(response.message);
                //store login details in the sessionStorage
                sessionStorage.setItem('successMessage', JSON.stringify(response.message));

                //navigate to dashboard
                navigate('/dashboard');
            }
        }
        catch(error){
            console.log(error.message);
            toast.error(error.message);
        }
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleChangeEmail}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {email}
            <TextField
                onChange={handleChangePassword}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {password}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
