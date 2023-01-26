/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:vuejs-accessibility/recommended'
  ],
  env: {
    'vue/setup-compiler-macros': true,
    node: true
  },
  overrides: [
    // {
    //   files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
    //   extends: ['plugin:cypress/recommended']
    // }
  ],
  rules: {
    'no-console':
        process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true }
    ],
    'vue/no-child-content': [
      'error',
      'always',
      { directives: ['text', 'html', 't'] }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/no-unused-components': 'off',
    'standard/computed-property-even-spacing': 'off',
    endOfLine: 'off',
    'no-return-await': 'off',
    'vue/no-unused-vars': 'off',
    'vue/html-indent': 'off',
    'vue/require-v-for-key': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/require-default-prop': 'off',
    'vue/order-in-components': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attributes-order': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
