import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {

        const result = await signInWithPopup( FireBaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return{
            ok: true,
            // INfo del usuario
            displayName, email, photoURL, uid
        }


    }catch ( error ){
        
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        return{
            ok: false,
            errorCode,
            errorMessage,
            email,
            credential
        };
    };

};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    
    try{

        const resp = await createUserWithEmailAndPassword( FireBaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        console.log(resp);

        //actualizar displayName en firebase
        await updateProfile( FireBaseAuth.currentUser, { displayName } )

        return{
            ok:true,
            uid, 
            photoURL, 
            email, 
            displayName    
        }

    }catch (error) {
        
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        return{
            ok: false,
            errorCode,
            errorMessage,
            email,
            credential
        };
    }
}