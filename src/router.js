import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Catalog } from './pages/Catalog/'
import { Cart } from './pages/Cart/'

export const useRoutes = () => (
    <Switch>
      <Route path="/catalog" exact>
        <Catalog/>
      </Route>
      <Route path="/cart" exact>
        <Cart/>
      </Route>
      <Redirect to="/catalog"/>
    </Switch>
)
