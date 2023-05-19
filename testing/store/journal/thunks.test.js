import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { setActiveNote } from "../../../src/store/journal/journalSlice";
import { addEmptyNote, savingNewNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";
import { FirebaseDB } from "../../../src/firebase/config";

describe('Pruebas en el journal Thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach( () => jest.clearAllMocks() )

    test('startNewNote debe crear una nueva nota en blanco', async() => {

        const uid = 'TEST-UID'
        getState.mockReturnValue({auth: { uid: uid }})

        await startNewNote()( dispatch, getState );

        expect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
        expect( dispatch ).toHaveBeenCalledWith( addEmptyNote({
            body: '',
            title: '',
            imageUrls: [],
            date: expect.any( Number ) ,
            id: expect.any( String ) 
        }) );
        expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
            body: '',
            title: '',
            imageUrls: [],
            date: expect.any( Number ) ,
            id: expect.any( String ) 
        }) );

        // Borrar de firebase
        const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );
        const docs = await getDocs( collectionRef );

        const deletePromises = [];
        docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref ) ) ) // funcion recursiva para eliminar datos de firebase
        await Promise.all( deletePromises );

    })

})