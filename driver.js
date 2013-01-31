var Driver = require('mocha-ci-driver').Driver,
    driver = new Driver();

driver.run(__dirname+'/test.html');