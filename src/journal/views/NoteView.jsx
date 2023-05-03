import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"
import { SaveAltOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../copmonents/ImageGallery"
import { useForm } from "../../hooks/useForm"

export const NoteView = ({ note }) => {

    const dispatch = useDispatch();

    const { activeNote } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( activeNote );

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date] );

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState])
    
    
    return (
        <Grid 
            container 
            direction={'row'} 
            justifyContent={'space-between'} 
            alignItems={'center'} 
            sx={{ mb: 1, backgroundColor: 'primary.light', borderRadius: 2, padding: 2, color: 'white' }} 
            className="animate__animated animate__pulse animate__faster"
        >

            <Grid item >
                <Typography fontSize={ 30 } fontWeight={'light'} >{ dateString }</Typography>
            </Grid>
            <Grid item>
                <Button 
                    color="primary" 
                    sx={{ padding: 2, color: 'white', mb: 1 }} 
                >
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
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
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
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />      

            </Grid>

            {/* Galeria de Imágenes */}
            <ImageGallery  />

        </Grid>
    )
}
