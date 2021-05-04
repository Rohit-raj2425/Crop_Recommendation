import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import From from './components/Form';
import ProdForm from './components/ProdForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/crop'>
            <From />
          </Route>
          <Route path='/production'>
            <ProdForm />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
