import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSignIn } from "../../../src/store/auth/thunks";
import { clearJournalState } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers')


describe('pruebas en el auth-thunks', () => {
    
    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() )

    test('debe invocar el checkinCredentials', async() => {
       
        await checkingAuthentication()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );

    });

    test('startGoogleSignIn debe llamar al checkingCredential y luego al login - Login Exitoso', async() => {
        
        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );

        //thunk
        await startGoogleSignIn()( dispatch );
        
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });

    test('startGoogleSignIn debe llamar al checkingCredential y luego al logout - Login Error', async() => {
        
        const loginData = { ok: false, errorMessage: 'un error recibido' };
        await signInWithGoogle.mockResolvedValue( loginData );

        //thunk
        await startGoogleSignIn()( dispatch );
        
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );
    });

    test('startLoginWithEmailPassword debe llamar al checkingCredentials y login - Exito', async() => {
        
        const loginData = { ok: true, ...demoUser };
        const formData = {email: demoUser.email, password: '123456'};

        await loginWithEmailPassword.mockResolvedValue( loginData );
        await startLoginWithEmailPassword(formData)(dispatch)

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

    });

    test('startLogOut debe llamar logoutFirebase, clearJournalState y logout', async() => {

        await startLogout()(dispatch);
        
        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearJournalState() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );

    });

    /*
        Hacer el resto de las pruebas pendientes en los auth/thunks
    */
    
});