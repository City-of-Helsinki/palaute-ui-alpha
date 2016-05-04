module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // watch and compile sass files
        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
          sass: {
              files: ['scss/*.scss'],
              tasks: ['sass'],
              options: {
                livereload: true
              },
          },
          // livereload html pages, use liverealod.com browser plugin
          livereload: {
            options: {
              livereload: true
            },
            files: ['*.html'],
          },
        },
        // hologram syleguide generation with Grunt
        // https://github.com/trulia/hologram/
        hologram: {
          generate: {
            options: {
              config: 'hologram/hologram_config.yml'
            }
          }
        },
        // Lint bootstrap markup
        // https://github.com/twbs/grunt-bootlint
        bootlint: {
          options: {
            relaxerror: [],
            showallerrors: false,
            stoponerror: false,
            stoponwarning: false
          },
          files: ['*.html']
        },
        autoprefixer: {
            options: {
            // Task-specific options go here.
            browsers: ['last 2 versions', 'ie 9']
            },
            css: {
            // Target-specific file lists and/or options go here.
              src: ['css/custom.css'],
            }
          },
          // compile sass to css with libsass
          // https://github.com/sindresorhus/grunt-sass
          sass: {
            options: {
              sourceMap: true,
              outputStyle: 'expanded',
            },
            dist: {
              files: {
                'css/custom.css': 'scss/custom.scss'
              }
            }
          }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-bootlint');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
      'sass',
      'autoprefixer',
      'hologram',
      // 'bootlint',
      'watch'
    ]);
    grunt.registerTask('lint', [
      'bootlint',
    ]);


};
