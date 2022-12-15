'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you already watched?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you already watched?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the last movies you watched?', '').trim(),
                  b = +prompt('How much would you rate it?', '');
        
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersinalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Watched quite a few films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('You are a classic spectator');
        } else if (personalMovieDB.count >= 30) {
            alert('You are a movie buff!');
        } else {
            console.log('An error has occurred');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGeneres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre is number ${i}`);

            if (genre == '' || genre == null) {
                console.log('You entered incorrect data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite Genre ${i + 1} is ${item}`);
        });
    }
};