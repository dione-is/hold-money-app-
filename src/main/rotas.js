import React from "react";
import {Route, Switch, HashRouter} from 'react-router-dom';
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/novo-usuario" component={CadastroUsuario}></Route>
                <Route path="/home" component={Home}></Route>
            </Switch>
        </HashRouter>
    );
}
export default Rotas;