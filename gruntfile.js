// The "wrapper" function
module.exports = function(grunt) {

  // Project and task configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /*
      Grunt Sass
      Compile Sass to CSS using node-sass
      https://www.npmjs.com/package/grunt-sass
    */
    sass: {

    options: {
        sourceMap: false
    },
    dist: {
        files: {
            'css/styles.css': 'assets/scss/styles.scss'
        }
    }
  },

  /*
    Grunt Contrib Watch
    Monitor files and excute tasks
    https://www.npmjs.com/package/grunt-contrib-watch
  */
  watch:{

    sass: {

      files: [
        'assets/scss/*.scss'
      ],
      tasks: [
        'sass'
      ]
    },
    scripts: {

      files: [
        'assets/js/*.js'
      ],
      tasks: [
        'uglify'
      ]
    }
  },
  /*
    Grunt Contrib Uglify
    Minify JS files
    https://www.npmjs.com/package/grunt-contrib-uglify
  */
  uglify: {

    my_target: {

      files: {
        'js/scripts.js' : ['assets/js/scripts.js', 'node_modules/jquery/dist/jquery.js']
      }
    }
  }



  });

  // Loading Grunt plugins and tasks
  require('load-grunt-tasks')(grunt);

  // Custom tasks
  grunt.registerTask('default', ['watch']);
};
