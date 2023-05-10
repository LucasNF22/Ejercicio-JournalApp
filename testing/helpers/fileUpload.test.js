import { fileUpload } from "../../src/helpers/fileUpload";

describe('Pruebas en FileUpload', () => {

    test('Debe subir el archivo correctamente a cloudinary', async() => {

        const imgURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png';
        const resp = await fetch( imgURL );
        const blob = await resp.blob()
        const file = new File([blob], 'foto-prueba.jpg')


        const url = await fileUpload( file )

        expect( typeof url ).toBe('string')
    })
})