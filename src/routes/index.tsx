import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Route from './Route';
import Home from '../pages/Home';
import Solicitacao from '../pages/PortalDoCliente/Solicitacao';
import Cartoes from '../pages/PortalDoCliente/Cartoes';
import Dependentes from '../pages/PortalDoCliente/Dependentes';
import Mensagens from '../pages/PortalDoCliente/Mensagens';
import MinhaConta from '../pages/PortalDoCliente/MinhaConta';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/portal" exact component={Solicitacao} />
      <Route path="/portal/cartoes"  component={Cartoes} />
      <Route path="/portal/minha-conta"  component={MinhaConta} />
      <Route path="/portal/mensagens"  component={Mensagens} />
      <Route path="/portal/dependentes"  component={Dependentes} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
