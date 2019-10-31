let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

<<<<<<< HEAD
let js_files = ['./js/jquery-3.3.1.slim.js','./js/popper.js','./js/bootstrap.js'];

gulp.task('sass', function () {
    var stream = gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./css/'));
=======
let js_files = ['./src/js/jquery-3.3.1.slim.js','./src/js/popper.js','./src/js/bootstrap.js'];

gulp.task('sass', function () {
    var stream = gulp.src('./src/scss/styles.scss')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./src/css/'));
>>>>>>> master
    return stream;
    }
);

gulp.task('minify-css', () => {
<<<<<<< HEAD
    return gulp.src('css/styles.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./css/'));
=======
    return gulp.src('src/css/styles.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/css/'));
>>>>>>> master
    }
);

gulp.task('styles', gulp.series('sass', 'minify-css'));

gulp.task('watch', () =>{
<<<<<<< HEAD
    return gulp.watch('scss/**/*.scss', gulp.series('styles'));
=======
    return gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
>>>>>>> master
    }
);


gulp.task('concatJS', () => {
    return gulp.src(js_files)
<<<<<<< HEAD
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('./js/'));
=======
      .pipe(concat('src/scripts.js'))
      .pipe(gulp.dest('./src/js/'));
>>>>>>> master
    }
);

gulp.task('uglify', () => {
<<<<<<< HEAD
    return gulp.src('js/scripts.js')
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));   
=======
    return gulp.src('src/js/scripts.js')
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));   
>>>>>>> master
    }
);

gulp.task('scripts', gulp.series('concatJS','uglify'));

gulp.task("watch-js", () => {
    return gulp.watch(js_files, gulp.series('scripts'));
    }
);

 