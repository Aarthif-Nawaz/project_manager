import React from 'react';
import Login from './containers/login'
import SignUp from './containers/signup'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './containers/home'
import 'animate.css'
import './App.css'
import Projects from './containers/projects'
import Edit from './containers/edit'
import Feed from './containers/feed'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Feed} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/addProjects" component={Home} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
