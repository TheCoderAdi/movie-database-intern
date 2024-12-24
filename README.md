# Movie Database

A dynamic movie database application built with React, utilizing the [dummyapi.online](https://dummyapi.online/api/movies) API for movie information. The application allows users to search, browse, and explore their favorite movies with an elegant and responsive design.

## Features

- **Responsive Header**: A beautifully styled header with gradient background and dynamic layout for mobile and desktop views.
- **Movie Search**: Instantly search for movies with debounce functionality to limit API calls.
- **Default Images**: Displays a placeholder image for movies without an available image.
- **State Management**: State managed using Redux for scalability and predictability.
- **Modern Styling**: Styled with Tailwind CSS for a sleek, responsive UI.

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: [dummyapi.online](https://dummyapi.online/api/movies) (API for movies)
- **Build Tool**: Vite

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheCoderAdi/movie-database-intern.git
   ```

2. Navigate to the project directory:
   ```bash
   cd movie-database-intern
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Usage

- Type in the search bar to find movies by title. The results update dynamically with a debounce.
- Scroll down to load more movies seamlessly with infinite scrolling.
- Click on a movie to view its IMDb page.

## Folder Structure

```
├── public
├── src
│   ├── components
│   │   ├── Header.jsx        // Header component
│   │   ├── MovieCard.jsx     // Individual movie cards
│   │   └── MovieList.jsx     // List of movies
│   │   └── SearchBar.jsx     // Search for movies
│   │   └── Shimmer.jsx       // Modern Loader        
│   ├── redux
│   │   ├── moviesSlice.js    // Redux slice for managing movies
│   │   └── store.js          // Redux store configuration
│   │── index.css             // Global styles with Tailwind
│   ├── App.jsx               // Main application component
│   ├── main.jsx              // Entry point
├── package.json
└── vite.config.js
```

## License

This project is open-source and available under the [MIT License](LICENSE).
