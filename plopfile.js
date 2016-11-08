function isNotEmptyFor(name) {
  return (value) => {
    if (!value || value.trim() === '') return `${name} is required`;
    return true;
  }
}


module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create a new component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?',
				validate: isNotEmptyFor('name'),
			},
		],
		actions: [
			{
				type: 'add',
				path: 'source/components/{{pascalCase name}}/index.jsx',
				templateFile: 'plop-templates/component/index.jsx',
			},
			{
				type: 'add',
				path: 'source/components/{{pascalCase name}}/index.styl',
				templateFile: 'plop-templates/component/index.styl',
			},
			{
				type: 'add',
				path: 'source/components/{{pascalCase name}}/Readme.md',
				templateFile: 'plop-templates/component/Readme.md',
			},
			{
				type: 'modify',
				path: 'source/index.js',
				pattern: /(\/\/ Import all components)/g,
				template: '$1\nimport {{pascalCase name}} from \'./components/{{pascalCase name}}\';',
			},
			{
				type: 'modify',
				path: 'source/index.js',
				pattern: /(export {)/g,
				template: '$1\n\t{{pascalCase name}},',
			},
		],
	});
}
