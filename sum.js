function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('test'), 1000);
    });
}

module.exports = fetchPromise;