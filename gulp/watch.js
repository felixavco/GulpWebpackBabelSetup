const 
  gulp = require('gulp'),
  browerSync = require('browser-sync').create();

  gulp.task('default', () => {

    browerSync.init({
      notify: false,
      server:{
        baseDir: 'src'
      }
    })

    gulp.watch(['./src/assets/sass/*.scss','./src/assets/sass/***/*.scss'],['cssInject']);
    gulp.watch(['./src/**/*.html', './src/**/*.php'], () => browerSync.reload())
  })

  gulp.task('cssInject', ['sass'], () => {
    return gulp.src('./src/style.css')
      .pipe(browerSync.stream())
  })

 

