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
const plus = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtNjgxIDU3NnYtNC45OTNjMC0uNTU3LS40NDgtMS4wMS0xLTEuMDEtLjU1NiAwLTEgLjQ1MS0xIDEuMDF2NC45OTNoLTQuOTkzYy0uNTU3IDAtMS4wMS40NDgtMS4wMSAxIDAgLjU1Ni40NTEgMSAxLjAxIDFoNC45OTN2NC45OTNjMCAuNTU3LjQ0OCAxLjAxIDEgMS4wMS41NTYgMCAxLS40NTEgMS0xLjAxdi00Ljk5M2g0Ljk5M2MuNTU3IDAgMS4wMS0uNDQ4IDEuMDEtMSAwLS41NTYtLjQ1MS0xLTEuMDEtMWgtNC45OTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzMtNTcwKSIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=';

<div>
	<span style={{display: 'block', margin: '0 0 1em'}}>
		<Button fullWidth>широкая кнопка</Button>
	</span>
	<Button fullWidth leftIcon={plus}>широкая кнопка с иконкой</Button>
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
