import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Row, Col } from 'antd'
import styles from './Header.less'
import avatar from '../../images/admin_photo.png'

const Header = ({
  user,
}) => {
  return (
    <Layout.Header className={styles.header}>
      <Row span={24}>
        <Col span={20}>
          <img alt="avatar" src={avatar} className={styles.avatar}/>
          Morning,  <span className={styles.username}> {user.name} </span>
        </Col>
        <Col span={2} className={styles.icon} >
          <svg width="20px" height="20px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Desktop-HD-Copy" transform="translate(-1266.000000, -55.000000)" fill="#737373">
                      <g id="Head">
                      <path d="M1278,85 C1279.65,85 1281,83.6153846 1281,81.9230769 L1275,81.9230769 C1275,83.6153846 1276.335,85 1278,85 L1278,85 Z M1287,75.7692308 L1287,68.0769231 C1287,63.3538462 1284.54,59.4 1280.25,58.3538462 L1280.25,57.3076923 C1280.25,56.0307692 1279.245,55 1278,55 C1276.755,55 1275.75,56.0307692 1275.75,57.3076923 L1275.75,58.3538462 C1271.445,59.4 1269,63.3384615 1269,68.0769231 L1269,75.7692308 L1266,78.8461538 L1266,80.3846154 L1290,80.3846154 L1290,78.8461538 L1287,75.7692308 L1287,75.7692308 Z" id="Shape"></path>
                      </g>
                  </g>
              </g>
          </svg>
        </Col>
        <Col span={2} className={styles.icon} >
          <svg width="20px" height="20px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Desktop-HD-Copy" transform="translate(-1350.000000, -55.000000)" fill="#737373">
                      <g id="Head">
                          <path d="M1376.46106,71.47 C1376.52274,70.99 1376.569,70.51 1376.569,70 C1376.569,69.49 1376.52274,69.01 1376.46106,68.53 L1379.71485,66.055 C1380.00784,65.83 1380.08495,65.425 1379.8999,65.095 L1376.81574,59.905 C1376.63069,59.575 1376.21433,59.455 1375.87507,59.575 L1372.03529,61.075 C1371.23341,60.475 1370.36984,59.98 1369.42918,59.605 L1368.84318,55.63 C1368.79692,55.27 1368.47309,55 1368.08757,55 L1361.91925,55 C1361.53373,55 1361.20989,55.27 1361.16363,55.63 L1360.57764,59.605 C1359.63697,59.98 1358.7734,60.49 1357.97152,61.075 L1354.13174,59.575 C1353.77706,59.44 1353.37612,59.575 1353.19107,59.905 L1350.10691,65.095 C1349.90644,65.425 1349.99897,65.83 1350.29196,66.055 L1353.54575,68.53 C1353.48407,69.01 1353.43781,69.505 1353.43781,70 C1353.43781,70.495 1353.48407,70.99 1353.54575,71.47 L1350.29196,73.945 C1349.99897,74.17 1349.92187,74.575 1350.10691,74.905 L1353.19107,80.095 C1353.37612,80.425 1353.79249,80.545 1354.13174,80.425 L1357.97152,78.925 C1358.7734,79.525 1359.63697,80.02 1360.57764,80.395 L1361.16363,84.37 C1361.20989,84.73 1361.53373,85 1361.91925,85 L1368.08757,85 C1368.47309,85 1368.79692,84.73 1368.84318,84.37 L1369.42918,80.395 C1370.36984,80.02 1371.23341,79.51 1372.03529,78.925 L1375.87507,80.425 C1376.22975,80.56 1376.63069,80.425 1376.81574,80.095 L1379.8999,74.905 C1380.08495,74.575 1380.00784,74.17 1379.71485,73.945 L1376.46106,71.47 L1376.46106,71.47 Z M1365.00341,75.25 C1362.02719,75.25 1359.60613,72.895 1359.60613,70 C1359.60613,67.105 1362.02719,64.75 1365.00341,64.75 C1367.97962,64.75 1370.40069,67.105 1370.40069,70 C1370.40069,72.895 1367.97962,75.25 1365.00341,75.25 L1365.00341,75.25 Z" id="Shape"></path>
                      </g>
                  </g>
              </g>
          </svg>
        </Col>
      </Row>
    </Layout.Header>
  )
}

Header.propTypes = {
  user: PropTypes.object,
}

export default Header
