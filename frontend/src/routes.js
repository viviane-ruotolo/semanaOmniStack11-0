import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/* 
* BrowserRouter: Precisa estar por volta de todas as rotas
* Route: a rota
* Switch: Garantir que apenas uma rota seja chamada por momento 

*/

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
 
export default function Routes(){
    return (
        //exact: o caminho tem que ser exatamente o informado no path
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component= {Logon} /> 
                <Route path="/register" component= {Register} />

                <Route path="/profile" component= {Profile} />
                <Route path="/incident/new" component= {NewIncident} /> 
            </Switch>  
        </BrowserRouter>
    )
}