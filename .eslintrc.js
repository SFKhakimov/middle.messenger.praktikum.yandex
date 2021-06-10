module.exports = {
    extends: ['airbnb-typescript/base'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "import/prefer-default-export": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "off",
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
        "no-console": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "no-restricted-globals": "off",
        "no-plusplus": "off"
    }
};
