// 每一个页面是一定要有 html 文件的，而这个插件能帮助我们将打包后的 js 文件自动引进 html 文件中，毕竟你不可能每次更改代码后都手动去引入 js 文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// 本地起服务还是打包都有进度展示
const WebpackBar = require('webpackbar')
// 在我们打包或启动本地服务时给予错误提示
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// 缓存 加快二次编译速度
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const {
  resolve
} = require('path')
const {
  PROJECT_PATH,
  isDev
} = require('../constant.js')

const getCssLoaders = (importLoaders) => [
  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: isDev,
      importLoaders,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      // webpack 5 写法
      postcssOptions: {
        plugins: [
          require('postcss-flexbugs-fixes')(),
          !isDev && [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true,
                flexbox: 'no-2009',
              },
              stage: 3,
            },
          ],
        ].filter(Boolean),
      },
    },
  },
]


module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, './src/index.tsx'),
  },
  output: {
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: resolve(PROJECT_PATH, './dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      'Src': resolve(PROJECT_PATH, './src'),
      'Components': resolve(PROJECT_PATH, './src/components'),
      'Utils': resolve(PROJECT_PATH, './src/utils'),
      '~styles': resolve(PROJECT_PATH, './src/assets/style')
    }
  },
  //  减少打包体积
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
    }),
    // !isDev && new MiniCssExtractPlugin({
    //   filename: 'css/[name].[contenthash:8].css',
    //   chunkFilename: 'css/[name].[contenthash:8].css',
    //   ignoreOrder: false,
    // }),
    new CopyPlugin({
      patterns: [
        {
          context: resolve(PROJECT_PATH, './public'),
          from: '*',
          to: resolve(PROJECT_PATH, './dist'),
          toType: 'dir',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new WebpackBar({
      name: isDev ? '正在启动' : '正在打包',
      color: isDev ?  '#52c41a' : '#722ed1',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve(PROJECT_PATH, './tsconfig.json'),
      },
    }),
    // new HardSourceWebpackPlugin(),
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: getCssLoaders(1),
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: '[name].[contenthash:8].[ext]',
            outputPath: 'assets/images',
          },
        }, ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[contenthash:8].[ext]',
            outputPath: 'assets/fonts',
          },
        }, ],
      },
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        exclude: /node_modules/,
      },
    ]
  }
}
