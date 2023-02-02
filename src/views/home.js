import React from 'react';

class Home extends React.Component{
   
    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ 5.325,21</p>
                <hr className="my-4"/>
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                <button type="button" class="btn btn-primary">Cadastrar Usuario</button>
                <button type="button" class="btn btn-info" style={{marginLeft: '1%'}}>Cadastrar Lançamento</button>
                </p>
            </div>
        )
    }
}
export default Home;