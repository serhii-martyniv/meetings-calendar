import { Event } from "../pages/Event"
import { Login } from "../pages/Login"

export interface IRouter {
    path: string;
    component: React.ComponentType;
    exect?: boolean
}

export enum RouteNmaes {
    LOGIN = '/meetings-calendar/login',
    EVENT = '/meetings-calendar/'
}

export const publicRoutes: IRouter[] = [
    {path: RouteNmaes.LOGIN, component: Login, exect: true}
]
export const privateRoutes: IRouter[] = [
    {path: RouteNmaes.EVENT, component: Event, exect: true}
]