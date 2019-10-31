let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

let js_files = ['./js/jquery-3.3.1.slim.js','./js/popper.js','./js/bootstrap.js'];

gulp.task('sass', function () {
    var stream = gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./css/'));
    return stream;
    }
);

gulp.task('minify-css', () => {
    return gulp.src('css/styles.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./css/'));
    }
);

gulp.task('styles', gulp.series('sass', 'minify-css'));

gulp.task('watch', () =>{
    return gulp.watch('scss/**/*.scss', gulp.series('styles'));
    }
);


gulp.task('concatJS', () => {
    return gulp.src(js_files)
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('./js/'));
    }
);

gulp.task('uglify', () => {
    return gulp.src('js/scripts.js')
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));   
    }
);

gulp.task('scripts', gulp.series('concatJS','uglify'));

gulp.task("watch-js", () => {
    return gulp.watch(js_files, gulp.series('scripts'));
    }
);

 