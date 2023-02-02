import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import axios from 'axios';

class Login extends React.Component {
    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log("email: " + this.state.email + "\n" + "senha: " + this.state.senha);
    }

    autenticar = () =>{
        axios.post('localhost:8080/autenticar',{
            email: 'dione@email.com',
            senha: '123mudar'
        }).then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{justifyContent: 'center'}}>
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
                                                    placeholder="Digite o Email" value={this.state.email}
                                                    onChange={(e) => this.setState({ email: e.target.value })} />
                                            </FormGroup>
                                            <FormGroup Label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                                    value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} />
                                            </FormGroup>
                                            <div className='col-sm-12' style={{marginTop: '20px'}}>
                                                <button type='button' onClick={this.entrar} className="btn btn-success col-sm-4">Entrar</button>
                                                <button type='button' className="btn btn-info col-sm-4 col-sm-offset-4" style={{marginLeft: '20px'}}>Cadastrar</button>
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