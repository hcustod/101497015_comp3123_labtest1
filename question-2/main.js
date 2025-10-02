
const resolvedPromise = new Promise((resolve) => {
    setTimeout(() => {
        let success = {'message' : 'delayed success!'};
        resolve(success);
    }, 500);
});

const rejectedPromise = new Promise((_, reject) => {
    setTimeout(() => {
        let rejectString = {'error': 'delayed exception!'};
        reject(rejectString);
    }, 500);
});

resolvedPromise.then((message) => console.log(message));
rejectedPromise.catch((error) => console.log(error));






