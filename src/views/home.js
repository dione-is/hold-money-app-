import React from 'react';
import UsuarioService from '../app/service/usuarioService';
import { AuthContext } from '../main/provedorAutenticacao';

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
        const usuario = this.context.usuarioAutenticado;
        
        this.service.buscarSaldo( usuario.id
        ).then((response) => {
            this.setState({saldo: response.data})
        }).catch((error) => {
            console.error(error);
        }) 
    }



    render() {
        return (
            <div >
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4" />
                <p className="lead">
                    <a type="button" className="btn btn-info " href='#/consulta-lancamentos'>Consultar Lançamento </a>
                </p>
            </div>
        )
    }
}
Home.contextType = AuthContext;
export default Home;