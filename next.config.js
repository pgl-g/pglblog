let withCss = require('@zeit/next-css');

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}




const stylesa = withCss(
   {}
);

module.exports = {
    stylesa,
}
