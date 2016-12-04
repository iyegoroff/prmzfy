export = (promisified: Function, conf = { multiArgs: false }) => (...args) => new Promise<any>((resolve, reject) => {
    promisified(...args, (err, ...data) => err === null ? resolve(conf.multiArgs ? data : data[0]) : reject(err));
});
