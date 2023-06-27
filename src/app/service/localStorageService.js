class LocalStorageService {
    static adicionarItem(chave, valor){
        localStorage.setItem(chave,  JSON.stringify(valor));
    }

    static obterItem(chave){
        return localStorage.getItem(chave)
    }
}export default LocalStorageService;