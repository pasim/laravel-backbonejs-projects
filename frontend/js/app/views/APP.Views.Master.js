APP.Views.Master = Backbone.View.extend({

  activeTemplate : 'main',

  initialize: function(){

    _.extend(this, Backbone.events);

    this._defaults();

    return this._super();

  },

  render: function(options){

    options = _.extend({data: {}}, {data: options});

    if(!_.isEmpty(this.templates) && this.templates[this.activeTemplate]){
      this.$el.html( this.templates[this.activeTemplate](options));
    }

    return this;

  },

  _defaults: function(){

    this._extendHelper('templates');
    this._extendHelper('events');

    this.delegateEvents();

  },

  _extendHelper: function(item){

    var proto = this, result = {};

    // loop through each parent and extend its properties
    do {

      result = _.extend({}, proto[item], result);
      proto = proto.constructor.__super__;

    } while (proto[item]);

    if(result){

      this[item] = _.extend({}, result, this[item]);

    }

  },

  saveModel: function(model){

    var self = this;

    console.log(model.changedAttributes());

    return model.save(model.changedAttributes(), {patch: true})
    .complete(function(response, status){

    });

  },

  destroyModel: function(model, $button, callback){

    if(!model) return;
    var self = this;

    return model.destroy()
    .complete(function(response, status){
      if(callback) callback();
    });

  }

});
