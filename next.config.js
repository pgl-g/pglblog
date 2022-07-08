let withCss = require('@zeit/next-css');

const removeImports = require('next-remove-imports')();

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}




const stylesa = withCss(
   {}
);

const images = {
    domains: ['https://image.immortalboy.cn/public/uploads/2021/10/22/1634917151458920.png']
}

module.exports = removeImports({
    stylesa,
    images
})
