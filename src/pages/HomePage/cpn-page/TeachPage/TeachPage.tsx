import React, { useReducer } from 'react'
import {
  TeachPageWrapper,
  TeachClassWrapper,
  TeachHeaderWrapper,
  TeachRoutePageWrapper,
  TeachTitleWrapper,
  ModalContextWrapper,
  UploadImageWrapper
} from './TeachPageStyle'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Col, Row, Upload } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { Button, Modal, Input } from 'antd'
import { getBase64, beforeUpload } from './config/util'
import { TeachRoutePageReducer, initialState } from './config/reducer'
import { ClassCard } from 'publicComponents/TeachRotePage'

export const TeachPage = () => {
  const [state, dispatch] = useReducer(TeachRoutePageReducer, initialState)
  const {
    uploadLoading,
    modalVisible,
    imgUrl,
    className,
    classTeacher,
    classList
  } = state
  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'uploading') {
      dispatch({ type: 'setUploadLoading', payload: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        dispatch({ type: 'setUploadLoading', payload: false })
        dispatch({ type: 'setImgUrl', payload: url })
      })
    }
  }

  const uploadButton = (
    <div>
      {uploadLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  const showModal = () => {
    dispatch({ type: 'setModalVisible', payload: true })
  }

  const handleOk = () => {
    dispatch({
      type: 'setClasList',
      payload: {
        iurl: imgUrl,
        cname: className,
        tname: classTeacher,
        id: classList.length + ''
      }
    })
    dispatch({ type: 'setModalVisible', payload: false })
    dispatch({ type: 'setClassName', payload: '' })
    dispatch({ type: 'setClassTeacher', payload: '' })
    dispatch({ type: 'setImgUrl', payload: '' })

    console.log(classList)
  }

  const handleCancel = () => {
    dispatch({ type: 'setModalVisible', payload: false })
  }

  return (
    <TeachRoutePageWrapper>
      <>
        <Modal
          title="新建课程"
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="确认"
          style={{ top: '180px', backgroundColor: '#0a192f' }}
          cancelText="取消"
        >
          <ModalContextWrapper>
            <label className="classname-label">请输入课程名称</label>
            <Input
              placeholder="课程名称"
              id="classname"
              value={className}
              style={{ margin: '3px 0 12px 0' }}
              onChange={(e) => {
                dispatch({ type: 'setClassName', payload: e.target.value })
              }}
            />
            <label className="classname-label">请输入授课教师</label>
            <Input
              placeholder="课程老师"
              id="classname"
              value={classTeacher}
              style={{ margin: '3px 0 12px 0' }}
              onChange={(e) => {
                dispatch({ type: 'setClassTeacher', payload: e.target.value })
              }}
            />
            <div className="classname-label" style={{ marginBottom: '3px' }}>
              请上传课程图片
            </div>
            <UploadImageWrapper>
              <img src={require('assets/img/class.jpg')} alt="默认课程图片" />
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imgUrl ? (
                  <img src={imgUrl} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </UploadImageWrapper>
          </ModalContextWrapper>
        </Modal>
      </>
      <TeachPageWrapper>
        <TeachHeaderWrapper>
          <TeachTitleWrapper>
            <div className="teach-page-title">我教的课程</div>
            <Button type="primary" onClick={showModal}>
              新建课程
            </Button>
          </TeachTitleWrapper>
        </TeachHeaderWrapper>
        <TeachClassWrapper>
          <Row>
            {classList
              .filter((i, index) => index !== 0)
              .map((item) => {
                console.log(item, 'item')
                return (
                  <Col span={6} key={item.id}>
                    <ClassCard
                      id={item.id}
                      cname={item.cname}
                      tname={item.tname}
                      iurl={item.iurl}
                    ></ClassCard>
                  </Col>
                )
              })}
          </Row>
        </TeachClassWrapper>
      </TeachPageWrapper>
    </TeachRoutePageWrapper>
  )
}
