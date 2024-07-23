module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/react-in-jsx-scope": "off",
    "quotes": ["error", "single", "double"],
  },
};
