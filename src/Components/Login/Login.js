import React, { useContext } from 'react';
import './Login.css';
import { Button, FormControl, Grid, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink, useHistory } from 'react-router-dom';
import googleLogo from '../Images/google-logo.svg';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../FireBaseConfig/firebase.config";
import { ContextForUser } from '../../App';

// this is the login in page component where the user will be asked to log in 

// style from material-ui
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '30ch',
    },
  }));

const Login = () => {

    // initializing the necessary things
    let history = useHistory();
    const userInfoFromContext = useContext(ContextForUser);
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    // when continue with google button is pressed
    const handleContinueWithGoogleButton = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(response => {
            const {displayName , email , photoURL} = response.user;
            console.log(response.user);
            const userData = {
                name: displayName ,
                email: email ,
                photo: photoURL ,
                isLoggedInOrNot : true
            }
            userInfoFromContext[1](userData);
            history.replace('/');
        })
        .catch(err => {
            alert(err.message);
            console.log(err.code);
        })
    }

    // setting state for the password field
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });

    // declaring the email state
    const [inputEmail , setInputEmail] = React.useState('');
  
    // setting the password when being changed and other operations from material ui here and under
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    // when log in buttton is clicked
    const handleLogInButtonClick = () => {
        const email = inputEmail;
        const password = values.password;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Log In Successful');
            
            let {displayName , email , photoURL} = user;
            console.log(email);
            if(photoURL === null){
                photoURL = 'https://static.thenounproject.com/png/5024-200.png';
            }
            const userData = {
                name: displayName ,
                email: email ,
                photo: photoURL ,
                isLoggedInOrNot : true
            }
            userInfoFromContext[1](userData);
            history.replace('/');
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
    }

    return (
        <div className="logInMainDiv">
            <h3>Log In</h3>
            <div className="FieldDiv">
                <Grid className="gridContainer" container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <EmailIcon />
                    </Grid>
                    <Grid item>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                            <OutlinedInput id="component-outlined"  label="Email" onChange={(event) => setInputEmail(event.target.value)} />
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            <div className="FieldDiv">
                <Grid className="gridContainer" container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <LockIcon/>
                    </Grid>
                    <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                    </Grid>                        
                </Grid>
            </div>
            <div>
                <Button variant="contained" color="secondary" onClick={()=>handleLogInButtonClick()}>
                    Log In
                </Button>
            </div>  
            <p>
                <small>Don't Have An Account? <NavLink to="/signup">Sign Up</NavLink></small>
            </p>     
            <hr/>
            <div>
                <p><small>OR</small></p>
                <Button className="continueWithGoogleButton" variant="contained" color="secondary" onClick={()=>{handleContinueWithGoogleButton()}}>
                    <img src={googleLogo} alt="..."/> Continue With Google
                </Button>
            </div>
        </div>
    );
};

export default Login;