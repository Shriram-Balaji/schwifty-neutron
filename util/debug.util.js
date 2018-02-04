
const request_debug = require('request-debug')
const debugUtil = {};
debugUtil.enableRequestDebug = function(enabled){
  if(enabled)
    request_debug(require('request'))
}
module.exports = debugUtil