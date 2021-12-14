function findProduct(arr){
    let multiplyAll = arr.reduce((a,b)=> a*b);
    let newArray = []
    for (let i=0; i<arr.length; i++){
        newArray.push(multiplyAll/arr[i]);
    }
    return newArray;
}
console.log (findProduct([1, 2, 3, 4]));


function mergedArray(arr1, arr2){
    let newArr= arr1.concat(arr2);
    return newArr.sort((a,b)=>a-b);
}

console.log(mergedArray([1, 2, 4, 5, 10, 6, 3],[0, 8, 19, 90, 11, 16, 13]))