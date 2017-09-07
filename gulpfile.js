var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require ('gulp-sass'),
    browserSync  = require('browser-sync');;

gulp.task('auto', function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('sass/**/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('**/*.html', browserSync.reload);// Наблюдение за другими типами файлов
    gulp.watch('js/**/*.js', browserSync.reload);// Наблюдение за другими типами файлов
});