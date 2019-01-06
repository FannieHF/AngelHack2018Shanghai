import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Divider } from 'antd'
import styles from './index.less'
import avatar from '../../images/admin_photo.png'

class UserCard extends Component {

  render () {
    
    const { person, alert } = this.props
    return (
        <Row type="flex" justify="space-around">
          <Col span={9} className={styles.panel}>
            <Row className={styles.label}>
              <Col span={18} style={{ fontSize: '14px'}}>
                Recent Visitor
              </Col>
              <Col span={3} className={styles.labelIcon}>
                <svg width="15px" height="15px" viewBox="0 0 30 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Desktop-HD-Copy" transform="translate(-461.000000, -226.000000)" fill="#fff">
                          <g id="ic_email" transform="translate(458.000000, 220.000000)">
                              <g id="Icon-24px">
                                  <path d="M30,6 L6,6 C4.35,6 3.015,7.35 3.015,9 L3,27 C3,28.65 4.35,30 6,30 L30,30 C31.65,30 33,28.65 33,27 L33,9 C33,7.35 31.65,6 30,6 L30,6 Z M30,12 L18,19.5 L6,12 L6,9 L18,16.5 L30,9 L30,12 L30,12 Z" id="Shape"></path>
                              </g>
                          </g>
                      </g>
                  </g>
                </svg>
              </Col>
              <Col span={3} className={styles.labelIcon}>
                <svg width="15px" height="15px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Desktop-HD-Copy" transform="translate(-528.000000, -224.000000)" fill="#fff">
                            <g id="ic_phone_in_talk" transform="translate(524.000000, 220.000000)">
                                <g id="Icon-24px">
                                    <path d="M30,23.25 C28.125,23.25 26.325,22.95 24.645,22.395 C24.12,22.23 23.535,22.35 23.115,22.755 L19.815,26.055 C15.57,23.895 12.09,20.43 9.93,16.17 L13.23,12.855 C13.65,12.465 13.77,11.88 13.605,11.355 C13.05,9.675 12.75,7.875 12.75,6 C12.75,5.175 12.075,4.5 11.25,4.5 L6,4.5 C5.175,4.5 4.5,5.175 4.5,6 C4.5,20.085 15.915,31.5 30,31.5 C30.825,31.5 31.5,30.825 31.5,30 L31.5,24.75 C31.5,23.925 30.825,23.25 30,23.25 L30,23.25 Z M28.5,18 L31.5,18 C31.5,10.545 25.455,4.5 18,4.5 L18,7.5 C23.805,7.5 28.5,12.195 28.5,18 L28.5,18 Z M22.5,18 L25.5,18 C25.5,13.86 22.14,10.5 18,10.5 L18,13.5 C20.49,13.5 22.5,15.51 22.5,18 L22.5,18 Z" id="Shape"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
              </Col>
            </Row>
            <Row className={styles.content}>
                {person.name}
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

            <Row className={styles.content}>
              <Col span={9}>
                {person.gender}
              </Col>
              <Col span={12}>
                {person.location}
              </Col>
              <Col span={3}>
                {person.age}
              </Col>
            </Row>
            <Divider />

            <Row className={styles.label}>
              <Col>
                Destination
              </Col>
            </Row>

            <Row className={styles.content}>
              <Col>
              {person.destination}
              </Col>
            </Row>
            <Divider />

            <Row className={styles.label}>
              <Col span={12}>              
                Uploaded Photo
              </Col>
              <Col span={12}>
                Realtime Capture
              </Col>
            </Row>

            <Row className={styles.content}>
              <Col span={12}>              
                <img src={avatar} alt="uploaded" className={styles.captureImage}/>
              </Col>
              <Col span={12}>
                <img src={avatar} alt="realtime" className={styles.captureImage}/>
              </Col>
            </Row>

          </Col>
          <Col span={13} className={styles.panel}>
            <Row className={styles.label} style={{ fontSize: '14px', paddingBottom: '10px'}}>
              <Col span={22} >
                Realtime Monitor
              </Col>
              <Col span={2} >
                <svg width="22px" height="22px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Desktop-HD-Copy" transform="translate(-1325.000000, -221.000000)" fill="#5FA1FC">
                          <g id="Group-3" transform="translate(640.000000, 180.000000)">
                              <g id="ic_gps_fixed" transform="translate(684.000000, 40.000000)">
                                  <g id="Icon-24px">
                                      <path d="M18,12 C14.685,12 12,14.685 12,18 C12,21.315 14.685,24 18,24 C21.315,24 24,21.315 24,18 C24,14.685 21.315,12 18,12 L18,12 Z M31.41,16.5 C30.72,10.245 25.755,5.28 19.5,4.59 L19.5,1.5 L16.5,1.5 L16.5,4.59 C10.245,5.28 5.28,10.245 4.59,16.5 L1.5,16.5 L1.5,19.5 L4.59,19.5 C5.28,25.755 10.245,30.72 16.5,31.41 L16.5,34.5 L19.5,34.5 L19.5,31.41 C25.755,30.72 30.72,25.755 31.41,19.5 L34.5,19.5 L34.5,16.5 L31.41,16.5 L31.41,16.5 Z M18,28.5 C12.195,28.5 7.5,23.805 7.5,18 C7.5,12.195 12.195,7.5 18,7.5 C23.805,7.5 28.5,12.195 28.5,18 C28.5,23.805 23.805,28.5 18,28.5 L18,28.5 Z" id="Shape"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
                </svg>
              </Col>
            </Row>

            <Row >
              <div className={styles.floorplanLayout}>
                { alert && <div className={ alert ? styles.moveAnimation : null}>
                <div className={styles.twinklingAnimation}>
                  <svg width="30px" height="30px" viewBox="0 0 62 62" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="1.Default" transform="translate(-1035.000000, -411.000000)">
                            <g id="Group" transform="translate(1036.000000, 412.000000)">
                                <circle id="Oval-2" fill="#5FA1FC" cx="30" cy="30" r="17.027027"></circle>
                                <circle id="Oval-2-Copy" stroke="#5FA1FC" opacity="0.8" cx="30" cy="30" r="23.5135135"></circle>
                                <circle id="Oval-2-Copy-2" stroke="#5FA1FC" opacity="0.4" cx="30" cy="30" r="30"></circle>
                            </g>
                        </g>
                    </g>
                  </svg>
                </div>
                </div> } 
              </div>
            </Row>
          </Col>
        </Row>
    )
  }
}

UserCard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
  person: PropTypes.object,
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(UserCard)
