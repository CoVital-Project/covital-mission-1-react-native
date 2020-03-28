module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        "header-max-length": [2, 'always', 75],
        "subject-case": [2, 'always', 'sentence-case'],
        "type-empty": [1, 'never', ]
      }
}