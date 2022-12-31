module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'airbnb-base',
        'prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    plugins: ['prettier'],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        semi: 'off',
        'prefer-const': 'error',
        'prettier/prettier': ['error'],
    },
}
