var bunyan = require('bunyan');
var logger;


module.exports = function(name, data) {
  data = data || {};
  if(!data.hasOwnProperty('component')) 
    data.component = name;
  
  return logger.child(data);
};


module.exports.init = function(config) {
  logger = bunyan.createLogger(config);
};
