import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link'
import { login } from '../service'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import 'animate.css'
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://wallup.net/wp-content/uploads/2019/09/135850-3d-architecture-pc-cad.jpg)',
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

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const classes = useStyles();

    const responseGoogle = (response) => {
        console.log(response.profileObj.email)
        localStorage.setItem('email',response.profileObj.email)
        history.push("/home");
    }

    const responseFailure = (response) => {
        console.log(response)
    }

    const loginUser = async (e) => {
        e.preventDefault()
        let error = ""
        try {
            if (!email.trim().length) {
                error += "Please enter an email "
            }
            if (!password.trim().length) {
                error += "Please enter a password !"
            }
            if (error !== "") {
                console.log(error)
                store.addNotification({
                    title: "Error",
                    message: error,
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
                const data = await login({ email, password })
                if (data.result === "Wrong Password") {
                    store.addNotification({
                        title: "Error",
                        message: "Wrong password entered",
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
                else if (data.result === "No such email exists") {
                    store.addNotification({
                        title: "Error",
                        message: "No such email exists",
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
                    localStorage.setItem('email', email)
                    history.push("/home");
                }
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
                        Sign in
          </Typography>
                    <form className={classes.form} noValidate onSubmit={loginUser}>
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={loginUser}
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <div style={{
                            marginLeft: 220
                        }}>
                            <GoogleLogin

                                clientId="997321405617-nv43b35u845suv0epb4fkqrfu2jm86rd.apps.googleusercontent.com"
                                buttonText="Login With Google"
                                onSuccess={responseGoogle}
                                onFailure={responseFailure}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </form>
                </div>
            </Grid>
            <ReactNotification />
        </Grid>
    );
}