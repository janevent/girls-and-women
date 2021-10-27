import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Description from './components/Description';
import Donate from './components/Donate';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Menstrual Hygeine Campaign</h1>
        
      </header>

      <div className="main">
        <Router>
          <NavigationBar/>
          <Switch>
            <Route path="/description">
                <Description/>
            </Route> 
            <Route path="/">
                <Donate/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
