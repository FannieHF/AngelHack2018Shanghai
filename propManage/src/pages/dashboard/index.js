import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, List } from 'antd'
import { Page } from 'components'
import moment from 'moment'
import styles from './index.less'
import UserCard from './userCard'


class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state={
      content:'',
      modalVisible: false,
      personIndex: 0,
      data: [{
        name: "Lizzie Gibbs",
        destination: "Jones Lang LaSalle, Inc.",
        gender: "Male",
        age: "32",
        company: "JLL",
        location: "3A",
        entertime: "2018.8.8 09:41",
        exittime: "2018.8.8 16:41",
        plantime: "2018.8.8 15:30",
        status: "Present",
      }, {
        name: "Alexander Pope",
        gender: "Male",
        location: "2C",
        age: "20",
        company: "JLL",
        destination: "Jones Lang LaSalle, Inc.",
        entertime: "2018.8.8 09:41",
        exittime: "2018.8.8 19:23",
        plantime: "2018.8.8 15:30",
        status: "Present",
      }, {
        name: "Alen Chapman",
        destination: "Jones Lang LaSalle, Inc.",
        gender: "Male",
        age: "39",
        location: "19F",
        company: "Agora",
        exittime: "2018.8.8 19:23",
        entertime: "2018.8.8 18:29",
        plantime: "2018.8.8 21:40",
        status: "Dismissed",
      }],
    }
  }

  componentDidMount () {
    this.timer = setTimeout(
      () => {
        this.setState({
          data: [{
            name: "Lizzie Gibbs",
            destination: "Jones Lang LaSalle, Inc.",
            gender: "Male",
            age: "32",
            company: "JLL",
            location: "3A",
            exittime: "2018.8.8 16:41",
            entertime: "2018.8.8 09:41",
            plantime: "2018.8.8 15:30",
            status: "Present",
          }, {
            name: "Alexander Pope",
            gender: "Male",
            location: "2C",
            age: "20",
            company: "JLL",
            destination: "Jones Lang LaSalle, Inc.",
            entertime: "2018.8.8 09:41",
            exittime: "2018.8.8 19:23",
            plantime: "2018.8.8 15:30",
            status: "Alert",
          }, {
            name: "Alen Chapman",
            destination: "Jones Lang LaSalle, Inc.",
            gender: "Male",
            age: "39",
            location: "19F",
            company: "Agora",
            exittime: "2018.8.8 19:23",
            entertime: "2018.8.8 18:29",
            plantime: "2018.8.8 21:40",
            status: "Dismissed",
          }],
          personIndex: 1,
        })
      },
      5000
    )
  }

  componentWillUnmount () {
    this.timer && clearTimeout(this.timer)
  }

  selectIndex (i) {
    this.setState({
      personIndex: i,
    })
  }
  render () {

    const {loading} = this.props

    return (
      <Page loading={loading.models.dashboard} className={styles.dashboard}>
        <UserCard person={this.state.data[this.state.personIndex]} alert={this.state.personIndex === 1} />

        <Row>
          <Col span={6} className={styles.listHeader}>        
            Name
          </Col>
          <Col span={5} className={styles.listHeader}>
            Entrance Time
          </Col>
          <Col span={6} className={styles.listHeader}>
            Exit Time
          </Col>
          <Col span={3} className={styles.listHeader}>
            Corp.
          </Col>
          <Col span={4} className={styles.listHeader}>
            Status
          </Col>
        </Row>

        <List
          bordered
          className={styles.visitors}
          dataSource={this.state.data}
          renderItem={ (item, index) => {
            
            const status = item.status
            const statusColor =  status === "Present" ? {color: '#5FA1FC', fontWeight: 800} : (status === "Alert" ?  {color: '#F96262', fontWeight: 800} : {color: '#4D4D4D', fontWeight: 300} )
            const duration = moment.duration(moment(item.exittime).diff(moment()), "milliseconds")
            const exittime = status === "Dismissed" ? item.exittime : moment.utc(duration.as('milliseconds')).format('HH:mm:ss')
            return (
              <List.Item style={{ padding: '0px'}} >
                <Row className={styles.listRow} onClick={()=> this.selectIndex(index)}>
                <Col span={6} className={styles.listContentName } style={statusColor}>
                  {item.name}
                </Col>
                <Col span={5} className={styles.listItem}>
                  {item.entertime}
                </Col>
                <Col span={6} className={styles.listItem} style={statusColor}>
                  {exittime}
                </Col>
                <Col span={3} className={styles.listItem}>
                  {item.company}
                </Col>
                <Col span={4} className={styles.listItem} style={statusColor}>
                  {item.status}
                </Col>
              </Row></List.Item>
            )}}
        />
      </Page>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)
