import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: true,
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
        addEmptyNote: (state, action) => {},
        setActiveNote: (state, action) => {},
        setNotes: (state) => {},
        updateNote: (state, action) => {},
        deleteNoteByID: (state, action) => {},
    },
});

export const {
    
    addEmptyNote,
    setActiveNote,
    setNotes,
    updateNote,
    deleteNoteByID,

} = journalSlice.actions;
