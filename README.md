# jsstats |[![Build Status](https://secure.travis-ci.org/johnotander/jsstats.png?branch=master)](https://travis-ci.org/johnotander/jsstats)

Work in progress.

High-level stats for javascripts.

## Installation

```bash
npm install --save jsstats
```

## Usage

```javascript
var jsstats = require('jsstats')

jsstats('let foo = 'this is a program')  // => {stats object}
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
