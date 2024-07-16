const { src, dest, parallel } = require('gulp');//Puxa gulp
const named = require('vinyl-named');//Puxa named para remomear arquivos.
const webpack = require('webpack-stream');//Puxa webpack p/customizar

function html() {//Puxa os html's
  return src('src/index.html')//Puxa todos os arqs. '.html'
    .pipe(dest('public/'));//Salva na pasta public
}
function htaccess() {
  return src('src/.htaccess')//Puxa todos os arqs. '.htaccess'
    .pipe(dest('public/'));//Salva na pasta public
}
function js() {//Função para lidar com javascript
  return src('src/index.js')//Chama index.js
    .pipe(named())//Renomeia o arquivo de main.js p/ index.js
    .pipe(webpack({
      mode:'production',
      output:{
        filename:'[name].js'//Salva com 'named' como index.js
      },
      module:{
        rules:[
          {
            test:/\.(js|jsx)$/,
            use:{
              loader:'babel-loader',
              options:{
                presets:['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test:/\.(css|scss)$/,
            use:[
              "style-loader",
              "css-loader",
              "sass-loader"
            ]
          }
        ]
      }
    }))
    .pipe(dest('public/'));
}

exports.default = parallel(html, htaccess, js);