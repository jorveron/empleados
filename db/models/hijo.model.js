const { Model, DataTypes, Sequelize } = require('sequelize');
const { PERSONA_TABLE } = require('./persona.model')

const HIJO_TABLE = 'persona_hijos'

const HijoSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  hijo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4, 100], // Longitud permitida entre 4 y 100 caracteres
    },
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  personaId: {
    field: 'persona_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    reference: {
      model: PERSONA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Hijo extends Model {
  static associate(models) {
    this.belongsTo(models.Persona, { as: 'persona' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HIJO_TABLE,
      modelName: 'Hijo',
      timestamps: false
    }
  }
}

module.exports = { HIJO_TABLE, HijoSchema, Hijo };
