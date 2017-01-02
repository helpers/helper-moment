# helper-moment [![NPM version](https://img.shields.io/npm/v/helper-moment.svg?style=flat)](https://www.npmjs.com/package/helper-moment) [![NPM monthly downloads](https://img.shields.io/npm/dm/helper-moment.svg?style=flat)](https://npmjs.org/package/helper-moment)  [![NPM total downloads](https://img.shields.io/npm/dt/helper-moment.svg?style=flat)](https://npmjs.org/package/helper-moment) [![Linux Build Status](https://img.shields.io/travis/helpers/helper-moment.svg?style=flat&label=Travis)](https://travis-ci.org/helpers/helper-moment)

> Template helper for formatting dates with moment.js. Works with Handlebars, Lo-Dash or any template engine that supports helper functions.

## Install

Install globally with [npm](https://www.npmjs.com/)

```sh
$ npm install --global helper-moment
```

## Usage

The main export is a function that can be called directly:

```js
var moment = require('helper-moment');
console.log(moment());
//=> 'January 02, 2017'
```

## Examples

With Handlebars:

```handlebars
{{moment "YYYY"}}
//=> 2017
```

### Usage with [assemble](https://github.com/assemble/assemble)

_(This example also works for [verb](https://github.com/verbose/verb), [update](https://github.com/update/update), [generate](https://github.com/generate/generate), or any other lib based on the [templates](https://github.com/jonschlinkert/templates) library)_

Register the helper for use with any template engine

```js
var templates = require('templates');
var app = templates();

app.helper('moment', require('helper-moment'));

app.task('default', function() {
  app.src('templates/*.md')
    .pipe(app.dest('dist'));
});
```

**Helper usage**

Delimiters depend on the engine registered. For example, with Lo-Dash or Underscore templates:

```js
<%= moment("YYYY") %>
//=> 2017
```

Or with Verb, which uses special delimiters to avoid delimiter collision when the documentation itself includes templates that should not render (like these docs):

```js
{%= moment("YYYY") %}
//=> 2017
```

### Usage with [handlebars](http://www.handlebarsjs.com/)

To use the helper directly with handlebars:

```js
var handlebars = require('handlebars');
handlebars.registerHelper('moment', require('helper-moment'));
```

Template examples:

```handlebars
{{moment date "YYYY"}}
{{moment date "MM"}}
{{moment date endOf="week" format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
{{moment date format="dddd"}}-{{moment date add=daysadd format="dddd"}}
{{moment date format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
{{moment date format="HH:mm:ss"}}
{{moment date isValid=true}}
{{moment date lang="fr" format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
{{moment date lang="fr" format="MMMM"}}
{{moment date startOf="month" format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
{{moment date subtract=fiveyearsago format="YYYY"}}-{{moment date format="YYYY"}}
{{moment date utc=null format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
{{moment format="MMMM YYYY"}}
{{moment daysInMonth=true}}
{{moment diff=date}}
{{moment endOf="week" fromNow=true}}
{{moment date format="HH:mm:ss"}}
{{moment from=date}}
{{moment unixtimestamp format="HH:mm:ss"}}
{{moment}}
```

### Usage with [lodash](https://lodash.com/) or [underscore](http://underscorejs.org)

Use directly with Lo-Dash or underscore:

```js
var moment =  require('helper-moment');

// as a mixin
_.mixin({moment: moment});
_.template('<%= _.moment("YYYY") %>');
//=> '2017'

// or pass the helper on the context
_.template('<%= moment("YYYY") %>')({moment: moment});
//=> '2017'
```

To contribute a helper to the [github.com/helpers](https://github.com/fshost/helpers) org, follow these steps:

### 1. Install the helper generator

Install [generate](https://github.com/generate/generate) and [generate-helper][]:

```sh
npm install --global generate generate-helper
```

### 2. Generate your project

To initialize the project, including documentation and unit tests, in the command line, run:

```sh
gen helper
```

### 3. Create a repo

Create a repo on GitHub under your own account.

### 4. Last, request a transfer

Create an issue to [request a transfer](https://github.com/helpers/requests/issues/new) to the [helpers](https://github.com/helpers) org.

## About

### Related projects

* [handlebars-helper-moment](https://www.npmjs.com/package/handlebars-helper-moment): A helper to master time! Combining the powers of Assemble, Handlebars.js and Moment.js. This helper… [more](https://github.com/assemble/handlebars-helper-moment) | [homepage](https://github.com/assemble/handlebars-helper-moment "A helper to master time! Combining the powers of Assemble, Handlebars.js and Moment.js. This helper leverages Moment.js to provide ultimate control over manipulating time and dates in your templates.")
* [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers): More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate… [more](https://github.com/assemble/handlebars-helpers) | [homepage](https://github.com/assemble/handlebars-helpers "More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate, Verb, Ghost, gulp-handlebars, grunt-handlebars, consolidate, or any node.js/Handlebars project.")
* [helper-date](https://www.npmjs.com/package/helper-date): Format dates with date.js and moment.js. Uses date.js to parse human readable date phrases, and… [more](https://github.com/helpers/helper-date) | [homepage](https://github.com/helpers/helper-date "Format dates with date.js and moment.js. Uses date.js to parse human readable date phrases, and moment to format the rendered output. Should work with any Handlebars, Lo-Dash, underscore, or any template engine that allows helper functions to be registere")
* [helper-dateformat](https://www.npmjs.com/package/helper-dateformat): Template helper for adding formatted dates using node-dateformat. Works with Handlebars, Lo-Dash, underscore, or any… [more](https://github.com/helpers/helper-dateformat) | [homepage](https://github.com/helpers/helper-dateformat "Template helper for adding formatted dates using node-dateformat. Works with Handlebars, Lo-Dash, underscore, or any template engine that supports helper functions. Also compatible with verb, assemble and Template.")
* [template-helpers](https://www.npmjs.com/package/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://github.com/jonschlinkert/template-helpers) | [homepage](https://github.com/jonschlinkert/template-helpers "Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or any engine that supports helper functions.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for avice on opening issues, pull requests, and coding standards.

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 3 | [jonschlinkert](https://github.com/jonschlinkert) |
| 1 | [anglepoised](https://github.com/anglepoised) |

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.3, on January 02, 2017._