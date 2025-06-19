import globals from 'globals';
import js from '@eslint/js';
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname, });

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [

    // Global Ignore
    { ignores: [`node_modules/`, `build/`, `.next/`, `dist/`, `out/`], },

    // Base Config
    js.configs.recommended,
    ...compat.extends(`next/core-web-vitals`, `next/typescript`),

    // Overrides
    {
        languageOptions: {
            parser: tsparser,
            ecmaVersion: 2024,
            sourceType: `module`,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            },
            parserOptions: { ecmaFeatures: { jsx: true } }
        },
        plugins: { '@typescript-eslint': tseslint },
        rules: {
            "brace-style": [`error`, `stroustrup`],
            "comma-spacing": [`error`, { "before": false, "after": true }],
            "indent": [`error`, 4, { "SwitchCase": 1 }],
            "max-len": [`warn`, { code: 480 }],
            "no-var": `error`,
            "@typescript-eslint/no-unused-vars": `warn`,
            "object-curly-newline": [`error`, {
                "ObjectExpression": { "multiline": true, "minProperties": 4 },
                "ObjectPattern": { "multiline": true, "minProperties": 4 },
                "ImportDeclaration": { "multiline": true, "minProperties": 4 },
                "ExportDeclaration": { "multiline": false, "minProperties": 4 }
            }],
            "object-curly-spacing": [`error`, `always`],
            "space-infix-ops": [`error`, { "int32Hint": false }],
            "quotes": [`warn`, `backtick`],
            "semi": [`error`, `always`],

            // TypeScript specific rules
            "@typescript-eslint/explicit-function-return-type": `off`,
            "@typescript-eslint/explicit-module-boundary-types": `off`,
            "@typescript-eslint/no-explicit-any": `warn`,
            "prefer-const": `error`,
            "@typescript-eslint/no-inferrable-types": `warn`
        }
    }
];

export default eslintConfig;
