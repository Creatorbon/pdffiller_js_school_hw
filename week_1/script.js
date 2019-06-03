/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */

console.log('First task ......');

// // Version #1
// function difference(arr, itemsToExclude) {
//     return arr.filter(elem => !itemsToExclude.includes(elem))
// }

// // Version #2
// function difference(arr, itemsToExclude) {
//     return arr.filter(elem => itemsToExclude.indexOf(elem) < 0)
// }

// Version #3
function difference(arr, itemsToExclude) {
    return arr.filter(elem => itemsToExclude.find(item => item == elem) !== elem)
}

console.log(difference([2, 1, 5], [2, 3]));
console.log(difference([2, 1, 5, 1, 5, 1, 12], [2, 4, 11]));
console.log(difference([2, 1, 5, 1, 5, 1, 12], [1, 5]));

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */

console.log('Second task ......');

// Version #1
function groupBy(array, value) {
    return array.reduce((objectsByKeyValue, obj) => {
        const key = obj[value];
        objectsByKeyValue[key] = (objectsByKeyValue[key] || []).concat(obj);
        return objectsByKeyValue;
    }, {});
}

const result = groupBy([{ gender: 'male', name: 'Max' }, { gender: 'male', name: 'Fred' }, { gender: 'female', name: 'Jane' }], 'gender');
const result2 = groupBy([{ gender: 'male', name: 'Max' }, { gender: 'male', name: 'Fred' }, { gender: 'female', name: 'Jane' }, { gender: 'female', name: 'Jane' }, { gender: 'male', name: 'Max' }], 'name');

console.log(result);
console.log(result2);

/**
*  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение 
*/

console.log('Third task ......');

// // Version #1
// function flatten(array) {
//     return array.flat();
// }

// // Version #2
// function flatten(array) {
//     return [].concat(...array);
// }

// Version #3
function flatten(array) {
    return array.reduce((previosValue, curentValue) => previosValue.concat(curentValue), [])
}

console.log(flatten([1, [2, [3, [4]], 5]]));
console.log(flatten([1, 2, 3, 4, 5]));
console.log(flatten([1, [2, 3], 4, 5]));

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */

console.log('Fourth task ......');

// // Version #1
// function uniq(array) {
//     return [...new Set(array)];
// }

// Version #2
function uniq(array) {
    return array.filter((elem, index, arr) => arr.indexOf(elem) == index)
}

console.log(uniq([2, 1, 2]));
console.log(uniq([2, 1, 2, 5, 5, 10, 7, 7, 7, 8]));

/**
 * 
 * метод должен собирать элементы массива в группы с заданным размером
 */

console.log('Fifth task ......');

// Version #1
function chunk(array, size) {
    return array.reduce((chunks, el, i) => (i % size
        ? chunks[chunks.length - 1].push(el)
        : chunks.push([el])) && chunks, [])
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));
console.log(chunk(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'a', 'b', 'c'], 5));
console.log(chunk(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'a', 'b', 'c'], 3));
