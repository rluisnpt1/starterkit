//register babel to transpile before our tests run.
require('@babel/register')

//disable webpack features that Mach doesn't understand
require.extensions['.css'] = function () {}
