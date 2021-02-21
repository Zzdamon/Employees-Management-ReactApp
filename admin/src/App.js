import logo from './logo.svg';
import './App.css';
import Form from './components/EmployeeAddForm'
import EmployeeList from './components/EmployeeList';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
 
    <div className="app">
    <Switch>
      <Route path="/people" component={EmployeeList}/>
      <Route path="/home" component={Home}/>
      <Route exact path="/" component={Home}/>
     
    </Switch>
  </div>
  );
}

export default App;
