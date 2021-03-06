module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"semi": [
			"error",
			"never"
		],
		"indent": [
			"error",
			"tab"
		],
		"no-console": 0
	}
};