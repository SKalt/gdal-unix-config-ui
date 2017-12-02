'use strict';

define('unix-gdal-helper/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/copy-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/copy-button.js should pass ESLint\n\n');
  });

  QUnit.test('components/gdal-config-option.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/gdal-config-option.js should pass ESLint\n\n2:10 - \'computed\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/gdal-config-options.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/gdal-config-options.js should pass ESLint\n\n');
  });

  QUnit.test('components/generic-selector.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/generic-selector.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n19:36 - \'Set\' is not defined. (no-undef)\n20:25 - \'Set\' is not defined. (no-undef)\n22:7 - Unexpected console statement. (no-console)\n26:36 - \'Set\' is not defined. (no-undef)\n27:25 - \'Set\' is not defined. (no-undef)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});
define('unix-gdal-helper/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('unix-gdal-helper/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'unix-gdal-helper/tests/helpers/start-app', 'unix-gdal-helper/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('unix-gdal-helper/tests/helpers/resolver', ['exports', 'unix-gdal-helper/resolver', 'unix-gdal-helper/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('unix-gdal-helper/tests/helpers/start-app', ['exports', 'unix-gdal-helper/app', 'unix-gdal-helper/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('unix-gdal-helper/tests/integration/components/copy-button-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('copy-button', 'Integration | Component | copy button', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "tkpVlnmn",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"copy-button\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "IH6CUHK6",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"copy-button\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });

  // test('it copies the generated script', function(assert){
  //
  // })
});
define('unix-gdal-helper/tests/integration/components/gdal-config-option-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('gdal-config-option', 'Integration | Component | gdal config option', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "E2vxnHbD",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"gdal-config-option\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "1afho6c4",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"gdal-config-option\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('unix-gdal-helper/tests/integration/components/gdal-config-options-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('gdal-config-options', 'Integration | Component | gdal config options', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "/Cd/PAPz",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"gdal-config-options\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "cTKjxl8p",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"gdal-config-options\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('unix-gdal-helper/tests/test-helper', ['unix-gdal-helper/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('unix-gdal-helper/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/copy-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/copy-button-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/gdal-config-option-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/gdal-config-option-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/gdal-config-options-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/gdal-config-options-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
});
define('unix-gdal-helper/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
    assert(this.model.inclusionOptions.length > 10, 'inclusion options unloaded');
    assert(this.model.exclusionOptions.length > 10, 'exclusion options unloaded');
  });
});
define('unix-gdal-helper/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('unix-gdal-helper/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
