Обычные кнопки и их разновидности:

```
const rowStyle = {
	margin: '1em 0',
	fontFamily: 'sans-serif',
};

const IconPlus = require('../../icons/Plus/Plus').default;
const plus = (
	<IconPlus />
);

<div>
	<div style={rowStyle}>
		<span style={{margin: '0 1em'}}>
			<Button size="small">маленькая кнопка</Button>
		</span>

		<span style={{margin: '0 1em'}}>
			<Button leftIconComponent={plus} size="small">маленькая кнопка с иконкой</Button>
		</span>

		<span style={{margin: '0 1em'}}>
			<Button size="small" bordered>bordered</Button>
		</span>

		<span style={{margin: '0 1em'}}>
			<Button size="small" disabled>disabled</Button>
		</span>
	</div>

	<div style={rowStyle}>
		<span style={{margin: '0 1em'}}>
			<Button>обычная кнопка</Button>
		</span>

		<span style={{margin: '0 1em'}}>
			<Button leftIconComponent={plus}>обычная кнопка с иконкой</Button>
		</span>

		<span style={{margin: '0 1em'}}>
			<Button bordered>bordered</Button>
		</span>

		<span style={{margin: '0 1em'}}>
			<Button disabled>disabled</Button>
		</span>
	</div>

	<div style={rowStyle}>
		<span style={{margin: '0 1em'}}>
			<Button size="large">большая кнопка</Button>
		</span>

		<span style={{margin: '0 1em'}}>
			<Button leftIconComponent={plus} size="large">большая кнопка с иконкой</Button>
		</span>

		<span style={{margin: '0 1em'}}>
			<Button size="large" bordered>bordered</Button>
		</span>

		<span style={{margin: '0 1em'}}>
			<Button size="large" disabled>disabled</Button>
		</span>
	</div>
</div>
```

Кнопка на всю доступную ширину:

```
const IconPlus = require('../../icons/Plus/Plus').default;
const plus = (
	<IconPlus />
);

<div>
	<span style={{display: 'block', margin: '0 0 1em'}}>
		<Button fullWidth>широкая кнопка</Button>
	</span>
	<Button fullWidth leftIconComponent={plus}>широкая кнопка с иконкой</Button>
</div>

```

Alert при клике:

```
<div>
	<p>
		<Button
			size="small"
			onClick={() => alert('клик по кнопке')}
		>нажми меня</Button>
	</p>

	<p>
		<Button
			disabled
			size="small"
			onClick={() => alert('клик по кнопке')}
		>нажми меня</Button>
	</p>
</div>
```

Подключение компонента:

```javascript
import Button from '@rambler-adtech/ui-kit/lib/Button.js';
import '@rambler-adtech/ui-kit/lib/Button.css';
```
