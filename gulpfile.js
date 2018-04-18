var gulp = require('gulp');
var dirSync = require('gulp-directory-sync');

gulp.task('sync', function () {
    return gulp
        .src('')
        .pipe(dirSync('Enijar', 'server/scriptcraft/plugins/Enijar', {printSummary: true}))
        .on('error', function (err) {
            console.error(err);
        });
});

gulp.task('watch', function () {
    gulp.run('default');
    gulp.watch(__dirname + '/Enijar/**/*', ['sync']);
});

gulp.task('default', function () {
    gulp.run('sync');
});
