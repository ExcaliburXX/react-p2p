import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Lobby from './components/lobby/Lobby';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}>
            <Home />
          </Route>
          <Route path='/lobby' exact component={Lobby}>
            <Lobby />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
