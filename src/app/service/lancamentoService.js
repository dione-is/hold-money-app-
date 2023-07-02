import ApiService from '../apiservice';
import ErroValidacao from '../exception/erroValidacao';

export default class LancamentoService extends ApiService {
    constructor() {
        super('/api/lancamento/');
    }

    consultar(lancamentoFiltro) {
        let params = `lancamentos?ano=${lancamentoFiltro.ano}`;

        if (lancamentoFiltro.mes) {
            params += `&mes=${lancamentoFiltro.mes}`;
        }

        if (lancamentoFiltro.tipo) {
            params += `&tipo=${lancamentoFiltro.tipo}`;
        }

        if (lancamentoFiltro.status) {
            params += `&status=${lancamentoFiltro.status}`;
        }

        if(lancamentoFiltro.usuario) {
            params += `&usuario=${lancamentoFiltro.usuario}`
        }

        return this.get(params);
    }

    atualizar(lancamento){
        return this.put('', lancamento);
    }
    buscarPorId(id){
        return this.get(`${id}`)
    }

    salvar(lancamento){
        return this.post('', lancamento);
    }

    deletar(id){
        return this.delete(`${id}`)
    }

    obterTipoDespesa(){
        return [
            { label: 'Selecione', value: '' },
            { label: 'Despesa', value: 'DESPESA' },
            { label: 'Receita', value: 'RECEITA' },
        ];
    }

    obterStatus(){
        return[
            { label: 'Selecione', value: '' },
            { label: 'Pendente', value: 'PENDENTE' },
            { label: 'Cancelado', value: 'CANCELADO' },
            { label: 'Efetivado', value: 'EFETIVADO' },
        ];
    }

    validar(lancamento){
        const erros = [];
        if(!lancamento.ano){
            erros.push("O campo Ano deve ser informado.")
        }
        if(!lancamento.descricao){
            erros.push("O campo Descrição deve ser informado.")
        }
        if(!lancamento.mes){
            erros.push("O campo Mês deve ser informado.")
        }
        if(!lancamento.valor){
            erros.push("O campo Valor deve ser informado.")
        }
        if(!lancamento.tipo){
            erros.push("O campo Tipo deve ser informado.")
        }
        if(!lancamento.status){
            erros.push("O campo Status deve ser informado.")
        }

        if(erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

    obterMeses(){
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Janeiro', value: 1 },
            { label: 'Fevereiro', value: 2 },
            { label: 'Março', value: 3 },
            { label: 'Abril', value: 4 },
            { label: 'Maio', value: 5 },
            { label: 'Junho', value: 6 },
            { label: 'Julho', value: 7 },
            { label: 'Agosto', value: 8 },
            { label: 'Setembro', value: 9 },
            { label: 'Outubro', value: 10 },
            { label: 'Novembro', value: 11 },
            { label: 'Dezembro', value: 12 },
        ];
    }
}