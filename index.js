var bunyan = require('bunyan');
var logger;


module.exports = function(name, data) {
  if (!logger) 
    throw new Error("Please call require('app-logger').init() before using logger");

  if (typeof name !== 'string' && data === undefined) {
    data = name;
    name = undefined;
  }else if (name){
    name = String(name);
  }

  data = data || {};
  if(name && !data.hasOwnProperty('component')) 
    data.component = name;
  
  return logger.child(data);
};


module.exports.init = function(config) {
  logger = bunyan.createLogger(config);
};
