# babel-plugin-replace-only-development

process.env.NODE_ENV based simple replacement plugin.

## Usage

in your .babelrc

```json
{
  "plugins": [
    [
      "babel-plugin-replace-only-development",
      {
        "rules": {
          "https://api.example.com": "http://localhost:3000"
        }
      }
    ]
  ]
}
```

in your code (e.g. index.js)

```js
import axios from 'axios'

axios.get('https://api.example.com')
```

Running NODE_ENV=development result

```js
import axios from 'axios'

axios.get('http://localhost:3000')
```

Running NODE_ENV=production result

```js
import axios from 'axios'

axios.get('https://api.example.com')
```

## Installation

```sh
$ yarn add babel-pugin-replace-only-development
```

## LICENSE

MIT
