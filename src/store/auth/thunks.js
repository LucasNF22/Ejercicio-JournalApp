import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearJournalState } from "../journal";
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
    };
};

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingAuthentication() );

        const result = await signInWithGoogle();

        // console.log( result.errorMessage );

        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) )
    };
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage  } = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch( logout( errorMessage ) );

        dispatch( login({ uid, displayName, photoURL, email }) )

    };
};

export const startLoginWithEmailPassword = ({ email, password })=> {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const resp = await loginWithEmailPassword({ email, password });
        // console.log(resp);

        if ( !resp.ok ) return dispatch( logout( resp.errorMessage ) );
        dispatch( login( resp ) );
    };
};

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();
        dispatch( clearJournalState() );
        dispatch( logout() );
    };
};
