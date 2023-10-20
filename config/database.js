import {Sequelize} from 'sequelize';

const conexion = new Sequelize(
    'railway',
    'postgres',
    'kjzdufl7YBRI1TiXWwTA',
    {
        host: 'containers-us-west-144.railway.app',
        port: 6251,
        dialect: 'postgres'
    }
);

export default conexion;