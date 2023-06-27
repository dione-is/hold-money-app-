import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom';
import UsuarioService from '../app/service/usuarioService';
import LocalStorageService from '../app/service/localStorageService';
import {mensagemError, mensagemSucesso} from '../components/toastr'


class Login extends React.Component {
    state = {
        email: '',
        senha: '',
    }


    prepareCadastro = () => {
        this.props.history.push('/novo-usuario')
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    autenticar = async () => {
        await this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then((response) => {
            mensagemSucesso('Acesso autorizado');
            LocalStorageService.adicionarItem('_usuario', response.data);
            this.props.history.push('/home');
        }).catch((err) => {
            console.log(err)
            mensagemError(err.response.data.message);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-md-6" style={{ position: 'relative', justifyContent: 'center' }}>
                        <div className="bs-docs-section"></div>
                        <Card title="Login">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='bs-component'>
                                        <fieldset>
                                            <FormGroup Label="Email: *" htmlFor="exampleInputEmail1">
                                                <input
                                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    placeholder="Digite o Email" value={this.state.email} name="email"
                                                    onChange={(e) => this.setState({ email: e.target.value })} />
                                            </FormGroup>
                                            <FormGroup Label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                                    value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} />
                                            </FormGroup>
                                            <div className='col-sm-12' style={{ marginTop: '20px' }}>
                                                <button type='button' onClick={this.autenticar} className="btn btn-success col-sm-4">Entrar</button>
                                                <button type='button' className="btn btn-info col-sm-4 col-sm-offset-4" style={{ marginLeft: '20px' }} onClick={this.prepareCadastro}>Cadastrar</button>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        )

    }
}
export default withRouter(Login);