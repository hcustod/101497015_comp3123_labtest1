
const resolvedPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        let success = {'message' : 'delayed success!'};
        resolve(success);
    }, 500);
});

const rejectedPromise = () => new Promise((_, reject) => {
    setTimeout(() => {
        let rejectString = {'error': 'delayed exception!'};
        reject(rejectString);
    }, 500);
});

resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
    
rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));







