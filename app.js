// 1-question
{
    let arr = [2,6,3,7]
    let newArr = []

    // FOR
    let i = 0
    for(; i < arr.length; i++){
        newArr[i] = arr[i] ** 2;
    }
    // console.log(newArr);


    // WHILE 
    while(i < arr.length){
        newArr[i] = arr[i] ** 2;
        i++
    }
    // console.log(newArr);


    // DO-WHILE
    do {
        // console.log(newArr);
        newArr[i] = arr[i] ** 2;
        i++;
    } while (i < arr.length);

}

// 2-question
{
    let arr = [5,-3,4,-6]
    let newArr = []
    let i = 0

    // FOR
    for(; i < arr.length; i++){
        if(arr[i] > 0){
            newArr[i] = arr[i]
        }
        else{
            newArr[i] = Math.abs(arr[i])
        }
    }
    // console.log(newArr);
    
    // WHILE
    while(i < arr.length){
        if(arr[i] > 0){
            newArr[i] = arr[i]
        }
        else{
            newArr[i] = Math.abs(arr[i])
        }
        i++;
    }
    // console.log(newArr);
    
    // DO-WHILE
    do{
        // console.log(newArr);
        if(arr[i] > 0){
            newArr[i] = arr[i]
        }
        else{
            newArr[i] = Math.abs(arr[i])
        }
    }while(i < arr.length)

}

// 3-question
{
    
}