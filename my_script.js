const conSquare = document.getElementById("container_square")


for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        conSquare.innerHTML += `<div class="square_fizzBuzz">FizzBuzz</div>`
    }else if (i % 5 == 0) {
        conSquare.innerHTML += `<div class="square_buzz">Buzz</div>`
    }else if (i % 3 == 0) {
        conSquare.innerHTML += `<div class="square_fizz">Fizz</div>`
    }else {
        conSquare.innerHTML += `<div class="square"> ${i}</div>`
    } 
}