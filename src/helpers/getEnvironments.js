
export const getEnvironments = () => {
 
    // import.meta.env;

    // return{
    //     ...import.meta.env
    // }

    return {
        define: {
          __APP_ENV__: process.env.VITE_VERCEL_ENV,
        },
      };

}
