import React from 'react';
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
                            <OutlinedInput id="component-outlined"  label="Name" />
                        </FormControl>
                    </Grid>
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
                            <OutlinedInput id="component-outlined"  label="Email" />
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
            <div className="FieldDiv">
                <Grid className="gridContainer" container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <LockOpenIcon/>
                    </Grid>
                    <Grid item>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Retype Password</InputLabel>
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
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
            </div>       
        </div>
    );
};

export default Signup;