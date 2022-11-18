module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        roleName: {
            type: DataTypes.STRING(),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'roles'
    })
    return Role;
}