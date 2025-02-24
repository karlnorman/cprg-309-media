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
        const movie = this.parentElement; 
        const title = movie.querySelector('h2').innerText; 
        const description = movie.querySelector('p').innerText; 
        const imgSrc = this.src; 
        
        localStorage.setItem('selectedMovieImage', imgSrc);
        localStorage.setItem('selectedMovieTitle', title);
        localStorage.setItem('selectedMovieDescription', description);


        window.location.href = 'movie-details.html';
    });
});