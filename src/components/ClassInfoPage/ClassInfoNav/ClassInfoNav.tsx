import React from 'react'
import {
  ClassInfoWrapper,
  ClassInfoMenuWrapper,
  ClassInfoNavWrapper
} from './ClassInfoNavStyle'
import items from './config/index'
import { Menu, Avatar } from 'antd'


export const ClassInfoNav = () => {
  return (
  <ClassInfoNavWrapper>
    <ClassInfoWrapper>
      <Avatar src={require('assets/img/class.jpg')} size={120}></Avatar>
      <div className="username">离散数学</div>
    </ClassInfoWrapper>
    <ClassInfoMenuWrapper>
      <Menu
        defaultSelectedKeys={['Chapter']}
        defaultOpenKeys={['Chapter']}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={items}
      />
    </ClassInfoMenuWrapper>
  </ClassInfoNavWrapper>
  )
}
