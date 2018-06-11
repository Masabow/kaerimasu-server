const Sequelize = require('sequelize');
module.exports = new Sequelize('postgres', 'postgres', 'fuyumasa', {
  host: process.env.DATABASE_URL,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: '.db/db.sqlite'
});

module.exports.testAuth = ()=>{
  module.exports.authenticate().then(()=>{
      console.log('done');
  })
  .catch(err=>{
      console.log(err);
  })
};