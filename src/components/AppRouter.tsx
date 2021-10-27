import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNmaes } from '../routes';

export const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exect}
                        component={route.component}
                        key={route.path} />
                )}
                <Redirect to={RouteNmaes.EVENT}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exect}
                        component={route.component}
                        key={route.path} />
                )}
                <Redirect to={RouteNmaes.LOGIN}/>
            </Switch>
    )
}
