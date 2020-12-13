import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld'
import Login from './components/Login/Login'
import Register from './components/Login/Register'

export enum AppRoutesMap {
	Landing = '/',
	Login = '/login',
	Register = '/register',
	MyKui = '/my-kui'
}

const AppRoutes = () => {

    return (
        <Switch>
            <Route exact path={AppRoutesMap.Landing} component={HelloWorld} />
            <Route exact path={AppRoutesMap.Login} component={Login} />
            <Route exact path={AppRoutesMap.Register} component={Register} />
        </Switch>
    )
}

export default AppRoutes