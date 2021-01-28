import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Preferences from './pages/Preferences';



const App = () => {
  return (
    <h1>hiiiiiiiiii Jennifer</h1>

  //   <Router>
  //     <Switch>
  //       <Route path="/SignIn">
  //         <SignIn />
  //       </Route>
  //       <Route path="/Register">
  //         <Register />
  //       </Route>
  //       <Route path="/Main">
  //         <Main />
  //       </Route>
  //       <Route path="/Profile">
  //         <Profile />
  //       </Route>
  //       <Route path="/Preferences">
  //         <Preferences />
  //       </Route>
  //       <Route exact path="https://designsandmoredesigns.com/">
  //         <Landing />
  //       </Route>
  //       <Route default> 
  //       {/* Default isn't working for some reason, need to fix it. */}
  //         <NotFound />
  //       </Route>
  //     </Switch>
  // </Router>
  );
};
  
  export default App;










