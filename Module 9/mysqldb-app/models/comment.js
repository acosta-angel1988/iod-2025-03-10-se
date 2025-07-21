const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Comment.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
    },
    content: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    userId: {
        type: DataTypes.INTEGER,allowNull: false,references: {
        model: 'users', // table name
        key: 'id',
        },
    },
    postId: {
        type: DataTypes.INTEGER,allowNull: false,references: {
        model: 'posts', // table name
        key: 'id',
        },
    },
},
    {
        sequelize: sequelizeInstance, modelName: 'comments', // use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Comment;