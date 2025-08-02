'use strict';

module.exports = function (grunt) {
    // Time how long tasks take
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Define the configuration for all the tasks
    grunt.initConfig({
        // Sass compilation
        sass: {
            dist: {
                files: {
                    'src/css/styles.css': 'src/css/styles.scss'
                }
            }
        },

        // Watch files for changes
        watch: {
            files: 'src/css/*.scss',
            tasks: ['sass']
        },

        // Browser Sync for development
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'src/css/*.css',
                        'src/html/*.html',
                        'src/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./src/html"
                    }
                }
            }
        },

        // Copy files
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './src/html',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        },

        // Clean build directory
        clean: {
            build: {
                src: ['dist/']
            }
        },

        // Prepare usemin
        useminPrepare: {
            html: ['src/html/*.html'],
            options: {
                dest: 'dist'
            }
        },

        // Concat files
        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },

        // Uglify JavaScript
        uglify: {
            dist: {}
        },

        // Minify CSS
        cssmin: {
            dist: {}
        },

        // File revisioning
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            release: {
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css'
                    ]
                }]
            }
        },

        // Usemin - Replace assets with revved versions
        usemin: {
            html: ['dist/*.html'],
            options: {
                assetsDirs: ['dist', 'dist/css', 'dist/js']
            }
        }
    });

    // Register tasks
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    
    grunt.registerTask('build', [
        'clean',
        'sass',
        'copy',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ]);
};