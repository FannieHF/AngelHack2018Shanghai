import React from 'react'
import { layer } from 'components'
import { Button } from 'antd'

let Enum = {
  default: 1,
}

const IcoPage = () => {
  const handleButtonClick = (key) => {
    if (key === Enum.default) {
      layer.open({
        title: '默认弹层',
        content: <div style={{ height: 360 }}>弹层内容</div>,
      })
    }
  }
  return (<div className="content-inner">
    <Button type="primary" onClick={handleButtonClick.bind(null, Enum.default)}>打开一个Layer</Button>
  </div>)
}

export default IcoPage
