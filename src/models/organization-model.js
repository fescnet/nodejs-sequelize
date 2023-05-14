module.exports = (sequelize, Sequelize) => {
  const Organization = sequelize.define('Organization', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'organizations',
  })
  return Organization
}