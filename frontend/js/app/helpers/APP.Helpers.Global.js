// Create a large random number
APP.Helpers.random = function(){ return Math.round(Math.exp(Math.random()*Math.log(999999999-1+1)))+1; };

// Create a random integer between two numbers
APP.Helpers.randomInt = function(from, to){
  if(!to)
    return Math.floor(Math.random()*from)+1;
  return Math.floor(Math.random()*(to-from+1)+from);
};

// Randomize an array order
APP.Helpers.arrayRandomize = function(myArray){
  var i = myArray.length, j, temp;
  if ( i === 0 ) return false;
  while ( --i ) {
    j = Math.floor( Math.random() * ( i + 1 ) );
    temp = myArray[i];
    myArray[i] = myArray[j];
    myArray[j] = temp;
  }
  return myArray;
};

// Map number in range
// input = input int
// domain = array of input domain [min, max]
// range = array of output range [min, max]
APP.Helpers.range = function(input, domain, range){
  return (input-domain[0])/(domain[1]-domain[0]) * (range[1]-range[0]) + range[0];
}

// Clamp an input value between two values
APP.Helpers.clamp = function(value, min, max){
  return Math.max(min, Math.min(max, value));
};

// A function to detect a touch enabled device
APP.Helpers.hasTouch = function(){
  return true === ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
};

APP.Helpers.formatMoney = function(number, forceDec){
  var n = parseInt(number),
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d === undefined ? "." : d,
    t = t === undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  if(forceDec)
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
};

// value as a percent between two values
// example:
// min value: 100
// max value: 200
// value to calcluate between: 150
// result: 50%
APP.Helpers.percentBetweenTwoValues = function(x,min,max) {
  return ((x-min)/(max-min))*100;
};

APP.Helpers.validateEmail = function(email_address){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email_address);
};

APP.Helpers.toFixed = function(number, dec, max){
  if(String(number).length > max){
    return number.toFixed(0);
  }else{
    return number.toFixed(dec);
  }
};

APP.Helpers.serializeObject = function(form){
    var o = {};
    var a = $(form).serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
};

APP.Helpers.isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// Change special charactors to normal characters i.e. àáâãäå -> a
APP.Helpers.NormalizeString = function(string){
  var r=string.toLowerCase();
  r = r.replace(new RegExp("\\s", 'g'),"");
  r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
  r = r.replace(new RegExp("æ", 'g'),"ae");
  r = r.replace(new RegExp("ç", 'g'),"c");
  r = r.replace(new RegExp("[èéêë]", 'g'),"e");
  r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
  r = r.replace(new RegExp("ñ", 'g'),"n");
  r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
  r = r.replace(new RegExp("œ", 'g'),"oe");
  r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
  r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
  r = r.replace(new RegExp("\\W", 'g'),"");
  return r;
};

APP.Helpers.supports3d = function() {
  var el = document.createElement('p'),
      has3d,
      transforms = {
          'webkitTransform':'-webkit-transform',
          'OTransform':'-o-transform',
          'msTransform':'-ms-transform',
          'MozTransform':'-moz-transform',
          'transform':'transform'
      };

  // Add it to the body to get the computed style.
  document.body.insertBefore(el, null);

  for (var t in transforms) {
      if (el.style[t] !== undefined) {
          el.style[t] = "translate3d(1px,1px,1px)";
          has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
      }
  }

  document.body.removeChild(el);

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
};

// Color Range
/* Usage:
  GWIWIDGET.Helpers.colorRange({
    colours: [{r:202,g:3,b:123,pos:0}, {r:61,g:149,b:214,pos:100}],
    value: GWIWIDGET.Helpers.randomInt(0,100),
    total: 100,
    asObject: true, // if you want object returned
    opacity: 0.5
  });
*/
APP.Helpers.colorRange = function(options) {

  var totalColours = options.colours.length,
    currentPositionMin = 0,
    currentPositionMax = totalColours > 2 ? options.total / totalColours : options.total, r, g, b;

  for(var i = 0; i < totalColours-1; i ++){

    if(options.value >= (options.colours[i].pos || 0) && options.value <= (options.colours[i+1].pos || 100)){
      r = GWIWIDGET.Helpers.Interpolate(options.colours[i].r, options.colours[i+1].r, currentPositionMax, options.value);
      g = GWIWIDGET.Helpers.Interpolate(options.colours[i].g, options.colours[i+1].g, currentPositionMax, options.value);
      b = GWIWIDGET.Helpers.Interpolate(options.colours[i].b, options.colours[i+1].b, currentPositionMax, options.value);
      break;
    }

    currentPositionMax+=currentPositionMax;

  }

  if(options.asObject){
    return {r:r,g:g,b:b};
  }else{
    return "rgba(" + r + "," + g + "," + b + "," + (options.opacity || "1") + ")";
  }
};

APP.Helpers.randomHex = function(){

 return '#'+Math.floor(Math.random()*16777215).toString(16);

};

APP.Helpers.Interpolate = function(start, end, steps, count) {
  var s = start,
    e = end,
    final = s + (((e - s) / steps) * count);
  return Math.floor(final);
};

// Set up an ajax pool, this allows you to keep track of ajax requests and abort all if necessary.
APP.Helpers.setUpAjaxPool = function(){
  $.xhrPool = [];
  $.xhrPool.abortAll = function() {
    $(this).each(function(idx, jqXHR) {
        jqXHR.abort();
    });
    $.xhrPool.length = 0;
  };

  $.ajaxSetup({
    beforeSend: function(jqXHR) {
        $.xhrPool.push(jqXHR);
    },
    complete: function(jqXHR) {
      var index = _.indexOf($.xhrPool, jqXHR);
      if (index > -1) {
          $.xhrPool.splice(index, 1);
      }
    }
  });
};

/*

Animations on scroll

==================================================================
==================================================================

Load animation callback in this array at the position you want them to occur, for example if you want an animation to occur when the user has scrolled 1235px down the page add callback to array like so:

animations.add(1235, callback);

Initialize
==================================================================
var animation = new APP.Helpers.scrollAnimation(String);

  Arguments: String - The id of the iframe on the parent window

Methods
==================================================================

  animationOnScroll.add(position, callback)
  ------------------------------------------

    position: int - position on page animation should fire

    callback: 
      function to run when screen hits this position

  animationOnScroll.reset()
  ------------------------------------------

    Resets animation, removes all saved animations

  animationOnScroll.start()
  ------------------------------------------

    start the animations

*/

APP.Helpers.animationOnScroll = function(){
  var offset = 0,
  completeMin = 0,
  completeMax = 0,
  animationsArray = {},
  animationBackup = {},
  position = 0,
  windowHeight = jQuery(window).height();

  jQuery(window).resize(function(){
    windowHeight = jQuery(window).height();
  });
 

  // The onscoll callback, decide what animationsArray to run
  var onScroll = function(e){

    position = jQuery(window).scrollTop();

    var min = position,
    max = position + windowHeight;

    if(max < completeMin) return;

    for(var key in animationsArray){

      if(parseInt(key) <= max && parseInt(key) >= completeMin){

        if(typeof animationsArray[key] === 'object'){

          for(var key2 in animationsArray[key]){

            animationsArray[key][key2]();

          }

        }else{

          animationsArray[key]();

        }

        delete animationsArray[key];

      }

    }

    completeMin = max;

  };

  var objectSize = function(obj) {
      var size = 0, key;
      for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
      }
      return size;
  };

  // bind onscoll event
  var scrollBind = function(){
    completeMin = 0;
    completeMax = 0;
    jQuery(window).bind('scroll.animationsArraycroller', onScroll);
    onScroll();
  };

  // remove onscoll event
  var unbind = function(){
    jQuery(window).unbind('scroll.animationsArraycroller', onScroll);
  };

  var addToAnimation = function(position, callback){

    if(animationsArray[position]){

      if(typeof animationsArray[position] === 'function'){

        var array = {};
        array[0] = animationsArray[position];
        array[1] = callback;
        animationsArray[position] = array;

      }else{

        var length = objectSize(animationsArray[position]);
        animationsArray[position][length] = callback;

      }

    }else{
      animationsArray[position] = callback;
    }

  };

  return {
    add: function(position, callback){
      addToAnimation(position, callback);
    },
    reset: function(){
      unbind();
      animationsArray = {};
    },
    start: function(){
      scrollBind();
    }
  };

};

