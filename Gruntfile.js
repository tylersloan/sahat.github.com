'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'assets/css/main.min.css': [
            'assets/css/main.css'
          ]
        }
      },
      dev: {
        options: {
          compile: true,
          compress: false
        },
        files: {
          'assets/css/main.css': [
            'assets/css/main.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/main.min.js': [
            'assets/js/vendor/*.js',
            'assets/js/main.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'images/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: 'images/'
        }]
      }
    },
    watch: {
      css: {
        files: [
          'assets/css/main.css'
        ],
        tasks: ['recess']
      },
      js: {
        files: [
          'assets/js/vendor/*.js',
          'assets/js/*.js',
          '!assets/js/scripts.min.js'
        ],
        tasks: ['uglify']
      }
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'recess',
    'uglify',
    'imagemin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
