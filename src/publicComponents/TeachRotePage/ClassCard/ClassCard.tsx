import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardBodyWrapper, CardHeadWrapper, CardWrapper } from './ClassCardStyle'
interface ClassCard {
  id: string
  tname: string
  cname: string
  iurl: string
}
export const ClassCard: React.FC<ClassCard> = (props) => {
  const { id, tname, cname, iurl } = props
  const navigate = useNavigate()
  return (
    <>
      <CardWrapper>
        <CardHeadWrapper>
          <img src={iurl || require('assets/img/class.jpg')} alt="课程图片" />
        </CardHeadWrapper>
        <CardBodyWrapper>
          <div className="cname">{cname}</div>
          <div className="tname">{tname}</div>
          <Button
            type={'primary'}
            onClick={() =>
              navigate('/classinfo', { state: { tname, cname, iurl, id } })
            }
          >
            进入课程
          </Button>
        </CardBodyWrapper>
      </CardWrapper>
    </>
  )
}
