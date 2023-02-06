let array = [0,1,2,3,4,5,6,7,8,9];

function filterPolyfill(arr, operation){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(operation(arr[i])){
            newArr.push(operation(arr[i]))
        };
    }
    return newArr;
}

function even(value){
    if(value % 2 == 0){
        return value
    }
}

function odd(value){
    if(value % 2 != 0){
        return value
    }
}

console.log(filterPolyfill(array, even));
console.log(filterPolyfill(array, odd));