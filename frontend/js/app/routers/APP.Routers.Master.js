APP.Routers.Master = Backbone.Router.extend({


  defaultRoute: "home",

  initialize: function(){

    this.on('route', this.routeChanged, this);
    return this;

  },

  routeChanged: function(event, route){

    route = window.location.hash.substr(1);

    // Check if view requires auth
    // if(this.newPage.auth > 0){

    //   // Check if authorised, if not, navigate to
    //   if(!APP.Auth.isAuthorised()){
    //     APP.Router.navigate(this.authRoute);
    //     return;
    //   }

    // }

    this.currentRoute = route;
    this.render();

  },

  setTitle: function(){

    document.title = APP.Title + " | " +  this.currentRoute

  },

  render: function(){

    if(!this.newPage) return;

    $('#content').html(this.newPage.view.$el);
    this.newPage.view.render();
    this.setTitle();

    if( !this.activePage ){

      this.activePage = this.newPage;

      this.activePage.view.show();

      return;

    }

    this.activePage.view.remove();

    this.activePage = this.newPage;

    this.activePage.view.show();


  },

  navigate: function(fragment, options){

    options = _.extend({}, {
      trigger: true
    }, options);

    this._super(fragment, options);

  }

});
