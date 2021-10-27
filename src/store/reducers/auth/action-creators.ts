import { AppDispatch } from "../..";
import UserService from "../../../api/UserSrvice";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload }),
    setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SER_ERROR, payload }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async() => {
                const response = await UserService.getUsers()
                const mockUser = response.data.find(user => user.username === username && user.password === password)
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', username);
                    dispatch(AuthActionCreators.setUser(mockUser));
                    dispatch(AuthActionCreators.setAuth(true));
                } else {
                    dispatch(AuthActionCreators.setError('Wrong password or login'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            },1000)
        } catch (e) {
            dispatch(AuthActionCreators.setError('Oops! something went wrong'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setAuth(false))
    }
}