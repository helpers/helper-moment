/*!
 * helper-moment <https://github.com/helpers/helper-moment>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var assert = require('assert');
var handlebars = require('handlebars');
var momentjs = require('moment');
var date = require('date.js');
var _ = require('lodash');
var moment = require('./');

describe('date', function () {
  it('should return a default formatted moment date when nothing is passed:', function () {
    assert.deepEqual(moment(), momentjs().format("MMMM DD, YYYY"));
  });

  it('should format a date with moment:', function () {
    assert.deepEqual(moment('YYYY'), (+moment('YYYY')).toString());
  });

  it('should parse a human-readable date with date.js and return a formatted moment date:', function () {
    assert.deepEqual(moment(date('This year.'), 'YYYY'), moment('YYYY'));
    assert.deepEqual(moment(date('Next year.'), 'YYYY'), (+moment('YYYY') + 1).toString());
    assert.deepEqual(moment(date('10 years ago'), 'YYYY'), (new Date().getFullYear() - 10).toString());
    assert.deepEqual(moment(date('1 year from now'), 'YYYY'), (+moment('YYYY') + 1).toString());
    assert.deepEqual(moment(date('1 year ago'), 'YYYY'), (+moment('YYYY') - 1).toString());
  });

  it('should work as a lodash helper:', function () {
    assert.deepEqual(_.template('<%= moment("MMMM DD, YYYY") %>', {})({moment: moment}), moment("MMMM DD, YYYY"));
    assert.deepEqual(_.template('<%= moment(new Date(), "MMMM DD, YYYY") %>', {})({moment: moment}), moment("MMMM DD, YYYY"));
    assert.deepEqual(_.template('<%= moment("YYYY") %>', {})({moment: moment}), new Date().getFullYear().toString());
  });

  it('should work as a handlebars helper:', function () {
    handlebars.registerHelper('moment', moment);

    assert.deepEqual(handlebars.compile('{{moment ctx "MM"}}')({ctx: new Date()}), moment("MM"));
    assert.deepEqual(handlebars.compile('{{moment ctx "MMMM DD, YYYY"}}')({ctx: new Date()}), moment("MMMM DD, YYYY"));
    assert.deepEqual(handlebars.compile('{{moment ctx formatDate}}')({formatDate: "MMMM DD, YYYY", ctx: new Date()}), moment("MMMM DD, YYYY"));
  });
});
