const
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssNano= require('gulp-cssnano'),
    sass = require('gulp-sass')

sass.compiler = require('node-sass')


gulp.task('sass',()=>{
    return gulp.src('./dev/scss/base.scss')
        .pipe(sass({sourceMap:true}).on('error',sass.logError))
        .pipe(gulp.dest('./src/css/'))
})

gulp.task('minify',()=>{
    return gulp.src(['./src/css/base.css'])
        .pipe(concat('index.css'))
        .pipe(cssNano())
        .pipe(gulp.dest('./src/'))
})

gulp.task('build',async()=>{
    await gulp.series('sass','minify')
})

gulp.task('watch',()=>{
    gulp.watch(['./dev/scss/*/*.scss','./dev/scss/*.scss'],
        gulp.series('sass','minify')
    )
})
