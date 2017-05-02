/*
 * liuzy <mostic1122@gmail.com>
 * MIT Licensed
 */

import log4js from 'log4js'
import { channels } from './channels'

const channelsArr = Object.keys(channels);
let logs = {}
let conf = {
  appenders: []
}

for (let i = 0; i < channelsArr.length; i++) {
  conf.appenders.push({
    type: 'file',
    filename: __dirname + '/data/' + channelsArr[i] + '.log',
    category: channelsArr[i]
  })
}
log4js.configure(conf)

for (let i = 0, len = channelsArr.length; i < len; i++) {
  logs[channelsArr[i]] = log4js.getLogger(channelsArr[i])
}

export { logs }