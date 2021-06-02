import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch, withRouter, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Loadout from './components/Loadout';
import Search from './components/Search';

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
