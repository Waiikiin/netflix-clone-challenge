import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'
import HomeScreen from './pages/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './pages/Login'
import { auth } from './firebase';
import './App.css';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout);
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])
  return (

    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
           <Route path ="/">
              <HomeScreen />
           </Route>
          </Switch>
        )}
      </Router>
    </div>

  );
}

export default App;
