import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList"
import FavoritesContext from "../store/favorite-context";

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext)
    let content;

    if (favoritesContext.totalFavorites === 0) {
        content = <h2>You got no favorites yet.</h2>
    } else {
        content = <MeetupList meetups={favoritesContext.favorites}></MeetupList>
    }
    return (
        <section>
            <h1>
                Favorites Page
            </h1>
            {content}
        </section >
    )
}

export default FavoritesPage