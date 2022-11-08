import { Router } from 'express';
import UsuarioController from '../controllers/usuarios.controllers';

class UsuariosRoute {

    public router: Router;

    constructor() {
        this.router = Router();
        this.router.put('/edit', UsuarioController.editUsuario);
        this.router.post('/create', UsuarioController.addUsuario);
        this.router.get('/all',UsuarioController.getAllUsers);
        this.router.get('/search', UsuarioController.searchUsuarios);
        this.router.get('/', UsuarioController.getUsuario);
        this.router.post('/login',UsuarioController.loginUsuario);
        this.router.post('/disable',UsuarioController.disableUser);
        this.router.post('/enable',UsuarioController.enableUser);
    }
}

export default new UsuariosRoute().router;