

function lowerCaseWords(mixedArr) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(mixedArr)) {
            filteredArr = mixedArr.filter(word => typeof word === 'string').map(word => word.toLowerCase());
            resolve(filteredArr);
        } else {
            return reject(`It's not an array`);
        }
    });
}

const mixedArr = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArr).then((result) => {console.log(result);})