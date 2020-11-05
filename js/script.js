'use strict';
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log('numberOfFilms: ', numberOfFilms);

// var message = (numberOfFilms < 10) ? 'Просмотрено довольно мало фильмов' : (10 <= numberOfFilms <= 30) ? 'Вы классический зритель' : (numberOfFilms > 30) ? 'Вы киноман' : 'Произошла ошибка';
if (numberOfFilms > 0 && numberOfFilms < 10) {
  console.log('Просмотрено довольно мало фильмов!');
} else if (10 <= numberOfFilms && numberOfFilms <= 30) {
  console.log('Вы классический зритель!');
} else if (numberOfFilms > 30) {
  console.log('Вы киноман!');
} else {
  console.log('Произошла ошибка!');
  alert('Произошла ошибка!');
}


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b!= null && a != '' && b != '' && a.length < 30) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
// }
let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if (a != null && b!= null && a != '' && b != '' && a.length < 30) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//       i++;
//     } else {
//       console.log('error');
//       i--;
//     }
// }

do {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  if (a != null && b!= null && a != '' && b != '' && a.length < 30) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        i++;
  } else {
        console.log('error');
        i--;
 }
} while (i < 2);



console.log('personalMovieDB: ', personalMovieDB);