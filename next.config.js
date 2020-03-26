require("dotenv").config();
module.exports = {
  env: {
    PINTEREST_APP_SECRET: process.env.PINTEREST_APP_SECRET,
    PINTEREST_APP_ID: process.env.PINTEREST_APP_ID,
  },
};
