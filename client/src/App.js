import './App.css';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch, withRouter, useLocation } from 'react-router-dom';
import Loadout from './Loadout';
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
