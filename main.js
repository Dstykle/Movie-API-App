async function searchMovie() {
  const title = document.getElementById('movieTitle').value;
  const apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your real key

  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=378ecac&t=${encodeURIComponent(title)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      document.getElementById('output').innerHTML = `
        <h2>${data.Title}</h2>
        <img src="${data.Poster}" alt="Movie Poster" style="max-width:200px;">
        <p class="detail" style=""><strong>Genre</strong>: ${data.Genre}\n\n<strong>Year</strong>: ${data.Year}\n\n<strong>Directors:</strong> ${data.Director}\n\n<strong>Actors:</strong> ${data.Actors}\n\n<strong>Summary:</strong> ${data.Plot}\n\n\n</p><p><strong>Ratings:</strong></p>`;
      for(let i = 0; i < data.Ratings.length;i++){
              const para = document.createElement("p");
              const para1 = document.createElement("p");
        const node = document.createTextNode("By: "+ data.Ratings[i]['Source']);
        const node1 = document.createTextNode("Rating: "+ data.Ratings[i]['Value']); 

        para.appendChild(node);
        para1.appendChild(node1);
        document.getElementsByTagName("body")[0].appendChild(para);
        document.getElementsByTagName("body")[0].appendChild(para1);
      }
    } else {
      document.getElementById('output').innerText = `Error: ${data.Error}`;
    }
  } catch (error) {
    document.getElementById('output').innerText = 'Failed to fetch movie data.';
    console.error(error);
  }
}

    /*
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error fetching movie data:', error);
    document.getElementById('output').textContent = 'Error fetching data.';
  }
}


http://www.omdbapi.com/?i=tt3896198&apikey=378ecac&t=${encodeURIComponent(title)}*/