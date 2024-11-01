// eslint.config.js

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',            // ESLint's recommended rules
    'plugin:react/recommended',      // React-specific linting rules
    'plugin:jsx-a11y/recommended',   // Accessibility rules for JSX
    'plugin:import/errors',          // Helps validate proper imports
    'plugin:import/warnings',
    'plugin:prettier/recommended',    // Integrates Prettier with ESLint
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,                      // Enables JSX parsing
    },
    ecmaVersion: 12,                  // ECMAScript version
    sourceType: 'module',             // Allows the use of imports
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  settings: {
    react: {
      version: 'detect',               // Automatically detects the React version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],  // File extensions for import resolution
      },
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@assets', './src/assets'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    // General Rules
    'no-unused-vars': 'warn',          // Warns about unused variables
    'no-console': 'warn',              // Warns about console statements
    'no-debugger': 'warn',             // Warns about debugger statements

    // React Specific Rules
    'react/prop-types': 'off',         // Disables prop-types as we use TypeScript or other means
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+

    // Import Rules
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // JSX Accessibility Rules
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],

    // Prettier Integration
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
