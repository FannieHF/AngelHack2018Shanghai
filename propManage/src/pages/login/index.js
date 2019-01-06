import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import styles from './index.less'
import background from '../../images/background.png'

const FormItem = Form.Item

const Login = ({
  loading,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  const backgroundImage = {backgroundImage: background}

  return (
    <div className={styles.backgroundImage} style={backgroundImage}>
      <Row className={styles.banner}>SCHWIFTY</Row>
      <div className={styles.form}>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input onPressEnter={handleOk} placeholder="Username" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input type="password" onPressEnter={handleOk} placeholder="Password" />)}
          </FormItem>
          <Row>
            <Button type="primary" onClick={handleOk} loading={loading.effects.login} style={{fontFamily: "fat"}}>
              LOGIN
            </Button>
          </Row>

        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
