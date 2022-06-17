// function myEach(myArray, cbf){
//     for (let i = 0; i < myArray.length; i++){
//         cbf(myArray[i], i, myArray)
//     }
//     return myArray
// }
/*
check if the given collection is an array or object first. ArrayIsArray checks if its an array.
Object.values places the object into an array.
*/
const isItObj = function (collection){
    if(typeof collection === 'object' && !Array.isArray(collection)){
        return Object.values(collection)
    }else{
        return collection
    }
}

function myEach(collection, callback) {
    const screened = isItObj(collection)
    for (let valAtIndx of screened){
        callback(valAtIndx)
    }
    return collection
}

function myMap(collection, callback) {
    const screened = isItObj.call(this, collection)
    const newArr = []
    for (let valAtIndx of screened){
        newArr.push(callback(valAtIndx))
    }
    return newArr
}

function myReduce(collection, callback, acc){
    const screened = isItObj.call(this, collection)
    let i;
    if (acc){
        i = 0
    } else {
        i = 1
        acc = screened[0]
    }
    for(i; i<screened.length; i++){
        acc = callback(acc, screened[i], screened)
    }
    return acc
}

function myFind(collection, predicate){
    const screened = isItObj.call(this, collection)
    for (let valAtIndx of screened){
        if(predicate(valAtIndx) === true){
            return valAtIndx
        }
    }
}

function myFilter(collection, predicate){
    const screened = isItObj.call(this, collection)
    const emptyArray =[]
    for (let valAtIndx of screened){
        if(predicate(valAtIndx) === true){
            emptyArray.push(valAtIndx)
        }
    }
    return emptyArray
}

function mySize(collection){
    if(typeof collection === 'object' && !Array.isArray(collection)){
        return Object.keys(collection).length
    }else{
        return collection.length
    }
}

function myFirst(array, n){
    if (n){
        return array.slice(0, n)
    } else {
        return array[0]
    }
}

function myLast(array, n){
    if (n) {
        return array.slice(array.length - n)
    } else {
        return array[array.length - 1]
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}