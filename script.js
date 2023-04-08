const numberOfFilms = promt('Сколько фильмов вы уже посмотрели?', '')

personalMovieDB = {
   count: numberOfFilms,
   movies: '',
   actors: '',
   genres: '',
   privat: false
}

const film = promt('Один из последних просмотренных фильмов?', '')
const rate = promt('На сколько оцените его?', '')

const movies = {
   film: rate
}

