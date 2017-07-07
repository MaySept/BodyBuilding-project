var path = require('path')
var config = require('../config')
var utils = require('./utils')
var glob = require('glob')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

var projectRoot = path.resolve(__dirname, '../')
var srcDir = path.resolve(__dirname, '../src')
var entries = utils.getEntries(srcDir + '/module/*/*.js')
var libs=path.resolve(__dirname, '../static/js/lib')
//entries['flexible'] = path.resolve(__dirname, libs+'/flexible/flexible.js')
var autoprefixerConf = autoprefixer({ browsers: ['last 2 versions','Android >= 4.0','iOS >= 6'] });

function resolve (dir) {
  return path.join(__dirname, '..', dir) //__dirname 指向当前目录执行脚本
}


module.exports = {
    entry: entries,

    output: {
        path: config.build.assetsRoot, // 打包后文件存放的地方
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js' // 打包后文件名
    },

    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue',
            // 'jquery$': 'jquery/dist/jquery',// 注销，使用CDN
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'images': path.resolve(__dirname, '../src/assets/images'),
            'js': path.resolve(__dirname, '../src/assets/js'),
            'components': path.resolve(__dirname, '../src/components'),
            'scss': path.resolve(__dirname, '../src/assets/scss'),

        }
    },

    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    externals: {
        'wx': 'jWeixin', // 使用cdn资源，暴露wx
        'jquery': 'jQuery'  // 使用cdn资源，暴露jquery
    },
    module: {
        preLoaders: [
            {
                test: /\.vue$/, // 一个处理loaders所处理文件的拓展名的正则表达式
                loader: 'eslint', // loader的名称
                include: projectRoot, // 手动添加必须处理的文件
                exclude: /node_modules/ // 屏蔽不需处理文件
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            }
        ],

        loaders: [
            { test: /\.jsx?$/,
              loaders: ['react-hot', 'jsx?harmony'],
              include: path.join(__dirname, 'src')
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            /*{
                test: /\.(css|scss)$/, // 感叹号的作用在于使同一文件能够使用不同类型的loader
                loader: "style!css!postcss!sass"
            },*/
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('images/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    // js 中引入的样式处理
    postcss: [autoprefixerConf],
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    vue: {
        // .vue 中的样式处理
        loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
        postcss: [autoprefixerConf]
    },
    plugins:[]
}
var pages = utils.getEntries('./src/module/**/*.html',1);

for (var pathname in pages) {
  // 生成html相关配置
  var conf = {
    filename: pathname + '.html', // html文件输出路径
    template: pages[pathname],   // 模板路径
    inject: true,                // js插入位置
    minify: {
      //压缩设置
      //removeComments: true,
      //collapseWhitespace: true,
      //removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  };
  pathname=pathname.split("/")[1];//去掉views
  if (pathname in module.exports.entry) {
    conf.inject = 'body';
    //如果每个html没有进入这里的话，那么全部js将会插入html
    conf.chunks = ['flexible', pathname, 'vendor', 'manifest', 'bootstrap'],
    conf.hash = true;
  }
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
