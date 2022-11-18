module.exports = (sequelize, DataTypes) => {
    const Validation = sequelize.define('Validation', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        memberId: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            unique: true
        },
        token: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
        expiredDate: {
            type: DataTypes.DATE(),
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: 'validations'
    })
    return Validation;
}