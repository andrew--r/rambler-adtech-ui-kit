 Простое поле ввода:

 ```
<Input value="" onChange={() => {}} />
 ```

Пример комплексного использования:

```
<div>
	<Input
		required
		value=""
		onChange={() => {}}
		label="Электронная почта"
		placeholder="Электронная почта"
	/>
	<Input
		required
		type="password"
		value=""
		onChange={() => {}}
		label="Пароль"
		placeholder="Пароль"
		error="Пароль не должен содержать спецсимволы"
	/>
</div>
```
