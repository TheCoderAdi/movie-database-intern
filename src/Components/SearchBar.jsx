import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterMovies } from "../redux/features/movies/movieSlice";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            dispatch(filterMovies(searchTerm));
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, dispatch]);

    return (
        <div className="flex items-center justify-center my-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search movies..."
                className="p-2 border rounded-lg w-1/2"
            />
        </div>
    );
};

export default SearchBar;
