let withCss = require('@zeit/next-css');

// TODO: 暂时不配置，有问题！！！
if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}




const stylesa = withCss(
   {}
);

module.exports = {
    stylesa,
}
