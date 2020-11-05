import './App.css';
import { Router, Link } from '@reach/router';
import Home from './components/Home';
import Param from './components/Param';
import Params from './components/Params'


function App() {
  return (
    <div className="App">
      <Link to="/home"> Home </Link>

    <Router>
      <Home path="/Home" />
      <Param path="/:param" />
      <Params path="/:word/:textColor/:backgroundColor" />

    </Router>

    </div>
  );
}

export default App;
