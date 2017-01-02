/*!
 * helper-moment <https://github.com/helpers/helper-moment>
 * Copyright (c) 2014-2016 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

var typeOf = require('kind-of');
var moment = require('moment');
var extend = require('extend-shallow');

/**
 * Expose moment `helper`
 */

module.exports = function momentHelper(str, pattern, options) {
  // if no args are passed, return a formatted date
  if (!str && !pattern) {
    moment.locale('en');
    return moment().format('MMMM DD, YYYY');
  }

  // we can extend str and pattern since `extend` ignores strings
  // and they might be options/context objects
  var opts = extend({locale: 'en'}, str, pattern, options);
  opts = extend({}, opts, opts.hash);

  // set the language to use
  moment.locale(opts.lang || opts.locale);
  if (opts.hash) {
    if (opts.context) {
      opts.hash = extend({}, opts.hash, opts.context);
    }

    var date = moment(str);
    for (var key in opts.hash) {
      if (date[key]) {
        return date[key](opts.hash[key]);
      } else {
        console.log('moment.js does not support "' + key + '"');
      }
    }
  }

  if (typeOf(str) === 'object' && typeof pattern === 'string') {
    return moment(str).format(pattern);
  }

  // if only a string is passed, assume it's a date pattern ('YYYY')
  if (typeof str === 'string' && !pattern) {
    return moment().format(str);
  }

  return moment(str).format(pattern);
};
