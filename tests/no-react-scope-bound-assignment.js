'use strict';

var ESLintTester = require('eslint').RuleTester;
var fs = require('fs');
var rule = require('../rules/no-react-scope-bound-assignment');

var eslintTester = new ESLintTester();

var parserOptions = {
    ecmaVersion: 6,
    ecmaFeatures: { jsx: true }
};

var env = { node: true };



var failureCase = fs.readFileSync('./tests/fixtures/failure.jsx', 'utf8');
var successCase = fs.readFileSync('./tests/fixtures/success.jsx', 'utf8');

eslintTester.run('no-react-scope-bound-assignment', rule, {
    valid: [
        {
            code: successCase,
            parserOptions: parserOptions,
            env: env
        }
    ],
    invalid: [
        {
            code: failureCase,
            errors: [{ message: 'outsideVariable is initialized outside of a react class, but reassigned within one.' }],
            parserOptions: parserOptions,
            env: env
        }
    ]
});