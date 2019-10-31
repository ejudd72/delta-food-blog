let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

let js_files = ['./src/js/jquery-3.3.1.slim.js','./src/js/popper.js','./src/js/bootstrap.js'];

gulp.task('sass', function () {
    var stream = gulp.src('./src/scss/styles.scss')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./src/css/'));
    return stream;
    }
);

gulp.task('minify-css', () => {
    return gulp.src('src/css/styles.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/css/'));
    }
);

gulp.task('styles', gulp.series('sass', 'minify-css'));

gulp.task('watch', () =>{
    return gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
    }
);


gulp.task('concatJS', () => {
    return gulp.src(js_files)
      .pipe(concat('src/scripts.js'))
      .pipe(gulp.dest('./src/js/'));
    }
);

gulp.task('uglify', () => {
    return gulp.src('src/js/scripts.js')
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));   
    }
);

gulp.task('scripts', gulp.series('concatJS','uglify'));

gulp.task("watch-js", () => {
    return gulp.watch(js_files, gulp.series('scripts'));
    }
);

 