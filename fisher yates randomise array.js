const shuffle = () => { 
    for (let i = 0; i < array.length; i++) { 
    let temp = array[i]; 
    let j = Math.floor(Math.random() * array.length); 
    array[i] = array[j]; 
    array[j] = temp; 
    }
    return array; 
  }; 
    
  // Usage 
  const array = [1,2,3,4,5,6,7,8,9,10]; 
  const shuffledArray = shuffle(array); 
  
  console.log(shuffledArray); 