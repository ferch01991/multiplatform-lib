(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'multiplatform-lib-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'multiplatform-lib-js-ir'.");
    }
    root['multiplatform-lib-js-ir'] = factory(typeof this['multiplatform-lib-js-ir'] === 'undefined' ? {} : this['multiplatform-lib-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a;
  var numberToChar = kotlin_kotlin.$_$.j;
  var Unit_getInstance = kotlin_kotlin.$_$.d;
  var interfaceMeta = kotlin_kotlin.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.k;
  var decodeToString = kotlin_kotlin.$_$.m;
  var encodeToByteArray = kotlin_kotlin.$_$.n;
  //endregion
  //region block: pre-declaration
  function encodeToString(src) {
    var encoded = this.encode_ub6m3x_k$(src);
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    var tmp0_buildString = encoded.length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp0_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.base64.Base64Encoder.encodeToString.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = encoded;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.base64.Base64Encoder.encodeToString.<anonymous>.<anonymous>' call
      tmp0_apply.append_t8oh9e_k$(numberToChar(element));
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  //endregion
  function Base64Encoder() {
  }
  Base64Encoder.$metadata$ = interfaceMeta('Base64Encoder');
  function Base64Factory() {
    Base64Factory_instance = this;
  }
  Base64Factory.prototype.createEncoder_akj7gg_k$ = function () {
    return JsBase64Encoder_getInstance();
  };
  Base64Factory.$metadata$ = objectMeta('Base64Factory');
  var Base64Factory_instance;
  function Base64Factory_getInstance() {
    if (Base64Factory_instance == null)
      new Base64Factory();
    return Base64Factory_instance;
  }
  function JsBase64Encoder() {
    JsBase64Encoder_instance = this;
  }
  JsBase64Encoder.prototype.encode_ub6m3x_k$ = function (src) {
    var string = decodeToString(src);
    var encodedString = window.btoa(string);
    return encodeToByteArray(encodedString);
  };
  JsBase64Encoder.$metadata$ = objectMeta('JsBase64Encoder', [Base64Encoder]);
  var JsBase64Encoder_instance;
  function JsBase64Encoder_getInstance() {
    if (JsBase64Encoder_instance == null)
      new JsBase64Encoder();
    return JsBase64Encoder_instance;
  }
  //region block: post-declaration
  JsBase64Encoder.prototype.encodeToString_4mbq1r_k$ = encodeToString;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Base64Factory_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=multiplatform-lib-js-ir.js.map
