var gulp = require('gulp');
var config = require('../config.js');

gulp.task('clean', function(){

	return del.sync(config.dest.build);

});
