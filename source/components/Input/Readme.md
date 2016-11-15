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

Подключение компонента:

```javascript
import Input from '@rambler-adtech/ui-kit/lib/Input.js';
import '@rambler-adtech/ui-kit/lib/Input.css';
```
