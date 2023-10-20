import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _producto from  "./producto.js";
import _proveedor from  "./proveedor.js";

export default function initModels(sequelize) {
  const producto = _producto.init(sequelize, DataTypes);
  const proveedor = _proveedor.init(sequelize, DataTypes);

  producto.belongsTo(proveedor, { as: "proveedor", foreignKey: "proveedor_id"});
  proveedor.hasMany(producto, { as: "productos", foreignKey: "proveedor_id"});

  return {
    producto,
    proveedor,
  };
}
