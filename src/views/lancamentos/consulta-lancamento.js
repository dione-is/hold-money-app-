import React from "react";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import LancamentoTable from "./lancamentoTable";
import LancamentoService from "../../app/service/lancamentoService";
import LocalStorageService from "../../app/service/localStorageService";
import * as messages from "../../components/toastr";
import { Dialog } from 'primereact/dialog';


class ConsultaLancamento extends React.Component {

    state = {
        ano: '',
        mes: '',
        tipo: '',
        lancamentos: [],
        lancamentoDeletar: {},
        visibleDialogDelete: false
    }

    constructor() {
        super();
        this.service = new LancamentoService();
    }

    buscar = () => {

        if (!this.state.ano) {
            messages.mensagemError("Campo ano é Obrigatorio !")
            return false;
        }

        let usuarioLogado = LocalStorageService.obterItem('_usuario');
        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            usuario: usuarioLogado.id
        };

        this.service.consultar(lancamentoFiltro).then(response => {
            if(response.data.length < 1){
                messages.mensagemAlerta("Nenhum Evento Encontrado.");
            }
            this.setState({ lancamentos: response.data })
        }).catch(err => {
            messages.mensagemError(err);
        })
    }

    editar = (id) => {
        this.props.history.push(`/novo-lancamento/${id}`);
    }

    delete = () => {
        const lancamento = this.state.lancamentoDeletar;
        this.service.deletar(lancamento.id).then(response => {
            const lancamentos = this.state.lancamentos.splice(this.state.lancamentos.indexOf(lancamento), 1);
            this.setState({ lancamentos, visibleDialogDelete: false });
            messages.mensagemSucesso("Lancamento excluido.");
        }).catch(err => {
            messages.mensagemError(err);
        });
    }

    abrirDialogDelete = (lancamento) => {
        this.setState({ visibleDialogDelete: true, lancamentoDeletar: lancamento });
    }

    fecharDialogDelete = () => {
        this.setState({ visibleDialogDelete: false });
    }

    novoLancamento = () => {
        this.props.history.push("/novo-lancamento");
    }

    render() {
        const meses = this.service.obterMeses();

        const tiposLancamentos = this.service.obterTipoDespesa();

        return (
            <Card title="Consulta Lancamentos">
                <div className="row" >
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" Label="Ano: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputAno"
                                    value={this.state.ano}
                                    onChange={e => this.setState({ ano: e.target.value })}
                                    placeholder="Digite o Ano" />
                            </FormGroup>
                            <FormGroup htmlFor="inputMes" Label="Mes: ">
                                <SelectMenu id="inputMes" className="form-select" onChange={e => this.setState({ mes: e.target.value })}
                                    value={this.state.mes} lista={meses} />
                            </FormGroup>
                            <FormGroup htmlFor="inputTipo" Label="Tipo Lancamento: ">
                                <SelectMenu onChange={e => this.setState({ tipo: e.target.value })}
                                    id="inputTipo" className="form-select" value={this.state.tipo} lista={tiposLancamentos} />
                            </FormGroup>

                            <button type="button" className="btn btn-primary mt20" onClick={this.buscar}>Buscar <i className="pi pi-search"></i></button>
                            <button type="button" className="btn btn-info mt20" onClick={this.novoLancamento}>Cadastrar <i className="pi pi-save"></i></button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentoTable lancamentos={this.state.lancamentos} delete={this.abrirDialogDelete} editar={this.editar} />
                        </div>
                    </div>
                </div>
                <div>
                    <Dialog header="Excluir lancamento" visible={this.state.visibleDialogDelete} style={{ width: '50vw' }}
                        onHide={() => this.setState({ visibleDialogDelete: false })}>
                        <p className="m-0 ">
                            Tem certeza que deseja excluir esse Lancamento ?
                        </p>
                        <button className="btn btn-primary" onClick={this.delete}>Delete</button>
                        <button className="btn btn-info" onClick={this.fecharDialogDelete}>cancelar</button>
                    </Dialog>
                </div>
            </Card>
        )
    }
}
export default ConsultaLancamento;