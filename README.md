# Express-React-Webpack

use this link for reference 
note: watch out for the reference of webpack versions

steps to create the setup:
1. create express app
    express "your app name"
2. run "npm install"
3. Babel setup
   run "npm install babel-plugin-transform-class-properties babel-plugin-transform-runtime \
            babel-polyfill babel-preset-es2015 babel-preset-react babel-preset-stage-0 \
            babel-register --save"
   commands to install Babel jsx transpiler
4.create .babelrc file with below content
  {
  "presets": [
    "es2015",
    "stage-0",
    "react"
  ],
  "plugins": [
    "transform-runtime",
    "transform-class-properties"
  ]
}

5.create index.html inside public folder(create a <div id="root"> </div>)
 with sample html
 <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Hello, world</title>
  </head>
  <body>
    <div id="root"> </div>
    <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
  </body>
</html>

6. install Webpack
   npm install webpack@2.1.0-beta.22 babel-loader react react-dom --save

7. create client.js file inside ./src folder
    import React from 'react';
    import ReactDOM from 'react-dom';

    ReactDOM.render(
      <h1>Hello, world!</h1>,
      document.getElementById('root')
    );
8. create a webpack.config.js file
    module.exports = {
    entry: './src/client.js',
    output: {
      path: './public',
      filename: 'bundle.js'       
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json'] 
    }
  };
9. paste below line insde scripts in package.json
"webpack": "webpack",

10. run command "npm run webpack"
11. run npm start
12. check your application on port 3000 of localhost

thats it!!!
