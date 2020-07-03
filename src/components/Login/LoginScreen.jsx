import React, { useContext } from 'react';
import { } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {

  const { dispatch } = useContext(AuthContext);  

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    // history.push('/');
    const action = {
      type: types.login,
      payload: {
        user: 'Hugone'
      }
    }
    dispatch(action);
    history.replace(lastPath);
  }

  return (
    <div className='container mt-5'>
      <h1>Login Screen</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen;
