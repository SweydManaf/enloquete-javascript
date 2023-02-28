for (var num = 1; num <= 100; num++){
    if (num % 3 == 0 && num % 5 != 0){
        console.log('fizz', num)
    } else if (num % 3 != 0 && num % 5 == 0){
        console.log('buzz', num)
    } else if (num % 3 == 0 && num % 5 == 0){
        console.log('fizzBuzz', num)
    }
}