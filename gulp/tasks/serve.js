var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config.js');

gulp.task('serve', function(){

    browserSync.init({
        server: {
            baseDir: config.dest.build
        }
    });

    gulp.watch([config.src.sass], ['sass']).on('change', browserSync.reload);
    gulp.watch([config.watch.js]).on('change', browserSync.reload);
    gulp.watch([config.src.templates + '**/*.html'], ['render-html']).on('change', browserSync.reload);

});
