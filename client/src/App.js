import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './components/Landingpage';
import Home from './components/Home.jsx';
import CreateVideogame from './components/CreateVideogame'
import CardDetail from './components/CardDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Route exact path= '/' component={LandingPage}/>
          <Route exact path= '/home/:id' component={CardDetail}/>
          <Route exact path= '/home' component={Home}/>
          <Route exact path='/videogames/create' component={CreateVideogame} />
         
         
      </div>
    </BrowserRouter>
  );
}

export default App;