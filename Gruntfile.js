module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'js/show-on-scroll.js',
                    'js/smooth-scroll.js',
                    'js/sticky-nav.js',
                    'js/toggle-cite-block.js',
                    'js/toggle-menu.js'
                    // analogicznie inne pliki js
                ],
                dest: 'js/concat.js'
            }
        },
        cssmin: {
            css:{
                src: 'css/style.css',
                dest: 'css/style.min.css'
            }
        },
        uglify: {
            js: {
                src: 'js/concat.js',
                dest: 'js/scripts.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', [
        'concat:js',
        'cssmin:css',
        'uglify:js'
    ]);

};
