module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
      "indent": ["error", 2],
      "react/jsx-filename-extension": "off",
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    },
  "env": {
    "browser": true,
  }
};