import './App.css';
import React from "react";
import Home from "./components/Home/Home";
import CreateGame from './components/CreateGame/CreateGame';
import GameDetail from './components/GameDetail/GameDetail';
import { Route, Switch} from "react-router-dom";
import Landing from './components/Landing/Landing';
import PageNotFound from './components/PageNotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/create">
          <CreateGame />
        </Route>
        <Route exact path="/videogame/:id">
          <GameDetail />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
