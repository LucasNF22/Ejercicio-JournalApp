import { checkingAuthentication, checkingCredentials } from "../../../src/store/auth";

jest.mock('../../../src/firebase/providers')


describe('pruebas en el auth-thunks', () => {
    
    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() )

    test('debe invocar el checkinCredentials', async() => {
       
        await checkingAuthentication()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );

    });
    
});