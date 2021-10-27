import { IUser } from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH",
    SER_ERROR = "SER_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActionEnum.SER_ERROR;
    payload: string;
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type AuthAction = SetAuthAction | SetErrorAction | SetIsLoadingAction | SetUserAction