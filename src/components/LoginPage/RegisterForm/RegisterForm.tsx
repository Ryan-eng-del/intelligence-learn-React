import React, { useState } from 'react'
import { Input, Button, message } from 'antd'
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  AuditOutlined,
  VerifiedOutlined,
  MailOutlined,
  BarcodeOutlined,
  ArrowLeftOutlined,
  CheckCircleOutlined,
  LoadingOutlined
} from '@ant-design/icons'
import { RegisterFormWrapper, RegisterTitle, ButtonWrapper } from './RegisterFormStyle'
import { InputStatus } from 'antd/lib/_util/statusUtils'

//对T内全部key的type设置为K
type SetObjectTypeTo<T,K> = { [P in keyof T] : K }

export const RegisterForm: React.FC<{ routeToLoginIn: ()=>void }> =
  ({  routeToLoginIn }) => {

  const EmailRegex = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
  const init = {
    userName:"",
    password:"",
    confirmPW:"",
    email:"",
    verification:""
  }
  const [comfirmIcon,setComfirmIcon] = useState(<CheckCircleOutlined />)
  const [inputStatus,setInputStatus] =
    useState<SetObjectTypeTo<typeof init,InputStatus>>({
      userName:"",
      password:"",
      confirmPW:"",
      email:"",
      verification:""
    })
  const defaultStatus = {...inputStatus};
  const [inputValue,setInputValue] = useState(init)

  const vertify = (): void => {
    const newStatus = {...inputStatus};
    if(inputValue.userName.length < 2 || inputStatus.userName.length > 10) {
      message.error("用户名长度必须在2-10之间");
      newStatus.userName = "error"
    } else if(inputValue.password.length < 8 || inputStatus.password.length > 16) {
      message.error("密码长度必须在8-16之间");
      newStatus.password = "error"
    } else if(inputValue.password != inputValue.confirmPW) {
      message.error("两次密码不一致");
      newStatus.confirmPW = "error"
    } else if(!EmailRegex.test(inputValue.email)) {
      message.error("非法邮箱格式");
      newStatus.email = "error"
    } else if(inputValue.verification != "") {
      message.error("验证码错误");
      newStatus.verification = "error"
    } else {
      setComfirmIcon(<LoadingOutlined />)
    }
    setInputStatus(newStatus)

    setTimeout(()=>{  // 2秒后重置状态
      setInputStatus(defaultStatus);
      setComfirmIcon(<CheckCircleOutlined />);
      message.warning("还没做好呢");
    },2000)
  }
  return (
    <RegisterFormWrapper>
      <RegisterTitle>
        <p className="title-login">
          Register
        </p>
      </RegisterTitle>
      <Input
        status={inputStatus.userName}
        value={inputValue.userName}
        onChange={({target})=>setInputValue({...inputValue,userName:target.value})}
        size="large"
        placeholder="用户名"
        prefix={<UserOutlined />}
        style={{ marginBottom: '20px' }}
      />
      <Input.Password
        status={inputStatus.password}
        value={inputValue.password}
        onChange={({target})=>setInputValue({...inputValue,password:target.value})}
        placeholder="请您输入密码"
        prefix={<AuditOutlined />}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        style={{ marginBottom: '5px' }}
      />
      <Input.Password
        status={inputStatus.confirmPW}
        value={inputValue.confirmPW}
        onChange={({target})=>setInputValue({...inputValue,confirmPW:target.value})}
        placeholder="请再次输入密码"
        prefix={<BarcodeOutlined />}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        style={{ marginBottom: '20px' }}
      />
      <Input
        status={inputStatus.email}
        value={inputValue.email}
        onChange={({target})=>setInputValue({...inputValue,email:target.value})}
        size="large"
        placeholder="邮箱"
        prefix={<MailOutlined />}
        style={{ marginBottom: '5px' }}
      />
     <Input
        status={inputStatus.verification}
        value={inputValue.verification}
        onChange={({target})=>setInputValue({...inputValue,verification:target.value})}
        size="large"
        placeholder="验证码"
        prefix={<VerifiedOutlined />}
      />
      <div className="forget-password">使用手机号验证</div>
      <ButtonWrapper>
        <Button
          type="primary"
          onClick={routeToLoginIn}
          icon={<ArrowLeftOutlined />}
        >
          返回登录
        </Button>
        <Button
          type="primary"
          onClick={vertify}
          icon={comfirmIcon}
        >注册</Button>
      </ButtonWrapper>
    </RegisterFormWrapper>
  )
}
