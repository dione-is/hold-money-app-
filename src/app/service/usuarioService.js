import ApiService from "../apiservice";

class UsuarioService extends ApiService{

    constructor(){
        super('/api/usuario');
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais);
    }

    buscarSaldo(id){
        return this.get(`/${id}/buscar-saldo`);
    }

    salvar(usuario){
        return this.post('/', usuario);
    }
}
export default UsuarioService;