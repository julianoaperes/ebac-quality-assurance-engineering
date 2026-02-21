// eslint.config.js
const cypressPlugin = require('eslint-plugin-cypress');
const prettierPlugin = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['node_modules/**', 'cypress/videos/**', 'cypress/screenshots/**'],
  },

  // Base JS (project-wide)
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // Cypress files (support/specs)
  {
    files: ['cypress/**/*.js', '**/*.cy.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      cypress: cypressPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
    },
  },
];
