var destPath = './build';

var config = {

	src: {
		templates: './src/templates-nunjucks',
		js: './src/js/**/*.js',
		sass: './src/sass/**/*.sass',
		css: './src/css/**/*.css',
		fonts: './src/fonts/**/*',
		images: './src/img/**/*'
	},
	dest: {
	    build: destPath,
	    css: destPath + '/css',
	    js: destPath + '/js',
	    fonts: destPath + '/fonts',
	    img: destPath + '/img'
	}

};

module.exports = config;