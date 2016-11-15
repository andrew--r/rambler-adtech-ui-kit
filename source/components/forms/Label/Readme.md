Примеры использования:

```
<div style={{fontFamily: 'sans-serif'}}>
	<Label text="Электронная почта" />
	<Label required text="Обязательное поле" />
	<Label text="Поле c произвольным дочерним элементом">
		<img
			alt=""
			style={{
				display: 'inline-block',
				width: '12px',
				height: '12px',
				marginLeft: '6px',
				verticalAlign: 'middle',
			}}
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC+UlEQVRYR7WXS4iPYRTGf+N+p4xbdm4ltywMsXBZULJxiVESDdmR5LpgJgv3Ehu3bDSssBCiXDYmrFxi5ZKi0ZA7MXLp+Xrf6fX1n79zvmbOaub/nfOc533f857zvBXYrTcwD5gFTACGAX1C+EfgOXAfuAZcBD5boCsMTqOALUA10N3gL5dvwBlgN/CkXEw5Akq2E1gHdDImzrv9BA4C24HvpTBaIzASOA+MKZg4H/YAWAA8zX8oRWAicAUY0EbJI0wTMDvUSQt0noBWfqsdkqckpqY7kRLoAdx1bvtL4CwwBFgIdDTsmo5jcqyJlMB+YIMBILq8AHRc78MPy4BTxvi9wGb5RgK6ao+c1a4rtjVJKKx3QD8DCd2O0TqKSOAksNIQmLocA9YkP/QE3gLdjDgngNUioG722tFkIv4PYD5wOcQeAZYbk8vtKzBYBJYCpx2BeddXQF+gVwGMJSJwHFhVIFghqhvVgQpxHzDFiXNUBHT1JjkD5X4I2AToKGTCEJbHbouACqe/I+o3sKLElZsB3HDgyLVJBJqBzo7AO2FIqZloyESrBXY4cOTaXIRAzKEOuChJqNVrFzyWEXgDVHqigu9a4HD4uyvwwdEDYrrsCIoW4XjgYUCaDtwssIisCItcQxXuQOBPSKpaqCtAILuGklqSTx47F6ZfjLkOzPQABN/FIiCxqVascWw1yTT1AZnk2qcw48daAUIrHhSHkQZDjSNYqlhzXdYhqGSReAx0MeJkwywSGBGCLf3gSxhg8fyVrwrQsQw1Jlfv0Th+lgoSiYSNBoBfwHBAgkQKSJJdDchCPsLvArbpn5SAZLi63DgDiUbgAjDNKeEEfS8MrWyG5EWpVtYQrpiBh9tFxS5RqldUZqVkuQrsajuQUPI5SfG2SkAftBMqKnW7tjBtux4mLSsvtwPxm7Sdutt6Z4GlhFXtBwJO1A3/LMjyONVuqNIl3SQ8LSa9Vw/s0VUrF2AhEOOl+ebmnudRgmsSKlF8nl8Kne6/ZP8C4JCJZdvwO2YAAAAASUVORK5CYII=" />
	</Label>
</div>
```

Вместе со стандартным полем ввода:

```
const Input = require('../Input/Input').default;
<div style={{fontFamily: 'sans-serif'}}>
	<Label required text="Электронная почта" htmlFor="email" />
	<Input required id="email" type="email" placeholder="Электронная почта" onChange={() => {}} value="" />
</div>
```

Подключение компонента:

```javascript
import Label from '@rambler-adtech/ui-kit/lib/Label.js';
import '@rambler-adtech/ui-kit/lib/Label.css';
```
