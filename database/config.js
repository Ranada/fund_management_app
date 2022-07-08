//using this tutorial: https://blog.logrocket.com/build-rest-api-node-express-mysql/

const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db4free.net",
      user: "neilianscully",
      password: "Qwasar2022",
      database: "tipp_fund_mgmt",
    },
    listPerPage: 10,
  };
  module.exports = config;