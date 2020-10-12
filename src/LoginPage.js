import React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://yulsip.com/">
        YulSIP Communications
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    justifyItems: 'center',
    width:'100%',
  },
  image: {
    height:'100vh',
    alignContent:'center',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },
  paper: {
    display: 'flex',
    justifyContent: 'flex-end',
    justifyItems:'flex-end',
    flexDirection: 'end',
    alignContent:'center',
    //paddingTop:'50%',
    paddingRight:'40px',
    background:'transparent',

  },
  paper2: {
    display: 'flex',
    height: '100vh',
    width:'100vh',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    //alignContent:'center',
    //paddingLeft:'38%',
    //float:'right',
    background:'transparent',


  },
  avatar: {
    display:'flex',
    justifyItems:'center',
    alignContent:'center',
    justifyContent:'center',
    left: '41%',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignContent:'center',
    width: '390px', // Fix IE 11 issue.
    height: '530px',
    marginTop: theme.spacing(1),
    background:'white',
    borderRadius:'20px',
    border: '5px solid gray',
    WebkitBorderRadius:'20px',
    paddingRight:'30px',
    paddingLeft:'30px',
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [realm, setRealm] = useState('');
  const login = useLogin();
  const notify = useNotify();
    const submit = (e) => {
      e.preventDefault();
      login({ username, password, realm })
          .catch(() => notify('Invalid credentials'));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.image} >
      <Grid container className={classes.paper}>
        <div>
          <form className={classes.form} onSubmit={submit}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" justifyContent='center'>
            Sign in
          </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="current-username"
              autoFocus
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="realm"
              label="Realm"
              name="realm"
              autoComplete="current-realm"
              autoFocus
              value={realm}
              onChange={e => setRealm(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://yulsip.com" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
            <Notification/>
          </form>
        </div>
      </Grid>
      </Grid>
    </Grid>
  );
}