import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, Route, Routes } from 'react-router-dom';
import { FireBaseAuth } from '../firebase/config';

import { login, logout } from '../store/auth';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';


export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect( () => {

    onAuthStateChanged( FireBaseAuth, async( user )=> {
      if( !user ) return dispatch( logout() );

      const { displayName, photoURL, uid, email } = user
      dispatch( login( { displayName, photoURL, uid, email } ) )

    })

  }, [])


  if ( status === 'checking' ) {
    return <CheckingAuth/>
  }

  return (
    <Routes>

        {
          ( status === 'authenticated' )
            ? <Route path="/*" element={ <JournalRoutes /> } />
            : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' /> } />
  

    </Routes>
  )
}
