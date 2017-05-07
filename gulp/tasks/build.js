var config = require('../config.js');
var gulp = require('gulp');

gulp.task('build', ['clean', 'render-html', 'sass-build', 'imagemin']);