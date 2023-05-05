import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes: [],
        activeNote: null,
        // activeNote: {
        //     id: 'abc123',
        //     title: '',
        //     body: '',
        //     date: 123467,
        //     imageUrls: []
        // }
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            
            state.notes = state.notes.map( note => {
                if ( note.id === action.payload.id ){
                    return action.payload;
                }
                return note;
            });

            // mensaje de actualizacion
        },
        deleteNoteByID: (state, action) => {

        },
    },
});

export const {
    
    savingNewNote,
    addEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteByID,

} = journalSlice.actions;
