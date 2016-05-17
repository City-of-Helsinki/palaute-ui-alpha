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
                // livereload: true
              },
          },
          cssmin: {
            files: ['css/custom.css'],
            tasks: ['cssmin']
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
        },
        // prefix task
        // https://github.com/nDmitry/grunt-autoprefixer
        autoprefixer: {
            options: {
            browsers: ['last 2 versions', 'ie 9']
            },
            css: {
              src: ['css/custom.css'],
            }
          },
          // compile sass to css with grunt-sass
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
          },
          browserSync: {
              dev: {
                  bsFiles: {
                      src : [
                          'css/*.css',
                          '*.html'
                      ]
                  },
                  options: {
                      watchTask: true,
                      server: './',
                      browser: "google chrome"
                  }
              }
          },
          cssmin: {
            options: {
              report: 'min',
              sourceMap: true,
            },
            target: {
              files: [{
                expand: true,
                cwd: 'css',
                src: ['custom.css'],
                dest: 'css',
                ext: '.min.css'
              }]
            }
          },
          htmllint: {
          all: ["*.html"]
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-bootlint');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-html');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
      'sass',
      'autoprefixer',
      // 'cssmin',
      // 'hologram',
      'browserSync',
      'watch'
    ]);
    grunt.registerTask('lint', [
      'bootlint',
      'htmllint'
    ]);

    grunt.registerTask('docs', [
      'watch:sass',
      'hologram'
    ]);


};
