const models = require('./index');

module.exports = () => {
    return models.sequelize.sync({force: false});
}