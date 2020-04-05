const browserSync = require('browser-sync').create();

browserSync.init({
    files: [
        './dist/**/*.*',
        './docs/**/*.*'
    ],
    cors: true,
    server: {
        baseDir: [
            './docs/'
        ]
    }
});
