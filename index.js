module.exports = function(module) {
    switch(module) {
    case "basic":
        return require('./src/basic');
    case "bulma":
        return require('./src/bulma');
    }
};
