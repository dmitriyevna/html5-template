var gulp = require('gulp');
var config = require('../config.js');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {

    gulp.src(config.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest.img))

});