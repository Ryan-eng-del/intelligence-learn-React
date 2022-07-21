import React from 'react'
import { Col, Row } from 'antd'
import { HomePageWrapper } from './HomePageStyle'
import { useNavigate } from 'react-router-dom'
import { useMount } from 'hook/useMount'
import { HomeNav, HomeRoutePage } from 'components/HomePage'

export const HomePage = () => {
  const navigate = useNavigate()
  useMount(() => navigate('/home/class/learn'))
  return (
    <HomePageWrapper>
      <Row gutter={100}>
        <Col span={5} style={{ paddingLeft: '50px' }}>
          <HomeNav />
        </Col>
        <Col span={19}>
          <HomeRoutePage />
        </Col>
      </Row>
    </HomePageWrapper>
  )
}
