import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth)

  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm( formData );

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( e ) => {
    e.preventDefault();

    console.log({ email, password });
    dispatch( startLoginWithEmailPassword({ email, password }) )
  };

  const onGoogleSignIn = () => {
    
    dispatch( startGoogleSignIn() );    

  }

  return (
        <AuthLayout title='Login' >

        <form onSubmit={ onSubmit }>
          <Grid container >

            <Grid item xs={ 12 } sx={{ mt: 2 }} >
              <TextField 
                label="correo"  
                type="email"  
                placeholder= "correo@google.com"
                fullWidth 
                name='email'
                value={ email }
                onChange={ onInputChange }
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }} >
              <TextField 
                label="Contraseña"  
                type="password"  
                placeholder= "contraseña"
                fullWidth 
                name='password'
                value={ password }
                onChange={ onInputChange }
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

              <Grid item xs={ 12 } sm={ 6 } >
                <Button 
                  disabled={ isAuthenticating }
                  type='submit' 
                  variant="contained" 
                  fullWidth 
                >
                  Login
                </Button>                     
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } >
                <Button 
                  disabled={ isAuthenticating }
                  variant="contained" 
                  fullWidth
                  onClick={ onGoogleSignIn } 
                >
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>                     
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>

              <Link component={ RouterLink } color='inherit' to='/auth/register' >
                Crear una cuenta
              </Link>

            </Grid>

          </Grid>
        </form>

        </AuthLayout>
     
  )
}
