'use strict';
var fs = require('fs');
var eslint = require('eslint');
var ESLintTester = require('eslint-tester');

var failureCase = fs.readFileSync('./tests/fixtures/failure.jsx', 'utf8');
var successCase = fs.readFileSync('./tests/fixtures/success.jsx', 'utf8');

var eslintTester = new ESLintTester(eslint.linter);

eslintTester.addRuleTest('rules/no-react-scope-bound-assignment', {
    valid: [
        {
            code: successCase,
            ecmaFeatures: {
                jsx: true
            },
            env: {
                node: true
            }
        }
    ],
    invalid: [
        {
            code: failureCase,
            errors: [{ message: 'outsideVariable is initialized outside of a react class, but reassigned within one.' }],
            ecmaFeatures: {
                jsx: true
            },
            env: {
                node: true
            }
        }
    ]
});