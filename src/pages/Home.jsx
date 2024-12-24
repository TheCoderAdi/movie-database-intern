import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/features/movies/movieSlice.js";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <SearchBar />
            <MovieList />
        </div>
    );
};

export default Home;
