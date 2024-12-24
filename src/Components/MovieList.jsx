import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MovieList = () => {
    const { filteredMovies, status } = useSelector((state) => state.movies);

    if (status === "loading")
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {Array(6)
                    .fill("")
                    .map((_, index) => (
                        <Shimmer key={index} />
                    ))}
            </div>
        );

    if (status === "failed") return <p>Error loading movies.</p>;

    if (filteredMovies.length === 0) return <div className="text-center">No movies found.</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;