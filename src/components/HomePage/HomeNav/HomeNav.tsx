import React from 'react'
import {
  HomeInfoWrapper,
  HomeMenuWrapper,
  HomeNavWrapper
} from './HomeNavStyle'
import items from './config/index'
import { Menu, Avatar } from 'antd'

export const HomeNav = () => {
  return (
    <HomeNavWrapper>
      <HomeInfoWrapper>
        <Avatar src={require('assets/img/pyy.png')} size={120}></Avatar>
        <div className="username">彭于晏</div>
      </HomeInfoWrapper>
      <HomeMenuWrapper>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
          items={items}
        />
      </HomeMenuWrapper>
    </HomeNavWrapper>
  )
}
