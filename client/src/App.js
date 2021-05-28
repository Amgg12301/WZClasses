import './App.css';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch, withRouter } from 'react-router';
import Loadout from './Loadout';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/loadout" component={Loadout} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
