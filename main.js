async function searchMovies() {
  const title = document.getElementById('movieTitle').value.trim();
  const genreInput = document.getElementById('movieGenre').value.trim().toLowerCase();
  const yearInput = document.getElementById('movieYear').value.trim();
  const resultsDiv = document.getElementById('results');

  if (!title) {
    resultsDiv.innerHTML = "<p>Please enter a movie title.</p>";
    return;
  }

  const searchUrl = `https://www.omdbapi.com/?apikey=378ecac&s=${encodeURIComponent(title)}`;

  try {
    const response = await fetch(searchUrl);
    const searchData = await response.json();

    resultsDiv.innerHTML = ""; // Clear old results

    if (searchData.Response === "True") {
      const matchedMovies = [];

      for (let item of searchData.Search) {
        const fullDetailsUrl = `https://www.omdbapi.com/?apikey=378ecac&i=${item.imdbID}`;
        const detailsResponse = await fetch(fullDetailsUrl);
        const movie = await detailsResponse.json();

        const genreMatch = genreInput ? movie.Genre.toLowerCase().includes(genreInput) : true;
        const yearMatch = yearInput ? movie.Year === yearInput : true;

        if (genreMatch && yearMatch) {
          matchedMovies.push(movie);
        }
      }

      if (matchedMovies.length === 0) {
        resultsDiv.innerHTML = "<p>No movies found with that genre/year combination.</p>";
        return;
      }

      // Display all matched movies
      for (let movie of matchedMovies) {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
          <h3>${movie.Title} (${movie.Year})</h3>
          <img src="${movie.Poster !== "N/A" ? movie.Poster : ""}" alt="Poster" style="max-width:150px;"><br>
          <strong>Genre:</strong> ${movie.Genre}<br>
          <strong>Director:</strong> ${movie.Director}<br>
          <strong>Plot:</strong> ${movie.Plot}<br><br>
        `;
        movieDiv.style.marginBottom = "30px";
        resultsDiv.appendChild(movieDiv);
      }

    } else {
      resultsDiv.innerHTML = `<p>Error: ${searchData.Error}</p>`;
    }

  } catch (error) {
    resultsDiv.innerHTML = "<p>Failed to fetch movie data.</p>";
    console.error(error);
  }
}
