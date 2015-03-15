// - -------------------------------------------------------------------- - //
module.exports = function(grunt) {

  grunt.initConfig({
    
    package: grunt.file.readJSON("./package.json"),

    browserify: {
      build: {
        options: {
          transform: [ require("grunt-react").browserify ]
        },
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

    uglify: {
      dist: {
        src: "./src/index.js",
        dest: "./dist/<%= package.name %>-<%= package.version %>/index.js",
      },
    },

    copy: {
      dist: {
        expand: true,
        cwd: "./src",
        src: [
          "index.html",
          "index.css",
        ],
        dest: "./dist/<%= package.name %>-<%= package.version %>/",
        filter: function(name) { return name.indexOf("Thumbs.db") === -1 },
      },
    },
  
    watch: {
      js: {
        files: ["./src/**/*.js","./src/**/*.jsx"],
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
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("build",[
    "browserify:build",
    "less:build",
  ]);
  
  grunt.registerTask("dist",[
    "browserify:build",
    "less:build",
    "copy:dist",
    "uglify:dist",
  ]);

};
// - -------------------------------------------------------------------- - //
