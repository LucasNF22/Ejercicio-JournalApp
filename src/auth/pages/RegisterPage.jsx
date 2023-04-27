import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth';


const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations ={
  email: [ (value) => value.includes('@'), 'El email debe ser Válido' ],
  password: [ (value) => value.length >= 6, 'El Password debe tener más de 6 caracteres' ],
  displayName: [ (value) => value.length >= 1, 'El Nombre es obligatorio' ],
  

}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );
  
  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid  
  } = useForm( formData, formValidations );

  // console.log(displayNameValid);
  
  const onSubmit = ( e ) => {
    e.preventDefault();
    setformSubmitted(true);

    console.log(isFormValid);
    if( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

  return (
        <AuthLayout title='Registro' >

        <form onSubmit={ onSubmit }>
          <Grid container >

            <Grid item xs={ 12 } sx={{ mt: 2 }} >
              <TextField 
                label="Nombre"  
                type="text"  
                placeholder= "John Wick"
                fullWidth 
                name= "displayName"
                value= { displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }} >
              <TextField 
                label="Email"  
                type="email"  
                placeholder= "johnwick@correo.com"
                fullWidth 
                name= "email"
                value= { email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }} >
              <TextField 
                label="Contraseña"  
                type="password"  
                placeholder= "contraseña"
                fullWidth 
                name= "password"
                value= { password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1  }} >
              
              <Grid 
                item 
                xs={ 12 } 
                display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>               
              </Grid>

              <Grid item xs={ 12 } >
                <Button 
                disabled={ isCheckingAuthentication }
                  type= "submit"
                  variant="contained" 
                  fullWidth 
                >
                  Crear Cuenta
                </Button>                     
              </Grid>
              
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }} >¿Ya tienes una cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login' >
                Ingresar
              </Link>

            </Grid>

          </Grid>
        </form>

        </AuthLayout>
     
  )
}
