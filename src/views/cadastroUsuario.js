import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import UsuarioService from "../app/service/usuarioService";
import { mensagemSucesso, mensagemError } from "../components/toastr";

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senharepita: ''
    }

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    salvar = () => {
        try {
            const usuario = {
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
                senharepita: this.state.senharepita
            }

            this.service.validar(usuario)

            this.service.salvar(usuario)
                .then(response => {
                    mensagemSucesso('Usuario Cadastrado com Sucesso.');
                    this.props.history.push('/login');
                })
                .catch(error => {
                    mensagemError(error.response.data.message);
                });

        } catch (error) {
            error.mensagens.forEach((msg) => {
                mensagemError(msg);
            })
        }
    }

    validar() {
        const msgs = [];

        if (!this.state.nome) {
            msgs.push('O campo nome e obrigatorio');
        }
        if (!this.state.email) {
            msgs.push('O campo email e obrigatorio');
        } else if (!this.state.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            msgs.push('Informe um email valido');
        }
        if (!this.state.senha || !this.state.senharepita) {
            msgs.push('Os campos Senha e repita senha sao obrigatorios')
        } else if (this.state.senha !== this.state.senharepita) {
            msgs.push('As senhas nao conferem');
        }

        return msgs;
    }

    cancelar = () => {
        this.props.history.push('/login');
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
                                    <button type='button' className="btn btn-success col-sm-3" onClick={this.salvar}>Salvar <i className="pi pi-save"></i></button>
                                    <button type='button' className="btn btn-danger col-sm-3 " style={{ marginLeft: '20px' }} onClick={this.cancelar}>Voltar <i className="pi pi-times"></i></button>
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