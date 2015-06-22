module.exports = function (grunt) {
    grunt.initConfig({
        // configuration for ts
        ts: {
            options: {
                target: 'es5',
                module: 'commonjs',
                noImplicitAny: true,
                removeComments: false
            },
            main: {
                src: ['*.ts'],
                outDir: '.'
            }
        },

        // configuration for bower
        bower: {
            install: {
                options: {
                    verbose: true,
                    install: true,
                    layout: function (type, component) { return component; }
                }
            }
        },

        // configuration for tsd
        tsd: {
            install: {
                options: {
                    command: 'reinstall',
                    latest: false,
                    config: './tsd.json'
                }
            }
        },

        watch: {
            files: ['*.ts'],
            tasks: ['ts:main']
        }
    });

    grunt.registerTask('default', ['ts:main']);
    grunt.registerTask('setup', ['bower', 'tsd']);

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tsd');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
