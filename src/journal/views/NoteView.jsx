import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveNote } from "../../store/journal/journalSlice";
import { SaveAltOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import { startSaveNote } from "../../store/journal/thunks";

export const NoteView = ({ note }) => {

    const dispatch = useDispatch();

    const { activeNote, messageSaved, isSaving } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( activeNote );

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date] );

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState]);

    useEffect(() => {
        if( messageSaved.length > 0 ) {
            Swal.fire({
                title: 'Nota Actualizada', 
                text: `${messageSaved}`, 
                icon: 'success',
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
                timer: 2000,
                padding: "5px 5px 5px 20px"
            })
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch( startSaveNote() )
    };
    
    
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
                    disabled={isSaving}
                    onClick={ onSaveNote }
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
