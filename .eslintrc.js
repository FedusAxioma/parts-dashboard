module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['@typescript-eslint', 'react', 'jest', 'react-hooks'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended'
	],
	rules: {
		'@typescript-eslint/no-inferrable-types': 0,
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline'
			}
		],
		'comma-spacing': 2,
		'constructor-super': 2,
		curly: 2,
		'eol-last': 2,
		'for-direction': 2,
		'getter-return': 2,
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'lines-around-comment': 2,
		'newline-after-var': 2,
		'newline-before-return': 2,
		'no-async-promise-executor': 2,
		'no-case-declarations': 2,
		'no-class-assign': 2,
		'no-compare-neg-zero': 2,
		'no-cond-assign': 2,
		'no-console': 0,
		'no-const-assign': 2,
		'no-constant-condition': 2,
		'no-control-regex': 2,
		'no-debugger': 2,
		'no-delete-var': 2,
		'no-dupe-args': 2,
		'no-dupe-class-members': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-duplicate-imports': 2,
		'no-else-return': 2,
		'no-empty-character-class': 2,
		'no-empty-function': ['error', { allow: ['constructors'] }],
		'no-empty-pattern': 2,
		'no-empty': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-semi': 2,
		'no-fallthrough': 2,
		'no-func-assign': 2,
		'no-global-assign': 2,
		'no-inner-declarations': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-misleading-character-class': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-multi-spaces': 2,
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
		'no-new-symbol': 2,
		'no-obj-calls': 2,
		'no-octal': 2,
		'no-prototype-builtins': 2,
		'no-redeclare': 2,
		'no-regex-spaces': 2,
		'no-self-assign': 2,
		'no-shadow-restricted-names': 2,
		'no-sparse-arrays': 2,
		'no-this-before-super': 2,
		'no-trailing-spaces': 2,
		'no-undef': 2,
		'no-unexpected-multiline': 2,
		'no-unreachable': 2,
		'no-unsafe-finally': 2,
		'no-unsafe-negation': 2,
		'no-unused-labels': 2,
		'no-unused-vars': 2,
		'no-useless-catch': 2,
		'no-useless-escape': 2,
		'no-useless-return': 2,
		'no-var': 2,
		'no-with': 2,
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: ['if', 'for', 'while', 'do', 'function', 'class', 'switch', 'try', 'throw']
			},
			{ blankLine: 'always', prev: 'block-like', next: '*' }
		],
		'prefer-arrow-callback': 2,
		quotes: ['error', 'single'],
		'react/prop-types': 'off',
		'require-yield': 2,
		semi: 2,
		'sort-imports': [
			'error',
			{
				ignoreCase: true
			}
		],
		'use-isnan': 2,
		'valid-typeof': 2,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn'
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off'
			}
		}
	],
	ignorePatterns: ['ci/'],
	settings: {
		react: {
			version: 'detected'
		}
	},
	globals: {
		__dirname: 'readonly',
		process: 'readonly',
		module: 'readonly',
		require: 'readonly',
		exports: 'writable',
		document: false
	},
	env: {
		jest: true,
		node: true,
		serviceworker: true,
		browser: true
	}
};
