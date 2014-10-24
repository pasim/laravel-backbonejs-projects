APP.Views.Pages.Auth = APP.Views.Pages.Master.extend({

  templates: {
    'main' : _.template( $('#template-pages-login').html() )
  },

  events: {
    'submit form' : 'login',
  },

  initialize: function(){
    this._super();

    //this.listenTo(this.model, 'change', );
  },

  render: function(){
    this._super({
      //login: this.model.toJSON()
    });

    return this;
  },

  login: function(e){

    var self = this;

    e.preventDefault();

    $(e.currentTarget).validate();

    if (!($(e.currentTarget).valid()))
      return;

    var attrs = APP.Helpers.serializeObject($(e.currentTarget));

    this.model.set(attrs);

    this.model.save().success(function(model, attributes, options){
      APP.User.set(self.model.toJSON());
      APP.Router.navigate("home");
    });

  }

});
