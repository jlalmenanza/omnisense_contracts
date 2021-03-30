const dotenv = require('dotenv');

const setEnvironmentVariables = () => {
    dotenv.config();
}

const showEnvironmentMode = () => {
    console.log(`Environment Mode - ${process.env.SERVER_ENV_MODE}`);
};

const showServerPort = () => {
    console.log(`Omnisense running at port: ${process.env.SERVER_PORT}`);
};

module.exports = {
    setEnvironmentVariables,
    showEnvironmentMode,
    showServerPort
};
