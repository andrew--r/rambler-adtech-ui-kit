Примеры использования:

```
const Label = require('../Label/Label').default;
<div style={{fontFamily: 'sans-serif'}}>
	<p style={{margin: '0 0 1.5em'}}>
		<Textarea placeholder="Ваш комментарий" value="" onChange={() => {}} />
	</p>

	<p style={{margin: '0 0 1.5em'}}>
		<Label text="Ваш комментарий" htmlFor="comment" />
		<Textarea id="comment" placeholder="Ваш комментарий" value="Замечательный набор компонентов!" onChange={() => {}} />
	</p>

	<p style={{margin: '0'}}>
		<Textarea disabled placeholder="Ваш комментарий" value="Замечательный набор компонентов!" onChange={() => {}} />
	</p>
</div>
```

Подключение компонента:

```javascript
import Label from '@rambler-adtech/ui-kit/lib/Textarea.js';
import '@rambler-adtech/ui-kit/lib/Textarea.css';
```

