"use strict";

let numberOfFilms;



function start() {
    numberOfFilms = +prompt("how many films have you already watched?", "0");
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("how many films have you already watched?", "0");
    }
}

start();

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    reremberMyFilms: function() {
    
        for(let i = 0; i<2; i++) {
            const a = prompt("last watched film?", ""),
                  b = prompt("how u gonna score it?", "0");
            personalMovieDb.movies[a] = b;
        
        
            if (a == '') continue; else if (a.length > 50) continue;
        
        }
    },
    fagDetection: function() {
        (personalMovieDb.count<10) ? console.log('you are poor as fuck') : (personalMovieDb.count<30) ? console.log('That"s about alright') : (personalMovieDb>29) ? console.log("Bruh that's too much") : console.log("You are fuking chicher");
    },
    showMyDB: function() {
        if (!(personalMovieDb.privat)) console.log(personalMovieDb);
    },
    writeYourGenres: function() {
        for (let i=1; i<4; i++) {
            personalMovieDb.genres[i-1] = prompt(`your favourite genre under position ${i}`);
            if (personalMovieDb.genres[i-1] == null || personalMovieDb.genres[i-1] == "") {i--;}
        }
        personalMovieDb.genres.forEach(function (val, i) {
            console.log(`Most favourite genre by the order ${i+1} is ${val}`);
        });
    },
    toggleVisibleMyDB: function() {
        personalMovieDb.privat = !personalMovieDb.privat;
    }
};




// reremberMyFilms();

// fagDetection();

personalMovieDb.toggleVisibleMyDB();

personalMovieDb.showMyDB();

personalMovieDb.writeYourGenres();

// showMyDB();