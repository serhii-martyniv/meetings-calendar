import { Row, Layout, Card } from 'antd'
import React, { FC } from 'react'
import { LoginFrom } from '../components/LoginFrom'

export const Login: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginFrom />
                </Card>
            </Row>
        </Layout>
    )
}
