import React, { useState, useEffect, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { signup } from '../service'
import { isValidEmail } from '../utils'
import Notifications from '../components/notification'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import 'animate.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://cdn.allwallpaper.in/wallpapers/1920x1200/4630/architecture-schematic-1920x1200-wallpaper.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirm_password] = useState('')
  
  const history = useHistory()

  const signupUser = async (e) => {
    let error = ""
    e.preventDefault()
    try {
      if (!name.trim().length) {
        error += "Please enter a username ! \n"
      }
      if (!email.trim().length) {
        error += "Please enter an Email ID ! \n"
      }
      if (!password.trim().length) {
        error += "Please enter a password ! \n"
      }
      if (!isValidEmail(email)) {
        error += "Please enter a valid email ID ! \n"
      }
      if (password !== confirm_password) {
        error += "Please enter matching passwords ! \n"
      }
      if (error !== "") {
        store.addNotification({
          title: "Error",
          message: 'Please Fill in All Fields',
          type: "danger",
          insert: "bottom",
          container: "bottom-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
            showIcon: true
          },
          width: 400
        });      
      }
      else {
        const data = await signup({ name, email, password })
        console.log(data)
        history.push('/login')
      }
    } catch (e) {
      console.log(e)
      store.addNotification({
        title: "Error",
        message: 'An Error Occurred',
        type: "danger",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
          showIcon: true
        },
        width: 400
      });
    }
    

  }

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={signupUser}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm"
              label="Confirm Password"
              type="password"
              id="confirm"
              autoComplete="confirm-current-password"
              onChange={(e) => setConfirm_password(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={signupUser}
              className={classes.submit}
            >

              Sign Up
            </Button>
          </form>
          <Grid item>
            <a href="/login" variant="body2">
              {"Have an account? Login"}
            </a>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}