(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'multiplatform-lib-js-legacy', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('multiplatform-lib-js-legacy'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'multiplatform-lib-js-legacy-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'multiplatform-lib-js-legacy-test'.");
    }
    if (typeof this['multiplatform-lib-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'multiplatform-lib-js-legacy-test'. Its dependency 'multiplatform-lib-js-legacy' was not found. Please, check whether 'multiplatform-lib-js-legacy' is loaded prior to 'multiplatform-lib-js-legacy-test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'multiplatform-lib-js-legacy-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'multiplatform-lib-js-legacy-test'.");
    }
    root['multiplatform-lib-js-legacy-test'] = factory(typeof this['multiplatform-lib-js-legacy-test'] === 'undefined' ? {} : this['multiplatform-lib-js-legacy-test'], kotlin, this['multiplatform-lib-js-legacy'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$multiplatform_lib_js_legacy, $module$kotlin_test) {
  'use strict';
  var base64 = $module$multiplatform_lib_js_legacy.org.jetbrains.base64;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var toByte = Kotlin.toByte;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function Base64Test() {
  }
  Base64Test.prototype.testEncodeToString = function () {
    this.checkEncodeToString_0('Kotlin is awesome', 'S290bGluIGlzIGF3ZXNvbWU=');
  };
  Base64Test.prototype.testPaddedStrings = function () {
    this.checkEncodeToString_0('', '');
    this.checkEncodeToString_0('1', 'MQ==');
    this.checkEncodeToString_0('22', 'MjI=');
    this.checkEncodeToString_0('333', 'MzMz');
    this.checkEncodeToString_0('4444', 'NDQ0NA==');
  };
  Base64Test.prototype.checkEncodeToString_0 = function (input, expectedOutput) {
    assertEquals(expectedOutput, base64.Base64Factory.createEncoder().encodeToString_fqrh44$(this.asciiToByteArray_0(input)));
  };
  Base64Test.prototype.asciiToByteArray_0 = function ($receiver) {
    var array = new Int8Array($receiver.length);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = toByte($receiver.charCodeAt(i) | 0);
    }
    return array;
  };
  Base64Test.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base64Test',
    interfaces: []
  };
  var package$org = _.org || (_.org = {});
  var package$jetbrains = package$org.jetbrains || (package$org.jetbrains = {});
  var package$base64 = package$jetbrains.base64 || (package$jetbrains.base64 = {});
  package$base64.Base64Test = Base64Test;
  suite('org.jetbrains.base64', false, function () {
    suite('Base64Test', false, function () {
      test('testEncodeToString', false, function () {
        return (new Base64Test()).testEncodeToString();
      });
      test('testPaddedStrings', false, function () {
        return (new Base64Test()).testPaddedStrings();
      });
    });
  });
  Kotlin.defineModule('multiplatform-lib-js-legacy-test', _);
  return _;
}));

//# sourceMappingURL=multiplatform-lib-js-legacy-test.js.map
