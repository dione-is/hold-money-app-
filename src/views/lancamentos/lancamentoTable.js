import React from "react";
import currencyFormatter from 'currency-formatter';


export default props => {

    const rows = props.lancamentos.map(lancamento => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{currencyFormatter.format(lancamento.valor, { locale: 'pt-BR' })}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    <button className="btn btn-primary" type="button" onClick={e => props.editar(lancamento.id)}><i className="pi pi-pencil"></i></button>
                    <button className="btn btn-danger" type="button" onClick={e => props.delete(lancamento)}><i className="pi pi-trash"></i></button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descricao</th>
                    <th scope="col">value</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Mes</th>
                    <th scope="col">Situacao</th>
                    <th scope="col">Acoes</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}