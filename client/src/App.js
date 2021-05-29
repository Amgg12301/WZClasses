import './App.css';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch, withRouter, useLocation, Link } from 'react-router-dom';
import Loadout from './Loadout';
import Contact from './Contact';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Search from './Search';

function App() {
  var location = useLocation()

  return (
    <div className="app">
      <Home />
      <Switch location={location} pathname={location.pathname}>
        <Route exact path="/" component={Search} />
        <Route path="/loadout" component={Loadout} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
