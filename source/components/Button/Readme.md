Обычные кнопки и их разновидности:

```
const rowStyle = {
	margin: '1em 0',
	fontFamily: 'sans-serif',
};
<div>
	<div style={rowStyle}>
		<span style={{margin: '0 1em'}}>
			<Button size="small">маленькая кнопка</Button>
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
<Button fullWidth>большая кнопка</Button>
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
