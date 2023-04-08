const numberOfFilms = +promt('Сколько фильмов вы уже посмотрели?', '')

personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

const film = promt('Один из последних просмотренных фильмов?', ''),
      rate = +promt('На сколько оцените его?', ''),
      film2 = promt('Один из последних просмотренных фильмов?', ''),
      rate2 = +promt('На сколько оцените его?', '');

personalMovieDB.movies[film] = rate;
personalMovieDB.movies[film2] = rate2;

console.log(personalMovieDB)

