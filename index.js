'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you already watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you watched?', '').trim(),
              b = +prompt('How much would you rate it?', '');
    
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersinalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Watched quite a few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('You are a classic spectator');
    } else if (personalMovieDB.count >= 30) {
        alert('You are a movie buff!');
    } else {
        console.log('An error has occurred');
    }
}

detectPersinalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGeneres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is number ${i}`);
    }
}

writeYourGeneres();