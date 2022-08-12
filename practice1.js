// FUNCTIONS: a way to reduce coding => remove the dupplication of smilar code

// OBJECTS: a datatype which is complex and consist of inner values.
// ARRAYS: a collection of values
// LOOP: a repeatetive code
// CONDITIONS: conditonal code


/* 
5 variables: sia, sheida, niush, shima, payam
in these variable we have to save their ages. we set them with initial values. now we want to measure how old they are in next 8 years and print the year in console.
*/

function hashtSaleDge(age, yearsLater) {
    let olderAge = age + yearsLater;
    const predict = age + ' old in ' + yearsLater + ' Years Later would be >> ' + olderAge;
    console.log(predict);
}

 const sia= 34;
 const sheida= 33;
 const niush= 29;
 const shima= 33;
 const payam= 34;

hashtSaleDge(sia, 5);
hashtSaleDge(sheida, 7);
hashtSaleDge(niush, 4);
hashtSaleDge(shima, 5);
hashtSaleDge(payam, 9);

/*
    sia: 34       5
    sheida: 33    7
    niush: 29     4
    shima: 33     5
    payan: 34     9

*/