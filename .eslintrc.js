// https://github.com/typescript-eslint/typescript-eslint#getting-started--installation
module.exports = {
  root: true,
  ignorePatterns: [".eslintrc.js", "/src/serviceWorker.ts"],
  parser: '@typescript-eslint/parser',
  rules: {
    "@typescript-eslint/no-unused-vars" : "off",
    "react/react-in-jsx-scope": "off"
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }
};
