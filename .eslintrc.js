module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "airbnb",
    "prettier/react",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
    "airbnb-base",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  plugins: [
    "react",
    "jsx-a11y",
    "@typescript-eslint",
    "import",
    "prettier",
    "jest",
    "eslint-comments",
    "react-native",
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          ".storybook/**/*.js",
          "config-overrides.js",
          "src/setupTests.ts",
          "src/components/**/*.stories.tsx",
          "src/**/*.test.{ts,tsx}",
        ],
      },
    ],
  },
};
