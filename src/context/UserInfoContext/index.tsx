import { createContext, useCallback, useContext, useState } from 'react'
import { useGetUserInfo } from '../../server/fetchLogin'
import { useNavigate } from 'react-router-dom'
import { GlobalMessage } from '../../publicComponents/GlobalMessage'

export interface IUserInfo {
  name: string
  sex: number
  school: string
  email: string
  mobile: string
  personalSignature: string
  headPortrait: null
}

interface IUserInfoContext {
  getUserInfo: any
  userInfo: IUserInfo | null
}

const UserInfoContext = createContext<IUserInfoContext>({
  userInfo: null,
  getUserInfo: null
})

export const UserInfoContextProvider = (props: any) => {
  const [userInfo, setUserInfo] = useState(null)
  const { mutateAsync } = useGetUserInfo()
  const navigate = useNavigate()
  const getUserInfo = useCallback(async () => {
    try {
      const data = await mutateAsync()
      setUserInfo(data)
    } catch (e) {
      GlobalMessage('info', '用户身份 过期请重新登录！')
      navigate('/login')
    }
  }, [])
  return <UserInfoContext.Provider value={{ getUserInfo, userInfo }}>{props.children}</UserInfoContext.Provider>
}

export const useUserInfo = () => {
  const { userInfo, getUserInfo } = useContext(UserInfoContext)

  return { userInfo, getUserInfo }
}
