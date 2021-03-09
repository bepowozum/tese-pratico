import React, { Component } from 'react'
import Nav from './Nav'
import '../App.css';

const APIURL =
    "https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&api_key=d866579ea13a76572396ae04ecfe0a19&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
/*const TOPRATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=d866579ea13a76572396ae04ecfe0a19&language=en-US&page=1"
*/
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=d866579ea13a76572396ae04ecfe0a19&query=";

    /*
const form = document.getElementById("form");
*/
const search = document.querySelector("search");


getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData);

  showMovies(respData.results);
}

function showMovies(movies) {
  
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview, release_date } = movie;
    
    fetch(SEARCHAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data: ', data);
      })
      .catch((error) => {
        console.log('Erro: ', error);
      });

    const movieElemnt = document.createElement("div");
    movieElemnt.classList.add("movie");
  
    movieElemnt.innerHTML = `
          <img
            src="${IMGPATH + poster_path}"
            alt="${title}"/>
              <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassRating(vote_average)}">${vote_average}</span>
              </div>
            <div class="overview">
              <h4>${title}</h4>
                <p>${release_date}</p>
                ${overview}
              </div>
            <div>

            </div>
          `;

            document.body.appendChild(movieElemnt)
    });

}


function getClassRating(vote) {
  if(vote >= 7) {
    return 'green';
  } else if (vote >= 5){
    return 'orange';
  } else {
    return 'red'
  }
}

/*
form.addEventListener("form", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});
*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
  
}

export default App

