import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class proveedor extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    proveedor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nit: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proveedor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "proveedor_pkey",
        unique: true,
        fields: [
          { name: "proveedor_id" },
        ]
      },
    ]
  });
  }
}
