exports.config = {
  baseUrl: 'stencil-angular-example',
  autoprefixer: [
    '> 1%',
    'last 2 versions',
    'IE 11'
  ],
  namespace: 'stencil-angular-example',
  outputTargets: [{
    type: 'www'
  }, {
    type: 'dist'
  }],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};