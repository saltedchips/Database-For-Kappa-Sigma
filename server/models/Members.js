module.exports = (sequelize, DataTypes) => {
    const Members = sequelize.define("Members", {
        Name: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        PhoneNumber: {
            type: DataTypes.STRING, 
            allowNull: true,
        },
        Address: {
            type: DataTypes.STRING, 
            allowNull: true,
        }
    })

    return Members
}