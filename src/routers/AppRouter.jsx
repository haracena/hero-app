import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import LoginScreen from '../components/Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRoute 
          exact 
          path='/login' 
          component={LoginScreen}
          isAuth={user.logged}
        />

        <PrivateRoute 
          path='/' 
          component={DashboardRoutes} 
          isAuth={user.logged}
        />

      </Switch>
    </Router>
  )
}

export default AppRouter;
