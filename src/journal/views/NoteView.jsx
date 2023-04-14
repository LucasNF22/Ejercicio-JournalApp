import { SaveAltOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../copmonents/ImageGallery"

export const NoteView = () => {
  return (
    <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: 1, backgroundColor: 'primary.light', borderRadius: 2, padding: 2, color: 'white' }} >
        <Grid item >
            <Typography fontSize={ 30 } fontWeight={'light'} > 28 de Agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2, color: 'white', mb: 1 }} >
                <SaveAltOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label='Titulo'
                sx={{ border: 'none', mb: 1, input: { color: 'white' }, label: { color: 'white' }  }}
            />

            <TextField
                type='text'
                variant="filled"
                multiline
                fullWidth
                placeholder="Haz tu anotación"
                minRows={ 15 }
                inputProps={{ style: { color: "white" } }}
                sx={{ border: 'none', mb: 1 }}
            />      
            
        </Grid>

        {/* Galeria de Imágenes */}
        <ImageGallery />

    </Grid>
  )
}
