/*
 * liuzy <mostic1122@gmail.com>
 * MIT Licensed
 */

const stringify = function (json) {
  return JSON.stringify(json)
}

export const channels = {
  // ltc
  'ok_sub_spotcny_ltc_ticker': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spotcny_ltc_ticker' }), //订阅行情数据
  'ok_sub_spot_ltc_depth': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spot_ltc_depth' }), //订阅现货市场深度(200增量数据返回)
  'ok_sub_spotcny_ltc_depth_20': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spotcny_ltc_depth_20' }), //订阅市场深度
  'ok_sub_spotcny_ltc_trades': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spotcny_ltc_trades' }), //订阅成交记录
  'ok_sub_spotcny_ltc_kline_1min': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spotcny_ltc_kline_1min' }), //订阅K线数据(1min)
  // btc
  'ok_sub_spotcny_btc_ticker': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spotcny_btc_ticker' }), //订阅行情数据
  'ok_sub_spot_btc_depth': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spot_btc_depth' }), //订阅现货市场深度(200增量数据返回)
  'ok_sub_spotcny_btc_depth_20': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spotcny_btc_depth_20' }), //订阅市场深度
  'ok_sub_spotcny_btc_trades': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spotcny_btc_trades' }), //订阅成交记录
  'ok_sub_spotcny_btc_kline_1min': stringify({ 'event': 'addChannel', 'channel': 'ok_sub_spotcny_btc_kline_1min' }), //订阅K线数据(1min)
}