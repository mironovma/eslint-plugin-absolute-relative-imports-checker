/* eslint-disable */

/**
 * @fileoverview ESLint plugin that checks absolute and relative paths with Feature Sliced Design architecture.
 * @author mironovma
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
const path = require("path");

module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description:
        "ESLint plugin that checks absolute and relative paths with Feature Sliced Design architecture.",
      category: "ESLint plugin",
      recommended: false,
      url: "https://github.com/mironovma/eslint-plugin-absolute-relative-imports-checker", // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        // example: app/entities/Article
        const importTo = node.source.value;
        // example: C:\MAMP\htdocs\project\src\entities\Article
        const fromFilename = context.getFilename();

        if (shouldBeRelative(fromFilename, importTo)) {
          context.report(node, "Within one slice, all paths must be relative.");
        }
      },
    };
  },
};

function isPathRelative(path) {
  return path === "." || path.startsWith("./") || path.startsWith("../");
}

const layers = {
  shared: "shared",
  entities: "entities",
  widgets: "widgets",
  features: "features",
  pages: "pages",
};

function shouldBeRelative(from, to) {
  if (isPathRelative(to)) {
    return false;
  }

  // example: entities/Article
  const toArray = to.split("/");
  const toLayer = toArray[0]; // entities
  const toSlice = toArray[1]; // Article

  if (!toLayer || !toSlice || !layers[toLayer]) {
    return false;
  }

  const normalizedPath = path.toNamespacedPath(from);
  const projectFrom = normalizedPath.split("src")[1];
  const fromArray = projectFrom.split(/\\|\//);

  const fromLayer = fromArray[1];
  const fromSlice = fromArray[2];

  if (!fromLayer || !fromSlice || !layers[fromLayer]) {
    return false;
  }

  return fromSlice === toSlice && toLayer === fromLayer;
}
