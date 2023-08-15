import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './views/Landing_Page/landing';
import Home from './views/Home/home';
import Detail from './Components/Detail/detail';
import Form from './views/Form/Form';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path ='/' component = {Landing} />
        <Route path ='/Home' component = { Home } />
        <Route path='/recipe/:id' component={ Detail } />
        <Route path='/form' component={ Form } />


      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
