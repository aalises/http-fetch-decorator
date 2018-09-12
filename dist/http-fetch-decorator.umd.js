(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('kaop-ts')) :
  typeof define === 'function' && define.amd ? define(['kaop-ts'], factory) :
  (global.httpFetchDecorator = factory(global.kaopTs));
}(this, (function (kaopTs) { 'use strict';

  var index = (function (url) {
    var initObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return kaopTs.beforeMethod(function (meta) {
      if (initObj && !initObj.method) initObj.method = "GET";
      url = new URL(url);
      var _meta$args = meta.args,
          params = _meta$args[0];

      !initObj || initObj.method === "GET" ? Object.keys(params).forEach(function (key) {
        return url.searchParams.append(key, params[key]);
      }) : initObj['body'] = JSON.stringify(params);
      fetch(url, initObj).then(function (res) {
        meta.args = [params, res, null];
        meta.commit();
      }).catch(function (err) {
        meta.args = [params, null, err];
        meta.commit();
      });
    });
  });

  return index;

})));
