module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // 让 ESLint 解析 TS
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // 结合 Prettier
  ],
  rules: {
    // 这里可以按需修改规则
    'vue/multi-word-component-names': 'off', // 允许单字组件名
    '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
}
