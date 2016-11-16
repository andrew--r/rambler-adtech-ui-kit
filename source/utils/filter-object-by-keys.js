/**
 * Создаёт новый объект и кладёт в только те значения,
 * ключи которых не входят в список запрещённых ключей
 *
 * @param {Object} obj
 * @param {Object} excludeKeys таблица запрещённых ключей вида {key: true}
 */
export default function filterObjectByKeys(obj, excludeKeys) {
	return Object.keys(obj).reduce((acc, propName) => {
		if (!excludeKeys[propName]) {
			acc[propName] = obj[propName];
		}

		return acc;
	}, {});
}
