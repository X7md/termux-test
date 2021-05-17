console.log('Hello World!');
function FindElement(array, element) {
    for(let i = 0; i < array.length; i++){
        if(array[i] == element){
            let result = true;
             return result;
             break;
        }
                 let result = false;
                 return result;
    }
}
    console.log(FindElement([2, 4, 1 ,9, 42], 4));