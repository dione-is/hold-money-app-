import React from "react";
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import ConsultaLancamento from "../views/lancamentos/consulta-lancamento";
import CadastroLancamento from "../views/lancamentos/cadastro-lancamento";
import { AuthConsumer } from "./provedorAutenticacao";

function RotaAutenticada({component: Component, isUsuarioAutenticado, ...props}){
    return(
        <Route {...props}  render={ (componentProps) => {
            if(isUsuarioAutenticado){
                return(
                    <Component {...componentProps}/>
                )
            }else{
                return(
                    <Redirect to={{pathname: '/login', state: {from: componentProps.location}}}/>
                )
            }
        }}/>
    )
}

function Rotas(props){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/novo-usuario" component={CadastroUsuario}></Route>
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home}></RotaAutenticada>
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" component={ConsultaLancamento}></RotaAutenticada>
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/novo-lancamento/:id?" component={CadastroLancamento}></RotaAutenticada>
            </Switch>
        </HashRouter>
    );
}
export default () => (
    <AuthConsumer>
        {
            (context) => (<Rotas isUsuarioAutenticado={context.isAutenticado} ></Rotas>)
        }
    </AuthConsumer>
);