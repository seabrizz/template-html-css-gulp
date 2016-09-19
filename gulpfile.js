var 		gulp         		= require('gulp'),
		browserSync  	= require('browser-sync').create();

gulp.task('browser-sync', function() {
		browserSync.init({
				server: {
						baseDir: "./site"
				},
				notify: false
		});
});

gulp.task('watch', function () {
	gulp.watch('site/css/*.css').on("change", browserSync.reload);
	gulp.watch('site/js/*.js').on("change", browserSync.reload);
	gulp.watch('site/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
