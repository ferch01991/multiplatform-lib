(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './multiplatform-lib-js-ir.js', './kotlin-kotlin-test-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./multiplatform-lib-js-ir.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['multiplatform-lib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'multiplatform-lib-js-ir-test'. Its dependency 'multiplatform-lib-js-ir' was not found. Please, check whether 'multiplatform-lib-js-ir' is loaded prior to 'multiplatform-lib-js-ir-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'multiplatform-lib-js-ir-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'multiplatform-lib-js-ir-test'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'multiplatform-lib-js-ir-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'multiplatform-lib-js-ir-test'.");
    }
    root['multiplatform-lib-js-ir-test'] = factory(typeof this['multiplatform-lib-js-ir-test'] === 'undefined' ? {} : this['multiplatform-lib-js-ir-test'], this['multiplatform-lib-js-ir'], this['kotlin-kotlin-test-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_com_rappi_multiplatform_lib, kotlin_kotlin_test, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Base64Factory_getInstance = kotlin_com_rappi_multiplatform_lib.$_$.a;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var charSequenceGet = kotlin_kotlin.$_$.f;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c;
  var Unit_getInstance = kotlin_kotlin.$_$.d;
  var toByte = kotlin_kotlin.$_$.l;
  var classMeta = kotlin_kotlin.$_$.g;
  var suite = kotlin_kotlin_test.$_$.b;
  var test = kotlin_kotlin_test.$_$.c;
  //endregion
  //region block: pre-declaration
  //endregion
  function checkEncodeToString($this, input, expectedOutput) {
    var tmp = Base64Factory_getInstance().createEncoder_akj7gg_k$().encodeToString_4mbq1r_k$(asciiToByteArray(input, $this));
    assertEquals$default(expectedOutput, tmp, null, 4, null);
  }
  function asciiToByteArray(_this__u8e3s4, $this) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = new Int8Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'org.jetbrains.base64.Base64Test.asciiToByteArray.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      var tmp0__get_code__88qj9g = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
      tmp$ret$1 = toByte(tmp$ret$0);
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function Base64Test() {
  }
  Base64Test.prototype.testEncodeToString_1331x9_k$ = function () {
    checkEncodeToString(this, 'Kotlin is awesome', 'S290bGluIGlzIGF3ZXNvbWU=');
  };
  Base64Test.prototype.testPaddedStrings_g6pafj_k$ = function () {
    checkEncodeToString(this, '', '');
    checkEncodeToString(this, '1', 'MQ==');
    checkEncodeToString(this, '22', 'MjI=');
    checkEncodeToString(this, '333', 'MzMz');
    checkEncodeToString(this, '4444', 'NDQ0NA==');
  };
  Base64Test.$metadata$ = classMeta('Base64Test');
  function test_fun_izoufj() {
    suite('Base64Test', false, test_fun$Base64Test_test_fun_l9hxgj);
  }
  function test_fun$Base64Test_test_fun_l9hxgj() {
    test('testEncodeToString', false, test_fun$Base64Test_test_fun$testEncodeToString_test_fun_mskhe2);
    test('testPaddedStrings', false, test_fun$Base64Test_test_fun$testPaddedStrings_test_fun_40e4rs);
    return Unit_getInstance();
  }
  function test_fun$Base64Test_test_fun$testEncodeToString_test_fun_mskhe2() {
    var tmp = new Base64Test();
    tmp.testEncodeToString_1331x9_k$();
    return Unit_getInstance();
  }
  function test_fun$Base64Test_test_fun$testPaddedStrings_test_fun_40e4rs() {
    var tmp = new Base64Test();
    tmp.testPaddedStrings_g6pafj_k$();
    return Unit_getInstance();
  }
  //region block: tests
  (function () {
    suite('org.jetbrains.base64', false, function () {
      test_fun_izoufj();
    });
  }());
  //endregion
  return _;
}));

//# sourceMappingURL=multiplatform-lib-js-ir-test.js.map
