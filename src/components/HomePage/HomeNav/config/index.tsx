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
    getItem(<Link to={'class/learn'}>我学习的课程</Link>, '1', <TagOutlined />),
    getItem(<Link to={'class/teach'}>我教授的课程</Link>, '2', <TagsOutlined />)
  ]),
  getItem('消息中心', '3', <BellOutlined />),
  getItem('我的考试', '4', <ContainerOutlined />),
  getItem('个人中心', '5', <UserOutlined />)
]
export default items
