var config = require('../config.js');
var gulp = require('gulp');

gulp.task('build', ['clean', 'render-html', 'sass-build', 'imagemin'], function(){

	var buildJS = gulp.src(config.src.js)
		 .pipe(gulp.dest(config.dest.js));

});