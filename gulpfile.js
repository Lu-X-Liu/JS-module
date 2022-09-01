import gulp from 'gulp';
import browserSync from 'browser-sync';

function watchTask() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('index.html').on('change', browserSync.reload);
    gulp.watch('js/*.js').on('change', browserSync.reload);
};

export const w = watchTask;