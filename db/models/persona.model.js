const { Model, DataTypes, Sequelize } = require('sequelize');


const PERSONA_TABLE = 'personas';

const PersonaSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: [4, 100], // Longitud permitida entre 4 y 100 caracteres
    },
  },
  nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  sueldo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
};

class Persona extends Model {
  static associate(models) {
    this.hasMany(models.Hijo, {
      as: 'hijos',
      foreignKey: 'personaId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSONA_TABLE,
      modelName: 'Persona',
      timestamps: false
    }
  }
}

module.exports = { PERSONA_TABLE, PersonaSchema, Persona };
