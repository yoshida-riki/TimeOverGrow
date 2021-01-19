module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: ['prettier', 'prettier/vue'],
  plugins: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  root: true,
  rules: {
    // jsのインデントは２
    indent: [2, 2],
    // 不要なカッコは消す
    'no-extra-parens': 1,
    // 無駄なスペースは削除
    'no-multi-spaces': 2
  }
}
