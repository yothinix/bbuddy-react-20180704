import React from 'react'
import {Route, Switch, Redirect} from 'react-router'
import Authentication from './containers/Authentication'
import SignInPage from './containers/SignInPage'
import Page from './containers/Page'
import DashboardPage from './containers/DashboardPage'
import AccountsPage from './containers/AccountsPage'
import AddAccountPage from './containers/AddAccountPage'

const layout = Component => () => (
  <Page>
    <Authentication>
      <Component/>
    </Authentication>
  </Page>
)

export default () => {
  return (
    <Switch>
      <Route exact path="/signin" component={SignInPage}/>
      <Route exact path="/" component={layout(DashboardPage)}/>
      <Route exact path="/accounts" component={layout(AccountsPage)}/>
      <Route exact path="/accounts/add" component={layout(AddAccountPage)}/>
    </Switch>
  )
}
