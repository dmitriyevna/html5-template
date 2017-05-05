var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var config = require('../config.js');

gulp.task('sass', function(){

	return gulp.src(config.src.sass)
			.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(postcss([autoprefixer()]))
    		.pipe(gulp.dest(config.dest.css));

});

