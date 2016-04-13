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
        // compile sass to css
        // https://github.com/gruntjs/grunt-contrib-sass
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/custom.css': 'scss/custom.scss'
                }
            }
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
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-bootlint');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch', 'sass', 'hologram', 'bootlint']);

};
