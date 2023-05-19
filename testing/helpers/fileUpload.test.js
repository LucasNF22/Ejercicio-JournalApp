import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";
import { log } from 'console';

cloudinary.config({
    cloud_name: 'djg3n72af',
    api_key: '769271632564446',
    api_secret: 'lxx401TmxXeW8H_YRBddI49nWA8',
    secure: true,

});


describe('Pruebas en FileUpload', () => {

    test('Debe subir el archivo correctamente a cloudinary', async() => {

        const imgURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png';
        const resp = await fetch( imgURL );
        const blob = await resp.blob()
        const file = new File([blob], 'foto-prueba.jpg')


        const url = await fileUpload( file )

        expect( typeof url ).toBe('string')

        const segments = url.split('/')
        
        const imageId = segments[ segments.length -1 ].replace( '.png', '' );
        // console.log(imageId);

        const respCloudinary = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image',
        });
        console.log(respCloudinary);

    });

    test('Debe retornar null', async() => {

        const file = new File([], 'foto-prueba.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );


    })
})