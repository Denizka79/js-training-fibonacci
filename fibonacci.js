var numbers = [];
numbers = [0,1];
function fibonacciNumbers() {
    for (i = 0; i < 11; i++) {
        numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
    }
    console.log(numbers);
}
fibonacciNumbers();
