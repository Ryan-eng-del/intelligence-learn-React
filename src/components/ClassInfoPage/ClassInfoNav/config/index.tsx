import React from 'react'
import {
  FolderOutlined,
  FundProjectionScreenOutlined,
  BellOutlined,
  NotificationOutlined
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
  getItem(<Link to={'chapter'}>课程章节</Link>, 'Chapter', <FundProjectionScreenOutlined />,),
  getItem('作业考试', 'Homework', <BellOutlined />),
  getItem(<Link to={'resource'}>课程资料</Link>, 'Resource', <FolderOutlined />),
  getItem('讨论区域', 'Discuss', <NotificationOutlined />)
]
export default items
