// - -------------------------------------------------------------------- - //
module.exports = function(grunt) {

  grunt.initConfig({

    browserify: {
      build: {
        files: {
          "./src/index.js": "./src/js/index.js",
        },
      },
    },
    
    less: {
      build: {
        files: {
          "./src/index.css": "./src/less/index.less"
        }
      },
    },
  
    watch: {
      js: {
        files: ["./src/**/*.js"],
        tasks: ["browserify:build"],
        options: {
          spawn: false,
        },
      },
      less: {
        files: ["./src/**/*.less"],
        tasks: ["less:build"],
        options: {
          spawn: false,
        },
      },
    },

  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  
  grunt.registerTask("build",[
    "browserify:build",
    "less:build",
  ]);

};
// - -------------------------------------------------------------------- - //