Группа переключателей:

```
const toggles = ['показы', 'клики', 'CTR', 'охват'];
const activeIndex = 0;

<div style={{display: 'flex', padding: '1rem .25rem'}}>
	{toggles.map((name, index) => {
		return (
			<RadioToggle
				name="example"
				label={name}
				active={activeIndex === index}
			/>
		);
	})}
</div>
```

Использование:

```javascript
import RadioToggle from '@rambler-adtech/ui-kit/lib/RadioToggle.js';
import '@rambler-adtech/ui-kit/lib/RadioToggle.css';
```
