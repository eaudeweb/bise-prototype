module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    less: {
      options: {
        compress: false,
        yuicompress: true,
        optimization: 2,
      },
      development: {
        options: {
          sourceMap: true,
          sourceMapFileInline: true
          // sourceMapFilename: "css/main.css.map",
          // sourceMapBasepath: "css/",
          // sourceMapURL: "main.css.map"
        },
        files: {
          './static/css/main.css': './src/less/main.less'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')()
        ]
      },
      dist: {
        src: './static/css/main.css'
      }
    },
    watch: {
      styles: {
        files: ['./src/less/**/*.less'], // which files to watch
        tasks: ['less:development', 'postcss'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less:development', 'postcss', 'watch']);
  grunt.registerTask('dist', ['less:production', 'postcss']);
};