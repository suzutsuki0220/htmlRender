const browserSync = require('browser-sync').create();

browserSync.init({
    files: [
        './index.html',
        './dist/**/*.*',
        './docs/**/*.*'
    ],
    cors: true,
    server: {
        baseDir: [
            './'
        ]
    }
});
