define(function() {
  return {
    enter: function (el, insert, timeout) {
        // insert() will actually insert the element
      console.log('enter');
    },
    leave: function (el, remove, timeout) {
        // remove() will actually remove the element
      console.log('leave');
    }
  };
});
