import { useContext } from "react"
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorite-context";

function MainNavigation() {
  const favoritesContext = useContext(FavoritesContext)


  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups </Link>
          </li>
          <li>
            <Link to="/favorites"> Favorites <span className={classes.badge}>{favoritesContext.totalFavorites}</span> </Link>
          </li>
          <li>
            <Link to="/newmeetup"> New Meetup </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
