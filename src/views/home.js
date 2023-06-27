import React from 'react';
import UsuarioService from '../app/service/usuarioService';
import LocalStorageService from '../app/service/localStorageService';

class Home extends React.Component {

    state = {
        saldo: 0,
        usuario: ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    componentDidMount() {
        const usuario = LocalStorageService.obterItem('_usuario');
        const  usuarioLogado =  JSON.parse(usuario);
        
        this.service.buscarSaldo( usuarioLogado.id
        ).then((response) => {
            this.setState({saldo: response.data})
        }).catch((error) => {
            console.error(error);
        }) 
    }



    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a type="button" class="btn btn-primary btn-lg" href='#/novo-usuario'>Cadastrar Usuario</a>
                    <a type="button" class="btn btn-info btn-lg" style={{ marginLeft: '1%' }} href='#/'>Cadastrar Lançamento</a>
                </p>
            </div>
        )
    }
}
export default Home;