module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    "@typescript-eslint/restrict-plus-operands": "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // Variable
    // 'init-declarations': 'error',
    // 'no-use-before-define': 'error',
    // Stylistic Issues
    "array-bracket-newline": ["error", { multiline: true, minItems: null }],
    "array-bracket-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": "error",
    // 'comma-dangle': 'warn',
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    //'implicit-arrow-linebreak': ['error', 'beside'],
    // indent: ['error', 4],
    "keyword-spacing": "error",
    "multiline-ternary": ["error", "never"],
    // 'no-lonely-if': 'error',
    "no-mixed-operators": "error",
    "no-tabs": 0,
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true },
    ],
    "quote-props": ["error", "as-needed"],
    // quotes: ['error', 'prefer-single'],
    semi: ["warn", "always"],
    "semi-spacing": "error",
    // ES6
    //  'arrow-spacing': 'error',
    // 'no-confusing-arrow': 'error',
    "no-duplicate-imports": "warn",
    "no-var": "warn",
    // 'object-shorthand': 'error',
    "prefer-const": "warn",
    //  'prefer-template': 'error'
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      excludedFiles: ["*.test.js", "*.js", "assets/*.js", "assets/js/scripts.js", "assets/js/core/bootstrap.min.js"],
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: "0.53", // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
    ],
  },
};
