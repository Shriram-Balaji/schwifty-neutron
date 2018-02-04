const config                = {};
config.env                  = 'test';
config.port                 =  process.env.PORT || 3030;
config.protocol             = 'http';
config.host                 = 'localhost';
config.mountpoint           = 'api/v1';

//DB
config.db                   = {};
config.db.name              = 'sleepy_torpedo_test';
config.db.user              = 'sleepy_torpedo';
config.db.password          = 'sleepy_torpedo';
config.db.host              = 'localhost';
config.db.port              = '5432';


module.exports = config;

