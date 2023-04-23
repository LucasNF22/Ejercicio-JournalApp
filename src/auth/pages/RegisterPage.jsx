import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'


const formData = {
  email: 'lucas@gmail.com',
  password: '12456',
  displayName: 'Lucas Fiorentino'
};

const formValidations ={
  email: [ (value) => value.includes('@'), 'El email debe ser Válido' ],
  password: [ (value) => value.length >= 6, 'El Password debe tener más de 6 caracteres' ],
  displayName: [ (value) => value.length >= 1, 'El Nombre es obligatorio' ],
  

}


export const RegisterPage = () => {
  
  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid  
  } = useForm( formData, formValidations );
  
  const onSubmit = ( e ) => {
    e.preventDefault();
    console.log( formState );
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
                error={ displayNameValid }
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
                error={ emailValid }
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
                error={ !passwordValid }
                helperText={ passwordValid }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1  }} >
              
              <Grid item xs={ 12 } >
                <Button 
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
