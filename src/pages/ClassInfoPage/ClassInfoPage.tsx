import React from 'react'
import { Col, Row } from 'antd'
import { ClassInfoPageWrapper } from './ClassInfoPageStyle'

import { ClassInfoNav, ClassInfoRoutePage } from 'components/ClassInfoPage'


export const ClassInfoPage = () => {
  return (
    <>
      <ClassInfoPageWrapper>
        <Row gutter={100}>
          <Col span={5} style={{ paddingLeft: '133px' }}>
            <ClassInfoNav /> {/* 左边导航 */}
          </Col>
          <Col span={19}>
            <ClassInfoRoutePage /> {/* 右边视窗 */}
          </Col>
        </Row>
      </ClassInfoPageWrapper>
    </>
  )
}
