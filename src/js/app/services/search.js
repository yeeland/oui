/**
 * Service for handle search filters
 *
 * @author Tom Genoni
 */

define(function() {

  var ACTIVE_SEARCH_CLASS = 'lego-search--active';

  function activate(el, target) {
    var $target = $(target);

    console.log($target);
  }

  return {
    activate: activate
  };
});
