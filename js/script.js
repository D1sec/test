"use strict";

let numberOfFilms = prompt("how many films have you already watched?", "0");

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("last watched film?", ""),
      b = prompt("how u gonna score it?", "0");


for(let i = 0; i<3; i++) {
    personalMovieDb.movies[a] = b;

    if (a == '') continue; else if (a.length> 50) continue;

}

(personalMovieDb.count<10) ? alert("you'are poor as fuck") : (personalMovieDb<30) ? alert('That"s about alright') : (personalMovieDb>29) ? alert("Bruh that's too much") : alert("You are fuking chicher");

personalMovieDb.movies[prompt("lasts watched film?", "")] = prompt("how us gonna score it?", "0");


console.log(personalMovieDb);