import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";
import LayoutList from "./components/layout/LayoutList";

function App() {
  return (
    <LayoutList>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/newmeetup">
          <NewMeetUpPage />
        </Route>
      </Switch>
    </LayoutList>
  );
}

export default App;
