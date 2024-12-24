const Header = () => (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-between px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                🎥 Movie Database
            </h1>
            <p className="text-base sm:text-lg italic mt-2 sm:mt-0 text-center sm:text-right">
                Discover your favorite movies
            </p>
        </div>
    </header>
);

export default Header;
