module.exports = function (grunt) {
    var dirs = grunt.config('dirs');

    grunt.config.merge({
        clean: {
            build: {
                src: [dirs.release + '/*.*']
            },
            options: {
                force: true
            }
        }
    });

    return grunt;
};
