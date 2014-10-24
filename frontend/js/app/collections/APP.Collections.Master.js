APP.Collections.Master = Backbone.Collection.extend({

  // Returns true if any models have been changed or added
  hasChanged: function(){

    return this.some(function(model){
      return model.isNew() || model.hasChanged();
    });

  }

});
