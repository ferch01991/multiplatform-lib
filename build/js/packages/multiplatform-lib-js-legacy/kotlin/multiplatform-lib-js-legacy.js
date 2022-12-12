(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'multiplatform-lib-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'multiplatform-lib-js-legacy'.");
    }
    root['multiplatform-lib-js-legacy'] = factory(typeof this['multiplatform-lib-js-legacy'] === 'undefined' ? {} : this['multiplatform-lib-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var toChar = Kotlin.toChar;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var decodeToString = Kotlin.kotlin.text.decodeToString_964n91$;
  var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
  function Base64Encoder() {
  }
  Base64Encoder.prototype.encodeToString_fqrh44$ = function (src) {
    var encoded = this.encode_fqrh44$(src);
    var $receiver = StringBuilder_init(encoded.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== encoded.length; ++tmp$) {
      var element = encoded[tmp$];
      $receiver.append_s8itvh$(toChar(element));
    }
    return $receiver.toString();
  };
  Base64Encoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Base64Encoder',
    interfaces: []
  };
  function SendMetrics() {
  }
  SendMetrics.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SendMetrics',
    interfaces: []
  };
  function Base64Factory() {
    Base64Factory_instance = this;
  }
  Base64Factory.prototype.createEncoder = function () {
    return JsBase64Encoder_getInstance();
  };
  Base64Factory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Base64Factory',
    interfaces: []
  };
  var Base64Factory_instance = null;
  function Base64Factory_getInstance() {
    if (Base64Factory_instance === null) {
      new Base64Factory();
    }
    return Base64Factory_instance;
  }
  function JsBase64Encoder() {
    JsBase64Encoder_instance = this;
  }
  JsBase64Encoder.prototype.encode_fqrh44$ = function (src) {
    var string = decodeToString(src);
    var encodedString = window.btoa(string);
    return encodeToByteArray(encodedString);
  };
  JsBase64Encoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsBase64Encoder',
    interfaces: [Base64Encoder]
  };
  var JsBase64Encoder_instance = null;
  function JsBase64Encoder_getInstance() {
    if (JsBase64Encoder_instance === null) {
      new JsBase64Encoder();
    }
    return JsBase64Encoder_instance;
  }
  function SendMetricsFactory() {
    SendMetricsFactory_instance = this;
  }
  SendMetricsFactory.prototype.createResponse = function () {
    return JvmSendMetrics_getInstance();
  };
  SendMetricsFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SendMetricsFactory',
    interfaces: []
  };
  var SendMetricsFactory_instance = null;
  function SendMetricsFactory_getInstance() {
    if (SendMetricsFactory_instance === null) {
      new SendMetricsFactory();
    }
    return SendMetricsFactory_instance;
  }
  function JvmSendMetrics() {
    JvmSendMetrics_instance = this;
  }
  JvmSendMetrics.prototype.send_metrics_sfx_bm4lxs$ = function (name, value) {
    return 'Ya esta enviando';
  };
  JvmSendMetrics.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JvmSendMetrics',
    interfaces: [SendMetrics]
  };
  var JvmSendMetrics_instance = null;
  function JvmSendMetrics_getInstance() {
    if (JvmSendMetrics_instance === null) {
      new JvmSendMetrics();
    }
    return JvmSendMetrics_instance;
  }
  var package$org = _.org || (_.org = {});
  var package$jetbrains = package$org.jetbrains || (package$org.jetbrains = {});
  var package$base64 = package$jetbrains.base64 || (package$jetbrains.base64 = {});
  package$base64.Base64Encoder = Base64Encoder;
  package$base64.SendMetrics = SendMetrics;
  Object.defineProperty(package$base64, 'Base64Factory', {
    get: Base64Factory_getInstance
  });
  Object.defineProperty(package$base64, 'JsBase64Encoder', {
    get: JsBase64Encoder_getInstance
  });
  Object.defineProperty(package$base64, 'SendMetricsFactory', {
    get: SendMetricsFactory_getInstance
  });
  Object.defineProperty(package$base64, 'JvmSendMetrics', {
    get: JvmSendMetrics_getInstance
  });
  JsBase64Encoder.prototype.encodeToString_fqrh44$ = Base64Encoder.prototype.encodeToString_fqrh44$;
  Kotlin.defineModule('multiplatform-lib-js-legacy', _);
  return _;
}));

//# sourceMappingURL=multiplatform-lib-js-legacy.js.map
