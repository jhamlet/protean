var gulp     = require('gulp'),
    ejs      = require('gulp-ejs'),
    jsdoc    = require('gulp-jsdoc'),
    jsdoc2md = require('jsdoc-to-markdown'),
    clean    = require('del'),
    fs       = require('fs'),
    path     = require('path'),
    pkgInfo  = require('./package.json'),
    CLOBBER  = [];
    
gulp.task('clobber', function (done) {
    clean(CLOBBER, done);
});

gulp.task('api.md', function () {
    return jsdoc2md.
        render('lib/**/*.js', { 'heading-depth': 4 }).
        pipe(fs.createWriteStream('api.md'));
});
CLOBBER.push('api.md');

gulp.task('readme', ['api.md'], function () {
    return gulp.src('src/tmpl/README.ejs').
        pipe(ejs({
            pkg: pkgInfo,
            documentation: fs.readFileSync('api.md', 'utf8'),
            license: fs.readFileSync('LICENSE', 'utf8')
        }, {
            ext: '.md'
        })).
        pipe(gulp.dest('./'));
});
CLOBBER.push('README.md');

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
CLOBBER.push('docs/**/*');
CLOBBER.push('docs');

gulp.task('default', ['api.md', 'docs']);
