function isNotEmptyFor(name) {
	return (value) => {
		if (!value || value.trim() === '') return `${name} is required`;
		return true;
	};
}

const COMPONENTS = './source/components';

const componentNamePrompt = {
	type: 'input',
	name: 'name',
	message: 'What is your component name?',
	validate: isNotEmptyFor('name'),
};

const addScriptAction = {
	type: 'add',
	templateFile: 'plop-templates/component/index.jsx',
};

const addStylesAction = {
	type: 'add',
	templateFile: 'plop-templates/component/index.styl',
};

const addReadmeAction = {
	type: 'add',
	templateFile: 'plop-templates/component/Readme.md',
};

function generateResourcePath(resourceName, section) {
	const resourcesTemplates = {
		script: '{{pascalCase name}}.jsx',
		style: 'index.styl',
		readme: 'Readme.md',
	};

	return `${COMPONENTS}/${section}/{{pascalCase name}}/${resourcesTemplates[resourceName]}`;
}


module.exports = (plop) => {
	plop.setGenerator('Form control', {
		description: 'Create a new form control component',
		prompts: [componentNamePrompt],
		actions: [
			Object.assign({}, addScriptAction, {
				path: generateResourcePath('script', 'forms'),
			}),
			Object.assign({}, addStylesAction, {
				path: generateResourcePath('style', 'forms'),
			}),
			Object.assign({}, addReadmeAction, {
				path: generateResourcePath('readme', 'forms'),
			}),
			{
				type: 'modify',
				path: 'source/index.js',
				pattern: /(\/\/ Import all components)/g,
				template: '$1\nimport {{pascalCase name}} from \'./components/forms/{{pascalCase name}}/{{pascalCase name}}\';',
			},
			{
				type: 'modify',
				path: 'source/index.js',
				pattern: /(export {)/g,
				template: '$1\n\t{{pascalCase name}},',
			},
		],
	});

	plop.setGenerator('Icon', {
		description: 'Create a new icon component',
		prompts: [componentNamePrompt],
		actions: [
			Object.assign({}, addScriptAction, {
				path: generateResourcePath('script', 'icons'),
			}),
			Object.assign({}, addStylesAction, {
				path: generateResourcePath('style', 'icons'),
			}),
			Object.assign({}, addReadmeAction, {
				path: generateResourcePath('readme', 'icons'),
			}),
			{
				type: 'modify',
				path: 'source/index.js',
				pattern: /(\/\/ Import all components)/g,
				template: '$1\nimport {{pascalCase name}} from \'./components/icons/{{pascalCase name}}/{{pascalCase name}}\';',
			},
			{
				type: 'modify',
				path: 'source/index.js',
				pattern: /(export {)/g,
				template: '$1\n\t{{pascalCase name}},',
			},
		],
	});

	plop.setGenerator('Other', {
		description: 'Create a new component',
		prompts: [componentNamePrompt],
		actions: [
			Object.assign({}, addScriptAction, {
				path: generateResourcePath('script', 'other'),
			}),
			Object.assign({}, addStylesAction, {
				path: generateResourcePath('style', 'other'),
			}),
			Object.assign({}, addReadmeAction, {
				path: generateResourcePath('readme', 'other'),
			}),
			{
				type: 'modify',
				path: 'source/index.js',
				pattern: /(\/\/ Import all components)/g,
				template: '$1\nimport {{pascalCase name}} from \'./components/other/{{pascalCase name}}/{{pascalCase name}}\';',
			},
			{
				type: 'modify',
				path: 'source/index.js',
				pattern: /(export {)/g,
				template: '$1\n\t{{pascalCase name}},',
			},
		],
	});
};
