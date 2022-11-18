module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        paymentType: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER(8),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('Berhasil', 'Proses', 'Ditolak'),
            allowNull: false
        },
        paymentProof: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        memberId: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'payments'
    })
    return Payment;
}