document.getElementById('genre-filter').addEventListener('change', function() {
    const selectedGenre = this.value;
    const movies = document.querySelectorAll('.movie');
    
    movies.forEach(movie => {
        const genres = movie.dataset.genre.split(',');
        if (selectedGenre === 'all' || genres.includes(selectedGenre)) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none'; 
        }

    });
});

const movieImages = document.querySelectorAll('.movie img');
const movieDetails = document.getElementById('movie-details');
const selectedMovieImage = document.getElementById('selected-movie-image');
const selectedMovieTitle = document.getElementById('selected-movie-title');
const selectedMovieDescription = document.getElementById('selected-movie-description');

movieImages.forEach(image => {
    image.addEventListener('click', function() {
        const movie = this.parentElement; // Get the parent movie div
        const title = movie.querySelector('h2').innerText; // Get the title
        const description = movie.querySelector('p').innerText; // Get the description
        const imgSrc = this.src; // Get the image source

        // Update the details container
        selectedMovieImage.src = imgSrc;
        selectedMovieTitle.innerText = title;
        selectedMovieDescription.innerText = description;

        // Show the details container
        movieDetails.style.display = 'block';
    });
});