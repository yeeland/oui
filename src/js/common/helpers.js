// Get height/width/sizing of a given element.

function getProps(el) {
  element = {
    height          : el.outerHeight(),
    width           : el.outerWidth(),
    top             : el.offset().top,
    left            : el.offset().left,
    bottom          : el.offset().top  + el.outerHeight(),
    right           : el.offset().left + el.outerWidth(),
    paddingBottom   : el.css("padding-bottom"),
    lineHeight      : el.css("line-height"),
    fontSize        : el.css("font-size"),
    dataAttrs       : getDataAttrs(el) // array of data- attrs
  }
  return element;
}

// Get data attrs as array

function getDataAttrs(el) {
  var arr = [];
  $(el).map(function(){
    arr.push($(this).data());
  });
  return arr;
}