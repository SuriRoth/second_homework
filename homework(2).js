let numbers = [];

function fizzBuzz(){
        let iterate = 100;
        for (let i = 1; i <= iterate; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    numbers.push('FizzBuzz');
                } else if (i % 3 === 0) {
                    numbers.push('Fizz');
                } else if (i % 5 === 0) {
                    numbers.push('Buzz');
                } else {
                    numbers.push(i);
                }
            }
        }

fizzBuzz()
console.log(numbers.join('\n'))


