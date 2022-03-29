
{// Задача 1
console.log(typeof(9));
// number
// number

console.log(typeof(1.2));
// number
// number

console.log(typeof(NaN));
// number
// number

console.log(typeof("Hello World"));
// string
// string

console.log(typeof(true));
// bool
// boolean

console.log(typeof(2 != 1));
// bollean
// bollean

let cheese = "сыр" + "ы";
console.log(cheese);
// Предположение: сыры конкатенация
// Фактический: сыры

cheese = "сыр" -"ы";
console.log(cheese);
// Предположение: NaN
// Фактический: NaN

let number = "2" + "4";
console.log(number);
// Предположение: 24
// Фактический: 24

number = "2" - "4";
console.log(number);
// Предположение: -2
// Фактический: -2

let value ="Сэм" + 5;
console.log(value);
// Предположение: Сэм5
// Фактический: Сэм5

value ="Сэм" - 5;
console.log(value);
// Предположение: NaN
// Фактический: NaN

value = 99 * "шары";
console.log(value);
// Предположение: NaN
// Фактический: NaN

console.log("------------------End of first task---------------------");
}
{// Задача 2
let lenth = 4;
let width = 9;
let perimetr = lenth*2 + width*2;
let square = lenth*width;
let ratio = perimetr/square;
console.log("lenth = " + lenth);
console.log("width = " + width);
console.log("perimetr = " + perimetr);
console.log("square = " + square);
console.log("ratio = " + ratio);
console.log("------------------End of second task---------------------");
}
{// Задача 3
    let celc = 36;
    let faren = 66.2;
    console.log(`${celc}\xB0C соответствует ${celc*9/5+32}\xB0F`);
    console.log(`${faren}\xB0F соответствует ${(faren-32)*5/9}\xB0C`);
    console.log("------------------End of third task---------------------");
}   
{// Задача 4    
    let year = window.prompt("Write to check year (true = высокосный)");

    year/4 != 0 ? alert("false") : year/100 != 0? alert("true"): alert("false");
    
}   
{// Задача 5    
    let number_1= 7;
    let number_2= 2;
    if (number_1 == 10 || number_2 ==10){
        console.log("True");
    }
    else if (number_1 + number_2 ==10){
        console.log("True");
    }
    else console.log("False");

    console.log("------------------End of fifth task---------------------");
}   
{// Задача 6    
    let amount_of_sheeps = window.prompt("Write a number of sheeps");
    let string_of_sheeps = "";
    let buff_of_sheeps =0;
    while (amount_of_sheeps > 0 ){
        buff_of_sheeps += amount_of_sheeps - (amount_of_sheeps - 1);
        string_of_sheeps += `${buff_of_sheeps} овечка...`
        amount_of_sheeps --;
    }
    console.log(string_of_sheeps);
    console.log("------------------End of sixth task---------------------");
}  
{// Задача 7    
    let amount_of_numbers = 0;
    while(amount_of_numbers <=15){
        switch(amount_of_numbers % 2){
            case 0: console.log(`"${amount_of_numbers} четное"`);
            break;
            case 1: console.log(`"${amount_of_numbers} нечетное"`);
            break;
        }
        
        amount_of_numbers++;
    }
    console.log("------------------End of seventh task---------------------");
}  
{// Задача 8    
    let start_of_raws = 0;
    let amount_of_raws = 12;
    let string_element_one ="#";
    let string_element_two ="*";
    while (start_of_raws != amount_of_raws){
        let elements = 1 + (start_of_raws*2);
        switch(start_of_raws % 2){
            case 0: {
                console.log(`${" ".repeat(amount_of_raws - (start_of_raws+1))}${string_element_two.repeat(elements)}`);
            }
            break;
            case 1: {
                console.log(`${" ".repeat(amount_of_raws - (start_of_raws+1))}${string_element_one.repeat(elements)}`);
            }
            break;
        }
        start_of_raws++;
    }

    console.log("------------------End of eighth task---------------------");
} 
{// Задача 9   
    let array_of_numbers = [0,-3,1];
    let string_of_numbers = "";
    array_of_numbers.sort(function(a, b) {
        return a - b;
    });
    for(let i = 0 ; i < array_of_numbers.length ; i++ ){
        string_of_numbers += `${array_of_numbers[i]}, `;
    }
    console.log(string_of_numbers.slice(0, -2));
      
    console.log("------------------End of ninth task---------------------");
}  
{// Задача 10   
    let array_of_numbers = [2,-1,0,-5,-4];
    for( let j = 0 ; j < array_of_numbers.length - 1 ; j ++){
        let preveous_number = array_of_numbers[j] 
        if (preveous_number > array_of_numbers[j + 1]){
            array_of_numbers[j + 1] = preveous_number;
        }
    }
    console.log(array_of_numbers[array_of_numbers.length - 1]);

    console.log("------------------End of tenth task---------------------");
}  