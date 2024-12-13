var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./",
			index: "index.html"
		},
		port: 5000,
		notify: false,
		open: false
	})
});

gulp.task('default', gulp.parallel('server'));