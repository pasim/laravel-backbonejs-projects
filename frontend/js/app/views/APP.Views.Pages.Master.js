APP.Views.Pages.Master = APP.Views.Master.extend({

  tagName: 'div',

  events: {
    'click [data-navigate]' : 'navigate',
    'submit form' : 'saveModel',
  },

  animationDuration: 300,

  show: function(){

    this.$el.fadeIn(this.animationDuration);

  },

  hide: function(){

    var self = this;

    this.$el.fadeOut(this.animationDuration, function(){
      self.trigger('hidden');
    });

  },

  navigate: function(e){

    APP.Router.navigate($(e.currentTarget).data('navigate'));

  }

});
