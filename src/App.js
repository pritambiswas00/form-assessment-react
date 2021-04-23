
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Components/Nav.components';
import Appointment from './Components/Appointment/Appointment'
import DosageCalculator from './Components/Dosage/Dosage'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <>
     <Route path="/appointmentform" component={Appointment}/>
     <Route path="/dosage" component={DosageCalculator}/>
     </>
     </div>
    </Router>
  );
}

export default App;
