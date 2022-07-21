import React from 'react'
import { Col, Row } from 'antd'
import { ChapterInfoWrapper } from './ChapterInfoStyle'
import { ChapterInfoNav, ChapterInfoSwitchMode } from 'components/ChapterInfoPage'

export const ChapterInfo: React.FC = () => {
  return (
    <>
    <ChapterInfoWrapper>
      <Row gutter={100}>
        <Col span={5} style={{ paddingLeft: '133px' }}>
          <ChapterInfoNav /> {/* 左边导航 */}
        </Col>
        <Col span={19}>
          <ChapterInfoSwitchMode /> {/* 右边视窗 */}
        </Col>
      </Row>
    </ChapterInfoWrapper>
  </>
  )
}
