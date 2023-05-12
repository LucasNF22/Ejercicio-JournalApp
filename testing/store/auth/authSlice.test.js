
import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { notAuthenticatedState } from "../../fixtures/authFixtures";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";


describe('Pruebas en el authSlice', () => {

    test('Debe re regresar el estado inicial y llamarse al auth', () => {


        // console.log(authSlice);
        expect( authSlice.name ).toBe('auth');
        const state = authSlice.reducer( initialState, {} );
        expect( state ).toEqual( initialState );
        // console.log(state);

    });

    test('Debe realizar la autenticacion', () => {

        // console.log( login(demoUser) );
        const state = authSlice.reducer( initialState, login(demoUser) );

        expect( state ).toEqual( authenticatedState ); // Estado de prueba que creamos con los datos del usuario que se loguea.

    });

    test('Debe realizar el logout', () => {

        const state = authSlice.reducer( authenticatedState, logout() );
        expect( state ).toEqual( {...notAuthenticatedState, errorMessage: undefined } );

    });
    test('Debe realizar el logout y mosrtar el mensaje de error', () => {

        const error = 'Credenciales no válidas';
        const state = authSlice.reducer( authenticatedState, logout(error) );
        expect( state ).toEqual( {...notAuthenticatedState, errorMessage: error } );
        // console.log(state);

    });
    test('Debe cambiar el estado a checking', () => {

        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        expect( state.status ).toBe( 'checking' )
    })


});