import React from "react";
import NavBarItem from "./navbar-item";
import { AuthConsumer } from "../main/provedorAutenticacao";


function NavBar(props) {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/home" className="navbar-brand">Minhas Finanças</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavBarItem href="#/home" render={props.isUsuarioAutenticado} label="Inicio"/>
                        <NavBarItem href='#/consulta-lancamentos' render={props.isUsuarioAutenticado} label='Lancamentos'/>
                        <NavBarItem href='#/login' render={props.isUsuarioAutenticado} onClick={props.deslogar} label='Sair' />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default () => (
    <AuthConsumer>
        {
            (context) => (
                <NavBar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao}></NavBar>
            )
        }
    </AuthConsumer>
);