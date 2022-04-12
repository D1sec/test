"use strict";

let numberOfFilms = prompt("how many films have you already watched?", "0");

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDb.movies[prompt("last watched film?", "")] = prompt("how u gonna score it?", "0");


personalMovieDb.movies[prompt("lasts watched film?", "")] = prompt("how us gonna score it?", "0");


console.log(personalMovieDb);