var gulp = require('gulp');
var config = require('../config.js');

gulp.task('build', ['clean', 'imagemin', 'sass'], function() {
    
	var buildCss = gulp.src(config.src.css)
    .pipe(gulp.dest(config.dest.css));

    var buildFonts = gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.dest.fonts));

    var buildHtml = gulp.src(config.src.templates)
    .pipe(gulp.dest(config.dest.build));    

    var buildJS = gulp.src(config.src.js)
    .pipe(gulp.dest(config.dest.js));

});