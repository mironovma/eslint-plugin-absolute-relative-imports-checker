/**
 * @fileoverview ESLint plugin that checks absolute and relative paths with Feature Sliced Design architecture.
 * @author mironovma
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/path-checker"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("path-checker", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: ".",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
