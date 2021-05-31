import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { Route, Switch, withRouter, useLocation } from 'react-router-dom';
import Home from './desktop-components/Home';
import Loadout from './desktop-components/Loadout';
import Search from './desktop-components/Search';
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
