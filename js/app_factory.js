/**
 * Factory creating the App object
 *
 * Makes testing easier
 */
define(function(require) {
  var _ = require('lodash');
  var Vue = require('vue');

  /**
   * App object
   * @constructor
   */
  function App() {

    /**
     * @type {boolean} Whether the vue app's `run` method has completed yet.
     * @public
     */
    this.isRunning = false;

    /**
     * @var {Vue} reference to the page level Vue ViewModel
     */
    this.rootComponent = null;
    // Calling app.$broadcast or app.$on before app.run() will queue up the broadcast
    // or event handlers in these queues and execute them when the app is run
    this.broadcastQueue = [];
    this.handlerQueue = [];
  }

  /**
   * Runs the Vue app and attaches it to document.body
   * Also registers any directives/components/partials/effects/filters on the Vue global
   */
  App.prototype.run = function(config) {
    // require app definitions for components, directives, etc...
    if (this.rootComponent) {
      throw new Error("Application already running");
    }

    // put components/directives/etc on the Vue global
    _.forEach(config || {}, function(map, key) {
      var validKeys = ['component', 'directive', 'partial', 'effect', 'filter'];
      if (validKeys.indexOf(key) !== -1) {
        _.forEach(map, function(def, id) {
          // register Vue.component(componentId, { ... })
          Vue[key](id, def);
        });
      }
    });

    this.rootComponent = new Vue({
      el: document.body
    });

    // empty the handler queue when the app is first run
    while (this.handlerQueue.length > 0) {
      this.$on.apply(this, this.handlerQueue.shift());
    }

    // empty the $broadcast queue when the app is first run
    while (this.broadcastQueue.length > 0) {
      this.$broadcast.apply(this, this.broadcastQueue.shift());
    }

    this.isRunning = true;
    // Let anyone who's waiting for the Vue app to start know that we're done starting.
    this.$broadcast('ready');
  };

  /**
   * Sends an event to every view model on the page
   *
   * @param {string} eventName
   *
   * @param {args*} args
   */
  App.prototype.$broadcast = function() {
    if (!this.rootComponent) {
      this.broadcastQueue.push(arguments);
    } else {
      this.rootComponent.$emit.apply(this.rootComponent, arguments);
      this.rootComponent.$broadcast.apply(this.rootComponent, arguments);
    }
  };

  /**
   * Attaches an event handler to the page level viewModel
   *
   * @param {String} eventName
   * @param {Function} handler
   */
  App.prototype.$on = function(eventName, handler) {
    if (!this.rootComponent) {
      this.handlerQueue.push([eventName, handler]);
    } else {
      this.rootComponent.$on.call(this.rootComponent, eventName, handler);
    }
  };

  /**
   * Given a component name, returns the matching Vue component
   * Throws an error if no component name or an invalid component name is provided
   *
   * @param {string} componentName
   * @returns {function(new:Vue, Object)}
   */
  App.prototype.getComponent = function(componentName) {
    if (!componentName) {
      throw new Error('You must supply a component for the modal to instantiate');
    }
    var comp = Vue.options.components[componentName];
    if (!comp) {
      throw new Error('Component "' + componentName + '" does not exist.');
    }
    return comp;
  };

  return {
    create: function() {
      return new App();
    }
  };
});
