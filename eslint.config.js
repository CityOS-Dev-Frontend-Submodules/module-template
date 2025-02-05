import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginI18n from 'eslint-plugin-i18next';
import pluginPrettier from 'eslint-plugin-prettier';
import boundaries from 'eslint-plugin-boundaries';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules/*',
      '**/*.setup.ts',
      '**/*.test.ts',
      '**/*.d.ts',
      '**/*.example.tsx',
      '**/stories/*'
    ]
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      i18next: pluginI18n,
      prettier: pluginPrettier,
      boundaries,
    },
    settings: {
      'boundaries/elements': [
        {
          type: 'app',
          pattern: 'src/app/*',
          capture: ['elementName'],
        },
        {
          type: 'pages',
          pattern: 'src/pages/*',
          capture: ['elementName'],
        },
        {
          type: 'widgets',
          pattern: 'src/widgets/*',
          capture: ['elementName'],
        },
        {
          type: 'features',
          pattern: 'src/features/*',
          capture: ['elementName'],
        },
        {
          type: 'entities',
          pattern: 'src/entities/*',
          capture: ['elementName'],
        },
      ],
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...boundaries.configs.recommended.rules,
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: 'app',
              allow: [
                'shared',
                'entities',
                'features',
                'widgets',
                'pages',
              ],
              importKind: ['value', 'type'],
            },
            {
              from: 'pages',
              allow: [
                'shared',
                'entities',
                'features',
                'widgets',
              ],
              importKind: ['value', 'type'],
            },
            {
              from: 'widgets',
              allow: [
                'shared',
                'entities',
                'features',
              ],
              importKind: ['value', 'type'],
            },
            {
              from: 'features',
              allow: [
                'shared',
                'entities',
              ],
              importKind: ['value', 'type'],
            },
            {
              from: 'entities',
              allow: [
                'shared',
                ['entities', { elementName: 'types' }],
                ['entities', { elementName: 'schemes' }],
              ],
              importKind: ['value', 'type'],
            },
          ],
        },
      ],
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true },
      ],
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreAttribute: [
            'as',
            'role',
            'data-testid',
            'to',
            'target',
            'justify',
            'align',
            'border',
            'direction',
            'gap',
            'feature',
            'color',
            'variant',
            'size',
            'wrap',
          ],
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^react$',
              '^@?\\w',
              '^@',
              '@app',
              '@pages',
              '@widgets',
              '@features',
              '@entities',
              '@shared',
              '^',
              '^\\./',
              '^.+\\.(module.css|module.scss)$',
              '^.+\\.(gif|png|svg|jpg)$',
              '^\\u0000',
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'no-duplicate-imports': 'error',
    },
  },
)
