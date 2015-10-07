// Get height/width/sizing of a given element.

function getProps(el) {
  element = {
    height          : el.outerHeight(),
    width           : el.outerWidth(),
    top             : el.offset().top,
    left            : el.offset().left,
    bottom          : el.offset().top  + el.outerHeight(),
    right           : el.offset().left + el.outerWidth(),
  }
  return element;
}
