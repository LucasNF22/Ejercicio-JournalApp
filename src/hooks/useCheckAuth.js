import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FireBaseAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal/thunks";


export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth );
        const dispatch = useDispatch();

        useEffect( () => {

            onAuthStateChanged( FireBaseAuth, async( user )=> {
                if( !user ) return dispatch( logout() );

                const { displayName, photoURL, uid, email } = user
                dispatch( login( { displayName, photoURL, uid, email } ) )
                dispatch( startLoadingNotes() )
            })
        }, [])

    return{
        status
    }
}
