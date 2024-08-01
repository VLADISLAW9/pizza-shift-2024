const { eslint } = require('@vladislaw9/eslint');

module.exports = {
  ...eslint.react,
  ignorePatterns: ['**/*.config.ts', 'src/shared/graphql/__generated__'],
  overrides: [
    ...eslint.react.overrides,
    {
      files: ['**/*.{ts,tsx}'],
      settings: {
        atomPostfix: ''
      },
      parserOptions: {
        tsconfigRootDir: __dirname
      },
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        "@typescript-eslint/no-misused-promises": 'off',
        "@typescript-eslint/no-unsafe-member-access": 'off',
        "@typescript-eslint/naming-convention": 'off'
      }
    }
  ]
};
