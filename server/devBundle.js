//import to compile React components 
import config from './../config/config.js';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './../webpack.config.client.js';

//Setup compile method 
//Let Express use webpack middleware to:
//-compile
//-bundle
//-serve code 
//-hot reloading
const compile = (app) => {
    if(config.env === "development"){
      const compiler = webpack(webpackConfig);
      const middleware = webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
      });
      app.use(middleware);
      app.use(webpackHotMiddleware(compiler));
    }
  }
  
  export default {compile};