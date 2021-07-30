const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    const { id, time } = transaction;
    const delay = randomIntegerFromInterval(200, 500);

    return new Promise((resolve, reject) => {
        const canProcess = Math.random() > 0.3;

        setTimeout(() => {
            if (canProcess) {
                resolve({id ,time});
            } else {
                reject(transaction.id);
            }
        }, delay);

    });
}

const logSuccess = (trans) => {
    console.log(`Transaction ${trans.id} processed in ${trans.time}ms`);
};

const logError = (id) => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};


makeTransaction({ id: 70, time: 150 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 71, time: 230 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 72, time: 75 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 73, time: 100 })
    .then(logSuccess)
    .catch(logError);