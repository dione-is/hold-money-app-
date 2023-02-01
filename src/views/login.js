import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';

class Login extends React.Component {
    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log("email: " + this.state.email + "\n" + "senha: " + this.state.senha);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bs-docs-section"></div>
                        <Card title="Login">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='bs-component'>
                                        <fieldset>
                                            <FormGroup Label="Email: *" htmlFor="exampleInputEmail1">
                                                <input
                                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    placeholder="Digite o Email" value={this.state.email}
                                                    onChange={(e) => this.setState({ email: e.target.value })} />
                                            </FormGroup>
                                            <FormGroup Label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                                    value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} />
                                            </FormGroup>
                                            <div className='btn-group '>
                                                <button type='button' onClick={this.entrar} className="btn btn-success">Entrar</button>
                                                <button type='button' className="btn btn-danger">Cadastrar</button>
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
export default Login;