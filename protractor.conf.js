var GulpSelenium = require('gulp-selenium');
var gulpSelenium = GulpSelenium();


exports.config = {
  seleniumServerJar: gulpSelenium.path,
  chromeDriver: gulpSelenium.chromeDriverPath,
  capabilities: {
    'browserName': 'firefox'
  }
};