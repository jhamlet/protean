var gulp     = require('gulp'),
    ejs      = require('gulp-ejs'),
    jsdoc2md = require('jsdoc-to-markdown'),
    marked   = require('gulp-marked'),
    concat   = require('gulp-concat'),
    clean    = require('del'),
    fs       = require('fs'),
    // path     = require('path'),
    pkgInfo  = require('./package.json'),
    FACETS   = [
        'array', 'collection', 'dom', 'falcor', 'function', 'object', 'rx',
        'storage', 'string', 'utility'
    ],
    PATHS    = ['./*.js', './{' + FACETS.join(',') + '}/**/*.js'],
    LICENSE  = fs.readFileSync('LICENSE', 'utf8'),
    CLOBBER  = [];

gulp.task('clobber', function (done) {
    clean(CLOBBER, done);
});

gulp.task('api.md', function () {
    return jsdoc2md({
        src: PATHS,
        'header-depth': 4
    }).
        pipe(fs.createWriteStream('api.md'));
});
CLOBBER.push('api.md');

gulp.task('api.html', ['api.md'], function () {
    return gulp.
        src('./api.md').
        pipe(marked({})).
        pipe(concat('api.html')).
        pipe(gulp.dest('./'));
});
CLOBBER.push('api.html');

gulp.task('readme', ['api.md'], function () {
    return gulp.src('src/tmpl/README.ejs').
        pipe(ejs({
            pkg: pkgInfo,
            documentation: fs.readFileSync('api.md', 'utf8'),
            license: LICENSE
        }, {
            ext: '.md'
        })).
        pipe(gulp.dest('./'));
});
CLOBBER.push('README.md');

gulp.task('default', ['readme']);
