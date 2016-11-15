Примеры использования:

```
<div style={{fontFamily: 'sans-serif'}}>
	<p style={{margin: '0 0 1em'}}>
		<Checkbox>Согласен с условиями <a href="javascript:void(0)">пользовательского соглашения</a></Checkbox>
	</p>

	<p style={{margin: '0 0 1em'}}>
		<Checkbox checked>Согласен с условиями <a href="javascript:void(0)">пользовательского соглашения</a></Checkbox>
	</p>

	<p style={{margin: '0 0 1em'}}>
		<Checkbox bordered>Согласен с условиями <a href="javascript:void(0)">пользовательского соглашения</a></Checkbox>
	</p>

	<p style={{margin: '0 0 1em'}}>
		<Checkbox bordered checked>Согласен с условиями <a href="javascript:void(0)">пользовательского соглашения</a></Checkbox>
	</p>

	<p style={{maxWidth: '200px', margin: 0}}>
		<Checkbox bordered>Согласен с&nbsp;условиями <a href="javascript:void(0)">пользовательского соглашения</a></Checkbox>
	</p>
</div>
```

Подключение компонента:

```javascript
import Checkbox from '@rambler-adtech/ui-kit/lib/Checkbox.js';
import '@rambler-adtech/ui-kit/lib/Checkbox.css';
```
