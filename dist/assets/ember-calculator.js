'use strict';



;define("ember-calculator/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("ember-calculator/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "ember-calculator/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"ember-calculator/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-calculator/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("ember-calculator/components/cal-button", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _component, _templateFactory, _component2, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <div id="calci">
          <Input @value={{this.total}} id="display" @type="text"/>
      <hr>
      <div id="inp-but">
          {{#each  this.model as |val|}}
              <button type="button" {{on "click" (fn this.displayer val)}}>{{val}}</button>
          {{/each}}
          <button type="button" {{on "click" this.backup}}>Q</button>
          <button type="button" {{on "click" (fn this.calculate this.total)}}>=</button>
      </div>
  </div>
  */
  {
    "id": "bKJrMZQ/",
    "block": "[[[1,\"\\n\"],[10,0],[14,1,\"calci\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"display\"]],[[\"@value\",\"@type\"],[[30,0,[\"total\"]],\"text\"]],null],[1,\"\\n    \"],[10,\"hr\"],[12],[13],[1,\"\\n    \"],[10,0],[14,1,\"inp-but\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"model\"]]],null]],null],null,[[[1,\"            \"],[11,\"button\"],[24,4,\"button\"],[4,[38,3],[\"click\",[28,[37,4],[[30,0,[\"displayer\"]],[30,1]],null]],null],[12],[1,[30,1]],[13],[1,\"\\n\"]],[1]],null],[1,\"        \"],[11,\"button\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"backup\"]]],null],[12],[1,\"Q\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,4,\"button\"],[4,[38,3],[\"click\",[28,[37,4],[[30,0,[\"calculate\"]],[30,0,[\"total\"]]],null]],null],[12],[1,\"=\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[\"val\"],false,[\"input\",\"each\",\"-track-array\",\"on\",\"fn\"]]",
    "moduleName": "ember-calculator/components/cal-button.hbs",
    "isStrictMode": false
  });
  var equ = '';
  let CalButtonComponent = (_class = class CalButtonComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "history", _descriptor, this);
      _initializerDefineProperty(this, "total", _descriptor2, this);
    }
    displayer(value) {
      if (value == '÷') {
        this.total += '/';
      } else if (value == 'AC') {
        this.total = '';
      } else if (value == 'C') {
        this.total = this.total.slice(0, -1);
      } else {
        this.total += value;
      }
    }
    calculate(equation) {
      equation = equation.split(' ').join('');
      equ = equation;
      let stack = [],
        num = '';
      for (let i = 0; i < equation.length; i++) {
        if (this.checker(equation[i])) {
          num += equation[i];
        } else {
          num = parseInt(num);
          stack.push(num, equation[i]);
          num = '';
        }
      }
      stack.push(parseInt(num));
      if (isNaN(stack[0])) {
        stack.splice(0, 1);
      }
      this.calculator(stack);
    }
    checker(num) {
      if (!isNaN(num)) {
        return true;
      }
    }
    calculator(stack) {
      if (stack[0] == '-') {
        stack.splice(0, 1);
        stack[0] *= -1;
        console.log(stack);
      }
      var total_value = stack[0];
      console.log(stack[0]);
      for (let i = 0; i < stack.length; i++) {
        if (isNaN(stack[i])) {
          switch (stack[i]) {
            case '+':
              total_value = total_value + stack[i + 1];
              break;
            case '-':
              total_value = total_value - stack[i + 1];
              break;
            case '/':
              total_value = total_value / stack[i + 1];
              break;
            case '*':
              total_value = total_value * stack[i + 1];
              break;
            case '%':
              total_value = total_value % stack[i + 1];
              break;
            default:
              alert('no such operation');
              break;
          }
        }
      }
      this.total = total_value.toString();
      this.history.addtocal({
        total: equ,
        result: this.total
      });
    }
    backup() {
      alert(equ);
    }
    get model() {
      const cal_value = ['%', '00', 'AC', 'C', '7', '8', '9', '÷', '4', '5', '6', ' * ', '1', '2', '3', ' - ', '0', ' + '];
      return cal_value;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "history", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "total", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "displayer", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "displayer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "calculate", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "calculate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "backup", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "backup"), _class.prototype)), _class);
  _exports.default = CalButtonComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, CalButtonComponent);
});
;define("ember-calculator/components/clear", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div id="ans">
      {{#each @model as |cal|}}
          <p>{{cal.total}} ==> {{cal.result}}</p>
      {{/each}}
  </div>
  
  <button type="button" {{on "click" this.clear}} class="clearhist">Clear History</button>
  <button type="button" {{on "click" this.refresh}} id="but-on">refresh</button>
  
  {{this.value}}
  
  */
  {
    "id": "LYtvPqsz",
    "block": "[[[10,0],[14,1,\"ans\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"        \"],[10,2],[12],[1,[30,2,[\"total\"]]],[1,\" ==> \"],[1,[30,2,[\"result\"]]],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\\n\"],[11,\"button\"],[24,0,\"clearhist\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,0,[\"clear\"]]],null],[12],[1,\"Clear History\"],[13],[1,\"\\n\"],[11,\"button\"],[24,1,\"but-on\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,0,[\"refresh\"]]],null],[12],[1,\"refresh\"],[13],[1,\"\\n\\n\"],[1,[30,0,[\"value\"]]],[1,\"\\n\"]],[\"@model\",\"cal\"],false,[\"each\",\"-track-array\",\"on\"]]",
    "moduleName": "ember-calculator/components/clear.hbs",
    "isStrictMode": false
  });
  let ClearComponent = (_class = class ClearComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "history", _descriptor, this);
    }
    clear() {
      this.history.calculations = [];
      document.querySelector('#ans').innerHTML = 'History Cleared';
    }
    refresh() {
      document.querySelector('#ans').innerHTML = '';
      if (this.history.calculations.length == 0) {
        document.querySelector('#ans').innerHTML = '0 ==> 0';
      } else {
        var res = ``;
        for (let i = 0; i < this.history.calculations.length; i++) {
          let x = this.history.calculations[i]['total'];
          let y = this.history.calculations[i]['result'];
          res = res + ` <br>${x} ==> ${y} ` + `<br>`;
        }
        document.querySelector('#ans').innerHTML = res;
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "history", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "clear", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clear"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "refresh", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "refresh"), _class.prototype)), _class);
  _exports.default = ClearComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ClearComponent);
});
;define("ember-calculator/components/head", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div id="head">
      <a href="https://zoho.com/"><img src="/Images/zoho-img.png" alt="zoho link" width="70" height="30"></a>
      <h2><LinkTo @route="index">Calculator</LinkTo></h2>
      <div id="head-right">
      <h4><LinkTo @route="calci.historydisplay" class="nav-hist">History</LinkTo></h4>
      </div>
  </div>
  */
  {
    "id": "yq2d9ohS",
    "block": "[[[10,0],[14,1,\"head\"],[12],[1,\"\\n    \"],[10,3],[14,6,\"https://zoho.com/\"],[12],[10,\"img\"],[14,\"src\",\"/Images/zoho-img.png\"],[14,\"alt\",\"zoho link\"],[14,\"width\",\"70\"],[14,\"height\",\"30\"],[12],[13],[13],[1,\"\\n    \"],[10,\"h2\"],[12],[8,[39,0],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"Calculator\"]],[]]]]],[13],[1,\"\\n    \"],[10,0],[14,1,\"head-right\"],[12],[1,\"\\n    \"],[10,\"h4\"],[12],[8,[39,0],[[24,0,\"nav-hist\"]],[[\"@route\"],[\"calci.historydisplay\"]],[[\"default\"],[[[[1,\"History\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\"]]",
    "moduleName": "ember-calculator/components/head.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("ember-calculator/components/main-body", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="main-body">
      {{#if this.nonhis}}
          <div id="head">
              <a href="https://www.calculator.net/"><img src="/Images/logo.png" alt="zoho link" width="80" height="40"></a>
              <h2><LinkTo @route="index">Calculator</LinkTo></h2>
              <div id="head-right">
                  <h4><LinkTo @route="calci" class="nav-hist">Go Back</LinkTo></h4>
              </div>
          </div>
      {{else}}
          <div id="head">
              <a href="https://www.calculator.net/"><img src="/Images/logo.png" alt="zoho link" width="80" height="40"></a>
              <h2><LinkTo @route="index">Calculator</LinkTo></h2>
              <div id="head-right">
                  <h4><LinkTo @route="calci.historydisplay" class="nav-hist">History</LinkTo></h4>
              </div>
          </div>
      {{/if}}
      {{yield}}
  </div>
  */
  {
    "id": "NK4o3CVE",
    "block": "[[[10,0],[14,0,\"main-body\"],[12],[1,\"\\n\"],[41,[30,0,[\"nonhis\"]],[[[1,\"        \"],[10,0],[14,1,\"head\"],[12],[1,\"\\n            \"],[10,3],[14,6,\"https://www.calculator.net/\"],[12],[10,\"img\"],[14,\"src\",\"/Images/logo.png\"],[14,\"alt\",\"zoho link\"],[14,\"width\",\"80\"],[14,\"height\",\"40\"],[12],[13],[13],[1,\"\\n            \"],[10,\"h2\"],[12],[8,[39,1],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"Calculator\"]],[]]]]],[13],[1,\"\\n            \"],[10,0],[14,1,\"head-right\"],[12],[1,\"\\n                \"],[10,\"h4\"],[12],[8,[39,1],[[24,0,\"nav-hist\"]],[[\"@route\"],[\"calci\"]],[[\"default\"],[[[[1,\"Go Back\"]],[]]]]],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[10,0],[14,1,\"head\"],[12],[1,\"\\n            \"],[10,3],[14,6,\"https://www.calculator.net/\"],[12],[10,\"img\"],[14,\"src\",\"/Images/logo.png\"],[14,\"alt\",\"zoho link\"],[14,\"width\",\"80\"],[14,\"height\",\"40\"],[12],[13],[13],[1,\"\\n            \"],[10,\"h2\"],[12],[8,[39,1],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"Calculator\"]],[]]]]],[13],[1,\"\\n            \"],[10,0],[14,1,\"head-right\"],[12],[1,\"\\n                \"],[10,\"h4\"],[12],[8,[39,1],[[24,0,\"nav-hist\"]],[[\"@route\"],[\"calci.historydisplay\"]],[[\"default\"],[[[[1,\"History\"]],[]]]]],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]]],[1,\"    \"],[18,1,null],[1,\"\\n\"],[13]],[\"&default\"],false,[\"if\",\"link-to\",\"yield\"]]",
    "moduleName": "ember-calculator/components/main-body.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("ember-calculator/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("ember-calculator/controllers/calci/historydisplay", ["exports", "@ember/controller", "@ember/service", "@ember/object"], function (_exports, _controller, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let HistorydisplayController = (_class = class HistorydisplayController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "history", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _defineProperty(this, "welcome", 'Welcome to the History Page');
    }
    greet() {
      alert(this.welcome);
    }
    transs() {
      this.router.transitionTo('index');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "history", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "greet", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "greet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "transs", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "transs"), _class.prototype)), _class);
  _exports.default = HistorydisplayController;
});
;define("ember-calculator/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("ember-calculator/helpers/app-version", ["exports", "@ember/component/helper", "ember-calculator/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"ember-calculator/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("ember-calculator/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("ember-calculator/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("ember-calculator/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-calculator/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-calculator/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-calculator/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"ember-calculator/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-calculator/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("ember-calculator/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("ember-calculator/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-calculator/initializers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  function initialize(application) {
    var style1 = 'color:red;font-size:xx-large;font-weight:bold';
    var style2 = 'font-size:large;';
    window.console.log('%c🚫STOP!', style1);
    window.console.log("%cThis is a browser feature intended for developers. Do not enter or paste code which you don't understand. It may allow attackers to steal your information or impersonate you.\nSee https://en.wikipedia.org/wiki/Self-XSS for more details", style2);
  }
  var _default = {
    initialize
  };
  _exports.default = _default;
});
;define("ember-calculator/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("ember-calculator/router", ["exports", "@ember/routing/router", "ember-calculator/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"ember-calculator/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('calci', function () {
      this.route('historydisplay');
    });
    this.route('form');
  });
});
;define("ember-calculator/routes/calci/historydisplay", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let HistorydisplayRoute = (_class = class HistorydisplayRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "history", _descriptor, this);
    }
    async model() {
      return this.history.calculations;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "history", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = HistorydisplayRoute;
});
;define("ember-calculator/routes/form", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class FormRoute extends _route.default {}
  _exports.default = FormRoute;
});
;define("ember-calculator/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("ember-calculator/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("ember-calculator/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("ember-calculator/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("ember-calculator/services/history", ["exports", "@ember/service", "@glimmer/tracking", "@ember/object"], function (_exports, _service, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let HistoryService = (_class = class HistoryService extends _service.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "calculations", _descriptor, this);
    }
    addtocal(cals) {
      //cals = calculations bind by result
      this.calculations = [...this.calculations, cals];
      console.log(this.calculations);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "calculations", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "addtocal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addtocal"), _class.prototype)), _class);
  _exports.default = HistoryService;
});
;define("ember-calculator/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("ember-calculator/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("ember-calculator/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("ember-calculator/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "EmberCalculator"}}
  
  
  
  
  {{outlet}}
  */
  {
    "id": "RmT1Vc8V",
    "block": "[[[1,[28,[35,0],[\"EmberCalculator\"],null]],[1,\"\\n\\n\\n\\n\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-calculator/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-calculator/templates/calci", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="his">
  
  <MainBody @nonhis={{false}}>
      <CalButton></CalButton>
  </MainBody>
  
  
  
  {{outlet}}
  </div>
  
  
  
  */
  {
    "id": "t0h8iP7a",
    "block": "[[[10,0],[14,0,\"his\"],[12],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@nonhis\"],[false]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,1],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"],[13],[1,\"\\n\\n\\n\"]],[],false,[\"main-body\",\"cal-button\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-calculator/templates/calci.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-calculator/templates/calci/historydisplay", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <MainBody @nonhis={{true}}>
      <div class="history">
      <button type="button" {{on "click" this.greet}}>Greet me</button>
      <button type="button" {{on "click" this.transs}} class="startingpage">Click me for starting page</button>
  
      <h3>The history for the present session</h3>
      
      <Clear @model={{@model}}/>
  
  
  
  </div>
  </MainBody>
  */
  {
    "id": "+Z6STIZx",
    "block": "[[[8,[39,0],null,[[\"@nonhis\"],[true]],[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"history\"],[12],[1,\"\\n    \"],[11,\"button\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"greet\"]]],null],[12],[1,\"Greet me\"],[13],[1,\"\\n    \"],[11,\"button\"],[24,0,\"startingpage\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"transs\"]]],null],[12],[1,\"Click me for starting page\"],[13],[1,\"\\n\\n    \"],[10,\"h3\"],[12],[1,\"The history for the present session\"],[13],[1,\"\\n    \\n    \"],[8,[39,2],null,[[\"@model\"],[[30,1]]],null],[1,\"\\n\\n\\n\\n\"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],false,[\"main-body\",\"on\",\"clear\"]]",
    "moduleName": "ember-calculator/templates/calci/historydisplay.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-calculator/templates/form", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Form"}}
  {{outlet}}
  */
  {
    "id": "03BQEyZb",
    "block": "[[[1,[28,[35,0],[\"Form\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-calculator/templates/form.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-calculator/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <MainBody>
      <div id="main"><LinkTo @route="calci" class="start-link"> Start Calculating...</LinkTo></div>
      <div id="main-img">
      <img src="/Images/calculators.png" alt="Calculator_image" height="400" id="home-image">
      </div>
  </MainBody>
  */
  {
    "id": "VVTE+mXz",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,1,\"main\"],[12],[8,[39,1],[[24,0,\"start-link\"]],[[\"@route\"],[\"calci\"]],[[\"default\"],[[[[1,\" Start Calculating...\"]],[]]]]],[13],[1,\"\\n    \"],[10,0],[14,1,\"main-img\"],[12],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"/Images/calculators.png\"],[14,\"alt\",\"Calculator_image\"],[14,\"height\",\"400\"],[14,1,\"home-image\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]]]]],[],false,[\"main-body\",\"link-to\"]]",
    "moduleName": "ember-calculator/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ember-calculator/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-calculator/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-calculator/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-calculator/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('ember-calculator/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("ember-calculator/app")["default"].create({"name":"ember-calculator","version":"0.0.0+e243ea2f"});
          }
        
//# sourceMappingURL=ember-calculator.map
