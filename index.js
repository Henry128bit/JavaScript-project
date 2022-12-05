'use strict';

const numberOfFilms = +prompt ('How many films have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt ('One of the last movies you watched?', ''),
          b = +prompt ('How much would you rate it?', '');

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Watched quite a few films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('You are a classic spectator');
} else if (personalMovieDB.count >= 30) {
    alert('You are a movie buff!');
} else {
    console.log('An error has occurred');
}

console.log(personalMovieDB);