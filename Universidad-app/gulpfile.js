const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer ({
            overrideBrowserList: ['last 2 version'],
            cascade: false
        }))
        .pipe(sass ({
            outputStyle: 'expanded',
        }))
        .pipe(gulp.dest('css'));    
}

function watchFiles() {
    gulp.watch('scss/*.scss', css)
    gulp.watch('index.html')
}

// registrar las funciones de las tareas
gulp.task('css', css)
gulp.task('watch', gulp.parallel(watchFiles));