var browserstack = require('browserstack-local');

exports.config = {
  'specs': [ '../specs/sample.js' ],
  'browserstackUser': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  'browserstackKey': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  'capabilities': {

    'build': 'protractor-browserstack',
    'name': 'Angular_User_local_test',

    'browserstack.local': true,
    'browserstack.debug': 'true',

    'device': 'iPhone 7',
    'browserName': 'safari',
    'real_mobile': 'true',
    'os_version': '10.0',
    'acceptSslCert': 'true',
    'browserstack.selenium_version': '3.14.0',
    'browserstack.debug': 'true'

  },

  // Code to start browserstack local before start of test
  beforeLaunch: function(){
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config['browserstackKey'], 'force-local':'true' }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function(){
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  }
};
