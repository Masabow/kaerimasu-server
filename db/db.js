const Sequelize = require('sequelize');
if (process.env.DATABASE_URL) {
  module.exports = new Sequelize(process.env.DATABASE_URL);
} else {
module.exports = new Sequelize('postgres', 'postgres', 'fuyumasa', {
  host: process.env.DATABASE_URL,
  dialect: 'postgres',
  operatorsAliases: false,
  timezone:'+09:00',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: '.db/db.sqlite'
});
}

module.exports.testAuth = ()=>{
  module.exports.authenticate().then(()=>{
      console.log('done');
  })
  .catch(err=>{
      console.log(err);
  })
};