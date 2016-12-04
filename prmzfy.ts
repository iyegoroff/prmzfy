export = (objectYouWrappedWithPrmzfy, conf = { multiArgs: false }) => (...args) => new Promise((resolve, reject) => {
    objectYouWrappedWithPrmzfy(
        ...args,
        (err, ...data) => err === null ? resolve(conf.multiArgs ? data : data[0]) : reject(err)
    );
});
