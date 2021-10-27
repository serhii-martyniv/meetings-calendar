import React from 'react'
import { Layout, Menu, Row } from 'antd'
import { useHistory } from 'react-router'
import { RouteNmaes } from '../routes'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';

export const Navbar = () => {
    const router = useHistory()
    const {logout} = useActions()
    const {isAuth, user} = useTypedSelector(state => state.authReducer)
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?
                    <>
                        <div style={{ color: "white" }}>
                            {user.username}
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                key={1}
                                onClick={logout}
                            >
                                Logout
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            key={1}
                            onClick={() => router.push(RouteNmaes.LOGIN)}
                        >
                            Login
                        </Menu.Item>
                    </Menu>
                }
            </Row>

        </Layout.Header>
    )
}
