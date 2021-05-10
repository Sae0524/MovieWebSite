const apikey = "408c04975107b20e775cd0752f19d65d";

//Create the function
const fetchAPI = async () => {
  try {
    const nowPlaying = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`);
    const popular = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`);
    const upooming = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`);

    const movieData = nowPlaying.data;
    const moviePopularData = popular.data;
    const movieUpcomingData = upooming.data;

    //Top page
    //nowPlaying
    let movieImageURL = "http://image.tmdb.org/t/p/w500";
    const moviePlayingNow = movieData.results.map(movie => {
      return `<li>
              <div id ="${movie.id}" class="nowPlaying-box triggerMovie">
              <img src=${movieImageURL}${movie.backdrop_path}>
              <p class="title">${movie.title}</p>
              <button  class="triggerButton" onclick="on()" id=${movie.id}>See detail</button>
              </div>
              </div>
              </li>`
    })

    //popular
    const moviePopular = moviePopularData.results.map(movie => {
      return `<li>
              <div id ="${movie.id}" class="popular-box triggerMovie">
              <img src=${movieImageURL}${movie.backdrop_path}>
              <p class="title">${movie.title}</p>
              <button  class="triggerButton" onclick="on()" id=${movie.id}>See detail</button>
              </div>
              </div>
              </li>`
    })

    //upooming
    const movieUpcoming = movieUpcomingData.results.map(movie => {
      return `<li>
              <div id ="${movie.id}" class="UpComing-box triggerMovie">
              <img src=${movieImageURL}${movie.backdrop_path}>
              <p class="title">${movie.title}</p>
              <button  class="triggerButton" onclick="on()" id=${movie.id}>See detail</button>
              </div>
              </div>
              </li>`

    })

    document.getElementById('PlayingNow').innerHTML = moviePlayingNow.join('');
    document.getElementById('popular').innerHTML = moviePopular.join('');
    document.getElementById('UpComing').innerHTML = movieUpcoming.join('');


  }
  catch(errors) {
    console.log(`errors! ${errors}`);
  }
}

fetchAPI(); //Call the function

//fetch details data

const fetchDetailData = async (event) => {
  let idMovie = event.target.id;

  alert(idMovie);


  try {
    const detailMovie = await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${apikey}`);
    console.log(detailMovie);
    console.log(trailar);
  }
  catch(errors) {
    console.log(`errors! ${errors}`);
  }
}



document.getElementsByClassName("clickem").addEventListener("click", function() {
  alert("hi")
});

fetchDetailData()
//Search 
