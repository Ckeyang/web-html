/**
 * Created by Administrator on 2016/5/16.
 * grunt任务。。。
 * 复制文件到build，压缩文件，检查标准，修改时间戳，监听文件，清理文件夹
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        //jshint
        jshint: {
            client: {
                src: ['src/js/**/*.js'],
                options: {
                    jshintrc: 'src/.jshintrc'
                }
            }
        },
        //clean
        clean: {
            build: 'build'
        },
        //copy
        copy: {
            main: {
                files: [{
                    //css
                    expand: true,
                    cwd: 'src/css',
                    src: '**/*.*',
                    dest: 'build/css',
                    options: {
                        timestamp: true
                    }
                }, {
                    //images
                    expand: true,
                    cwd: 'src/images',
                    src: '**/*.{png,jpg}',
                    dest: 'build/images',
                    options: {
                        timestamp: true
                    }
                }, {
                    //vender
                    expand: true,
                    cwd: 'src/vender',
                    src: '**/*',
                    dest: 'build/vender',
                    options: {
                        timestamp: true
                    }
                },  {
                    //js
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*',
                    dest: 'build/js',
                    options: {
                        timestamp: true
                    }
                }
                ]
            }
        },
        //uglify
        uglify: {
            release: {
                files: [{
                    expand: true,
                    cwd: 'build/js/view',
                    src: ['**/*.js'],
                    dest: 'build/js/view',
                    ext: '.js',
                    options: {
                        timestamp: true
                    }
                }]
            }
        },
        //replace
        replace: {
            release: {
                options: {
                    patterns: [
                        {
                            match: /\.js\"/g,
                            replacement: function (matchedWord) {
                                return ".js?t=" + new Date().getTime() + "\"";
                            }
                        }, {
                            match: /\.css\"/g,
                            replacement: function (matchedWord) {
                                return ".css?t=" + new Date().getTime() + "\"";
                            }
                        }, {
                            match: /\.png\"/g,
                            replacement: function (matchedWord) {
                                return ".png?t=" + new Date().getTime() + "\"";
                            }
                        }, {
                            match: /\.jpg\"/g,
                            replacement: function (matchedWord) {
                                return ".jpg?t=" + new Date().getTime() + "\"";
                            }
                        }
                    ]
                },
                files: [
                    {expand: true, cwd: 'src', src: ['html/**','template/**'], dest: 'build/'}
                ]
            }
        },
        //watch
        watch: {
            // lint js files when they change, and then copy them over to build directory
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['jshint', 'copy']
            },

            html: {
                files: ['src/html/**', 'src/template/**'],
                tasks: ['copy', 'replace']
            },
            css: {
                files: ['src/css/**/*.css'],
                tasks: ['copy']
            },
            images: {
                files: ['src/images/**/*.{png,jpg}'],
                tasks: ['copy']
            },
            voiding: {
                files: ['src/public'],
                tasks: ['copy']
            },
            rebuild: {
                files: ['Gruntfile.js'],
                tasks: ['jshint']
            }
        }
    });
    grunt.registerTask('dev', ['jshint', 'clean', 'copy', 'replace', 'watch']);
    grunt.registerTask('gamma', ['jshint', 'clean', 'copy', 'uglify', 'replace'])
};