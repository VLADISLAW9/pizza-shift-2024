const { eslint } = require('@vladislaw9/eslint');

module.exports = {
  ...eslint.react,
  ignorePatterns: ['vite.config.ts'],
  overrides: [
    ...eslint.react.overrides,
    {
      files: ['**/*.{ts,tsx}'],
      settings: {
        atomPostfix: ''
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    }
  ]
};