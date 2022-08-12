/*
    ==      is left side equal right side?
    ===     is left side equal right side and both of same data-type?
    !=      is left side not equal right side?
    !==     is left side not equal and both are same data-type?
    <       is left side smaller than right side
    >       is left side bigger than right side
    >=      is left side bigger or equal right side
    <=      is left side smaller or equal right side
*/

/*
    ||      OR           
                    T OR T => T
                    T OR F => T
                    F OR T => T
                    F OR F => F
    &&      AND
                    T AND T => T
                    T AND F => F
                    F AND T => F
                    F AND F => F
    !       NOT
                    T => F
                    F => T
*/

const salary = 5600;
const iWinTheLottery = true;



if(salary >= 10000 || iWinTheLottery === true) {
    console.log("let's buy a car");
}
else {
    console.log("let's use our current bike")
}


const weather = "sunny";
const IsRemote = true;

if(weather === "sunny" && IsRemote === true) {
    console.log('BBQ');
}
else {
    console.log('GO TO TM!');
}