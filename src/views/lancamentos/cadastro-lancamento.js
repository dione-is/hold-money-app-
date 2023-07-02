import React from "react";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import LancamentoService from "../../app/service/lancamentoService";
import SelectMenu from "../../components/selectMenu";
import LocalStorageService from "../../app/service/localStorageService";
import { mensagemError, mensagemSucesso } from "../../components/toastr";

class CadastroLancamento extends React.Component {

    state = {
        id: 0,
        descricao: '',
        mes: 0,
        ano: '',
        usuario: LocalStorageService.obterItem("_usuario"),
        valor: 0,
        tipo: '',
        status: '',
        operacaoNovo: true

    }

    constructor() {
        super()
        this.service = new LancamentoService();
    }

    componentDidMount() {
        const params = this.props.match.params;

        if (params.id) {
            this.service.buscarPorId(params.id).then(response => {
                this.setState({
                    id: response.data.id,
                    ano: response.data.ano,
                    descricao: response.data.descricao,
                    mes: response.data.mes,
                    valor: response.data.valor,
                    tipo: response.data.tipo,
                    usuario: response.data.usuario,
                    status: response.data.status,
                    operacaoNovo: false
                })
            }).catch(err => {
                mensagemError(err.response.data);
            });
        }
    }

    voltar = () => {
        this.props.history.push('/consulta-lancamentos');
    }

    salvar = () => {
        let lancamento = this.prepareLancamento();

        try {
            this.service.validar(lancamento);
            this.service.salvar(lancamento).then(response => {
                this.props.history.push('/consulta-lancamentos');
                mensagemSucesso("Lançamento cadastrado com sucesso.")
            }).catch(error => {
                console.log(error);
            });
        } catch (err) {
            const mensagens = err.mensagens;
            mensagens.forEach(msg => {
                mensagemError(msg);
            });
        }
    }

    atualizar = () => {
        let lancamento = this.prepareLancamento();
        try {
            this.service.validar(lancamento);
            this.service.atualizar(lancamento).then(response => {
                this.props.history.push('/consulta-lancamentos');
                mensagemSucesso("Lançamento atualizado com sucesso.")
            }).catch(error => {
                console.log(error);
            });
        } catch (err) {
            const mensagens = err.mensagens;
            mensagens.forEach(msg => {
                mensagemError(msg);
            });
        }
    }

    prepareLancamento = () => {
        return {
            id: this.state.id,
            descricao: this.state.descricao,
            mes: this.state.mes,
            ano: this.state.ano,
            usuario: this.state.usuario,
            valor: this.state.valor,
            tipo: this.state.tipo,
            status: this.state.operacaoNovo ? 'PENDENTE' : this.state.status
        };
    }

    render() {

        const meses = this.service.obterMeses();
        const status = this.service.obterStatus();
        const tipos = this.service.obterTipoDespesa();

        return (
            <div>
                <Card title="Cadastro lançamentos">
                    <div className="col-md-12">
                        <FormGroup
                            id="inputDescricao" Label="Descrição: *">
                            <input id="inputDescricao" type="text" className="form-control" onChange={e => this.setState({ descricao: e.target.value })} value={this.state.descricao} />
                        </FormGroup>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup
                                id="inputAno" Label="Ano: *">
                                <input id="inputAno" type="text" className="form-control" onChange={e => this.setState({ ano: e.target.value })} value={this.state.ano} />
                            </FormGroup>
                        </div>
                        <div className="col-md-6">
                            <FormGroup
                                id="inputMes" Label="Mês: *">
                                <SelectMenu id="inputMes" className="form-select" onChange={e => this.setState({ mes: e.target.value })}
                                    value={this.state.mes} lista={meses} />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <FormGroup
                                id="inputValor" Label="Valor: *">
                                <input id="inputValor" type="text" className="form-control" onChange={e => this.setState({ valor: e.target.value })} value={this.state.valor} />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup
                                id="inputTipo" Label="Tipo: *">
                                <SelectMenu id="inputTipo" className="form-select" onChange={e => this.setState({ tipo: e.target.value })}
                                    value={this.state.tipo} lista={tipos} />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup
                                id="inputStatus" Label="Status: *">
                                <SelectMenu id="inputStatus" className="form-select" onChange={e => this.setState({ status: e.target.value })}
                                    disabled={this.state.operacaoNovo}
                                    value={this.state.status} lista={status} />
                            </FormGroup>
                        </div>
                    </div>
                    {
                        this.state.operacaoNovo ?
                            <button className="btn btn-primary mt20" onClick={this.salvar}>Salvar <i className="pi pi-save"></i></button>
                            :
                            <button className="btn btn-primary mt20" onClick={this.atualizar}>Atualizar <i className="pi pi-refresh"></i></button>
                    }
                    <button className="btn btn-info mt20" onClick={this.voltar}>Voltar <i className="pi pi-times"></i></button>
                </Card>
            </div>
        )
    }
}
export default CadastroLancamento