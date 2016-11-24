export = (object_you_wrapped_with_prmzfy, conf = { multiArgs: false }) => (...args) => new Promise((resolve, reject) => {
    object_you_wrapped_with_prmzfy(...args, (err, ...data) => err === null ? resolve(conf.multiArgs ? data : data[0]) : reject(err));
});