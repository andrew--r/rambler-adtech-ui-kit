# RAMBLER&Co AdTech UI Kit

Набор независимых реиспользуемых UI-компонентов. Под капотом:

- [react-styleguidist](https://github.com/sapegin/react-styleguidist) для удобной разработки и документирования;
- [stylus](http://stylus-lang.com/) для стилизации компонентов;
- [eslint](http://eslint.org/) с [конфигурацией airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) для линтинга;
- [plop](https://github.com/amwmedia/plop) для генерации шаблонных файлов.

## Использование разработанных компонентов

Добавляем в `package.json` набор разработанных компонентов:

```json
{
	"dependencies": {
		"ui-kit": "andrew--r/react-ui-kit-boilerplate"
	}
}
```

Импортируем нужные компоненты и стили:

```javascript
import Button from 'ui-kit/lib/Button'; // нестилизованный компонент
import 'ui-kit/lib/Button.css'; // стили для компонента
```

Либо импортируем сразу все компоненты:

```javascript
import * as uiKit from 'ui-kit';
import 'ui-kit/lib/index.css';
```

## Подготовка к работе:

```bash
$ git clone git@github.com:andrew--r/react-ui-kit-boilerplate.git
$ cd react-ui-kit-boilerplate
$ rm -rf .git
$ git init # важно инициализировать репозиторий до установки зависимостей, чтобы правильно установился прекоммит-хук
$ npm i -g yarn # если yarn ещё не установлен
$ yarn # устанавливаем зависимости
```

## NPM-скрипты

Запуск локального сервера для разработки по адресу `localhost:3000`:

```bash
$ yarn start
```

Сборка компонентов и стайлгайда:

```bash
$ yarn build
```

Сборка только компонентов:

```bash
$ yarn build:bundle
```

Сборка только стайлгайда:

```bash
$ yarn build:styleguide
```

Сборка компонентов в режиме отладки (с картами кода и без минификации):

```bash
$ yarn build:dev
```

Запуск линтера:

```bash
$ yarn lint
```

Быстрое создание заготовки для нового компонента:

```bash
$ yarn new
```

## Разделение компонентов на категории

Для удобства каждый компонент относится к какой-либо категории, например «Формы» или «Иконки». Как создать новую категорию:

- создать папку категории в `./source/components`;
- добавить конфигурацию в поле `sections` в файле `./styleguide.config.js`;
- добавить генератор компонентов для категории в `./plopfile.js`.

## Стили

### CSS

Для стилизации используется БЭМ-именование классов в формате `block-name__element-name--modifier-name`. К имени каждого блока добавляется префикс `adt-` для избежания конфликтов имён классов при интеграции компонентов в другие проекты.
У каждого компонента есть свой файл стилей `index.styl`, в котором можно импортировать общие файлы стилей. Общие файлы стилей лежат в папке `./source/styles`:

```bash
source/styles
├── base-input.styl # базовые стили для любых полей ввода
└── variables.styl # общие переменные
```

### Масштабируемость

Каждый компонент должен пропорционально масштабироваться в зависимости от базового размера шрифта. Базовый размер шрифта задаётся в переменной `$base-font-size`, он один на весь UI-кит. Корневому элементу компонента нужно задать этот размер: `font-size $base-font-size`, а далее вместо пикселей использовать `em`ы, рассчитанные относительно базового размера шрифта. Пример:

```stylus
.adt-button
	font-size $base-font-size // например, 16px
	padding .5em 1em // эквивалентно padding 8px 16px
```

Преимущества подхода:

- достаточно лишь поменять базовый размер шрифта, чтобы пропорционально увеличить или уменьшить компонент (или все компоненты, если поменять базовый размер шрифта);
- компоненты не будут ломаться при зуме страницы, т. к. они привязаны к размеру шрифта, а не к пикселям (при зуме браузер меняет размер шрифта).

## JavaScript

### Общее

Нужно описать типы пропсов компонента и добавить к ним документацию, если что-то неочевидно. Если проп не обязателен, нужно указать его стандартное значение:

```javascript
import React, {PropTypes} from 'react';

function Button() {}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	/**
	 * Если кнопка неактивна (`disabled={true}`), onClick не будет срабатывать.
	 */
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	disabled: false,
	onClick: () => {},
};
```

Если возникает неободимость добавлять/удалять CSS-класс в зависимости от какого-то условия, нужно использовать модуль `classnames`:

```javascript
import classNames from 'classnames';

<button
	className={classNames({
		'adt-button': true,
		'adt-button--disabled': props.disabled,
	})}
/>
```

Если нужно прокидывать через пропсы компонента много стандартных HTML-атрибутов, нужно отфильтровать пропсы и убрать всё, что не относится к атрибутам элемента:

```javascript
import omit from 'object-omit';

const inputExcludeProps = ['mask'];

function Input(props) {
	return (
		<input {...omit(props, inputExcludeProps)} />
	);
}

<Input type="text" mask="+7 999 999-99-99" />
// ->
<input type="text" />
```
