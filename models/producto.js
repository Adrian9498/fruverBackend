import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class producto extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    verdura_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    precio_compra: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    verdura_fruta: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    proveedor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'proveedor',
        key: 'proveedor_id'
      }
    }
  }, {
    sequelize,
    tableName: 'producto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "producto_pkey",
        unique: true,
        fields: [
          { name: "verdura_id" },
        ]
      },
    ]
  });
  }
}
