function odd_or_even(number) {
    var num = number % 2;
    if (num == 0){
        return "The number " + number + " is even";
    }
    return "The number " + number + " is odd";
}

function random_number(high, low){
    return (Math.random() * (high - low) + low);
}

function less_than_five(){

}

module.exports = {
    odd_or_even,
    random_number,
    less_than_five
}