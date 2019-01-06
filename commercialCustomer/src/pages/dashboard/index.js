import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Divider, List } from 'antd'
import { Page } from 'components'
import styles from './index.less'
import { layer } from 'components'
import UserCard from './userCard'

let Enum = {
  default: 1,
}

const addForm = (key) => {
  if (key === Enum.default) {
    layer.open()
  }
}

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
        location: "3A",
        entertime: "2018.8.8 09:41",
        plantime: "2018.8.8 15:30",
        status: "Present",
      }, {
        name: "Alexander Pope",
        gender: "Male",
        location: "2C",
        age: "20",
        destination: "Jones Lang LaSalle, Inc.",
        entertime: "2018.8.8 09:41",
        plantime: "2018.8.8 15:30",
        status: "Present",
      }, {
        name: "Olive Chapman",
        destination: "Jones Lang LaSalle, Inc.",
        gender: "Male",
        age: "39",
        location: "19F",
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
            location: "3A",
            entertime: "2018.8.8 09:41",
            plantime: "2018.8.8 15:30",
            status: "Present",
          }, {
            name: "Alexander Pope",
            gender: "Male",
            location: "2C",
            age: "20",
            destination: "Jones Lang LaSalle, Inc.",
            entertime: "2018.8.8 09:41",
            plantime: "2018.8.8 15:30",
            status: "Alert",
          }, {
            name: "Olive Chapman",
            destination: "Jones Lang LaSalle, Inc.",
            gender: "Male",
            age: "39",
            location: "19F",
            entertime: "2018.8.8 18:29",
            plantime: "2018.8.8 21:40",
            status: "Dismissed",
          }],
          personIndex: 1,
        })
      },
      10000
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
          <Col span={7} className={styles.listHeader}>        
            Name
          </Col>
          <Col span={6} className={styles.listHeader}>
            Plan Time
          </Col>
          <Col span={7} className={styles.listHeader}>
            Entrance Time
          </Col>
          <Col span={4} className={styles.listHeader} style={{ textAlign: 'right'}}>
            Status
          </Col>
        </Row>

        <List
          bordered
          className={styles.visitors}
          dataSource={this.state.data}
          renderItem={ (item, index) => {
            
            const status = item.status
            const statusColor =  status === "Present" ? {color: '#5FA1FC', fontWeight: 800} : (status === "Alert" ?  {color: '#F96262', fontWeight: 800} : {color: '#fff', fontWeight: 300} )
            return (
              <List.Item style={{ padding: '0px'}} className={styles.visitorsList} onClick={()=> this.selectIndex(index)}>
                <Row className={styles.listRow}>
                <Col span={7} className={styles.listContentName } style={statusColor}>
                  {item.name}
                </Col>
                <Col span={6} className={styles.listItem}>
                  {item.plantime}
                </Col>
                <Col span={7} className={styles.listItem} style={statusColor}>
                  {item.entertime}
                </Col>
                <Col span={4} className={styles.listItem} style={statusColor}>
                  {item.status}
                </Col>
              </Row></List.Item>
            )}}
        />


        <Row type="flex" justify="space-around" className={styles.formPanel}>
          <Col span={24}>
            <Row className={styles.label} style={{ fontSize: '20px', type: "flex",justify:"start",align:"bottom"}}>
              <Col span={2} style={{ padding: '0px 10px 15px 20px'}} onClick={addForm.bind(null, Enum.default)}>
                <svg width="30px" height="30px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="1.Default-Copy-3" transform="translate(-80.000000, -1417.000000)" fill="#5FA1FC">
                            <path d="M110,1477 C93.4314575,1477 80,1463.56854 80,1447 C80,1430.43146 93.4314575,1417 110,1417 C126.568542,1417 140,1430.43146 140,1447 C140,1463.56854 126.568542,1477 110,1477 Z M121.666667,1448.66667 L121.666667,1445.33333 L111.666667,1445.33333 L111.666667,1435.33333 L108.333333,1435.33333 L108.333333,1445.33333 L98.3333333,1445.33333 L98.3333333,1448.66667 L108.333333,1448.66667 L108.333333,1458.66667 L111.666667,1458.66667 L111.666667,1448.66667 L121.666667,1448.66667 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
              </Col>
              <Col span={10}>
                Add a Reservation
              </Col>
            </Row>
            <Divider />

            <Row span={24}>
              <Col span={18} className={styles.listHeader}>        
                Name
              </Col>
              <Col span={6} className={styles.listHeader} style={{textAlign: 'right'}}>
                Plan Time
              </Col>
            </Row>
            <List
            bordered
            className={styles.visitorForm}
            dataSource={this.state.data}
            renderItem={ (item) => {
              
              return (
                <List.Item style={{ padding: '0px'}} >
                  <Row className={styles.listRow}>
                  <Col span={18} className={styles.listContentName }>
                    {item.name}
                  </Col>
                  <Col span={6} className={styles.listItem}>
                    {item.plantime}
                  </Col>
                </Row></List.Item>
              )}}
            />
          </Col>
        </Row>
      </Page>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)
