/* global document */
import { Modal, message, Row, Col, Divider,Upload } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import styles from './layer.less'


const {
  info, success, error, warning, confirm,
} = Modal

const layer = {
  prefixCls: 'ant-layer',
  index: 1,
  info,
  success,
  error,
  warning,
  confirm,
  state: {
    fileList: [],
  },
}

layer.close = index => new Promise((resolve, reject) => {
  const { prefixCls } = layer
  let div = document.getElementById(`${prefixCls}-reference-${index}`)
  if (index === undefined) {
    const references = document.querySelectorAll(`.${prefixCls}-reference`)
    div = references[references.length - 1]
  }
  if (!div) {
    message.error('关闭失败，未找到Dom')
    return
  }
  const unmountResult = ReactDOM.unmountComponentAtNode(div)
  if (unmountResult && div.parentNode) {
    div.parentNode.removeChild(div)
    resolve(index)
  } else {
    reject(index)
  }
})

layer.closeAll = () => {
  const { prefixCls } = layer
  const references = document.querySelectorAll(`.${prefixCls}-reference`)
  let i = 0
  while (i < references.length) {
    layer.close()
    i += 1
  }
}

layer.handleChange  = ({ fileList }) => this.setState({ fileList })

layer.open = (config) => {
  const props = Object.assign({}, config)
  const { ...modalProps } = props
  const { className, wrapClassName = '', verticalCenter = true } = modalProps
  const { prefixCls } = layer
  layer.index += 1
  const { index } = layer
  let div = document.createElement('div')
  div.id = `${prefixCls}-reference-${index}`
  div.className = `${prefixCls}-reference`
  document.body.appendChild(div)

  ReactDOM.render(<Modal
    visible
    transitionName="zoom"
    maskTransitionName="fade"
    onCancel={() => {
        layer.close(index)
      }}
    onOk={() => {
        layer.close(index)
      }}
    {...modalProps}
    wrapClassName={classnames({ [styles.verticalCenter]: verticalCenter, [wrapClassName]: true })}
    className={classnames(prefixCls, className, [`${prefixCls}-${index}`])}
  >
    <div className={`${prefixCls}-body-wrapper`} style={{ maxHeight: document.body.clientHeight - 256 }}>
      <Row type="flex" justify="space-around" className={styles.formPanel}>
          <Col span={24}>
            <Row className={styles.label} style={{ fontSize: '20px', marginBottom: '30px'}}>
              <Col span={10}>
                Add a Reservation
              </Col>
            </Row>
            <Divider />

            <Row className={styles.label} style={{ fontSize: '14px'}}>
                Visitor Name
            </Row>
            <Row className={styles.content}>
              <input type="text" name="usrname" className={styles.input} value="Alexander Pope"/>
            </Row>
            <Divider />

            <Row className={styles.label}>
              <Col span={9}>
                Gender
              </Col>
              <Col span={12}>
                Location
              </Col>
              <Col span={3}>
                Age
              </Col>
            </Row>

            <Row className={styles.content} type="flex" justify="space-around">
              <Col span={9} style={{paddingRight: '15px'}}>
                <input type="text" name="usrname" className={styles.input} value="Male"/>
                <Divider />
              </Col>
              <Col span={12} style={{paddingRight: '15px'}}>
                <input type="text" name="usrname" className={styles.input} value="Shanghai"/>
                <Divider />
              </Col>
              <Col span={3} style={{paddingRight: '15px'}}>
                <input type="text" name="usrname" className={styles.input} value="21"/>
                <Divider />
              </Col>
            </Row>

            <Row className={styles.label} style={{ fontSize: '14px'}}>
              Destination
            </Row>
            <Row className={styles.content}>
              <input type="text" name="usrname" className={styles.input} value="Jones Lang LaSalle, Inc."/>
            </Row>
            <Divider />

            <Row className={styles.label} style={{ fontSize: '14px'}}>
              Email
            </Row>
            <Row className={styles.content}>
              <input type="email" name="usrname" className={styles.input} value="Angelhack@angelhack.com"/>
            </Row>
            <Divider />

            <Row className={styles.label} style={{ fontSize: '14px'}}>
              Phone Number
            </Row>
            <Row className={styles.content}>
              <input type="text" name="usrname" className={styles.input} value="+86 130 0000 0000"/>
            </Row>
            <Divider />

            <Row className={styles.label} style={{ fontSize: '14px'}}>
              Upload Photo
            </Row>
            <Upload
              listType="picture-card"
              showUploadList={false}
              action=""
              onChange={layer.handleChange}
            >

              <svg width="120px" height="100px" viewBox="0 0 189 189" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                      <path d="M94.509463,0 C42.3024575,0 0,42.2982219 0,94.5 C0,146.701778 42.3024575,189 94.490537,189 C146.678847,189 189,146.682854 189,94.5 C189,42.317146 146.697542,0 94.509463,0" id="path-1"></path>
                  </defs>
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="1.Default-Copy-5" transform="translate(-452.000000, -1290.000000)">
                          <g id="待分配客户-copy" transform="translate(412.000000, 369.000000)">
                              <g id="avator-copy-2" transform="translate(40.000000, 921.000000)">
                                  <mask id="mask-2" fill="white">
                                      <use href="#path-1"></use>
                                  </mask>
                                  <use id="Fill-1" fill="#272A34" href="#path-1"></use>
                                  <polygon id="Shape" fill="#5FA1FC" mask="url(#mask-2)" points="119 98 98 98 98 119 91 119 91 98 70 98 70 91 91 91 91 70 98 70 98 91 119 91"></polygon>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
            </Upload>
          </Col>
      </Row>
    </div>
  </Modal>, div)

  return index
}

export default layer
