'use strict'

const tableName = 'jugadores'

module.exports = (sequelize, DataTypes) => {
    const jugadoresSchema = {
        tableName,
        attributes: {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowFalse: false,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    isLength: { max: 50 }
                }
            },
            ranking: {
                type: DataTypes.INT,
                allowNull: false,
                validate: { min: 0, max: 1000 }
            },
            pais: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    isLength: { max: 30 }
                }
            },
            edad: {
                type: DataTypes.INT,
                allowNull: false,
                validate: { min: 1, max: 50 }
            },
            peso: {
                type: DataTypes.INT,
                allowNull: false
            },
            altura: {
                type: DataTypes.INT,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                field: 'created_at'
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                field: 'updated_at'
            },
            deletedAt: {
                allowNull: true,
                type: DataTypes.DATE,
                field: 'deleted_at'
            }
        },
        options: {
            timestamps: true,
            paranoid: true,
            underscored: true
        }
    }

    const jugador = sequelize.define(
        tableName,
        jugadorSchema.attributes,
        jugadorSchema.options
    )
    jugador.associate = function (models) {
        // associations can be defined here
    }
    return jugador
}