Примеры использования:

 ```
<div>
	<p style={{margin: '0 0 1em'}}>
		<Input
			value=""
			onChange={() => {}}
			placeholder="Электронная почта"
		/>
	</p>
	<p style={{margin: '0 0 1em'}}>
		<Input
			value="me@andrew-r.ru"
			onChange={() => {}}
			placeholder="Электронная почта"
		/>
	</p>
	<p style={{margin: '0'}}>
		<Input
			disabled
			value="me@andrew-r.ru"
			onChange={() => {}}
			placeholder="Электронная почта"
		/>
	</p>
</div>
 ```

С маской:

```
<div>
	<p style={{margin: '0 0 1em'}}>
		<Input
			value=""
			onChange={() => {}}
			placeholder="+7 999 999-99-99"
			mask="+7 999 999-99-99"
		/>
	</p>
	<p style={{margin: '0'}}>
		<Input
			value="9224"
			onChange={() => {}}
			placeholder="+7 999 999-99-99"
			mask="+7 999 999-99-99"
		/>
	</p>
</div>
```

С иконками:

```
const Loupe = require('../../icons/Loupe/Loupe').default;
const Plus = require('../../icons/Plus/Plus').default;

<div>
	<p style={{margin: '0 0 1em'}}>
		<Input
			value=""
			onChange={() => {}}
			leftIconComponent={<Loupe />}
		/>
	</p>

	<p style={{margin: '0 0 1em'}}>
		<Input
			value=""
			onChange={() => {}}
			rightIconComponent={<Plus fill="#01afde" style={{cursor: 'pointer'}} />}
		/>
	</p>

	<p>
		<Input
			value=""
			onChange={() => {}}
			leftIconComponent={<Loupe />}
			rightIconComponent={<Plus fill="#01afde" style={{cursor: 'pointer'}} />}
		/>
	</p>
</div>
```

Подключение компонента:

```javascript
import Input from '@rambler-adtech/ui-kit/lib/Input.js';
import '@rambler-adtech/ui-kit/lib/Input.css';
```
