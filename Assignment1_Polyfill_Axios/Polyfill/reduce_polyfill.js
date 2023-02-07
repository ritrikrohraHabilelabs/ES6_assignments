let array = [2, 2, 2, 4, 5]
function reduce(arr, cb, inital_value = arr[0]) {
    let acc = inital_value;
    for (let i = 1; i < arr.length; i++) {
        acc = cb(arr[i], acc);
    }
    return acc;
}
function sum(val, acc) {
    return (val + acc);
}
console.log(reduce(array, sum));