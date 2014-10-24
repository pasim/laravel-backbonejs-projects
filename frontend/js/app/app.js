APP.initialise = function(){

  // replace css3 transitions with jquery transitions
  if (!$.support.transition){
    $.fn.transition = $.fn.animate;
    $.fn.transit = $.fn.animate;
  }


  // APP.Auth = new APP.Models.Auth();
  APP.Router = new APP.Routers.Main();
  // APP.User = new APP.Models.User();

  // APP.Auth.checklogin()
  // .success(function(data){
  //   APP.User.set(data);
  //   Backbone.history.start({ pushState: false });
  // }).error(function(){
  //   window.location = "/#login";
  //   Backbone.history.start({ pushState: false });
  //   // APP.Router.navigate('login', {trigger: true});
  // });
  Backbone.history.start({ pushState: false });
};
