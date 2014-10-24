APP.Routers.Main = APP.Routers.Master.extend({

  routes: {
    'login' : 'userLogin',
    'logout': 'userLogout',
    '' : "home",
  },

  home: function(){

    var view = new APP.Views.Pages.Home();

    this.newPage = {
      view: view,
      auth: 0
    };

  },

  auth: function(){

    //APP.SubHeader.activeTemplate = "auth";

    var view = new APP.Views.Pages.Auth();

    this.newPage = {
      view: view,
      auth: 0
    };

  },

  userLogin: function(){


    var model = new APP.Models.Auth({

    });

    var view = new APP.Views.Pages.Auth({
      model: model
    });

    this.newPage = {
      view: view,
      auth: 0,
    };

  },

  userLogout: function(){

    var model = new APP.Models.Auth({

    });

    model.logout(function(success, attributes){
      if(success){
        APP.User.clear();
        APP.Router.navigate('login');
      }
    });
  }

});
