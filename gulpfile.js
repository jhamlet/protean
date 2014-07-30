var gulp    = require('gulp'),
    ejs     = require('gulp-ejs'),
    jsdoc   = require('gulp-jsdoc'),
    fs      = require('fs'),
    path    = require('path'),
    del     = require('del'),
    pkgInfo = require('./package.json'),
    CLEAN   = [];
    
gulp.task('clean', function (done) {
    del(CLEAN, done);
});

gulp.task('readme', function () {
    return gulp.src('src/tmpl/README.ejs').
        pipe(ejs({
            pkg: pkgInfo,
            license: fs.readFileSync('./LICENSE', 'utf8')
        }, {
            ext: '.md'
        })).
        pipe(gulp.dest('./'));
});
CLEAN.push('README.md');

gulp.task('docs', ['readme'], function () {
    return gulp.src(['./lib/**/*.js', 'README.md']).
        pipe(jsdoc(
            path.join('docs', pkgInfo.version),
            {
                path:                  'ink-docstrap',
                systemName:            'Protean',
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
CLEAN.push('docs/**/*');
CLEAN.push('docs');

gulp.task('default', ['clean', 'docs']);
