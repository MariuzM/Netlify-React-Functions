module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@emotion/babel-preset-css-prop'],
  plugins: [
    [
      'emotion',
      {
        sourceMap: false,
        autoLabel: true,
        labelFormat: '-',
        cssPropOptimization: true,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', { regenerator: true }],
  ],
}
