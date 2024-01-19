/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true
  },
  plugins: ['import', 'vue', '@typescript-eslint', 'prettier', 'playwright'
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:import/typescript',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:playwright/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue-test-utils/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  parser: 'vue-eslint-parser',
  rules: {
    'prettier/prettier': [
      'error',
      {
        $schema: 'https: //json.schemastore.org/prettierrc',
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ],
    'max-len': [
      'off',
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true
      }
    ],
    // 'comma-dangle': ['warn', 'always-multiline'],
    'arrow-spacing': ['warn',
      { before: true, after: true
      }
    ],
    'generator-star-spacing': 'off',
    'no-console': ['warn',
      { allow: ['warn', 'error', 'info'
        ]
      }
    ],
    'no-debugger': 'warn',
    'linebreak-style': 0,
    'no-shadow': 'off',
    semi: ['error', 'never'
    ],
    quotes: ['error', 'single'
    ],
    indent: ['off'
    ],
    'no-dupe-class-members': 'error',
    'no-await-in-loop': 'error',
    'unicorn/no-null': 'off',
    'unicorn/filename-case': [
      'off',
      {
        case: 'kebabCase'
      }
    ],
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-empty-file': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/switch-case-braces': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true
      }
    ],
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    // vue
    'vue/html-indent': [
      'off',
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/no-reserved-component-names': 'warn',
    'vue/require-v-for-key': 'off',
    'vue/no-v-html': 'off',
    'vue/require-name-property': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/require-component-is': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/valid-v-if': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/component-definition-name-casing': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-end-tags': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/order-in-components': 'off',
    'vue/no-mutating-props': 'warn',
    'playwright/no-skipped-test': 'off',
    'playwright/no-element-handle': 'off'
  }
}