import {Router} from 'express'
import {hola,adios,traerInventario,registrarProducto,eliminarProducto} from '../controllers/controllers.js';


const router = Router();

router.get("/hola",hola)
router.get("/traerInventario",traerInventario)
router.post("/registrarProducto",registrarProducto);
router.delete("/eliminarProducto/:id",eliminarProducto);

export default router;