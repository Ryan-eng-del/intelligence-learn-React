import React from 'react'
import {
  ContainerOutlined,
  BarChartOutlined,
  BellOutlined,
  TagOutlined,
  TagsOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Link } from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('课程中心', 'sub1', <BarChartOutlined />, [
    getItem(<Link to={'learn'}>我学习的课程</Link>, '1', <TagOutlined />),
    getItem(<Link to={'teach'}>我教授的课程</Link>, '2', <TagsOutlined />)
  ]),
  getItem(<Link to={'class/inbox'}>消息中心</Link>, '3', <BellOutlined />),
  getItem(<Link to={'class/exam'}>我的考试</Link>, '4', <ContainerOutlined />),
  getItem(<Link to={'class/profile'}>个人中心</Link>, '5', <UserOutlined />)
]
export default items
