import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import People from './pages/People';

function App() {
  return (
 
    <div className="app">
    <Switch>
      <Route path="/people" component={People}/>
      <Route path="/home" component={Home}/>
      <Route exact path="/" component={Home}/>
     
    </Switch>
  </div>
  );
}

export default App;
