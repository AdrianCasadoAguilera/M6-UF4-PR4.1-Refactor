const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Prompt = require('./Prompt');

const SentimentAnalysis = sequelize.define('SentimentAnalysis', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    sentiment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['positive', 'neutral', 'negative']]
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

// Establir relació
SentimentAnalysis.belongsTo(Prompt, { foreignKey: 'promptId' });
Prompt.hasOne(SentimentAnalysis, { foreignKey: 'promptId' });

module.exports = SentimentAnalysis;
