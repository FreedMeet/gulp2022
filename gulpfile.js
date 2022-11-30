import gulp from 'gulp'
import {path} from './gulp/config/path.js'
import {plugins} from "./gulp/config/plugins.js"

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build')
}

import {copy} from "./gulp/tasks/copy.js"
import {reset} from "./gulp/tasks/reset.js"
import {html} from "./gulp/tasks/html.js"
import {server} from "./gulp/tasks/server.js"
import {scss} from "./gulp/tasks/scss.js"
import {js} from "./gulp/tasks/js.js"
import {images} from "./gulp/tasks/images.js"
import {oftToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js"
import {svgCreateSprite} from "./gulp/tasks/svgSprite.js"
import {zip} from "./gulp/tasks/zip.js"


function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

const fonts = gulp.series(oftToTtf, ttfToWoff, fontsStyle)
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images))

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployArchive = gulp.series(reset, mainTasks, zip)

gulp.task('default', dev)
gulp.task('build', build)
gulp.task('zip', deployArchive)
gulp.task('svgSprite', svgCreateSprite)