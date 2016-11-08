# React UI kit boilerplate

Стартовый шаблон для разработки независимых Реакт-компонентов.

- [react-styleguidist](https://github.com/sapegin/react-styleguidist) для удобной разработки и документирования;
- stylus для стилизации компонентов;
- eslint с конфигурацией airbnb для линтинга;
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

## Рабочий процесс

Подготовка к работе:

```bash
$ git clone git@github.com:andrew--r/react-ui-kit-boilerplate.git
$ cd react-ui-kit-boilerplate
$ rm -rf .git
$ git init # важно инициализировать репозиторий до установки зависимостей, чтобы правильно установился прекоммит-хук
$ npm i -g yarn # если yarn ещё не установлен
$ yarn # устанавливаем зависимости
```

Запуск локального сервера для разработки:

```bash
$ yarn start
```

Сборка новой версии и стайлгайда:

```bash
$ yarn build
```

Сборка только новой версии:

```bash
$ yarn build:prepare && yarn build:bundle
```

Сборка только стайлгайда:

```bash
$ yarn build:styleguide
```

Сборка скриптов в режиме отладки (с картами кода и без минификации):

```bash
$ yarn build:prepare && yarn build:dev
```

Запуск линтера:

```bash
$ yarn lint
```

Быстрое создание заготовки для нового компонента:

```bash
$ yarn plop
```
