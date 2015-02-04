var path = require('path'),
gulp = require('gulp'),
webserver = require('gulp-webserver'),
connect = require('gulp-connect'),
clean = require('gulp-clean'),
program = require('commander'),
protractor = require("gulp-protractor").protractor,
debug = false,
WATCH_MODE = 'watch',
RUN_MODE = 'run',
DIST_PATH = 'public/',
mode = RUN_MODE;



program
.version('0.0.1')
.option('-d, --dist <value>', 'Specify the output public path')
.option('-t, --tests [glob]', 'Specify which tests to run')
.parse(process.argv);

if(program.dist){
      DIST_PATH = program.dist + DIST_PATH;
}


gulp.task('e2e',function(){
  gulp.src(["test/e2e/*.js"])
      .pipe(protractor({
          configFile: "protractor.conf.js"
      })) 
      .on('error', function(e) { throw e })
});

gulp.task('clean',function(){
  return gulp.src(DIST_PATH,{read:false}).pipe(clean());
});

gulp.task('lib', function(){
  gulp.src('src/lib/**').pipe(gulp.dest(DIST_PATH + '/lib'));
});

gulp.task('index',function(){
  var indexTask = gulp.src('src/index.html');
  indexTask.pipe(gulp.dest(DIST_PATH)).pipe(connect.reload());
});






gulp.task('connect', function() { 
  gulp.src('.')
    .pipe(webserver({
      port:8081
    }));

});


gulp.task('ckeditor',function(){
  gulp.src('src/CKEditor/**/*.*').pipe(gulp.dest(DIST_PATH+"CKEditor"));
});

gulp.task('watch-mode', function() {
  mode = WATCH_MODE;
  var jsWatcher = gulp.watch('src/js/**/*.js', ['js']),
  indexWatcher = gulp.watch('src/index.html',['index']),
  cssWatcher = gulp.watch('src/theme/less/**/*.less', ['css']),
  imageWatcher = gulp.watch('src/theme/images/', ['image']),
  testWatcher = gulp.watch('test/**/*.js', ['e2e']),
  ckeditorWatcher = gulp.watch('src/CKEditor/**/*.*', ['ckeditor']);

  function changeNotification(event) {
    console.log('File', event.path, 'was', event.type, ', running tasks...');
  }
  indexWatcher.on('change',changeNotification);
  ckeditorWatcher.on('change',changeNotification);
  testWatcher.on('change', changeNotification);
});


gulp.task('build', ['index','ckeditor','lib']);
gulp.task('all', ['build']);
gulp.task('default', ['watch-mode', 'all']);
gulp.task('server', ['connect', 'default']);
gulp.task('test', ['default','connect','e2e']);
gulp.task('start', ['watch-mode','build','connect',]);