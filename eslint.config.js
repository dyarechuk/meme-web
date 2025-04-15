import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			'plugin:import/recommended',
			'plugin:import/typescript',
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			import: importPlugin,
		},
		settings: {
			'import/resolver': {
				alias: {
					map: [['@', './src']],
					extensions: ['.ts', '.tsx', '.js', '.jsx'],
				},
			},
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		},
	}
);
