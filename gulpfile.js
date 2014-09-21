var gulp     = require('gulp'),
    ejs      = require('gulp-ejs'),
    concat   = require('gulp-concat'),
    jsdoc    = require('gulp-jsdoc'),
    jsdoc2md = require('jsdoc-to-markdown'),
    fs       = require('fs'),
    path     = require('path'),
    clean    = require('del'),
    pkgInfo  = require('./package.json'),
    CLOBBER  = [];
    
gulp.task('clobber', function (done) {
    clean(CLOBBER, done);
});

gulp.task('api.md', function () {
    return jsdoc2md.
        render('lib/**/*.js').
        pipe(fs.createWriteStream('API.md'));
});
CLOBBER.push('API.md');

gulp.task('readme.md', function () {
    var dir = 'src/tmpl';
    return gulp.
        src([
            'HEADER.ejs',
            'SUMMARY.ejs',
            'INSTALLATION.ejs',
            'DOCUMENTATION.ejs',
            'DEPENDENCIES.ejs',
            'ISSUES.ejs',
            'LICENSE.ejs'
        ].map(function (file) { return path.join(dir, file); })).
        pipe(ejs({
            pkg: pkgInfo,
            license: fs.readFileSync('LICENSE', 'utf8'),
            links: {
                apiDoc: 'API.md'
            }
        })).
        pipe(concat('README.md')).
        pipe(gulp.dest('./'));
});
CLOBBER.push('README.md');

gulp.task('docs', ['readme.md'], function () {
    return gulp.
        src(['./lib/**/*.js', 'README.md']).
        pipe(jsdoc(
            path.join('docs', pkgInfo.version),
            {
                path:                  'ink-docstrap',
                systemName:            pkgInfo.fullname,
                footer:                '',
                copyright:             'Copyright © 2014 Jerry Hamlet',
                navType:               'vertical',
                theme:                 'spacelab',
                linenums:              true,
                collapseSymbols:       true,
                inverseNav:            true,
                outputSourceFiles:     true,
                outputSourcePath:      true,
                highlightTutorialCode: true,
                syntaxTheme:           'dark'
            },
            {
                licenses: [
                    fs.readFileSync('./LICENSE', 'utf8')
                ],
                version: pkgInfo.version
            },
            {
                recurse: true,
                lenient: true,
                'private': true
            }
        ));
});
CLOBBER.push('docs/**/*');
CLOBBER.push('docs');

gulp.task('default', ['readme.md', 'api.md', 'docs']);
