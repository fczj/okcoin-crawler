/*
 * liuzy <mostic1122@gmail.com>
 * MIT Licensed
 */

import fs from 'fs'
import websocket from 'ws'
import { channels } from './channels'
import { logs } from './log'

!function WS() {
  let ws = new websocket('wss://real.okcoin.cn:10440/websocket/okcoinapi')
  const channelsArr = Object.keys(channels)

  const saveToFile = (channel, data) => {
    try {
      // if you want to save data to a file
      /*fs.appendFile(__dirname + '/data/' + channel + '.log', JSON.stringify(data) + '\n', (err) => {
        if (err) throw new Error(err)
      })*/
      logs[channel].trace(JSON.stringify(data))
    } catch (err) { console.log(err) }
  }

  ws.on('open', () => {
    console.log('socket has connected')
    // ltc
    ws.send(channels.ok_sub_spotcny_ltc_ticker)
    ws.send(channels.ok_sub_spot_ltc_depth)
    ws.send(channels.ok_sub_spotcny_ltc_depth_20)
    ws.send(channels.ok_sub_spotcny_ltc_trades)
    ws.send(channels.ok_sub_spotcny_ltc_kline_1min)
    // btc
    ws.send(channels.ok_sub_spotcny_btc_ticker)
    ws.send(channels.ok_sub_spot_btc_depth)
    ws.send(channels.ok_sub_spotcny_btc_depth_20)
    ws.send(channels.ok_sub_spotcny_btc_trades)
    ws.send(channels.ok_sub_spotcny_btc_kline_1min)
  })

  ws.on('message', (data) => {
    //console.log(data)
    let res = JSON.parse(data)
    res = res[0] || {}
    if (!res) {
      console.log('no data received')
      return;
    }
    switch (res.channel) {
      // ltc
      case 'ok_sub_spotcny_ltc_ticker':
        saveToFile('ok_sub_spotcny_ltc_ticker', res)
        break;
      case 'ok_sub_spot_ltc_depth':
        saveToFile('ok_sub_spot_ltc_depth', res)
        break;
      case 'ok_sub_spotcny_ltc_depth_20':
        saveToFile('ok_sub_spotcny_ltc_depth_20', res)
        break;
      case 'ok_sub_spotcny_ltc_trades':
        saveToFile('ok_sub_spotcny_ltc_trades', res)
        break;
      case 'ok_sub_spotcny_ltc_kline_1min':
        saveToFile('ok_sub_spotcny_ltc_kline_1min', res)
        break;
      // btc
      case 'ok_sub_spotcny_btc_ticker':
        saveToFile('ok_sub_spotcny_btc_ticker', res)
        break;
      case 'ok_sub_spot_btc_depth':
        saveToFile('ok_sub_spot_btc_depth', res)
        break;
      case 'ok_sub_spotcny_btc_depth_20':
        saveToFile('ok_sub_spotcny_btc_depth_20', res)
        break;
      case 'ok_sub_spotcny_btc_trades':
        saveToFile('ok_sub_spotcny_btc_trades', res)
        break;
      case 'ok_sub_spotcny_btc_kline_1min':
        saveToFile('ok_sub_spotcny_btc_kline_1min', res)
        break;
    }
  })

  ws.on('close', (code, reason) => {
    console.log(`connection closed by ${code}, and ${reason}`)
    WS()
  })
}()