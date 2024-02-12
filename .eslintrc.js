module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "react-native",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/no-unresolved": "off",
    "import/no-namespace": "off",
    "no-use-before-define": "off",
    "import/named": "off",
    "import/prefer-default-export": "off",
    "no-undef": "off",
    "react/jsx-no-bind": "off",
    "react/no-unescaped-entities": "off",
    "react-native/no-color-literals": "off",
    "import/no-commonjs": "off",
    "import/namespace": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
