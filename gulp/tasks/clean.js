var config = require('../config.js');

var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(){

	return del.sync(config.dest.build);

});
