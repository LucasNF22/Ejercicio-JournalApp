
export const fileDelete = async( file ) => {

   
    const cloudUrl = 'https://api.cloudinary.com/v1_1/djg3n72af/destroy'

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'DELETE',
            body: formData,
        });

        if(!resp.ok) throw new Error( 'No se pudo eliminar el archivo' );

        const cloudResp = await resp.json();

        return cloudResp.secure_url //va??

    } catch (error) {
        console.log(error);
        throw new Error( error.message )
    }
};

// Terminar de averiguar la configuracion