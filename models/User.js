module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNULL: false,
            autoIncrement: true,
            primaryKey: true
        },
        idRole: {
            type: DataTypes.INTEGER(4),
            allowNULL: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNULL: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(30),
            allowNULL: false
        },
        fullName: {
            type: DataTypes.STRING(50),
            allowNULL: false
        },
        division: {
            type: DataTypes.ENUM('Mobile', 'Web', 'Human Resource'),
            allowNULL: false
        },
        profilePict: {
            type: DataTypes.STRING(100),
            allowNULL: true
        }
    }, {
        timestamps: false,
        tableName: 'users'
    })
    return User;
}