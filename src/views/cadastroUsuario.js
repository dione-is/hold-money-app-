import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";


class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senharepita: ''
    }

    salvar = () => {
        console.log(this.state.email + '\n' + this.state.nome + '\n' + this.state.senha + '\n' + this.state.senharepita + '\n')
    }

    render() {
        return (
            <div className="container">
                <Card title="Cadastro de Usuario">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup Label="Nome: *" htmlFor="exampleInputNome1" >
                                    <input type="email" className="form-control" id="exampleInputNome1"
                                        placeholder="Digite o Nome" name="nome" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
                                </FormGroup>
                                <FormGroup Label="Email: *" htmlFor="exampleInputEmail1">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="Digite o Email" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                    <small id="emailHelp" className="form-text text-muted">Não divulgamos o seu email.</small>
                                </FormGroup>
                                <FormGroup Label="Senha: *" htmlFor="exampleInputPassword1">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="senha"
                                        value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} />
                                </FormGroup>
                                <FormGroup Label="Repita a senha: *" htmlFor="exampleInputPassword2">
                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" name="senharepita"
                                        value={this.state.senharepita} onChange={e => this.setState({ senharepita: e.target.value })} />
                                </FormGroup>
                                <div className='col-sm-12' style={{ marginTop: '20px' }}>
                                    <button type='button' className="btn btn-success col-sm-3" onClick={this.salvar}>Salvar</button>
                                    <button type='button' className="btn btn-danger col-sm-3 " style={{ marginLeft: '20px' }}>Voltar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}
export default CadastroUsuario;