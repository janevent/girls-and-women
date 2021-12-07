import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Description from './components/Description';
import Donate from './components/Donate';
import SuccessModal from './components/SuccessModal';
import { useState} from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

  const [displaySuccess, setDisplaySuccess] = useState(false)

  const handleSetDisplaySuccess = (setting) => {
    console.log('setting', setting)
    setDisplaySuccess(setting)
  }

  return (
    <div className="App">
      <header className="App-header">
        <section className="inner-header">  
          <section className="inner-header-1">
            <h1>Menstrual Hygiene Campaign in Africa</h1>
          </section>
        </section>
        
      </header>

      <div className="main">
        <Router>
          <NavigationBar/>
          <Switch>
            <Route path="/description">
                <Description/>
            </Route> 
            <Route path="/success">
                {displaySuccess ? <SuccessModal/> : "" }
              </Route>
            <Route path="/">
                <Donate handleDisplay={handleSetDisplaySuccess} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
