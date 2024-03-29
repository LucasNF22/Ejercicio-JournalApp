import { Grid, Typography } from '@mui/material'


export const AuthLayout = ({ children, title= '' }) => {
  return (
    <Grid
      container
      spacing={ 0 }  
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >
        <div
          container
          spacing={ 0 }  
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <h1 className='main-title'>JournalApp</h1>
          <p className='main-p'>¡Tu app de notas!</p>
        </div>
      <Grid 
          item
          className="box-shadow animate__animated animate__pulse animate__faster"
          xs={ 3 }
          sx={{ 
              width: { sm: 450 },
              backgroundColor: 'white', 
              padding: 3, 
              borderRadius: 2 
          }}
      >
        <Typography variant="h5" sx={{ mb: 1 }} >{ title }</Typography>
      {/* Childrens */}
      { children }

        </Grid>
    </Grid>
  )
}
