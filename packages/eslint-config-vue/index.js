module.exports = {
  extends: [
    '@firelayer',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/no-v-html': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': 0
  }
}
