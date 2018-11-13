module.exports = {
  'env': {
    'es6': true,
    'mocha': true,
    'node': true,
  },
  'rules': {
    // Enforce getter and setter pairs in objects
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // Enforce return statements in callbacks of array methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'error',

    // Enforce the use of variables within the scope they are defined
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Enforce that class methods utilize this
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error', {
      'exceptMethods': [],
    }],

    // Enforce a maximum cyclomatic complexity allowed in a program
    // http://eslint.org/docs/rules/complexity
    'complexity': 'off',

    // Require return statements to either always or never specify values
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // Enforce consistent brace style for all control statements
    // http://eslint.org/docs/rules/curly
    'curly': ['error', 'all'],

    // Require default cases in switch statements
    // http://eslint.org/docs/rules/default-case
    'default-case': 'error',

    // Enforce consistent newlines before and after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // Enforce dot notation whenever possible
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', {
      'allowKeywords': true,
    }],

    // Require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq': 'error',

    // Require for-in loops to include an if statement
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // Disallow the use of alert, confirm, and prompt
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // Disallow the use of arguments.caller or arguments.callee
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Disallow lexical declarations in case clauses
    // http://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Disallow division operators explicitly at the beginning of regular expressions
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // Disallow else blocks after return statements in if statements
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // Disallow empty functions
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
      'allow': [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }],

    // Disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow null comparisons without type-checking operators
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // Disallow the use of eval()
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow extending native types
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disallow unnecessary calls to .bind()
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // Disallow unnecessary labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // Disallow fallthrough of case statements
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disallow leading or trailing decimal points in numeric literals
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // Disallow assignments to native objects or read-only global variables
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', {
      'exceptions': [],
    }],

    // Disallow shorthand type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['off', {
      'allow': [],
      'boolean': false,
      'number': true,
      'string': true,
    }],

    // Disallow variable and function declarations in the global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // Disallow the use of eval()-like methods
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // Disallow this keywords outside of classes or class-like objects
    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // Disallow the use of the __iterator__ property
    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // Disallow labeled statements
    // http://eslint.org/docs/rules/no-labels
    'no-labels': ['error', {
      'allowLoop': false,
      'allowSwitch': false,
    }],

    // Disallow unnecessary nested blocks
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // Disallow function declarations and expressions inside loop statements
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // Disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['off', {
      'detectObjects': false,
      'enforceConst': true,
      'ignore': [],
      'ignoreArrayIndexes': true,
    }],

    // Disallow multiple spaces
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // Disallow multiline strings
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // Disallow new operators outside of assignments or comparisons
    // http://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // Disallow new operators with the Function object
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // Disallow new operators with the String, Number, and Boolean objects
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // Disallow octal literals
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // Disallow octal escape sequences in string literals
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // Disallow reassigning function parameters
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', {
      'props': false,
    }],

    // Disallow the use of the __proto__ property
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // Disallow variable redeclaration
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // Disallow certain properties on certain objects
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      'message': 'arguments.callee is deprecated',
      'object': 'arguments',
      'property': 'callee',
    }, {
      'message': 'Please use Object.defineProperty instead.',
      'property': '__defineGetter__',
    }, {
      'message': 'Please use Object.defineProperty instead.',
      'property': '__defineSetter__',
    }, {
      'message': 'Use the exponentiation operator (**) instead.',
      'object': 'Math',
      'property': 'pow',
    }],


    // Disallow assignment operators in return statements
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // Disallow unnecessary return await
    // http://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // Disallow javascript: urls
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // Disallow assignments where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // Disallow comma operators
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // Disallow throwing literals as exceptions
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // Disallow unmodified loop conditions
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // Disallow unused expressions
    // http://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ['error', {
      'allowShortCircuit': false,
      'allowTernary': false,
    }],

    // Disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to .call() and .apply()
    // http://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // Disallow unnecessary concatenation of literals or template literals
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Disallow unnecessary escape characters
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // Disallow redundant return statements
    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // Disallow void operators
    // http://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // Disallow specified warning terms in comments
    // http://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': ['off', {
      'location': 'start',
      'terms': ['todo', 'fixme'],
    }],

    // Disallow with statements
    // http://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // Enforce the consistent use of the radix argument when using parseInt()
    // http://eslint.org/docs/rules/radix
    'radix': 'error',

    // Disallow async functions which have no await expression
    // http://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // Require var declarations be placed at the top of their containing scope
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // Require parentheses around immediate function invocations
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'outside', {
      'functionPrototypeMethods': false,
    }],

    // Require or disallow “Yoda” conditions
    // http://eslint.org/docs/rules/yoda
    'yoda': 'off',

    // Require braces around arrow function bodies
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'as-needed'],

    // Require parentheses around arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Enforce consistent spacing before and after the arrow in arrow functions
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', {
      'after': true,
      'before': true,
    }],

    // Require super() calls in constructors
    // http://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Enforce consistent spacing around * operators in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 'error',

    // Disallow reassigning class members
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      'allowParens': true,
    }],

    // Disallow reassigning const variables
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow duplicate module imports
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',

    // Disallow new operators with the Symbol object
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Disallow specified modules when loaded by import
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',

    // Disallow this/super before calling super() in constructors
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow unnecessary computed property keys in object literals
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructors
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error', {
      'ignoreDestructuring': false,
      'ignoreExport': false,
      'ignoreImport': false,
    }],

    // Require let or const instead of var
    // http://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Require or disallow method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      'avoidQuotes': true,
      'ignoreConstructors': false,
    }],

    // Require arrow functions as callbacks
    // http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': ['error', {
      'allowNamedFunctions': false,
      'allowUnboundThis': true,
    }],

    // Require const declarations for variables that are never reassigned after declared
    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': true,
    }],

    // Require destructuring from arrays and/or objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': ['error', {
      'AssignmentExpression': {
        'array': false,
        'object': false,
      },
      'VariableDeclarator': {
        'array': true,
        'object': true,
      },
    }, {
      'enforceForRenamedProperties': true,
    }],

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // http://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // Require rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Require spread operators instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // Require template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // Require generator functions to contain yield
    // http://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // Enforce spacing between rest and spread operators and their expressions
    // http://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // Enforce sorted import declarations within modules
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
    }],

    // Require symbol descriptions
    // http://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // Require or disallow spacing around embedded expressions of template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // Require or disallow spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],

    // Require return statements after callbacks
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 'off',

    // Require require() calls to be placed at top-level module scope
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // Require error handling in callbacks
    // http://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'off',

    // Disallow require calls to be mixed with regular variable declarations
    // http://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': ['error', {
      'allowCall': true,
      'grouping': true,
    }],

    // Disallow new operators with calls to require
    // http://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // Disallow the use of process.env
    // http://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // Disallow the use of process.exit()
    // http://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'off',

    // Disallow specified modules when loaded by require
    // http://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',

    // Disallow synchronous methods
    // http://eslint.org/docs/rules/no-sync
    'no-sync': 'off',

    // Disallow await inside of loops
    // http://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // Disallow assignment operators in conditional expressions
    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // Disallow the use of console
    // http://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // Disallow constant expressions in conditions
    // http://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // Disallow control characters in regular expressions
    // http://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // Disallow the use of debugger
    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // Disallow duplicate arguments in function definitions
    // http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Disallow duplicate keys in object literals
    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow duplicate case labels
    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Disallow empty block statements
    // http://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // Disallow empty character classes in regular expressions
    // http://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Disallow reassigning exceptions in catch clauses
    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Disallow unnecessary boolean casts
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      'conditionalAssign': true,
      'nestedBinaryExpressions': false,
      'returnAssign': false,
    }],

    // Disallow unnecessary semicolons
    // http://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // Disallow reassigning function declarations
    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // Disallow variable or function declarations in nested blocks
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in RegExp constructors
    // http://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace outside of strings and comments
    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Disallow calling global object properties as functions
    // http://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Disallow calling some Object.prototype methods directly on objects
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // Disallow multiple spaces in regular expressions
    // http://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // Disallow sparse arrays
    // http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Disallow confusing multiline expressions
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // Disallow unreachable code after return, throw, continue, and break statements
    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // Disallow control flow statements in finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Require calls to isNaN() when checking for NaN
    // http://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // Enforce valid JSDoc comments
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // Enforce comparing typeof expressions against valid strings
    // http://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', {
      'requireStringLiterals': true,
    }],

    'strict': ['error', 'never'],

    // Enforce consistent spacing inside array brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // Enforce consistent spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // Enforce consistent brace style for blocks
    // http://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs'],

    // Enforce camelcase naming convention
    // http://eslint.org/docs/rules/camelcase
    'camelcase': ['error', { 'properties': 'never' }],

    // Enforce or disallow capitalization of the first letter of a comment
    // http://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'off',

    // Require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],

    // Enforce consistent spacing before and after commas
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': 'error',

    // Enforce consistent comma style
    // http://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],

    // Enforce consistent spacing inside computed property brackets
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // Enforce consistent naming when capturing the current execution context
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // Require or disallow newline at the end of files
    // http://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // Require or disallow spacing between function identifiers and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    /**
     Require function names to match the name of the variable or property to which they are
     Assigned
     http://eslint.org/docs/rules/func-name-matching
     **/
    'func-name-matching': 'off',

    // Require or disallow named function expressions
    // http://eslint.org/docs/rules/func-names
    'func-names': 'off',

    // Enforce the consistent use of either function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    'func-style': ['error', 'declaration', {
      'allowArrowFunctions': true,
    }],

    // Disallow specified identifiers
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': ['error', 'err', 'cb'],

    // Enforce minimum and maximum identifier lengths
    // http://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    // http://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // Enforce consistent indentation
    // http://eslint.org/docs/rules/indent
    'indent': ['error', 2, {
      'FunctionDeclaration': {
        'body': 1,
        'parameters': 1,
      },
      'FunctionExpression': {
        'body': 1,
        'parameters': 1,
      },
      'outerIIFEBody': 1,
      'SwitchCase': 1,
      'VariableDeclarator': 1,
    }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': 'off',

    // Enforce consistent spacing between keys and values in object literal properties
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': 'error',

    // Enforce consistent spacing before and after keywords
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'error',

    // Enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'error',

    // Enforce consistent linebreak style
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // Require empty lines around comments
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // Require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', 'always'],

    // Enforce a maximum depth that blocks can be nested
    // http://eslint.org/docs/rules/max-depth
    'max-depth': 'off',

    // Enforce a maximum line length
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 100, 2, {
      'ignoreComments': false,
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true,
    }],

    // Enforce a maximum number of lines per file
    // http://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // Enforce a maximum depth that callbacks can be nested
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['error', 3],

    // Enforce a maximum number of parameters in function definitions
    // http://eslint.org/docs/rules/max-params
    'max-params': 'off',

    // Enforce a maximum number of statements allowed in function blocks
    // http://eslint.org/docs/rules/max-statements
    'max-statements': 'off',

    // Enforce a maximum number of statements allowed per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'off',

    // Enforce newlines between operands of ternary expressions
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // Require constructor names to begin with a capital letter
    // http://eslint.org/docs/rules/new-cap
    'new-cap': 'warn',

    // Require parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // Require or disallow an empty line after variable declarations
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 'off',

    // Require an empty line before return statements
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // Require a newline after each call in a method chain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 2,
    }],

    // Disallow Array constructors
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Disallow bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'off',

    // Disallow continue statements
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // Disallow inline comments after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'error',

    // Disallow if statements as the only statement in else blocks
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // Disallow mixed binary operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'error',

    // Disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple empty lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxEOF': 1,
    }],

    // Disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // Disallow Object constructors
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // Disallow the unary operators ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // Disallow specified syntax
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],

    // Disallow all tabs
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // Disallow ternary operators
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // Disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'error',

    // Disallow ternary operators when simpler alternatives exist
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', {
      'defaultAssignment': false,
    }],

    // Disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // Enforce consistent line breaks inside braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': 'off',

    // Enforce consistent spacing inside braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // Enforce placing object properties on separate lines
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', {
      'allowMultiplePropertiesPerLine': false,
    }],

    // Enforce variables to be declared either together or separately in functions
    // http://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // Require or disallow newlines around variable declarations
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // Require or disallow assignment operator shorthand where possible
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Enforce consistent linebreak style for operators
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': 'off',

    // Require or disallow padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never'],

    // Require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'always'],

    // Enforce the consistent use of either backticks, double, or single quotes
    // http://eslint.org/docs/rules/quotes
    'quotes': ['error', 'single'],

    // Require JSDoc comments
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // Require or disallow semicolons instead of ASI
    // http://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // Enforce consistent spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': 'error',

    // Require object keys to be sorted
    // http://eslint.org/docs/rules/sort-keys
    'sort-keys': ['error', 'asc', {
      'caseSensitive': false,
      'natural': true,
    }],

    // Require variables within the same declaration block to be sorted
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': ['error', {
      'ignoreCase': true,
    }],

    // Enforce consistent spacing before blocks
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': ['error', 'always'],

    // Enforce consistent spacing before function definition opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'asyncArrow': 'never',
      'named': 'never',
    }],

    // Enforce consistent spacing inside parentheses
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // Require spacing around infix operators
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // Enforce consistent spacing before or after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      'nonwords': false,
      'overrides': {},
      'words': true,
    }],

    // Enforce consistent spacing after the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always'],

    // Require or disallow Unicode byte order mark (BOM)
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // Require parenthesis around regex literals
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',

    // Require or disallow initialization in variable declarations
    // http://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // Disallow catch clause parameters from shadowing variables in the outer scope
    // http://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': 'error',

    // Disallow deleting variables
    // http://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Disallow specified global variables
    // http://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // Disallow identifiers from shadowing restricted names
    // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    // http://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // Disallow initializing variables to undefined
    // http://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // Disallow the use of undefined as an identifier
    // http://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // Disallow unused variables
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'error',
  },
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
  }
};
