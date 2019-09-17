const args = process.argv.slice(2);

const argv = (arg) => {
    const index = args.indexOf("--" + arg);
    if (index !== -1 && args[index + 1] !== undefined) {
        return args[index + 1];
    } else return null;
}

const validateArgs = (args) => {
    let valid = true;
    args.forEach(arg => {
        if (!argv(arg)) {
            return valid = false;
        }
    });
    return valid;
}

module.exports = {
    get: argv,
    validate: validateArgs
}