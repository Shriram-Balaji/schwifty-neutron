const config                = {};
config.env                  = 'local';
config.port                 = process.env.PORT || 3030;
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

//Service Configuration
config.services             = {};
config.services.dribbble    = {
  'endpoint':                 'https://api.dribbble.com/v1',
  'access-token':             '2b17c3bd0cc6555054ea620b9f9a21b6be1581200b821b222be9d7142720cafc',
};

config.services.productHunt = {
  'endpoint':                 'https://api.producthunt.com/v1',
  'access-token':             '39dd83e76fedb46d8da7bb36d8a3d292286330b7798a7364b14390a75ca2e5a4'
};

module.exports = config;

