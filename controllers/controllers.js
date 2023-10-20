import initModels from '../models/init-models.js'
import conexion from '../config/database.js'
const tablas = initModels(conexion)

export function hola(req,res){
    res.send("Hola");
}

export function adios(req,res){
    res.send("adios");
}

// funcion de lectura -> R
export async function traerInventario(req,res){
    let consulta = await tablas.producto.findAll();
    res.json(consulta);
}

// funcion de escritura -> C
export async function registrarProducto(req,res){
    let consulta = await tablas.producto.create(req.body);
    res.json(consulta);
}

// funcion de escritura -> D
export async function eliminarProducto(req,res){
    let id = req.params.id
    let consulta = await tablas.producto.destroy({
        where:{
            verdura_id: id
        }
    });
    res.json(consulta);
}