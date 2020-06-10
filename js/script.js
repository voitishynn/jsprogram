"use strict";

 const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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
     

if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (10 < personalMovieDB.count < 30 ) {
    console.log('Вы классический зритель');
}else if (personalMovieDB.count > 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
  
console.log(personalMovieDB);




/* let i = 0;
while (i<2){
    const a = prompt('Один из последних просмотренных фильмов?',''),
    b = prompt ('На сколько оцените его?','');
    i++;
    if (a != null && b != null && a !='' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else{
        console.log('Error!');
        i--;
    }
}


do{
    const a = prompt('Один из последних просмотренных фильмов?',''),
    b = prompt ('На сколько оцените его?','');
    i++;
    if (a != null && b != null && a !='' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else{
        console.log('Error!');
        i--;
    }
} while (i < 2);
 */