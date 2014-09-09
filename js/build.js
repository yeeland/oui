({
    baseUrl: '.',
    mainConfigFile: 'common.js',
    findNestedDependencies: true,

    out: 'lego.min.js',
    // optimize: 'uglify2',
    optimize: 'none',

    include: ['app/directives/poptip'],
    insertRequire: ['main.js'],
    name: '../../node_modules/almond/almond.js',
    wrap: true
})
