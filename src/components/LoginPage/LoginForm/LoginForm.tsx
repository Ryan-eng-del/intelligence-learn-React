import React from 'react'
import { Input, Button } from 'antd'
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  CompassOutlined
} from '@ant-design/icons'
import { LoginFormWrapper, LoginTitle, ButtonWrapper } from './LoginFormStyle'
import { useNavigate } from 'react-router-dom'
export const LoginForm = () => {
  const navigate = useNavigate()
  return (
    <LoginFormWrapper>
      <LoginTitle>
        <p>Login In</p>
      </LoginTitle>
      <Input
        size="large"
        placeholder="请您输入用户名"
        prefix={<UserOutlined />}
        style={{ marginBottom: '20px' }}
      />
      <Input.Password
        placeholder="请您输入密码"
        prefix={<CompassOutlined />}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <div className="forget-password">忘记密码</div>
      <ButtonWrapper>
        <Button type="primary" onClick={() => navigate('/home')}>
          登录
        </Button>
        <Button type="primary">注册</Button>
      </ButtonWrapper>
    </LoginFormWrapper>
  )
}
