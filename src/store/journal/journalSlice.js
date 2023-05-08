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
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
            state.messageSaved = '';
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
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

            state.messageSaved = ` "${action.payload.title}" se actualizó correctamente`
        },
        setPhotosToActiveNote: ( state, action )=> {
            state.activeNote.imageUrls = [ ...state.activeNote.imageUrls, ...action.payload ]
            state.isSaving = false;
        },
        clearJournalState: ( state ) => {
            state.isSaving = false,
            state.messageSaved = "",
            state.notes = [],
            state.activeNote = null
        },
        deleteNoteByID: (state, action) => {
            state.activeNote = null,
            state.notes = state.notes.filter( note => note.id != action.payload );
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
    setPhotosToActiveNote,
    clearJournalState,

} = journalSlice.actions;
