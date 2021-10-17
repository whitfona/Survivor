import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { AdminRoute } from './Components/AdminRoute';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { UserProvider } from './Components/UserContext';
import AdminDashboard from './Pages/admin-dashboard';
import Advantage from './Pages/Advantage';
import Error404 from './Pages/error-404';
import Leaderboard from './Pages/Leaderboard';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Profile from './Pages/Profile'
import Survivors from './Pages/Survivors';
import TribeScores from './Pages/TribeScores';
import Weeklys from './Pages/Weeklys';
import Welcome from './Pages/Welcome';
// import { AdminRoute } from './Components/AdminRoute';
// import logo from './logo.svg';

export default function App() {
  return (
    <div className='page-container'>
      <Router>
        <UserProvider>
        <Navbar />
          <div className="content-container">
            <Switch>
              <Route exact path='/' component={Welcome} />
              <ProtectedRoute path='/leaderboard' component={Leaderboard} />
              <ProtectedRoute path='/tribe-scores' component={TribeScores} />
              <ProtectedRoute path='/weeklys' component={Weeklys} />
              <ProtectedRoute path='/advantage' component={Advantage} />
              <ProtectedRoute path='/profile' component={Profile} />
              <ProtectedRoute path='/survivors' component={Survivors} />
              <AdminRoute path='/admin-dashboard' component={AdminDashboard} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='*' component={Error404} />
            </Switch>
          </div>
        </UserProvider>
        <Footer />
      </Router>
    </div>
  );
}
