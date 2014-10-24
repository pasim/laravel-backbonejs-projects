APP.Models.Auth = APP.Models.Master.extend({

  // Set url to auth location
  // url: '',
  url: 'users/login',

  isAuthorised: function(){

    if(!this.url) return false;
    return this.get('authorised');

  },

  checklogin: function(callback){

    return $.getJSON('users/checkLogin');

  },

  logout: function(callback){

    $.ajax({
      url: 'users/logout',
      method: 'get',
      success: function(attributes){
        callback(true, attributes);
      },
      error: function(){
        callback();
      }
    })

  }

});
