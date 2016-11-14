Basic CountPerTimeBarChart:

```
const data = [
  {
    "date": "2013-01",
    "value": 53
  },
  {
    "date": "2013-02",
    "value": 165
  },
  {
    "date": "2013-03",
    "value": 269
  },
  {
    "date": "2013-04",
    "value": 344
  },
  {
    "date": "2013-05",
    "value": 376
  },
  {
    "date": "2013-06",
    "value": 410
  },
  {
    "date": "2013-07",
    "value": 421
  },
  {
    "date": "2013-08",
    "value": 405
  },
  {
    "date": "2013-09",
    "value": 376
  },
  {
    "date": "2013-10",
    "value": 359
  },
  {
    "date": "2013-11",
    "value": 392
  },
  {
    "date": "2013-12",
    "value": 433
  },
  {
    "date": "2014-01",
    "value": 455
  },
  {
    "date": "2014-02",
    "value": 478
  }
];
<CountPerTimeBarChart
	data={data}
	labelKey="date"
	valueKey="value"
	width={700}
	height={400}
>content</CountPerTimeBarChart>
```

Подключение компонента:

```javascript
import CountPerTimeBarChart from '@rambler-adtech/ui-kit/lib/CountPerTimeBarChart.js';
import '@rambler-adtech/ui-kit/lib/CountPerTimeBarChart.css';
```
