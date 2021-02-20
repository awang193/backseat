const dotenv = require('dotenv');

dotenv.config();
const config = {
    PORT: process.env.PORT,
    databseUrl: process.env.DATABASE_URL,
}

module.exports = config;