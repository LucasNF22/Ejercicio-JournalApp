import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addEmptyNote, deleteNoteByID, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";


export const startNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );
        
        const { uid } = getState().auth;


        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        };

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );

        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    };
};

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if( !uid ) throw new Error('El UID del usuairo no existe');

        const notes = await loadNotes( uid );

        dispatch( setNotes(notes) );

    };
};

export const startSaveNote = () => {
    return async ( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { activeNote } = getState().journal;

        const noteToFireStore = { ...activeNote };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ activeNote.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( updateNote(activeNote) )

    };
};

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {

        dispatch( setSaving() );
        // console.log(files);
        // await fileUpload(files[0])

        const fileUploadPromises = [];
        for( const file of files ){
            fileUploadPromises.push( fileUpload( file ) );
        };

        const photosUrls = await Promise.all( fileUploadPromises );
        dispatch( setPhotosToActiveNote( photosUrls ) );

        dispatch( startSaveNote() );
    };
};

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { activeNote } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ activeNote.id }` );
        const resp = await deleteDoc( docRef );

        dispatch( deleteNoteByID( activeNote.id ) );

    };
};