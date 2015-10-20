function getProps(el) {
  element = {
    height          : el.height(),
    outerHeight     : el.outerHeight(),
    width           : el.width(),
    outerWidth      : el.outerWidth(),
    top             : el.offset().top,
    left            : el.offset().left,
    bottom          : el.offset().top  + el.outerHeight(),
    right           : el.offset().left + el.outerWidth(),
    position        : el.css("position"),
    marginTop       : el.css("margin-top"),
    marginBottom    : el.css("margin-bottom"),
    marginLeft      : el.css("margin-left"),
    marginRight     : el.css("margin-right"),
    paddingTop      : el.css("padding-top"),
    paddingBottom   : el.css("padding-bottom"),
    paddingLeft     : el.css("padding-left"),
    paddingRight    : el.css("padding-right"),
    lineHeight      : el.css("line-height"),
    fontWeight      : el.css("font-weight"),
    fontStyle       : el.css("font-style"),
    fontSize        : el.css("font-size"),
    dataAttrs       : getDataAttrs(el) // array of data- attrs
  }
  return element;
}

// Get data attrs as array

function getDataAttrs(el) {
  var arr = [];
  jQuery(el).map(function(){
    arr.push(jQuery(this).data());
  });
  return arr;
}

// Convert CSS values that may be undefined.
// If not, convert to intiger by removing 'px'

function convertInt(i) {
  if (i == undefined) {
    var num = 0;
  } else {
    num = parseInt(i);
  }
  return num;
}
