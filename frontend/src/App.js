import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AdminDashboard from './Pages/admin-dashboard';
import AdvantageResults from './Pages/advantage-results';
import Error404 from './Pages/error-404';
import Home from './Pages/home'
import MCResults from './Pages/mc-results';
import WeeklysResults from './Pages/weeklys-results';
import Login from './Pages/login';
import Signup from './Pages/signup';
import { UserProvider } from './Components/UserContext';
import Leaderboard from './Pages/leaderboard';
import Survivors from './Pages/survivor';
import { ProtectedRoute } from './Components/ProtectedRoute';
import Welcome from './Pages/welcome';
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
              <ProtectedRoute path='/tribe-scores' component={MCResults} />
              <ProtectedRoute path='/weeklys' component={WeeklysResults} />
              <ProtectedRoute path='/advantage' component={AdvantageResults} />
              <ProtectedRoute path='/profile' component={Home} />
              <ProtectedRoute path='/survivors' component={Survivors} />
              <Route path='/admin-dashboard' component={AdminDashboard} />
              {/* <AdminRoute path='/admin-dashboard' component={AdminDashboard} /> */}
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

// export default App;
