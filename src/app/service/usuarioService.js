import ApiService from "../apiservice";
import ErroValidacao from "../exception/erroValidacao";

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

    validar(usuario) {
        const erros = [];
        console.log(usuario)
        if (!usuario.nome) {
            erros.push('O campo nome e obrigatorio');
        }
        if (!usuario.email) {
            erros.push('O campo email e obrigatorio');
        } else if (!usuario.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            erros.push('Informe um email valido');
        }
        if (!usuario.senha || !usuario.senharepita) {
            erros.push('Os campos Senha e repita senha sao obrigatorios')
        } else if (usuario.senha !== usuario.senharepita) {
            erros.push('As senhas nao conferem');
        }

       if(erros.length > 0){
            throw new ErroValidacao(erros);
       }
    }
}
export default UsuarioService;