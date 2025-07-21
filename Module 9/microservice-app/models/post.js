const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Post.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
    },
    description: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    content: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    publisher: {
        type: DataTypes.STRING, allowNull: false, required: true,
unique: true
    },
    userId: {
        type: DataTypes.INTEGER,allowNull: false,references: {
        model: 'users', // table name
        key: 'id',
        },
    },},
    {
        sequelize: sequelizeInstance, modelName: 'posts', // use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Post;