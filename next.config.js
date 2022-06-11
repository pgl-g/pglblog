let withCss = require('@zeit/next-css');

const removeImports = require('next-remove-imports')();

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}




const stylesa = withCss(
   {}
);

module.exports = removeImports({
    stylesa,
})
