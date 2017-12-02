"use strict";



define('unix-gdal-helper/app', ['exports', 'unix-gdal-helper/resolver', 'ember-load-initializers', 'unix-gdal-helper/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('unix-gdal-helper/components/copy-button', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    classNames: ['copy-button'],
    click: function click() {
      var input = document.createElement('textarea');
      // input.style = "display: none;"
      document.querySelector('body').appendChild(input);
      input.value = document.querySelector('pre.script').textContent;

      input.select();
      document.execCommand('copy');
      input.remove();
      input = null;
    }
  });
});
define('unix-gdal-helper/components/gdal-config-option', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var computed = Ember.computed;
  exports.default = Component.extend({
    tagName: 'pre',
    classNames: ['option'],
    attributeBindings: ['title'],
    title: 'Remove this option',
    click: function click() {
      this.get('removeSelf')(this.option);
    }
  });
});
define('unix-gdal-helper/components/gdal-config-options', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var computed = Ember.computed;
  exports.default = Component.extend({
    tagName: 'pre',
    classNames: ['script'],
    anyOptions: computed('excluded', 'included', function () {
      alert(this.get('included'));
      return [].concat(this.get('included'), this.get('excluded')).filter(function (e) {
        return e;
      }).length;
    }),
    actions: {
      remove: function remove() {
        this.get('remove').apply(undefined, arguments);
      }
    }
  });
});
define('unix-gdal-helper/components/generic-selector', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    actions: {
      select: function select(event) {
        this.get('onSelect')(event.target.value);
        event.target.value = '';
      }
    }
  });
});
define('unix-gdal-helper/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('unix-gdal-helper/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    queryParams: {
      include: { type: 'array', refreshModel: true, replaceState: true },
      exclude: { type: 'array', refreshModel: true, replaceState: true }
    },
    include: [],
    exclude: [],
    actions: {
      unsetOption: function unsetOption(opt) {
        if (this.include.indexOf(opt) >= 0) {
          this.set('include', this.include.filter(function (f) {
            return f != opt;
          }));
        } else if (this.exclude.indexOf(opt) >= 0) {
          this.set('exclude', this.exclude.filter(function (f) {
            return f != opt;
          }));
        }
      },
      includeOption: function includeOption(toAdd) {
        this.set('include', [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(this.include), [toAdd])))).filter(function (f) {
          return f;
        }));
        var exclude = new Set(this.exclude);
        exclude.delete(toAdd);
        console.log(exclude);
        this.set('exclude', [].concat(_toConsumableArray(exclude)).filter(function (f) {
          return f;
        }));
      },
      excludeOption: function excludeOption(toAdd) {
        this.set('exclude', [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(this.exclude), [toAdd])))).filter(function (f) {
          return f;
        }));
        var include = new Set(this.include);
        include.delete(toAdd);
        this.set('include', [].concat(_toConsumableArray(include)).filter(function (f) {
          return f;
        }));
      }
    }
  });
});
define('unix-gdal-helper/helpers/app-version', ['exports', 'unix-gdal-helper/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('unix-gdal-helper/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('unix-gdal-helper/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('unix-gdal-helper/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'unix-gdal-helper/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('unix-gdal-helper/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('unix-gdal-helper/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('unix-gdal-helper/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('unix-gdal-helper/initializers/export-application-global', ['exports', 'unix-gdal-helper/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('unix-gdal-helper/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('unix-gdal-helper/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('unix-gdal-helper/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("unix-gdal-helper/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('unix-gdal-helper/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('unix-gdal-helper/router', ['exports', 'unix-gdal-helper/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define("unix-gdal-helper/routes/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model(params) {
      var inclusionOptions = ["local", "libtool", "grib", "disable-rpath", "sqlite3", "mrf", "enable-fast-install", "jvm-lib", "xerces-lib", "mdb", "bindir", "silent", "sysconfdir", "xerces-inc", "gnm", "macosx-framework", "libexecdir", "srcdir", "podofo-extra-lib-for-test", "docdir", "cache-file", "pdfium-extra-lib-for-test", "dvidir", "no-create", "datarootdir", "teigha-plt", "boost-lib-path", "prefix", "host", "perl", "ld-shared", "xml2", "gnu-ld", "bsb", "cpp11", "localstatedir", "sharedstatedir", "libdir", "kakadu", "htmldir", "oci-include", "gdal-ver", "localedir", "oldincludedir", "infodir", "sbindir", "datadir", "build", "geos", "sfcgal", "includedir", "config-cache", "libkml-lib", "opencl-lib", "disable-option-checking", "libjson-c", "podofo-lib", "enable-shared", "expat-lib", "psdir", "sysroot", "pdfdir", "mandir", "pic", "enable-static", "version", "jpeg12", "php", "expat-inc", "help", "runstatedir", "oci-lib", "libkml-inc", "curl", "pdfium-lib", "teigha", "libiconv-prefix", "kea", "oci", "exec-prefix"];
      var exclusionOptions = [].concat(inclusionOptions, ["libtool", "libiconv-prefix", "grib", "pam", "mrf", "jpeg12", "ld-shared", "bsb", "cpp11"]);
      // options that require flags...
      // etc.
      return Object.assign({ inclusionOptions: inclusionOptions, exclusionOptions: exclusionOptions }, params);
    }
  });
});
define('unix-gdal-helper/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("unix-gdal-helper/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "shl0D5vR", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[1,[25,\"generic-selector\",null,[[\"onSelect\",\"placeholder\",\"listId\",\"options\"],[[25,\"action\",[[19,0,[]],\"includeOption\"],null],\"add option\",\"include\",[20,[\"model\",\"inclusionOptions\"]]]]],false],[0,\"\\n  \"],[1,[25,\"generic-selector\",null,[[\"onSelect\",\"placeholder\",\"listId\",\"options\"],[[25,\"action\",[[19,0,[]],\"excludeOption\"],null],\"remove option\",\"exclude\",[20,[\"model\",\"exclusionOptions\"]]]]],false],[0,\"\\n  \"],[1,[25,\"gdal-config-options\",null,[[\"include\",\"exclude\",\"remove\"],[[20,[\"include\"]],[20,[\"exclude\"]],[25,\"action\",[[19,0,[]],\"unsetOption\"],null]]]],false],[0,\"\\n  \"],[1,[18,\"copy-button\"],false],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "unix-gdal-helper/templates/application.hbs" } });
});
define("unix-gdal-helper/templates/components/copy-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qLBYdyUL", "block": "{\"symbols\":[],\"statements\":[[6,\"button\"],[9,\"data-clipboard-target\",\"pre.script\"],[7],[0,\" Copy Script \"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "unix-gdal-helper/templates/components/copy-button.hbs" } });
});
define("unix-gdal-helper/templates/components/gdal-config-option", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ONsye4+b", "block": "{\"symbols\":[],\"statements\":[[0,\"    --with\"],[4,\"if\",[[20,[\"isExcluded\"]]],null,{\"statements\":[[0,\"out\"]],\"parameters\":[]},null],[0,\"-\"],[1,[18,\"option\"],false],[0,\"  \"]],\"hasEval\":false}", "meta": { "moduleName": "unix-gdal-helper/templates/components/gdal-config-option.hbs" } });
});
define("unix-gdal-helper/templates/components/gdal-config-options", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GwRvbNJ/", "block": "{\"symbols\":[\"excluded\",\"included\"],\"statements\":[[0,\"# cd to gdal directory\\n./configure \"],[4,\"each\",[[20,[\"include\"]]],null,{\"statements\":[[0,\"\\\\\\n\"],[1,[25,\"gdal-config-option\",null,[[\"option\",\"isExcluded\",\"removeSelf\",\"action\"],[[19,2,[]],false,[25,\"action\",[[19,0,[]],\"remove\"],null],[25,\"action\",[[19,0,[]],\"remove\"],null]]]],false]],\"parameters\":[2]},null],[4,\"each\",[[20,[\"exclude\"]]],null,{\"statements\":[[0,\"\\\\\\n\"],[1,[25,\"gdal-config-option\",null,[[\"option\",\"isExcluded\",\"removeSelf\"],[[19,1,[]],true,[25,\"action\",[[19,0,[]],\"remove\"],null]]]],false]],\"parameters\":[1]},null],[0,\"\\nmake\\nsudo make install\"]],\"hasEval\":false}", "meta": { "moduleName": "unix-gdal-helper/templates/components/gdal-config-options.hbs" } });
});
define("unix-gdal-helper/templates/components/generic-selector", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i28tklzK", "block": "{\"symbols\":[\"option\",\"&default\"],\"statements\":[[6,\"input\"],[10,\"onselect\",[25,\"action\",[[19,0,[]],\"select\"],null],null],[10,\"list\",[26,[[18,\"listId\"]]]],[10,\"placeholder\",[26,[[18,\"placeholder\"]]]],[10,\"title\",[26,[[18,\"placeholder\"]]]],[7],[8],[0,\"\\n\"],[6,\"datalist\"],[10,\"id\",[18,\"listId\"],null],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"options\"]]],null,{\"statements\":[[0,\"    \"],[6,\"option\"],[10,\"value\",[19,1,[]],null],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"select\"],null],null],[7],[0,\"\\n      \"],[1,[19,1,[]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "unix-gdal-helper/templates/components/generic-selector.hbs" } });
});


define('unix-gdal-helper/config/environment', [], function() {
  var prefix = 'unix-gdal-helper';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("unix-gdal-helper/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"unix-gdal-helper","version":"0.0.0+c05a14fe"});
}
//# sourceMappingURL=unix-gdal-helper.map
