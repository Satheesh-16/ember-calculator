'use strict';

define("ember-calculator/tests/acceptance/route-practise-test", ["qunit", "@ember/test-helpers", "ember-calculator/tests/helpers"], function (_qunit, _testHelpers, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-calculator/tests/helpers",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Acceptance | route practise', function (hooks) {
    (0, _helpers.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /route-practise', async function (assert) {
      assert.expect(4);
      await (0, _testHelpers.visit)('/');
      assert.dom('.start-link').exists();
      await (0, _testHelpers.click)('.start-link');
      assert.equal((0, _testHelpers.currentURL)(), '/calci');
      await (0, _testHelpers.click)('.nav-hist');
      assert.equal((0, _testHelpers.currentURL)(), '/calci/historydisplay');
      await (0, _testHelpers.click)('.startingpage');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
    (0, _qunit.test)('checking image loading', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.dom('#home-image').hasAttribute('src', '/Images/calculators.png');
      assert.dom('.start-link').hasText('Start Calculating...');
    });
  });
});
define("ember-calculator/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's / ember-mocha's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("ember-calculator/tests/integration/components/cal-button-test", ["@ember/template-factory", "qunit", "ember-calculator/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-calculator/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | cal-button', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <CalButton></CalButton>
      */
      {
        "id": "AfqVN5mI",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[],[]]]]]],[],false,[\"cal-button\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)(this.element);
      assert.dom(this.element).hasText('% 00 AC C 7 8 9 ÷ 4 5 6 * 1 2 3 - 0 + Q =');
      assert.dom('input').hasAttribute('type', 'text');
    });
  });
});
define("ember-calculator/tests/integration/components/clear-test", ["@ember/template-factory", "qunit", "ember-calculator/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-calculator/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | clear', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('checking the history display component', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Clear />
      */
      {
        "id": "kk/19XzK",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"clear\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('Clear History refresh');
      await (0, _testHelpers.click)('.clearhist');
      assert.equal(this.element.querySelector('#ans').textContent.trim(), 'History Cleared');
    });
  });
});
define("ember-calculator/tests/integration/components/head-test", ["@ember/template-factory", "qunit", "ember-calculator/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-calculator/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"@ember/test-helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | head', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('checking the element present in history page', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Head>
            </Head>
          
      */
      {
        "id": "uM0JZBnN",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"head\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('Calculator History');
    });
    (0, _qunit.test)('checking rendering in head', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Head/>
      */
      {
        "id": "yTHvsr1e",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"head\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      await (0, _testHelpers.click)('.nav-hist');
      assert.equal((0, _testHelpers.currentURL)(), '/calci/historydisplay');
      await (0, _testHelpers.click)('.startingpage');
      this.pauseTest();
      assert.strictEqual((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("ember-calculator/tests/integration/components/main-body-test", ["@ember/template-factory", "qunit", "ember-calculator/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-calculator/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | main-body', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('checking the main body', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <MainBody> 
            </MainBody>
          
      */
      {
        "id": "S1XhTFwH",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\" \\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"main-body\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('Calculator History');
    });
  });
});
define("ember-calculator/tests/test-helper", ["ember-calculator/app", "ember-calculator/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-calculator/app",0,"ember-calculator/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("ember-calculator/tests/unit/controllers/calci/historydisplay-test", ["qunit", "ember-calculator/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-calculator/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Controller | calci/historydisplay', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('It shows the router actions through controller', function (assert) {
      let controller = this.owner.lookup('controller:calci/historydisplay');
      assert.ok(controller);
      assert.equal(controller.welcome, 'Welcome to the History Page');
    });
  });
});
define("ember-calculator/tests/unit/initializers/index-test", ["@ember/application", "ember-calculator/config/environment", "ember-calculator/initializers/index", "qunit", "ember-resolver", "@ember/runloop"], function (_application, _environment, _index, _qunit, _emberResolver, _runloop) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-calculator/config/environment",0,"ember-calculator/initializers/index",0,"qunit",0,"ember-resolver",0,"@ember/runloop"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  (0, _qunit.module)('Unit | Initializer | index', function (hooks) {
    hooks.beforeEach(function () {
      this.TestApplication = class TestApplication extends _application.default {
        constructor() {
          super(...arguments);
          _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
          _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
          _defineProperty(this, "Resolver", _emberResolver.default);
        }
      };
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _index.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
    });
    hooks.afterEach(function () {
      (0, _runloop.run)(this.application, 'destroy');
    });

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();
      assert.ok(true);
    });
  });
});
define("ember-calculator/tests/unit/routes/calci/historydisplay-test", ["qunit", "ember-calculator/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-calculator/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | calci/historydisplay', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:calci/historydisplay');
      assert.ok(route);
    });
  });
});
define("ember-calculator/tests/unit/routes/form-test", ["qunit", "ember-calculator/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-calculator/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | form', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:form');
      assert.ok(route);
    });
  });
});
define("ember-calculator/tests/unit/services/history-test", ["qunit", "ember-calculator/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-calculator/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | history', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:history');
      assert.ok(service);
      let x = {
        total: '4*5',
        result: 20
      };
      service.addtocal(x);
      assert.equal(service.calculations[0], x);
    });
  });
});
define('ember-calculator/config/environment', [], function() {
  var prefix = 'ember-calculator';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-calculator/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
