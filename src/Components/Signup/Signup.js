import React, { useContext } from 'react';
import './Signup.css';
import { Button, FormControl, Grid, InputLabel, makeStyles, OutlinedInput, TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NavLink, useHistory } from 'react-router-dom';
import googleLogo from '../Images/google-logo.svg';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../FireBaseConfig/firebase.config";
import { ContextForUser } from '../../App';


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
      width: '40ch',
    },
  }));

const Signup = () => {

    const [inputEmail , setInputEmail] = React.useState('');
    const [inputPassword , setInputPassword] = React.useState('');
    const [inputName , setInputName] = React.useState('');
    const [inputRetypePassword , setInputRetypePassword] = React.useState('');

    let history = useHistory();

    const userInfoFromContext = useContext(ContextForUser);

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleContinueWithGoogleButton = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(response => {
            const {displayName , email , photoURL} = response.user;
            const userData = {
                name: displayName ,
                email: email ,
                photo: photoURL ,
                isLoggedInOrNot : true
            }
            userInfoFromContext[1](userData);
            history.goBack();
        })
        .catch(err => {
            alert("There Was A Problem Signing In. Please Try Again Later!");
            console.log(err.code);
        })
    }

    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const [valuesRetype, setValuesRetype] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChangeRetype = (prop) => (event) => {
        setValuesRetype({ ...valuesRetype, [prop]: event.target.value });
      };
    
      const handleClickShowPasswordRetype = () => {
        setValuesRetype({ ...valuesRetype, showPassword: !valuesRetype.showPassword });
      };
    
      const handleMouseDownPasswordRetype = (event) => {
        event.preventDefault();
      };

    const validateName = (name) => {
        if(name.length <= 0){
            document.getElementById('errorInNameInput').style.display = 'block';
            return false;
        }
        document.getElementById('errorInNameInput').style.display = 'none';
        return true;
    }

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        if(!re.test(email)){
            document.getElementById('errorInEmailInput').style.display = 'block';
            return false;
        }
        document.getElementById('errorInEmailInput').style.display = 'none';
        return true;
    }

    const validatePassword = (password) => {
        if(password.length <= 6){
            document.getElementById('errorInPasswordInput').style.display = 'block';
            return false;
        }
        else{
            document.getElementById('errorInPasswordInput').style.display = 'none';
            return true;
        
        }
    }

    const validateRetypePassword = (password) => {
        if(password !== inputRetypePassword){
            document.getElementById('errorInRetypePasswordInput').style.display = 'block';
            return false;
        }
        document.getElementById('errorInRetypePasswordInput').style.display = 'none';
        return true;
    }

    return (
        <div className="signupMainDiv">
            <h3>Create A New Account</h3>
            <div className="FieldDiv">
                <Grid className="gridContainer" container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="component-outlined">Name</InputLabel>
                            <OutlinedInput id="component-outlined"  label="Name" onChange={event => setInputName(event.target.value)} onBlur={() =>validateName(inputName)}/>
                        </FormControl>
                    </Grid>
                    <p className="parentTag"><small id="errorInNameInput">Name Can't Be Of Zero Length!</small></p>
                </Grid>
            </div>
            <div className="FieldDiv">
                <Grid className="gridContainer" container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <EmailIcon />
                    </Grid>
                    <Grid item>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                            <OutlinedInput id="component-outlined"  label="Email" onChange={event => setInputEmail(event.target.value)} onBlur={() =>validateEmail(inputEmail)}/>
                        </FormControl>
                    </Grid>
                    <p className="parentTag"><small id="errorInEmailInput">Invalid Email!</small></p>
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
                                    onChange={event => {
                                        setInputPassword(event.target.value) 
                                    }} 
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    onBlur={() =>validatePassword(inputPassword)}
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
                    <p className="parentTag"><small id="errorInPasswordInput">Invalid Password . Must Be Atleast 6 characters!</small></p>                        
                </Grid>
            </div>
            <div className="FieldDiv">
                <Grid className="gridContainer" container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <LockOpenIcon/>
                    </Grid>
                    <Grid item>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Retype Password</InputLabel>
                                <OutlinedInput
                                    onChange={event => {
                                        setInputRetypePassword(event.target.value);
                                    }} 
                                    id="outlined-adornment-retype-password"
                                    type={valuesRetype.showPassword ? 'text' : 'password'}
                                    value={valuesRetype.password}
                                    onChange={handleChangeRetype('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordRetype}
                                        onBlur={() =>validateRetypePassword(inputRetypePassword)}
                                        onMouseDown={handleMouseDownPasswordRetype}
                                        edge="end"
                                        >
                                        {valuesRetype.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                    </Grid> 
                    <p className="parentTag"><small id="errorInRetypePasswordInput">Passwords Don't Match!</small></p>                         
                </Grid>
            </div>
            <div>
                <Button variant="contained" color="secondary">
                    Sign Up
                </Button>
            </div>  
            <p>
                <small>Already Have An Account? <NavLink to="/login">Log In</NavLink></small>
            </p>     
            <hr/>
            <div>
                <p><small>OR</small></p>
                <Button className="continueWithGoogleButton" variant="contained" color="secondary"onClick={()=>{handleContinueWithGoogleButton()}}>
                    <img src={googleLogo} alt="..."/> Continue With Google
                </Button>
            </div>
        </div>
    );
};

export default Signup;