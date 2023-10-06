const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('src/res/scss/**/*.scss')
        .pipe(sass())
        // .pipe(purgecss( {content: ['*.astro']}))
        .pipe(dest('src/res/css'))
}

function watchStyles() {
    watch(['src/res/scss/**/*.scss', '*.astro'], buildStyles)
}

exports.default = series(buildStyles, watchStyles)