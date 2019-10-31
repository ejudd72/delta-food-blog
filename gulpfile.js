let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
let htmlmin = require('gulp-htmlmin');
let browserSync = require('browser-sync').create();


gulp.task('sass', function () {
    var stream = gulp.src('./src/scss/styles.scss')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./src/css/'));
    return stream;
    }
);

gulp.task('minify-css', () => {
    return gulp.src('./src/css/styles.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      // .pipe(rename({suffix: '.min'})) - removed as no longer changing the name
      .pipe(gulp.dest('./dist/css/'));
    }
);

gulp.task('styles', gulp.series('sass', 'minify-css'));

gulp.task('watch', () =>{
    return gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
    }
);

let js_files = ['./src/js/jquery-3.3.1.slim.js','./src/js/popper.js','./src/js/bootstrap.js'];
//concatenates the JS file and 
gulp.task('concatJS', () => {
    return gulp.src(js_files)
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('./dist/js/'));
    }
);
//uglifies the JS and saves in dist folder
gulp.task('uglify', () => {
    return gulp.src('./dist/js/scripts.js')
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));   
    }
);
// Scripts task combines, concatenation and uglifying
gulp.task('scripts', gulp.series('concatJS','uglify'));

//watch task for the js scripts task
gulp.task("watch-js", () => {
    return gulp.watch(js_files, gulp.series('scripts'));
    }
);

//HTML MINIFY - destination is dist(ribution) folder

gulp.task('minify-HTML', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

 
// This is the browser sync function
function reload(done) {
  browserSync.reload();
  done();
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
}

let watchBrowser = () => gulp.watch(['./src/scss/**/*.scss', './src/js/*.js', './src/*.html'], gulp.series('styles', 'scripts','minify-HTML', reload));

gulp.task('default', gulp.series(serve, watchBrowser));
