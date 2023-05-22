import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice, startGoogleSignIn } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";


const store = configureStore({
    reducer:{
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
    
});



describe('Pruebas en </LoginPage/', () => {

    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() )

    // test('Debe mostrar el contenido correctamente', () => {

    //     render(
    //         <Provider store={ store }>
    //             <MemoryRouter>
    //                 <LoginPage />
    //             </MemoryRouter>
    //         </Provider>
    //     )


    //     expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);

    // });

    test('Boton de google debe llamar al startGoogleSignIn', () => {

        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click( googleBtn );

        // screen.debug()

        expect( dispatch ).toHaveBeenCalledWith( startGoogleSignIn() );


    })

});