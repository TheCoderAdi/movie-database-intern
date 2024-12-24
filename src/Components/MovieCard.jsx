import propTypes from "prop-types";

const MovieCard = ({ movie }) => (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
        <img
            src={"https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt={movie.movie}
            className="rounded-md w-40 h-60 object-cover mb-4"
        />
        <h2 className="text-xl font-bold">{movie.movie}</h2>
        <p className="text-gray-600">Rating: {movie.rating}/10</p>
        <a
            href={movie.imdb_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2"
        >
            View on IMDb
        </a>
    </div>
);

export default MovieCard;

MovieCard.propTypes = {
    movie: propTypes.shape({
        image: propTypes.string.isRequired,
        movie: propTypes.string.isRequired,
        rating: propTypes.number.isRequired,
        imdb_url: propTypes.string.isRequired,
    }),
};