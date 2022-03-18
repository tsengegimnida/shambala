module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["build/*", "node_modules/*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/no-var-requires": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
