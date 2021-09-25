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
import PlayerDashboard from './Pages/player-dashboard';
import WeeklysResults from './Pages/weeklys-results';
import Login from './Pages/login';
import Signup from './Pages/signup';
import WeeklysSubmissionForm from './Components/WeeklysSubmissionForm';
// import logo from './logo.svg';

export default function App() {
  return (
    <div className='page-container'>
      <Router>
        <Navbar />
        <div className="content-container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/advantage-results' component={AdvantageResults} />
            <Route path='/mc-results' component={MCResults} />
            <Route path='/weeklys-results' component={WeeklysResults} />
            <Route path='/player-dashboard' component={PlayerDashboard} />
            <Route path='/admin-dashboard' component={AdminDashboard} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/weeklysform' component={WeeklysSubmissionForm} />
            <Route path='*' component={Error404} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

// export default App;
