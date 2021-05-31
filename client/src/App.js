import './App.css';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch, withRouter, useLocation } from 'react-router-dom';
import Loadout from './Loadout';
import Search from './Search';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import MobileHome from './mobile-components/MobileHome';
import MobileSearch from './mobile-components/MobileSearch';
import MobileLoadout from './mobile-components/MobileLoadout';

function App() {
  var location = useLocation()

  return (
    <div>
      <BrowserView>
        <div className="app">
          <Home />
          <Switch location={location} pathname={location.pathname}>
            <Route exact path="/" component={Home, Search} />
            <Route path="/loadout" component={Loadout} />
          </Switch>
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile-app">
          <MobileHome />
          <Switch location={location} pathname={location.pathname}>
            <Route exact path="/" component={MobileHome, MobileSearch} />
            <Route path="/loadout" component={MobileLoadout} />
          </Switch>
        </div>
      </MobileView>
    </div>
  );
}

export default withRouter(App);
