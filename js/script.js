"use strict";

 let numberofFilms; 

 function start() {
    numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)){
        numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
 }
 start(); 
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyfilmes(){
    for (let i = 0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
         b = prompt ('На сколько оцените его?','');
     
         if (a != null && b != null && a !='' && b != '' && a.length < 50){
             personalMovieDB.movies[a] = b;
             console.log('Done!');
         } else{
             console.log('Error!');
             i--;
         }
     }
}
 rememberMyfilmes(); 
     



function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if (10 < personalMovieDB.count < 30 ) {
        console.log('Вы классический зритель');
    }else if (personalMovieDB.count > 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel(); 


function showMyDB(){
    personalMovieDB.privat = prompt('Показать результат?');
    if (personalMovieDB.privat !== null) {
        console.log(personalMovieDB);
    } else {
        console.log('Ok,no problem');
    }
}
showMyDB();

function writeYourGenres(){
    for (let i=1;i<=3;i++){
      personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером${i} `,'');
    }
}

writeYourGenres();