module.exports = {
  overrides: [
    {
      files: ['./src/**/*.{js,jsx,ts,tsx}'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
  ],
};
