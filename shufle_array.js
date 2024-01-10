const array = [12, 123, 43, 124]


// for (let i = 0; i < array.length - 1; i++) {
//     let j = Math.floor(Math.random() * i+1);

    
//     [array[i], array[j]] = [array[j], array[i]];
// }

console.log(array)

function Shuffle_This_Array(array){
    for (let i = 0; i < array.length ; i++) {
        let j = Math.floor(Math.random() * i+1);
        
        // [array[i], array[j]] = [array[j], array[i]];
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

}

Shuffle_This_Array(array)
console.log(array);









