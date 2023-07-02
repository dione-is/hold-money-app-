import LocalStorageService from "./localStorageService";

export const _usuario = '_usuario';

export default class AuthService{

    static isUsuarioAutenticado(){
        const usuario = LocalStorageService.obterItem(_usuario);
        return usuario && usuario.id;
    }

    static removerUsuarioLogado(){
        LocalStorageService.removerItem(_usuario);
    }

    static logar(usuario){
        LocalStorageService.adicionarItem(_usuario, usuario);
    }

    static obterUsuarioLogado(){
        return LocalStorageService.obterItem(_usuario)
    }
}