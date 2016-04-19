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
        },
        // bake: {
        //   includes: {
        //     options: {
        //         // Task-specific options go here.
        //     },
        //     files: [ {
        //         expand: true,     // Enable dynamic expansion.
        //         cwd: '',      // Src matches are relative to this path.
        //         src: [ '*.html' ], // Actual pattern(s) to match.
        //         dest: 'build/',   // Destination path prefix.
        //         ext: '.html'   // Dest filepaths will have this extension.
        //         } ]
        //     },
        //   },
        //   // copy task copies files to build folder
        //   //
        //   copy: {
        //       main: {
        //         files: [
        //           {expand: true, src: ['css/*', 'fonts/*', 'img/*'], dest: 'build/'},
        //         ],
        //       },
        //     },
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-bootlint');
    // grunt.loadNpmTasks('grunt-bake');
    // grunt.loadNpmTasks('grunt-contrib-copy');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
      'watch',
      'sass',
      'hologram',
      'bootlint',
      // 'bake',
      // 'copy'
    ]);

};
