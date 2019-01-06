const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Dashboard',
    route: '/dashboard',
  },
  {
    id: '46',
    bpid: '4',
    mpid: '4',
    name: 'layer (Function)',
    icon: 'credit-card',
    route: '/UIElement/layer',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
