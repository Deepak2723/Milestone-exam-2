const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=ccfd20ae";

// Function to fetch movie details from the OMDB API
async function getMovieDetails(movieTitle) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}

// Function to display movie details on the page
function displayMovieDetails(movie) {
    const movieDetailsElement = document.getElementById('movie-details');

    if (movie && movie.Response === 'True') {
        const { Title, Poster, Year, Genre, Plot } = movie;
        movieDetailsElement.innerHTML = `
            <h2>${Title} (${Year})</h2>
            <img class="movie-poster" src="${Poster}" alt="${Title} Poster">
            <p><strong>Genre:</strong> ${Genre}</p>
            <p><strong>Plot:</strong> ${Plot}</p>
        `;
    } else {
        movieDetailsElement.innerHTML = '<p>Movie not found</p>';
    }
}

// Function to handle the search button click event
async function handleSearchButtonClick() {
    const searchInput = document.getElementById('search-input');
    const movieTitle = searchInput.value.trim();

    if (movieTitle === '') {
        return;
    }

    const movie = await getMovieDetails(movieTitle);
    displayMovieDetails(movie);
}

// Event listener for the search button click
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', handleSearchButtonClick);
