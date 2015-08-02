var gulp     = require('gulp'),
    ejs      = require('gulp-ejs'),
    jsdoc    = require('gulp-jsdoc'),
    jsdoc2md = require('jsdoc-to-markdown'),
    clean    = require('del'),
    fs       = require('fs'),
    path     = require('path'),
    pkgInfo  = require('./package.json'),
    FACETS   = ['array', 'collection', 'function', 'object', 'string', 'utility'],
    PATHS    = ['./*.js', './{' + FACETS.join(',') + '}/*.js'],
    LICENSE  = fs.readFileSync('LICENSE', 'utf8'),
    CLOBBER  = [];

gulp.task('clobber', function (done) {
    clean(CLOBBER, done);
});

gulp.task('api.md', function () {
    return jsdoc2md.
        render(PATHS, { 'heading-depth': 4 }).
        pipe(fs.createWriteStream('api.md'));
});
CLOBBER.push('api.md');

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

gulp.task('docs', ['readme'], function () {
    return gulp.src([PATHS, 'README.md']).
        pipe(jsdoc(
            path.join('docs', pkgInfo.version),
            {
                path:                  'ink-docstrap',
                systemName:            'Protean',
                footer:                '',
                copyright:             LICENSE.split(/\n/).shift(),
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
                licenses: [ LICENSE ],
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
