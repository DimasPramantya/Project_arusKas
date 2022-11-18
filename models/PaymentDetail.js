module.exports = (sequelize, DataTypes) => {
    const PaymentDetail = sequelize.define('PaymentDetail', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        idPayment: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        paymentMethod: {
            type: DataTypes.ENUM('BCA', 'Shopee', 'Dana', 'Gopay'),
            allowNull: false,
        },
        numberBankAcc: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        senderName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE(),
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: 'paymentDetails'
    })
    return PaymentDetail;
}