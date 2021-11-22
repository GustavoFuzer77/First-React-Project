import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Item from '../pages/Item';
import Itens from '../pages/Itens';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Itens} isClosed={false} />
      <MyRoute exact path="/item/:id/edit" component={Item} isClosed />
      <MyRoute exact path="/item/" component={Itens} isClosed />
      <MyRoute exact path="/register/" component={Register} isClosed/>
      <MyRoute exact path="/login/" component={Login} isClosed={false}/>
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
